import React from 'react'
import Faqs from '../minorComponents/Faqs'
import Presence from '../minorComponents/Presence'
import HeroSection from '../minorComponents/HeroSection'

const MainComponent = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <HeroSection/>
      <Presence/>
      <Faqs/>
    </div>
  )
}

export default MainComponent