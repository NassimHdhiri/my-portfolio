
export default function Footer() {
  return (
    <div className=' m-auto ml-7'>
      <div className='flex gap-4  justify-around mb-12 mt-12 m-auto w-[900px] xs:w-64'>
        {/* <Link></Link> */}
        <a href="" className=' xs:text-[12px] lg:text-[20px] xs:-ml-16  capitalize font-semibold'>about</a>
        <a href="" className=' xs:text-[12px] lg:text-[20px] xs:-ml-16  capitalize font-semibold'>experiences</a>
        <a href="" className=' xs:text-[12px] lg:text-[20px] xs:-ml-16  capitalize font-semibold'>projects</a>
        <a href="" className=' xs:text-[12px] lg:text-[20px] xs:-ml-16  capitalize font-semibold'>contact</a>
      </div>


      <div className='bg-black -mb-28 -ml-40 -mr-32 p-1'>
        <p className=' capitalize text-base text-center xs:text-[9px] text-white m-auto'>copyright © 2023  hdhiri mohamed nassim.All rights reserved</p>
      </div>
    </div>
    
  )
}