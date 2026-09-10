import React from 'react'
import Sample from '../../assets/sample.pdf'
import Expense from '../../assets/expense-tracker.png'
import Weather from '../../assets/weather.png'
import Filter from '../../assets/filter.png'

export default function Skills() {
  return (
    <main
      id="skills"
      className="py-10 px-4 sm:px-6 md:py-16 md:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Left Content */}
        <div className="relative flex flex-col justify-center">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">
            Skills
          </p>

          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950">
            Full-Stack Developer
          </h1>

          <p className="mt-5 text-sm sm:text-base leading-7 text-slate-600">
            I build modern, responsive and user-friendly web applications
            using modern frontend and backend technologies.
          </p>

          {/* Download CV */}
          <a href={Sample} download>
            <button
              type="button"
              className="mt-6 text-white bg-blue-950 hover:bg-blue-700 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 transition"
            >
              Download CV
            </button>
          </a>
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">

          {/* Expense Tracker */}
          <img
            src={Expense}
            alt="Expense Tracker project"
            className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg col-span-2"
          />

          {/* Weather App */}
          <img
            src={Weather}
            alt="Weather App project"
            className="w-full h-40 sm:h-52 object-cover rounded-lg"
          />

          {/* Product Filter */}
          <img
            src={Filter}
            alt="Product Filter project"
            className="w-full h-40 sm:h-52 object-cover rounded-lg"
          />

        </div>
      </div>
    </main>
  )
}