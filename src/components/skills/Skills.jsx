import React from 'react'
import Sample from '../../assets/sample.pdf'
import Expense from '../../assets/expense-tracker.png'
import Weather from '../../assets/weather.png'
import Filter from '../../assets/filter.png'

export default function Skills() {
  return (
    <section id="skills" className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-20 md:py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <p data-aos="fade-up" data-aos-delay="200" className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">
            My Skills
          </p>

          <h1 data-aos="fade-up" data-aos-delay="300" className="sm:text-4xl text-3xl font-bold title-font text-blue-950 mb-5">Full-Stack Developer</h1>
          <p data-aos="fade-up" data-aos-delay="400" className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            I build modern, responsive and user-friendly web applications using React, Node.js, Express and MongoDB.
          </p>
        </div>

        {/* Skills Cards */}
        <div
          data-aos="fade-up" data-aos-delay="500" className="flex flex-wrap -m-4 text-center">

          {/* Frontend */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-blue-100 hover:border-blue-400 px-4 py-8 rounded-2xl transition duration-300 hover:shadow-lg h-full">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50">
                <span className="text-2xl">⚛️</span>
              </div>
              <h2 className="title-font font-semibold text-2xl text-blue-950">Frontend</h2>
              <p className="leading-relaxed mt-2 text-gray-500">React.js & Tailwind CSS</p>
            </div>
          </div>

          {/* Backend */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-blue-100 hover:border-blue-400 px-4 py-8 rounded-2xl transition duration-300 hover:shadow-lg h-full">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50">
                <span className="text-2xl">🟢</span>
              </div>
              <h2 className="title-font font-semibold text-2xl text-blue-950">Backend</h2>
              <p className="leading-relaxed mt-2 text-gray-500">Node.js & Express.js</p>
            </div>
          </div>

          {/* Database */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-blue-100 hover:border-blue-400 px-4 py-8 rounded-2xl transition duration-300 hover:shadow-lg h-full">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50">
                <span className="text-2xl">🍃</span>
              </div>
              <h2 className="title-font font-semibold text-2xl text-blue-950">Database</h2>
              <p className="leading-relaxed mt-2 text-gray-500">MongoDB & Mongoose</p>
            </div>
          </div>

          {/* Tools */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-blue-100 hover:border-blue-400 px-4 py-8 rounded-2xl transition duration-300 hover:shadow-lg h-full">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50">
                <span className="text-2xl">🛠️</span>
              </div>
              <h2 className="title-font font-semibold text-2xl text-blue-950">Tools</h2>
              <p className="leading-relaxed mt-2 text-gray-500">Git, GitHub & VS Code</p>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Project Preview */}
          <div data-aos="fade-right" data-aos-delay="300" className="grid grid-cols-2 gap-4">
            <img src={Expense} alt="Expense Tracker project" className="w-full h-44 sm:h-52 object-cover rounded-2xl shadow-md" />
            <img src={Weather} alt="Weather App project" className="w-full h-44 sm:h-52 object-cover rounded-2xl shadow-md" />
            <img src={Filter} alt="Product Filter project" className="w-full h-44 sm:h-52 object-cover rounded-2xl shadow-md col-span-2" />
          </div>

          {/* About Developer */}
          <div data-aos="fade-left" data-aos-delay="400" className="lg:pl-8">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">What I Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-5">Turning ideas into web applications</h2>
            <p className="text-gray-500 leading-7 mb-6">
              I enjoy building web applications that are clean, responsive
              and easy to use. My focus is on creating complete applications
              using the MERN stack, from the user interface to the backend
              and database.
            </p>

            <a href={Sample} download>
              <button ype="button" data-aos="fade-up" data-aos-delay="500" className="text-white bg-blue-950 hover:bg-blue-700 focus:outline-none font-medium rounded-full text-sm px-6 py-3 transition duration-300">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}