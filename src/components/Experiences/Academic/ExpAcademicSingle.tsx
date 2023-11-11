import CheckSvg from '../../../assets/Profile_experiences/images/Subtract.svg';


type Props = {verif:boolean}

export default function ExpAcademicSingle({verif}: Props) {
    const skillsF = [
        'css',
        'js',
        'html',
        'react',
        'tailwind',
        'redux',
        'typescript',
        'figma'
      ];
    
      const skillsB = [
        'node js',
        'mongodb',
        'express js',
        'django',
        'restful api',
        'pl/sql',
        'springboot',
        'oracle'
      ];
  return (
    <div className='flex flex-col bg-[#CFC3C3] bg-opacity-40 rounded-[42px] gap-y-9 lg:w-[440px] xs:w-64  p-7 pt-9 shadow-2xl border-4 border-gray-400'>
    {/* title of experience */}
    <h4 className='capitalize text-2xl xs:text-xl xs:-mt-3 xs:whitespace-nowrap'>{(verif)?'frontend':'backend'} development</h4>
    {/* skills */}
    <div className='grid grid-cols-2 gap-4 xs:-ml-9'>
      {((verif)?skillsF:skillsB).map((skill, index) => (
        <div className='flex gap-x-4 xs:gap-x-2 items-center pl-9' key={index}>
          <img className='xs:w-5 ' src={CheckSvg} alt="" />
          <label className='text-[22px] xs:whitespace-nowrap capitalize xs:text-base'>{skill}</label>
        </div>
      ))}
    </div>
  </div>
  )
}