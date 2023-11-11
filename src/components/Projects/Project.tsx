import ProjectMenu from './ProjectMenu'
import ProjectTitle from './ProjectTitle'
import ProjectsView from './ProjectsView'



export default function Project() {
  return (
    <div className=' flex flex-col  justify-center gap-y-12 xs:w-64  '>
      <ProjectTitle/>
      <ProjectMenu/>
      {/* <ProjectSingle/> */}
      <ProjectsView/>
    </div>
  )
}