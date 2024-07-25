import Image from 'next/image'
import React from 'react'
import MapPic from "../../../public/GlobeMap.jpg"
import ContactForm from './ContactForm'
const Presence = () => {
  return (
    <div className='w-full flex flex-col gap-3 items-center'>
        <div className='bg-[#375DFB] w-screen h-fit flex justify-center items-center p-4'> 
            <div className='w-[80%] h-fit flex justify-between items-center'>
                <div className='w-[40%]  flex flex-col gap-2 p-2 h-fit ' >
                    <h2 className='text-3xl text-white font-extrabold'>Our Presence</h2>
                    <div className='border-2 rounded border-white w-[20%] h-fit'></div>
                    <p className='text-white text-left'>Connecting talent and technology across continents, our expertise spans the globe, delivering innovative solutions and exceptional recruiting services in every corner of the world. With a strong presence in major tech hubs and emerging markets, we empower organizations to achieve excellence and drive innovation on a global scale.</p>
                </div>
                <div className='w-[55%]  p-2'>
                    <Image src={MapPic} alt='Map picture' height={100} width={100} className='w-full h-full'/>
                </div>
            </div>
        </div>
        <div className='w-[80%]  flex flex-col justify-center items-center p-2 gap-6'>
            <div className='w-[70%] '>
                <div className='flex flex-col items-center gap-3 p-1'>
                    <h2 className='text-3xl text-center font-bold'>Join A Community Of  <span className='text-[#253EA7]'> 10000+ </span> Tech Professionals</h2>
                    <p className='text-[#5F5F5F] font-light text-base text-center w-[80%]'>Discover a community of passionate IT tech professionals who have elevated their careers with Talent Cogent. Together, let's achieve new heights.</p>
                </div>
            </div>
            <div className=' bg-[#375DFB] w-[80%]  rounded-lg flex justify-center items-center  py-8'>
                <div className='w-[80%]  flex flex-col justify-center items-center gap-7 p-1 text-center'>
                    <h2 className='text-white text-xl font-semibold w-[70%] leading-8 '>Unlock Your Path to Success & Land Jobs at Tech Titans Worldwide with Talent Cogent's Expert Guidance!</h2>
                    <ContactForm/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Presence