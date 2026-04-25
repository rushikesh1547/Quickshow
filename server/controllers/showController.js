import axios from 'axios';
import Movie from '../models/Movie.js';
import Show from '../models/Show.js';
import { inngest } from '../inngest/index.js';

const RETRYABLE_NETWORK_CODES = new Set(['ECONNRESET', 'ECONNABORTED', 'ETIMEDOUT', 'ENOTFOUND', 'EAI_AGAIN']);

const isRetryableNetworkError = (error) => {
    return Boolean(error?.code && RETRYABLE_NETWORK_CODES.has(error.code));
};

const fetchTmdbWithRetry = async (url, config, retries = 2) => {
    let lastError;

    for (let attempt = 0; attempt <= retries; attempt += 1) {
        try {
            return await axios.get(url, { timeout: 10000, ...config });
        } catch (error) {
            lastError = error;
            if (!isRetryableNetworkError(error) || attempt === retries) {
                throw error;
            }
        }
    }

    throw lastError;
};

export const getNowPlayingMovies = async (req, res) => {
    try {
        if (!process.env.TMDB_API_KEY) {
            return res.json({ success: true, movies: [] });
        }

        const { data } =  await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
            headers: {
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
            }
        })

        const movies = data.results;
        res.json({success: true, movies: movies})
    } catch (error) {
        console.log(error);
        res.json({ success: true, movies: [] })
    }
}

//API to add a new show to the database

export const addShow = async (req, res) => {
    try {
        const { movieId, showPrice } = req.body;
        const showsInput = req.body.showsInput || req.body.showInput;

        if (!movieId || !Array.isArray(showsInput) || showsInput.length === 0 || Number(showPrice) <= 0) {
            return res.status(400).json({ success: false, message: 'Invalid show payload' });
        }

        let movie = await Movie.findById(movieId);

        if(!movie){
            //Fetch movie details and credits from TMDB API

            if (!process.env.TMDB_API_KEY) {
                return res.status(500).json({ success: false, message: 'TMDB API key is missing on server' });
            }

            const [movieDetailsResponse, movieCreditsResponse] = await Promise.all([
                fetchTmdbWithRetry(`https://api.themoviedb.org/3/movie/${movieId}` ,
                 {   headers: {
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`
            }
            }),
            fetchTmdbWithRetry(`https://api.themoviedb.org/3/movie/${movieId}/credits` ,
                {   headers: {
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        }
         })
            ]);

            const movieApiData = movieDetailsResponse.data;
            const movieCreditsData = movieCreditsResponse.data;

            const movieDetails = {
                _id: movieId, 
                title: movieApiData.title,
                overview: movieApiData.overview,
                poster_path: movieApiData.poster_path,
                backdrop_path: movieApiData.backdrop_path,
                genres: movieApiData.genres,
                casts: movieCreditsData.cast,
                release_date: movieApiData.release_date,
                original_language: movieApiData.original_language,
                tagline: movieApiData.tagline || "",
                vote_average: movieApiData.vote_average,
                runtime: movieApiData.runtime
            }

            //Add movie to database
            movie = await Movie.create(movieDetails);
        }

        const showsToCreate = [];

        showsInput.forEach(show => {
            const showDate = show.date;
            const times = Array.isArray(show.time) ? show.time : [];
            times.forEach((time) => {
                const dateTimeString = `${showDate}T${time}`;
                showsToCreate.push({
                    movie: movieId,
                    showDateTime: new Date(dateTimeString),
                    showPrice: Number(showPrice),
                    occupiedSeats: {}
                })
            })
        });

        if (showsToCreate.length === 0) {
            return res.status(400).json({ success: false, message: 'No valid show times provided' });
        }

        if(showsToCreate.length > 0){
            await Show.insertMany(showsToCreate);
        }

        //trigger inngest event
        await inngest.send({
            name: "app/shows.added",
            data: {
                movieTitle: movie.title,
            }
        })

        res.json({success: true, message: 'Show added successfully'})

    } catch (error) {
        console.log(error);
        if (isRetryableNetworkError(error)) {
            return res.status(502).json({ success: false, message: 'Unable to reach TMDB right now. Please try again.' });
        }

        res.status(500).json({success: false, message: error.message})
    }
}

//API to get all shows from database

export const getShows = async (req, res) => {
    try {
        const shows = await Show.find({showDateTime: {$gte: new Date()}}).populate('movie').sort({showDateTime: 1});

        //filter unique shows

        const uniqueShows = new Set(shows.map(show => show.movie))

        res.json({success: true, shows: Array.from(uniqueShows)})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    } 
}

//API to get a single show from the database 
export const getShow = async (req, res) => {
    try {
        const {movieId} = req.params;
        //get all upcoming shows for movie
        const shows = await Show.find({movie: movieId, showDateTime: {$gte: new Date()}})

        const movie = await Movie.findById(movieId);
        const dateTime = {};

        shows.forEach(show => {
            const date = show.showDateTime.toISOString().split('T')[0];
            if(!dateTime[date]){
                dateTime[date] = [];
            }
            dateTime[date].push({time: show.showDateTime, showId: show._id});
            

        });
                    res.json({success: true, movie, dateTime})

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message})
    }
}