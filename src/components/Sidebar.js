import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className='shadow-lg'>

      <div className='p-2 border-b-2 border-gray-300'>
        <ul className='px-2'>
          <Link to='/'><li className='py-2'>🏡 Home</li></Link>
          <li className='py-2'>▶️ Shorts</li>
          <li className='py-2'>📽️ Subscriptions</li>
        </ul>
      </div>

      <div className='p-2 border-b-2 border-gray-300'>
        <h1 className='font-bold py-2'>You</h1>
        <ul className='px-2'>
          <li className='py-2'>🛞 History</li>
          <li className='py-2'>▶️ Playlists</li>
          <li className='py-2'>👁️ Watch Later</li>
          <li className='py-2'>👍 Liked vedios</li>
        </ul>
      </div>

      <div className='p-2 border-b-2 border-gray-300'>
        <h1 className='font-bold py-2'>Explore</h1>
        <ul className='px-2'>
          <li className='py-2'>👜 Shopping</li>
          <li className='py-2'>🎵 Movies</li>
          <li className='py-2'>🛜 Live</li>
          <li className='py-2'>🎮 Gaming</li>
          <li className='py-2'>📰 News</li>
          <li className='py-2'>🏏 Sports</li>
          <li className='py-2'>📺 Podcasts</li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar