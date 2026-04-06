import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM'
    },
    {
        image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
    },
    {
        image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
]

const dummyCastsData = [
  { "name": "Robert Downey Jr.", "profile_path": "https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg" },
  { "name": "Scarlett Johansson", "profile_path": "https://image.tmdb.org/t/p/w500/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg" },
  { "name": "Chris Hemsworth", "profile_path": "https://image.tmdb.org/t/p/w500/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg" },
  { "name": "Chris Evans", "profile_path": "https://image.tmdb.org/t/p/w500/3bOGNsHlrswhyW79uvIHH1V43JI.jpg" },
  { "name": "Tom Holland", "profile_path": "https://image.tmdb.org/t/p/w500/2qhIDp44cAqP2clOgt2afQI07X8.jpg" },
  { "name": "Leonardo DiCaprio", "profile_path": "https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg" },
  { "name": "Brad Pitt", "profile_path": "https://image.tmdb.org/t/p/w500/kU3B75TyRiCgE270EyZnHjfivoq.jpg" },
  { "name": "Margot Robbie", "profile_path": "https://image.tmdb.org/t/p/w500/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg" },
  { "name": "Ryan Reynolds", "profile_path": "https://image.tmdb.org/t/p/w500/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg" },
  { "name": "Keanu Reeves", "profile_path": "https://image.tmdb.org/t/p/w500/rRdru6REr9i3WIHv2mntpcgxnoY.jpg" },
  { "name": "Dwayne Johnson", "profile_path": "https://image.tmdb.org/t/p/w500/cgoy7t5Ve075naBPcewZrc08qGw.jpg" },
  { "name": "Gal Gadot", "profile_path": "https://image.tmdb.org/t/p/w500/plLfB60M5cJrnog8KvAKhI4UJuk.jpg" },
  { "name": "Henry Cavill", "profile_path": "https://image.tmdb.org/t/p/w500/iWSK8e0P3j3R9hYV5n5rU3P2R6n.jpg" },
  { "name": "Joaquin Phoenix", "profile_path": "https://image.tmdb.org/t/p/w500/6oK0wJ0kTt6yL8iJ4Kc4Yx9y9yT.jpg" },
  { "name": "Emma Stone", "profile_path": "https://image.tmdb.org/t/p/w500/k4y2Gd5zY7xKc2sCq0Kq9oRZ1Zq.jpg" },
  { "name": "Jennifer Lawrence", "profile_path": "https://image.tmdb.org/t/p/w500/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg" },
  { "name": "Christian Bale", "profile_path": "https://image.tmdb.org/t/p/w500/qCpZn2e3dimwbryLnqxZuI88PTi.jpg" },
  { "name": "Anne Hathaway", "profile_path": "https://image.tmdb.org/t/p/w500/tLelKoPNiyJCSEtQTz1FGv4TLGc.jpg" },
  { "name": "Will Smith", "profile_path": "https://image.tmdb.org/t/p/w500/2Y9Ha8NgBuCePRY1dY9g7kRZ4fP.jpg" }
]
export const dummyShowsData = [
    {
        "_id": "324544",
        "id": 324544,
        "title": "In the Lost Lands",
        "overview": "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
        "poster_path": "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 14, "name": "Fantasy" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-02-27",
        "original_language": "en",
        "tagline": "She seeks the power to free her people.",
        "vote_average": 6.4,
        "vote_count": 15000,
        "runtime": 102,
    },{
    "_id": "445566",
    "id": 445566,
    "title": "Spider-Man: No Way Home",
    "overview": "Peter Parker's secret identity is revealed, bringing his superhero responsibilities into conflict with his normal life.",
    "poster_path": "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    "genres": [
        { "id": 28, "name": "Action" },
        { "id": 12, "name": "Adventure" }
    ],
    "casts": dummyCastsData,
    "release_date": "2021-12-17",
    "original_language": "en",
    "tagline": "The multiverse unleashed.",
    "vote_average": 8.2,
    "vote_count": 28000,
    "runtime": 148,
},
{
    "_id": "556677",
    "id": 556677,
    "title": "Avengers: Endgame",
    "overview": "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions.",
    "poster_path": "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    "genres": [
        { "id": 28, "name": "Action" },
        { "id": 12, "name": "Adventure" }
    ],
    "casts": dummyCastsData,
    "release_date": "2019-04-26",
    "original_language": "en",
    "tagline": "Part of the journey is the end.",
    "vote_average": 8.3,
    "vote_count": 30000,
    "runtime": 181,
},
{
    "_id": "667788",
    "id": 667788,
    "title": "Interstellar",
    "overview": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "poster_path": "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    "genres": [
        { "id": 12, "name": "Adventure" },
        { "id": 878, "name": "Science Fiction" }
    ],
    "casts": dummyCastsData,
    "release_date": "2014-11-07",
    "original_language": "en",
    "tagline": "Mankind was born on Earth. It was never meant to die here.",
    "vote_average": 8.6,
    "vote_count": 32000,
    "runtime": 169,
},
{
    "_id": "778811",
    "id": 778811,
    "title": "The Dark Knight",
    "overview": "Batman raises the stakes in his war on crime and faces the Joker, a criminal mastermind.",
    "poster_path": "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    "genres": [
        { "id": 28, "name": "Action" },
        { "id": 80, "name": "Crime" }
    ],
    "casts": dummyCastsData,
    "release_date": "2008-07-18",
    "original_language": "en",
    "tagline": "Why so serious?",
    "vote_average": 8.5,
    "vote_count": 35000,
    "runtime": 152,
},
{
    "_id": "889900",
    "id": 889900,
    "title": "Extraction",
    "overview": "A black-market mercenary must rescue an Indian drug lord's kidnapped son in Dhaka, Bangladesh.",
    "poster_path": "https://image.tmdb.org/t/p/original/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",
    "genres": [
        { "id": 28, "name": "Action" },
        { "id": 53, "name": "Thriller" }
    ],
    "casts": dummyCastsData,
    "release_date": "2020-04-24",
    "original_language": "en",
    "tagline": "When the mission ends, redemption begins.",
    "vote_average": 7.3,
    "vote_count": 15000,
    "runtime": 116,
},
{
    "_id": "778899",
    "id": 778899,
    "title": "The Tomorrow War",
    "overview": "A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.",
    "poster_path": "https://image.tmdb.org/t/p/original/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
    "genres": [
        { "id": 28, "name": "Action" },
        { "id": 878, "name": "Science Fiction" }
    ],
    "casts": dummyCastsData,
    "release_date": "2021-07-02",
    "original_language": "en",
    "tagline": "The fight for tomorrow begins today.",
    "vote_average": 7.0,
    "vote_count": 12000,
    "runtime": 138,
},
{
    "_id": "990011",
    "id": 990011,
    "title": "The Gray Man",
    "overview": "When the CIA's most skilled operative uncovers agency secrets, he becomes the primary target of assassins around the world.",
    "poster_path": "https://image.tmdb.org/t/p/original/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
    "genres": [
        { "id": 28, "name": "Action" },
        { "id": 53, "name": "Thriller" }
    ],
    "casts": dummyCastsData,
    "release_date": "2022-07-22",
    "original_language": "en",
    "tagline": "The world's deadliest agent just became a target.",
    "vote_average": 6.9,
    "vote_count": 18000,
    "runtime": 129,
},
{
    "_id": "112233",
    "id": 112233,
    "title": "Free Guy",
    "overview": "A bank teller discovers he is actually a background player in an open-world video game and decides to become the hero of his own story.",
    "poster_path": "https://image.tmdb.org/t/p/original/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
    "genres": [
        { "id": 35, "name": "Comedy" },
        { "id": 878, "name": "Science Fiction" }
    ],
    "casts": dummyCastsData,
    "release_date": "2021-08-13",
    "original_language": "en",
    "tagline": "Life's too short to be a background character.",
    "vote_average": 7.7,
    "vote_count": 20000,
    "runtime": 115,
},
    {
        "_id": "1232546",
        "id": 1232546,
        "title": "Until Dawn",
        "overview": "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
        "poster_path": "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
        "genres": [
            { "id": 27, "name": "Horror" },
            { "id": 9648, "name": "Mystery" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-23",
        "original_language": "en",
        "tagline": "Every night a different nightmare.",
        "vote_average": 6.405,
        "vote_count": 18000,
        "runtime": 103,
    },
    {
        "_id": "552524",
        "id": 552524,
        "title": "Lilo & Stitch",
        "overview": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
        "poster_path": "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
        "genres": [
            { "id": 10751, "name": "Family" },
            { "id": 35, "name": "Comedy" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-17",
        "original_language": "en",
        "tagline": "Hold on to your coconuts.",
        "vote_average": 7.117,
        "vote_count": 27500,
        "runtime": 108,
    },
    {
        "_id": "668489",
        "id": 668489,
        "title": "Havoc",
        "overview": "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
        "poster_path": "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 80, "name": "Crime" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-25",
        "original_language": "en",
        "tagline": "No law. Only disorder.",
        "vote_average": 6.537,
        "vote_count": 35960,
        "runtime": 107,
    },
    {
        "_id": "950387",
        "id": 950387,
        "title": "A Minecraft Movie",
        "overview": "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
        "poster_path": "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
        "genres": [
            { "id": 10751, "name": "Family" },
            { "id": 35, "name": "Comedy" },
            { "id": 12, "name": "Adventure" },
            { "id": 14, "name": "Fantasy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-03-31",
        "original_language": "en",
        "tagline": "Be there and be square.",
        "vote_average": 6.516,
        "vote_count": 15225,
        "runtime": 101,
    },
    {
        "_id": "575265",
        "id": 575265,
        "title": "Mission: Impossible - The Final Reckoning",
        "overview": "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
        "poster_path": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-17",
        "original_language": "en",
        "tagline": "Our lives are the sum of our choices.",
        "vote_average": 7.042,
        "vote_count": 19885,
        "runtime": 170,
    },
    {
        "_id": "986056",
        "id": 986056,
        "title": "Thunderbolts*",
        "overview": "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
        "poster_path": "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 878, "name": "Science Fiction" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-30",
        "original_language": "en",
        "tagline": "Everyone deserves a second shot.",
        "vote_average": 7.443,
        "vote_count": 23569,
        "runtime": 127,
    }
]

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]