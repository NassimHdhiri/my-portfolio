import Picture from './Picture/Picture'
import Resume from './Resume'
import ProfilBtns from './ProfilBtns'



export default function Main() {
  return (
    <div className='lg:grid lg:grid-cols-12 lg:mt-9 lg:z-30 xs:flex xs:flex-col-reverse'>
        <div className='xs:absolute xs:top-40  col-start-1 col-end-6'>
            <Picture/>
        </div>
       <div className='col-start-6 col-end-12 flex flex-col items-center justify-center gap-y-16'>
            <div className='ml-16 grid-rows-6  h-[600px] w-[600px] relative'>
              <div className='p-6'></div>
              <div  className=' absolute lg:top-40 xs:top-16 xs:left-16 row-start-1 row-end-4'>
                  <Resume/>
              </div>
              <div className=' p-4'></div>
              <div className=' p-4'></div>
              <div className='absolute lg:bottom-28 xs:-bottom-64 lg:left-28 row-start-4 row-end-6 justify-center items-center mt-12'>
                <ProfilBtns/>
              </div>
            </div>
       </div>
       
    </div>
  )
}