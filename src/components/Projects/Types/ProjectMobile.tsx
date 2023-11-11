import ProjectSingle from '../ProjectSingle'


export default function ProjectMobile() {
  return (
    <div className='flex flex-col'>
      <p>Project mobile</p>
      <div className='lg:grid lg:grid-cols-3 wrap gap-4 justify-center xs:flex xs:flex-col xs:w-64 '>
            <ProjectSingle/>
            <ProjectSingle/>
            <ProjectSingle/>
            <ProjectSingle/>
            <ProjectSingle/>
            <ProjectSingle/>
        </div>
      </div>
  )
}