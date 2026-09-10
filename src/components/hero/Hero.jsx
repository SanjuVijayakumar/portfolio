import React from 'react'
import Navbar from '../navbar/Navbar'
import heroImg from '../../assets/retro.png'

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center'>
      <div className='md:h-[720px] h-[990px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute bg-blue-950 rounded-full transform rotate-6 -top-40 z-0'></div>
      <Navbar />

        <section id='home' className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 mt-24 md:mt-30 z-10'>
            <div className='flex flex-col items-center md:items-start text-center md:text-left md:w-1/2'>
                <h1 className='text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
                Hi, I'm <span className='text-blue-400'>Sanju V</span>
                </h1>
                <h2 className='text-gray-300 text-xl sm:text-2xl font-medium mb-6'>
                MERN Stack Deeveloper
                </h2>
                <p className='text-gray-400 text-base max-w-md mb-8'>
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
            <div className='mt-10 md:mt-0 md:w-1/2 flex justify-center'>
                <img 
                src={heroImg} 
                alt='Hero' 
                className='w-72 sm:w-80 md:w-96 rounded-full border-4 border-blue-500/30 object-cover'
                />
            </div>
        </section>
    </div>
  )
}

export default Hero