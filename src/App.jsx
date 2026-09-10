import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'

function App() {
  useEffect(()=> {
    AOS.init({
      duration: 1000,
    });
  }, [])

  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </main>
  )
}

export default App
