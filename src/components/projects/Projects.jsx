import React, { useState } from 'react'
import Expense from '../../assets/expense-tracker.png'
import Weather from '../../assets/weather.png'
import Filter from '../../assets/filter.png'
import Movie from '../../assets/movie.png'
import Pagination from '../../assets/pagination.png'
import Chart from '../../assets/chart.png'
import Note from '../../assets/notes.png'
import Gallery from '../../assets/gallery.png'

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

  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      title: 'Movie Search App',
      image: Movie,
      description:
        'A movie search application that allows users to search and explore movies.',
      link: 'https://movie-search-ten-mu.vercel.app/',
    },
    {
      title: 'Expense Tracker',
      image: Expense,
      description: 'A responsive expense tracking application for managing income and expenses.',
      link: 'https://expense-tracker-mauve-omega-90.vercel.app/'
    },
    {
      title: 'Product Filter',
      image: Filter,
      description: 'A product browsing application with category, price filtering and sorting.',
      link: 'https://product-filter-eosin.vercel.app/'
    },
    {
      title: 'Weather App',
      image: Weather,
      description: 'A weather application that displays current weather and forecast information.',
      link: 'https://weather-app-tau-six-64.vercel.app/'
    },
    {
      title: 'Pagination App',
      image: Pagination,
      description:
        'A React pagination application for displaying API data page by page.',
      link: 'https://pagination-nu-three.vercel.app/',
    },,
    {
      title: 'React Chart',
      image: Chart,
      description:
        'An interactive React chart application for visualizing data through dynamic and responsive charts.',
      link: 'https://react-charts-one.vercel.app/',
    },
    {
      title: 'Note App',
      image: Note,
      description:
        'A responsive React note-taking application for creating, editing, and managing personal notes easily.',
      link: 'https://notes-app-self-psi.vercel.app/',
    },
    {
      title: 'Image Gallery',
      image: Gallery,
      description:
        'A responsive React image gallery application that allows users to search, browse, and view images in an attractive gallery layout.',
      link: 'https://image-gallery-pixabay-iota.vercel.app/',
    },
  ]

  // Show only first 3 projects initially
  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 3)

  return (
    <section id="projects" className="text-gray-600 body-font bg-blue-950">
      <div className="container px-5 py-20 md:py-24 mx-auto">

        <div className="flex flex-col text-center w-full mb-16">
          <p data-aos="fade-up" data-aos-delay="200" className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">My Work</p>
          <h1 data-aos="fade-up" data-aos-delay="300" className="sm:text-4xl text-3xl font-bold title-font mb-5 text-white">My Projects</h1>
          <p data-aos="fade-up" data-aos-delay="400" className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">Here are some of the projects I have worked on using React, Tailwind CSS, APIs and other modern web technologies.</p>
        </div>

        <div className="flex flex-wrap -m-4">

          {/* {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              link={project.link}
            />
          ))} */}
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}

        </div>

        {/* View More Button */}
        {projects.length > 3 && (
          <div
            data-aos="fade-up"
            className="flex justify-center mt-10"
          >
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-950 hover:bg-blue-800 text-white font-semibold px-7 py-3 rounded-full transition duration-300"
            >
              {showAll ? 'View Less' : 'View More'}
            </button>
          </div>
        )}

      </div>
    </section>
  )
}