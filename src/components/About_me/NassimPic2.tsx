import NassimPic from '../../assets/Profile_about_me/images/imagenassim.svg'



export default function NassimPic2() {
  return (
    <div className='relative'>
      <div className=' bg-gray-400 bg-opacity-50 lg:w-[375px] lg:h-[400px]  xs:-mt-[250%]   xs:h-64 rounded-[72px]' ></div>
      <img className="absolute lg:-left-2 lg:-top-1 xs:-top-[10%] xs:-left-2  xs:w-96   " src={NassimPic}  alt="" />
    </div>
    
  )
}