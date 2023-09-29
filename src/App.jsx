import './App.css'
import About from './components/about/About'
import ContactMe from './components/contact/ContactMe'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Project from './components/projects/Project'
import Qualification from './components/qualification/Qualification'
import ScrollUp from './components/scrollup/ScrollUp'
import Skills from './components/skills/Skills'


function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Home/>
        <About/>
        <Skills />
        <Qualification/>
        <Project/>
        <ContactMe/>
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  )
}

export default App
