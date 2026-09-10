import React from 'react'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      year: '2025 - Present',
      title: 'MERN Stack Developer',
      description:
        'Building modern web applications using React.js, Node.js, Express.js and MongoDB.',
    },
    {
      id: 2,
      year: '2021 - 2024',
      title: 'Frontend Developer',
      description:
        'Developed responsive and user-friendly interfaces using React.js, JavaScript and Tailwind CSS.',
    },
    {
      id: 3,
      year: 'Projects',
      title: 'Full-Stack Projects',
      description:
        'Created practical applications including expense trackers, weather apps, product filters and other React projects.',
    },
  ]

  return (
    <section id="experience" className="text-gray-600 body-font bg-slate-50">
      <div className="container px-5 py-20 md:py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">

          <p data-aos="fade-up" data-aos-delay="200" className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">Experience</p>
          <h1 data-aos="fade-up" data-aos-delay="300" className="sm:text-4xl text-3xl font-bold title-font text-blue-950 mb-5">My Development Journey</h1>
          <p data-aos="fade-up" data-aos-delay="400" className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            My journey in web development has focused on building modern,
            responsive and practical applications while continuously
            improving my frontend and backend skills.</p>

        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto">

          <div data-aos="fade-up" data-aos-delay="500" className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {experiences.map((experience) => (
              <div key={experience.id} className="group bg-white border border-blue-100 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl transition duration-300">
                <div className="w-fit px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-5">{experience.year}</div>
                <h2 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-blue-600 transition">{experience.title}</h2>
                <p className="text-gray-500 leading-7 text-sm">{experience.description}</p>
              </div>
            ))}

          </div>

        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="mt-14 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="text-center border-2 border-blue-100 bg-white px-4 py-6 rounded-2xl">
            <h2 className="font-bold text-3xl text-blue-950">React</h2>
            <p className="mt-2 text-sm text-gray-500">Frontend</p>
          </div>

          <div className="text-center border-2 border-blue-100 bg-white px-4 py-6 rounded-2xl">
            <h2 className="font-bold text-3xl text-blue-950">Node.js</h2>
            <p className="mt-2 text-sm text-gray-500">Backend</p>
          </div>

          <div className="text-center border-2 border-blue-100 bg-white px-4 py-6 rounded-2xl">
            <h2 className="font-bold text-3xl text-blue-950">Express</h2>
            <p className="mt-2 text-sm text-gray-500">API</p>
          </div>

          <div className="text-center border-2 border-blue-100 bg-white px-4 py-6 rounded-2xl">
            <h2 className="font-bold text-3xl text-blue-950">MongoDB</h2>
            <p className="mt-2 text-sm text-gray-500">Database</p>
          </div>

        </div>

      </div>
    </section>
  )
}