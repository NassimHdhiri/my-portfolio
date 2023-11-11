import Github from '../../assets/Profile_resume/images/github1.svg'
import Linkedin from '../../assets/Profile_resume/images/linkedin1.svg'
import Cursor from '../../assets/Profile_resume/images/Cursor.svg'

export default function ProfilBtns() {
  return (
    <>
    <div className='flex items-center flex-col xs:ml-28 xs:w-96  xs:gap-y-1 '>

        <div className='relative whitespace-nowrap mb-2 xs:flex xs:gap-x-2'>
            <button type="button" className="text-gray-900 w-1/2 xs:w-44 xs:h-14 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-[22px] xs:text-sm  text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 py-2 px-6 ">Download CV</button>
            <button type="button" className="text-white w-1/2 xs:w-44 xs:h-14 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full   mr-2 mb-2 text-[22px] xs:text-sm   dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 py-2 px-6 ">Contact info</button>  
            <img className='absolute -right-8 xs:right-1 xs:top-11 xs:w-5' src={Cursor} alt=''/>
        </div>
        
        <div className='flex justify-between w-20 xs:w-32 relative ' >
            <a href='https://linkedin.com/in/hdhiri-med-nassim-5a44b428b' target='_blank'>
              <img src={Linkedin}  alt='' className='hover:cursor-pointer xs:w-12'/>
            </a>
            <a href="https://github.com/NassimHdhiri?tab=repositories" target='_blank'>
              <img src={Github} alt='' className='hover:cursor-pointer xs:w-11' />
            </a>
        </div>
    </div>      
  </>
    
  )
}