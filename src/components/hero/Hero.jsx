import React from 'react'
import Navbar from '../navbar/Navbar'
import heroImg from '../../assets/retro.png'

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] w-full flex flex-col items-center'>
      {/* Background Shape */}
      <div className=' absolute z-0 pointer-events-none bg-blue-950 rounded-full transform rotate-6 -top-40 w-[1000px] h-[800px] sm:w-[1200px] sm:h-[850px] md:w-[1400px] md:h-[720px] lg:w-[1600px] lg:h-[720px] '></div>

      <Navbar />

      {/* Hero Section */}
      <section id='home' className='w-full max-w-6xl mx-auto px-6 py-12 md:py-20 z-10 mt-12 md:mt-16 sm:mt-22'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
          
          {/* Left Column - Text Content */}
          <div data-aos="fade-up" className='flex flex-col items-center md:items-start text-center md:text-left'>
            <h1 className='text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
              Hi, I'm <span className='text-blue-400'>Sanju V</span>
            </h1>
            <h2 className='text-gray-300 text-xl sm:text-2xl font-medium mb-6'>
              MERN Stack Developer
            </h2>
            <p data-aos="fade-up" data-aos-delay="300" className='text-gray-400 text-base sm:text-lg max-w-lg mb-8'>
              I create beautiful, responsive, and user-friendly web applications using modern technologies.
            </p>
            <div className='flex gap-4'>
              <a href='#contact' className='bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition'>
                Hire Me
              </a>
              <a href='#projects' className='border border-white/20 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-full transition'>
                View Work
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div data-aos="fade-up" className='flex justify-center md:justify-end'>
            <img 
              src={heroImg} 
              alt='Sanju V - Hero' 
              className='w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full border-4 border-blue-500/30 object-cover shadow-xl'
            />
          </div>

        </div>
      </section>
    </div>
  )
}

export default Hero