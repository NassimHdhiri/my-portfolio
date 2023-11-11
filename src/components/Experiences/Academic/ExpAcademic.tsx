import ExpAcademicSingle from './ExpAcademicSingle';
import ExpAcademicOther from './ExpAcademicOther';
import ExpAcademicTitle from './ExpAcademicTitle';



export default function ExpAcademic() {


  return (
    <div className='grid grid-rows-3 justify-center gap-7'>
      <div className=' row-span-1'>
          <ExpAcademicTitle/>
      </div>
    
      <div className=' row-span-2 xs:-mt-28'>
        <div className='flex gap-10 justify-center flex-wrap xs:w-[500px]'>
          <ExpAcademicSingle verif={true}/>
          <ExpAcademicSingle verif={false}/>
        </div>
      </div>
      
      
      {/* other */}
      <div className=' row-span-3 xs:ml-[24%] '>
          <div className=' bg-gray-100  xs:flex-wrap xs:w-64 lg:h-96 flex flex-col gap-5 items-center p-9 rounded-[42px] shadow-lg shadow-gray-400  justify-center'>
              <h2 className=' text-[35px] -mt-5 xs:m-auto xs:mb-9'>Other</h2>
              <div className='flex flex-wrap lg:gap-28 xs:gap-5 justify-center -mt-6'>
                  <ExpAcademicOther kind={true}/>
                  <ExpAcademicOther kind={false}/>
              </div>
          </div>
      </div>
      
    </div>
  );
}
