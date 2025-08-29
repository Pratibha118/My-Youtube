import React, { useEffect, useState } from 'react'
import { YOUTUBE_VEDIOS_API } from '../utils/constants'
import VedioCard from './VedioCard';
import { Link } from 'react-router-dom';

const VedioContainer = () => {
  const [vedios, setVedios] = useState([]);

  useEffect(() => {
    getVedios()
  }, [])

  const getVedios = async () => {
    const data = await fetch(YOUTUBE_VEDIOS_API)
    const json = await data.json()
    setVedios(json.items)
  }

  if (vedios.length === 0) return null;

  return (
    <div className='flex flex-wrap justify-evenly'>
      {vedios.map((vedio) => <Link key={vedio.id} to={'/watch?v=' + vedio.id}> <VedioCard info={vedio} /> </Link>)}
    </div>
  )
}

export default VedioContainer;