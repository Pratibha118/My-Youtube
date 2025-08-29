import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Body = () => {

  const isMenuOpen = useSelector(store => store?.app?.isMenuOpen)

  return (
    <div className='flex p-1 m-1'>

      {isMenuOpen ?
        <div className='w-40 shrink-0'>
          <Sidebar />
        </div>
        : <></>
      }
      <div className='flex-1 overflow-x-hidden min-w-0'>
        <Outlet />
      </div>
    </div>
  )
}

export default Body