import React from 'react'
import { Phone, Mail } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id='contact' className='py-16 bg-white text-center'>
      <div className='container mx-auto px-4 max-w-3xl'>

        {/* Heading */}
        <h2
          data-aos='fade-up'
          data-aos-duration='800'
          className='text-4xl font-bold text-gray-900 mb-4'
        >
          Contact
        </h2>

        {/* Description */}
        <p
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='800'
          className='text-gray-500 text-sm leading-relaxed mb-10 max-w-2xl mx-auto'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto
          quaerat similique delectus consequatur distinctio sapiente meiores
          eum aliquid voluptate nostrum magnam facere autem consectetur non
          ipsam, a doloribus quos?
        </p>

        {/* Contact Details */}
        <div className='flex flex-col items-center justify-center space-y-4 text-gray-800 font-semibold text-lg'>

          {/* Phone */}
          <div
            data-aos='fade-right'
            data-aos-delay='300'
            data-aos-duration='800'
            className='flex items-center space-x-3'
          >
            <Phone className='w-6 h-6 text-emerald-500' />
            <span>+91 9645934209</span>
          </div>

          {/* Email */}
          <div
            data-aos='fade-left'
            data-aos-delay='450'
            data-aos-duration='800'
            className='flex items-center space-x-3'
          >
            <Mail className='w-6 h-6 text-red-400' />
            <span>sanjuvijayakumar05@gmail.com</span>
          </div>

          {/* LinkedIn */}
          <div
            data-aos='fade-right'
            data-aos-delay='600'
            data-aos-duration='800'
            className='flex items-center space-x-3'
          >
            <FaLinkedin className='w-6 h-6 text-sky-500' />
            <span>sanju-vijayakumar</span>
          </div>

        </div>
      </div>
    </section>
  )
}