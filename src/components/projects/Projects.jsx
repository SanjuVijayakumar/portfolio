import React from 'react'
import Expense from '../../assets/expense-tracker.png'
import Weather from '../../assets/weather.png'
import Filter from '../../assets/filter.png'

const ProjectCard = ({ image, title, description, link }) => (
  <div data-aos="fade-up" className="p-4 md:w-1/3 sm:mb-0 mb-6">

    <div className="rounded-2xl h-64 overflow-hidden bg-blue-950">
      <img  alt={title} className="object-cover object-center h-full w-full hover:scale-105 transition duration-500" src={image} />
    </div>

    <h2 className="text-xl title-font font-semibold text-blue-950 mt-5">{title} </h2>
    <p className="text-gray-200 text-sm leading-6 mt-2">{description}</p>

    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900 inline-flex items-center mt-4 font-medium">
      View Project
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
)

export default function Projects() {

  const projects = [
    {
      title: 'Expense Tracker',
      image: Expense,
      description: 'A responsive expense tracking application for managing income and expenses.',
      link: 'https://expense-tracker-brown-five-67.vercel.app/'
    },
    {
      title: 'Weather App',
      image: Weather,
      description: 'A weather application that displays current weather and forecast information.',
      link: 'https://weather-app-tau-six-64.vercel.app/'
    },
    {
      title: 'Product Filter',
      image: Filter,
      description: 'A product browsing application with category, price filtering and sorting.',
      link: 'https://product-filter-eosin.vercel.app/'
    }
  ]

  return (
    <section id="projects" className="text-gray-600 body-font bg-blue-950">
      <div className="container px-5 py-20 md:py-24 mx-auto">

        <div className="flex flex-col text-center w-full mb-16">
          <p data-aos="fade-up" data-aos-delay="200" className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">My Work</p>
          <h1 data-aos="fade-up" data-aos-delay="300" className="sm:text-4xl text-3xl font-bold title-font mb-5 text-white">My Projects</h1>
          <p data-aos="fade-up" data-aos-delay="400" className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">Here are some of the projects I have worked on using React, Tailwind CSS, APIs and other modern web technologies.</p>
        </div>

        <div className="flex flex-wrap -m-4">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              link={project.link}
            />
          ))}

        </div>

      </div>
    </section>
  )
}