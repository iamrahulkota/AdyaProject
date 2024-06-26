import React from 'react'
import Premiere from './PremiereComp/Premiere'
import Places from './PlacesComp/Places'
import Mountain from './MountainComp/Mountain'
import Hero from './Hero.jsx/Hero'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'




function Home() {
  
  return (
    <>
      <Hero />
      <Places />
      <Premiere />
      <Mountain />
    </>
  )
}

export default Home