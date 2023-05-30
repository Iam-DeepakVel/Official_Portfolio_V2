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
    title: 'FriendZone',
    description:
      'FriendZone is an advanced real-time chat application. It uses Next.js, Socket.io, and Express.js, and is written in TypeScript. The user interface is designed with Chakra UI to create a visually appealing and user-friendly experience.',
    link: 'https://github.com/Iam-DeepakVel/friendzone-ui',
    technologies: ['Next.js', 'Socket.io', 'Chakra UI', 'Express.js'],
  },
  {
    title: 'Wing Deals',
    description:
      '"Wing-Deals" is an ecommerce app built using Next.js, MongoDB, and Tailwind CSS. The app provides users with a platform to buy and sell products.',
    link: 'https://github.com/Iam-DeepakVel/wing-deals',
    technologies: ['Next.js', 'Tailwindcss', 'MongoDB'],
  },
  {
    title: 'Portfolio_V1',
    description:
      'This website showcases my work experience, skills, and projects, providing a comprehensive and visually appealing platform to share his talent and connect with potential clients or employers.',
    link: 'https://deepakwings.netlify.app/',
    technologies: ['React.js', 'Tailwindcss', 'Framer motion'],
  },
  {
    title: 'Rurket',
    description:
      'Rurket is an e-commerce platform that connects rural markets directly to consumers. Designed as a user-friendly Progressive Web App (PWA), it offers a hassle-free shopping experience. Powered by React, Tailwind CSS, and backed by Firebase.',
    link: 'https://github.com/Iam-DeepakVel/Rurket',
    technologies: ['React.js', 'Tailwindcss', 'Firebase'],
  },
  {
    title: 'Bookmarks API',
    description:
      'A backend for Bookmarks app built with Nest.js, Docker, PostgreSQL and Passport.js for authentication, Prisma as the ORM, Pactum for API testing and Dotenv for environment management.',
    link: 'https://github.com/Iam-DeepakVel/Nest-BookmarksAPI',
    technologies: ['Nest.js', 'PostgreSQL', 'Prisma', 'Docker'],
  },
  {
    title: 'Next-Ecommerce',
    description:
      'This is a e-commerce app built using next.js, tailwindcss, mongoDB and stripe. I have implemented stripe checkout and webhook to receive information from stripe.',
    link: 'https://github.com/Iam-DeepakVel/Next-Ecommerce',
    technologies: ['Next.js', 'MongoDB', 'Stripe'],
  },
  // More Projects
  {
    title: 'Stayyoung Server',
    description:
      'StayYoung is a premier Korean skincare website that brings you the latest in beauty technology. With Nest.js and MongoDB on the backend, we ensure robust functionality and secure data storage. ',
    link: 'https://github.com/Iam-DeepakVel/stay-young-server',
    technologies: ['Nest.js', 'MongoDB', 'Docker', 'Jenkins'],
  },
  {
    title: 'Modern Blog Site',
    description:
      'This is a simple project which is made using JAM Stack. Admin can add blog with help of NetlifyCMS. This project is built using 11ty',
    link: 'https://github.com/Iam-DeepakVel/11ty-JAMStack-BlogSite',
    technologies: ['Eleventy', 'Tailwindcss', 'NetlifyCMS'],
  },
  {
    title: 'Winged Updates',
    description:
      'This project utilizes Next.js, React-Bootstrap, NewsAPI and TypeScript to provide a daily news platform with categorized articles and breaking news updates.',
    link: 'https://github.com/Iam-DeepakVel/Dee-NewsApp',
    technologies: ['Next.js', 'React-Bootstrap', 'NetlifyCMS'],
  },
  {
    title: 'Simple Landing Page',
    description:
      'A static Website is made using eleventy, nunjucks, tailwindcss!!!',
    link: 'https://github.com/Iam-DeepakVel/Eleventy-Tailwind',
    technologies: ['Eleventy', 'Nunjucks', 'Tailwindcss'],
  },
  {
    title: 'Cocktails',
    description:
      'This is a simple React.js project that helps to understand fetching data from API and presenting it in frontend!! ',
    link: 'https://github.com/Iam-DeepakVel/React-APIFetch-Project-1',
    technologies: ['React'],
  },
  {
    title: 'Manage',
    description:
      'This is a simple project which is made using JAM Stack Admin can add blog with help of NetlifyCMS . This project is built using 11ty and tailwindcss.',
    link: '',
    technologies: ['Eleventy', 'Tailwindcss', 'NetlifyCMS'],
  },
  {
    title: 'Clipboard - Landing Page',
    description:
      'This is a landing page of an clipboard website. It contains the download links of the application.',
    link: 'https://github.com/Iam-DeepakVel/Tailwind-Static-Web-1',
    technologies: ['HTML', 'Tailwindcss'],
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
    <div className="max-w-contentContainer mx-auto px-4 mdl:py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-inter font-semibold mb-4 text-center">
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
