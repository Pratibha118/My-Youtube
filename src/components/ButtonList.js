import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ['Live', 'Comedy', 'News', 'Coding', 'Music', 'Movies', 
    'Podcast', 'Cricket', 'Blogs', 'Shorts', 'Shopping', 'hairCare', 'Education', 'Trending']

  return (
    <div className='flex p-1'>
      {list.map((item) => <Button name={item} key={item}/> )}
    </div>
  )
}

export default ButtonList