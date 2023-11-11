import CheckSvg from '../../../assets/Profile_experiences/images/Subtract.svg';

type Props={kind:boolean}

export default function ExpAcademicOther({kind}:Props) {

    const skillsM=[
        'dart',
        'flutter',
        'jest'
      ]
    
      const SkillsPM=[
        'scrum',
        'jira',
        'git & github'
      ]

  return (
    <div className=' lg:h-[300px]  xs:-ml-1  gap-8  w-[350px] bg-white z-10   flex flex-col  bg-opacity-40 rounded-[42px] gap-y-4  p-7 pt-9  border-4 border-gray-400'>
                  <label className='capitalize text-2xl mb-5 pt-2 xs:pt-4 xs:-mt-7'>{(kind)?"Project Management":"Mobile Development"}</label>
                <div className='ml-5 flex flex-col gap-4 xs:-pt-7'>
                    {
                      ((kind)?SkillsPM:skillsM).map((val,index)=>{
                      return(
                        <div className='flex gap-7 xs:gap-4 items-center pl-9 xs:pl-1 xs:ml-10' key={index}>
                          <img src={CheckSvg} alt="" />
                          <label className='text-[22px] xs:text-lg capitalize xs:whitespace-nowrap'>{val}</label>
                        </div>
                      )
                    })
                      
                    }
                  </div> 
              </div>
  )
}