import GlobalWorld from '../../assets/Profile_resume/images/GlobeWorld.svg';

export default function Resume() {
  return (
    <div className='flex flex-col items-center xs:gap-y-4'>
        {/* first line */}
        <div className='flex items-center gap-5 xs:pl-5'>
            <img src={GlobalWorld} alt='world_icon' className=' xs:w-8' />
            <h2 className='xs:text-3xl lg:text-[37px] capitalize font-light'>Hello ,I'm</h2>
        </div>

        {/* 2nd line */}
        <div className='xs:flex xs:flex-col xs:gap-y-4'>
            <h2 className=' xs:text-4xl  lg:text-[50px]  capitalize font-bold lg:pl-7 xs:pl-5 leading-[90px] '>hdhiri Mohamed nassim</h2>
            <h2 className=' xs:text-2xl   lg:text-[30px]  capitalize xs:pl-24 lg:pl-10  '>full stack developer</h2>
        </div>
    </div>
  //     <div className='flex flex-col items-center'>
  //     {/* first line */}
  //       <div className='flex items-center gap-5'>
  //           <img src={GlobalWorld} alt='' />
  //           <h2 className=' text-[70px] capitalize font-light m-auto'>Hello ,I'm</h2>
  //       </div>

  //       {/* 2nd line */}
  //       <div>
  //           <h2 className=' text-[50px] leading-[90px] font capitalize font-semibold pl-7 '>hdhiri Mohamed nassim</h2>
  //           <h2 className=' text-[30px] capitalize  pl-10  '>full stack developer</h2>
  //       </div>
  // </div>
  )
}