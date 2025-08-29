import React from 'react'

const VedioCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { title, thumbnails, channelTitle } = snippet;
    const { likeCount, viewCount } = statistics;
    return (
        <div className='p-2 m-2 w-64 shadow-lg'>
            <img alt="vedio" className='rounded-lg' src={thumbnails.medium.url} />
            <h1 className='font-bold py-1 line-clamp-2'>{title}</h1>
            <label>{channelTitle}</label>
            <div className='flex gap-4'>
                <span>👍 {likeCount}</span>
                <span>👁️ {viewCount}</span>
            </div>
        </div>
    )
}

export default VedioCard