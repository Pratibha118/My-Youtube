import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../utils/slices/appSlice'
import { cacheResults } from '../utils/slices/cacheSlice';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false);
    const cache = useSelector(store => store.cache)
    const dispatch = useDispatch()

    console.log(searchQuery)

    const handleMenuClick = () => {
        dispatch(toggleSidebar())
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (cache[searchQuery]) {
                setSuggestions(cache[searchQuery])
            } else {
                getSearchSuggestions()
            }
        }, 200)
        return () => clearTimeout(timer)
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        const data = await fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' + searchQuery)
        const json = await data.json();
        setSuggestions(json[1])
        dispatch(cacheResults({ [searchQuery]: json[1] }))
    }

    const handleSearchBarValue = (value) => {
        console.log(value)
        setSearchQuery(value)
    }

    return (
        <div className='grid grid-flow-col p-2 m-1 shadow-lg'>

            <div className='flex col-span-1 gap-4'>
                <img
                    className='h-10 cursor-pointer'
                    onClick={handleMenuClick}
                    alt='menu'
                    src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png' />
                <img
                    className='h-10'
                    alt='youtube-logo'
                    src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' />
            </div>

            <div className='col-span-10 relative'>
                <div className='flex justify-center'>
                    <input
                        onChange={(e) => setSearchQuery(e.target.value)}
                        type='text'
                        placeholder='Search'
                        value={searchQuery}
                        className='border border-gray-500 py-1 px-2 w-1/2 rounded-l-full'
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />

                    <button className='border border-gray-500 py-1 px-2 rounded-r-full'>Search</button>
                </div>
                {
                    showSuggestions && searchQuery &&
                    <div className='absolute flex justify-start bg-white w-[29rem] ml-52 shadow-lg rounded-lg z-50'>
                        <ul>
                            {
                                suggestions?.map((suggestion, index) => <li key={index}
                                    onMouseDown={() => {
                                        console.log("Clicked:", suggestion);
                                        setSearchQuery(suggestion);
                                    }}
                                    className='p-2 mx-1 w-full hover:bg-gray-100'>
                                    🔍 {suggestion}
                                </li>)
                            }

                        </ul>

                    </div>
                }



            </div>


            <div className='col-span-1'>
                <img
                    className='h-10'
                    alt='user-icon'
                    src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
            </div>

        </div>
    )
}

export default Header