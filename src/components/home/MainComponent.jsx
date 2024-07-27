import React from 'react'
import Faqs from '../minorComponents/Faqs'
import Presence from '../minorComponents/Presence'
import HeroSection from '../minorComponents/HeroSection'
import ShowCase from '../minorComponents/ShowCase'

const MainComponent = () => {
  return (
    <div className='w-full flex flex-col items-center gap-5 md:gap-10'>
      <HeroSection/>
      <ShowCase/>
      <Presence/>
      <Faqs/>
    </div>
  )
}

export default MainComponent