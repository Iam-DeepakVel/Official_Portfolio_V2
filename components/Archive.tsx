import { useState } from 'react'
import ArchiveCard from './Card/ArchiveCard'
import { motion } from 'framer-motion'

interface ArchiveProject {
  title: string
  description: string
  link: string
  technologies: Array<string>
}

const archiveProjects = [
  {
    title: 'Modern Blog Site',
    description:
      'This is a simple project which is made using JAM Stack Admin can add blog with help of NetlifyCMS . This project is built using 11ty and tailwindcss.',
    link: '',
    technologies: ['Eleventy', 'Tailwindcss', 'NetlifyCMS'],
  },
  {
    title: 'Winged Updates',
    description:
      'This project utilizes Next.js and TypeScript to provide a daily news platform with categorized articles and breaking news updates. React-Bootstrap is used for styling, while the NewsAPI is leveraged to fetch the latest news.',
    link: '',
    technologies: ['Next.js', 'React-Bootstrap', 'NetlifyCMS'],
  },
  {
    title: 'Modern Blog Site',
    description:
      'This is a simple project which is made using JAM Stack Admin can add blog with help of NetlifyCMS . This project is built using 11ty and tailwindcss.',
    link: '',
    technologies: ['Eleventy', 'Tailwindcss', 'NetlifyCMS'],
  },
  {
    title: 'Modern Blog Site',
    description:
      'This is a simple project which is made using JAM Stack Admin can add blog with help of NetlifyCMS . This project is built using 11ty and tailwindcss.',
    link: '',
    technologies: ['Eleventy', 'Tailwindcss', 'NetlifyCMS'],
  },
  {
    title: 'Modern Blog Site',
    description:
      'This is a simple project which is made using JAM Stack Admin can add blog with help of NetlifyCMS . This project is built using 11ty and tailwindcss.',
    link: '',
    technologies: ['Eleventy', 'Tailwindcss', 'NetlifyCMS'],
  },
  {
    title: 'Modern Blog Site',
    description:
      'This is a simple project which is made using JAM Stack Admin can add blog with help of NetlifyCMS . This project is built using 11ty and tailwindcss.',
    link: '',
    technologies: ['Eleventy', 'Tailwindcss', 'NetlifyCMS'],
  },
  // More Projects
  {
    title: 'Modern Blog Site',
    description:
      'This is a simple project which is made using JAM Stack Admin can add blog with help of NetlifyCMS . This project is built using 11ty and tailwindcss.',
    link: '',
    technologies: ['Eleventy', 'Tailwindcss', 'NetlifyCMS'],
  },
  {
    title: 'Modern Blog Site',
    description:
      'This is a simple project which is made using JAM Stack Admin can add blog with help of NetlifyCMS . This project is built using 11ty and tailwindcss.',
    link: '',
    technologies: ['Eleventy', 'Tailwindcss', 'NetlifyCMS'],
  },
  {
    title: 'Modern Blog Site',
    description:
      'This is a simple project which is made using JAM Stack Admin can add blog with help of NetlifyCMS . This project is built using 11ty and tailwindcss.',
    link: '',
    technologies: ['Eleventy', 'Tailwindcss', 'NetlifyCMS'],
  },
]

const ArchiveGrid = ({ projects }: { projects: ArchiveProject[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
      {projects.map((project: ArchiveProject, index: number) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 - 0.6 }}
          key={index}
        >
          <ArchiveCard
            title={project.title}
            description={project.description}
            link={project.link}
            technologies={project.technologies}
          />
        </motion.div>
      ))}
    </div>
  )
}

const Archive = () => {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll
    ? archiveProjects
    : archiveProjects.slice(0, 6)
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-inter font-semibold mb-2">
          Other Noteworthy Projects
        </h2>
        <p className=" text-sm font-inter text-textGreen">View the Archive</p>
      </div>
      <ArchiveGrid projects={displayedProjects} />

      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  )
}

export default Archive
