import Navbar from './components/Navbar'
import Projects from './components/Projects'
import PCBTraces from './components/PCBTraces'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Hero from './components/Hero'
import PCBBackground from './components/PBCBackground'
import './styles/globals.css'

function App() {
  return (
    <>
      <PCBBackground />
      <Navbar />
      <main>
        <div className="hero-skills-row">
          <Hero />
          <Skills />
        </div>
        <PCBTraces />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App