import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'

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
    </main>
  )
}

export default App
