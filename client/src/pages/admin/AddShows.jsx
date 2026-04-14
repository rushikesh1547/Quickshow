import React, { useEffect, useState } from 'react'
import Title from '../../components/admin/Title'
import Loading from '../../components/Loading'
import { dummyShowsData } from '../../assets/assets'
import { StarIcon } from 'lucide-react'
import { kConverter } from '../../lib/kConverter'

const addShows = () => {

  const currency = import.meta.env.VITE_CURRENCY
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [dateTimeSelection, setdateTimeSelection] = useState({})
  const [dateTimeInput, setDateTimeInput] = useState('')
  const [showPrice, setShowPrice] = useState('')

  const fetchNowPLayingMovies = async () => {
    setNowPlayingMovies(dummyShowsData)
  }

  useEffect(() => {
    fetchNowPLayingMovies()
  }, [])

  return nowPlayingMovies.length > 0 ? (
    <>
      <Title text1="Add" text2="Shows"/>
      <p className='mt-10 text-lg font-medium '>Now Playing Movies</p>
      <div className='overflow-x-auto pb-4'>
        <div className='group flex flex-wrap gap-4 mt-4 w-max'>
          {nowPlayingMovies.map((movie) => (
            <div key={movie.id} className={`relative max-w-40 cursor-pointer group-hover:not-hover:opacity-40 hover:-translate-y-1 transition duration-300`}>
              <div className='relative rounded-lg overflow-hidden'>
                <img src={movie.poster_path} alt="" className='w-full object-cover brightness-90' />
                <div className='text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0'>
                  <p className='flex items-center gap-1 text-gray-400 '>
                    <StarIcon className='w-4 h-4 text-primary fill-primary'/>
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <p>{kConverter(movie.vote_count)} Votes</p>
                </div>
              </div>
        </div>
          ))}
        </div>
      </div>
    </>
  ) : <Loading/>
}

export default addShows