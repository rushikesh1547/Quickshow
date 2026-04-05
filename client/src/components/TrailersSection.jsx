import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import ReactPlayerLib from 'react-player'

const ReactPlayer = ReactPlayerLib?.default?.default ?? ReactPlayerLib?.default ?? ReactPlayerLib

const isYouTubeUrl = (url = '') => /(?:youtube\.com|youtu\.be)/i.test(url)

const getYouTubeEmbedUrl = (url = '') => {
    try {
        const parsed = new URL(url)
        const videoId = parsed.searchParams.get('v') || parsed.pathname.replace('/', '')

        return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : ''
    } catch {
        return ''
    }
}

const TrailersSection = () => {
    const [currentTrailer] = useState(dummyTrailers[0])

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
            <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>
                Trailers
            </p>

            <div className='relative mt-6'>
                <BlurCircle top='-100px' right='-100px' />
                {isYouTubeUrl(currentTrailer.videoUrl) ? (
                    <iframe
                        src={getYouTubeEmbedUrl(currentTrailer.videoUrl)}
                        title='Movie trailer'
                        className='mx-auto h-[540px] w-full max-w-[960px] rounded-md'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerPolicy='strict-origin-when-cross-origin'
                        allowFullScreen
                    />
                ) : (
                    <ReactPlayer
                        url={currentTrailer.videoUrl}
                        controls={true}
                        width='960px'
                        height='540px'
                        className='mx-auto max-w-full'
                    />
                )}
            </div>

            

        </div>
    )
}

export default TrailersSection