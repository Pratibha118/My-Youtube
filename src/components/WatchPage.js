import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../utils/slices/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
    const dispatch = useDispatch()
    const [searchParam] = useSearchParams();


    useEffect(() => {
        dispatch(closeSidebar())
    }, [])

    return (
        <div className='p-2'>
            <iframe width="800"
                height="400"
                src={`https://www.youtube.com/embed/${searchParam.get('v')}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className='rounded-lg'
                >

                </iframe>
        </div>
    )
}

export default WatchPage