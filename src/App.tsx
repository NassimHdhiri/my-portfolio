import './App.css'
import AboutMeMain from './components/About_me/AboutMeMain'
import Contact from './components/Contact_us/Contact'
import ExpAcademic from './components/Experiences/Academic/ExpAcademic'
import ExpSocial from './components/Experiences/Social/ExpSocial'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import Main from './components/Profile-resume/Main'
import Project from './components/Projects/Project'
import Repaire from './components/Repaire/Repaire'

function App() {

  return (
    <div className=' w-screen mr-8 ml-8 '>

      <Layout>
          <Main/>
          <Repaire/>
          <AboutMeMain/>
          <ExpAcademic/>
          <ExpSocial/>
          <Project/>
          <Contact/>
          <Footer/>
      </Layout>
    </div>
  )
}

export default App
