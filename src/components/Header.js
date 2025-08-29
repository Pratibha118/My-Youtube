import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../utils/slices/appSlice'

const Header = () => {

    const dispatch = useDispatch()

    const handleMenuClick = () =>{
        dispatch(toggleSidebar())
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

            <div className='col-span-10 flex justify-center'>
                <input type='text' placeholder='Search' className='border border-gray-500 py-1 px-2 w-1/2 rounded-l-full'/>
                <button className='border border-gray-500 py-1 px-2 rounded-r-full'>Search</button>
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