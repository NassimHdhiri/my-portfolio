import React from 'react'
import FooterPic from '../../assets/Profile_about_me/images/section-footer.svg'

export default function Footer() {
  return (
    <div className='relative '>
      <div className='flex gap-4  justify-around mb-12 mt-12 m-auto w-[900px]'>
        {/* <Link></Link> */}
        <a href="" className=' text-[20px] capitalize font-semibold'>about</a>
        <a href="" className=' text-[20px] capitalize font-semibold'>experiences</a>
        <a href="" className=' text-[20px] capitalize font-semibold'>projects</a>
        <a href="" className=' text-[20px] capitalize font-semibold'>contact</a>
      </div>


      <div className='bg-black -mb-28 -ml-40 -mr-32 p-1 '>
        <p className=' capitalize text-base text-center text-white m-auto'>copyright © 2023  hdhiri mohamed nassim.All rights reserved</p>
      </div>
    </div>
    
  )
}