import ProjectSingle from '../ProjectSingle'

// type Props = {}

export default function ProjectFigma() {
  return (
      <div className='flex flex-col'>
        <p>ProjectFigma</p>
        <div className='lg:grid lg:grid-cols-3 wrap gap-4 justify-center xs:flex xs:flex-col xs:flex-wrap xs:w-64 '>
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