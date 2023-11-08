import './App.css'
import AboutMeMain from './components/About_me/AboutMeMain'
import Contact from './components/Contact_us/Contact'
import ExpAcademic from './components/Experiences/Academic/ExpAcademic'
import ExpSocial from './components/Experiences/Social/ExpSocial'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import Main from './components/Profile-resume/Main'
import Project from './components/Projects/Project'


function App() {

  return (
    <>

      <Layout>
          <Main/>
          {/* <Repaire/> */}
          <AboutMeMain/>
          <ExpAcademic/>
          <ExpSocial/>
          <Project/>
          <Contact/>
          <Footer/>
      </Layout>
      
     
      
      

    </>
  )
}

export default App
