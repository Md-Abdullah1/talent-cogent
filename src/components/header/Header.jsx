import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/Logo.jpg'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='bg-[#FFFFFF] shadow-2xl  w-[80%] h-fit  flex justify-between items-center px-[2%] py-2 rounded-lg my-3' >
        <Link href={`/`} className='w-[10%]   flex justify-center items-center '>
            <Image src={Logo} width={100} height={10} alt='Logo ' className='w-full h-full'/>
            
        </Link>
        <nav>
            <ul className='flex gap-3'>
                <li className='p-1 text-sm  font-semibold'> <Link href={`/`}>Home</Link></li>
                <li className='p-1 text-sm  font-semibold'> <Link href={`/`}>Company</Link></li>
                <li className='p-1 text-sm  font-semibold'> <Link href={`/`}>Placements</Link></li>
                <li className='p-1 text-sm  font-semibold'> <Link href={`/`}>Courses</Link></li>
                <li className='p-1 text-sm  font-semibold'> <Link href={`/`}>Career</Link></li>
                <li className='p-1 text-sm  font-semibold'> <Link href={`/`}>Recruiting & Staffing</Link></li>
                
            </ul>
        </nav>
        <div>
            <button className=' bg-[#253EA7] text-white px-2 py-2 rounded-md border-none text-base'>
                Book a consultation
            </button>
        </div>
    </div>
  )
}

export default Header