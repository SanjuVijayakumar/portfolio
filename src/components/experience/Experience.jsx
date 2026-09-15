import React, { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Server,
  Database,
} from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'React.js',
    icon: Code2,
    description:
      'Building responsive and interactive user interfaces using React.js, reusable components, hooks, and modern frontend practices.',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Node.js',
    icon: Server,
    description:
      'Developing backend applications and REST APIs using Node.js with asynchronous programming and server-side JavaScript.',
    skills: ['Node.js', 'JavaScript', 'REST API', 'npm'],
  },
  {
    id: 3,
    title: 'Express.js',
    icon: Server,
    description:
      'Creating structured and scalable REST APIs using Express.js with routes, controllers, middleware, and error handling.',
    skills: ['Express.js', 'REST API', 'Middleware', 'MVC'],
  },
  {
    id: 4,
    title: 'MongoDB',
    icon: Database,
    description:
      'Working with MongoDB for storing and managing application data using collections, documents, queries, and Mongoose.',
    skills: ['MongoDB', 'Mongoose', 'CRUD', 'Database'],
  },
]

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    )
  }

  const experience = experiences[currentIndex]
  const Icon = experience.icon

  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Experience
          </p>

          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-blue-950">
            My Technical Experience
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Technologies I use to build modern full-stack web applications.
          </p>
        </div>

        {/* Carousel */}
        <div
          data-aos="fade-up"
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-10">

            {/* Technology */}
            <div className="flex flex-col items-center text-center">

              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-blue-950 text-white flex items-center justify-center mb-5">
                <Icon size={40} />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-950">
                {experience.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-slate-600 leading-7 max-w-2xl">
                {experience.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10">

              {/* Previous */}
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-blue-950 hover:bg-blue-950 hover:text-white transition"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {experiences.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? 'w-8 bg-blue-950'
                        : 'w-2.5 bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              {/* Next */}
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-blue-950 hover:bg-blue-950 hover:text-white transition"
              >
                <ChevronRight size={22} />
              </button>

            </div>
          </div>
        </div>

        {/* Technology indicator */}
        <div className="text-center mt-5 text-sm text-slate-500">
          {currentIndex + 1} / {experiences.length}
        </div>

      </div>
    </section>
  )
}