'use client'
import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Webilicious = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3>
        Front-end Developer Intern{' '}
        <span className="text-textGreen tracking-wide">@Webilicious</span>{' '}
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Jan 2023</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Developed the user interface for{' '}
            <span className="text-textGreen">
              Rurket (a rural side groceries delivery application){' '}
            </span>{' '}
            using React.js and Tailwind CSS.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Acquired{' '}
            <span className="text-textGreen">
              end-to-end project management
            </span>{' '}
            skills, encompassing all stages from initial planning to deployment
            on cloud platforms such as{' '}
            <span className="text-textGreen">Vercel</span> and{' '}
            <span className="text-textGreen">Netlify</span> .
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Gained valuable experience in{' '}
            <span className="text-textGreen">version control</span> using{' '}
            <span className="text-textGreen">Git</span>
            and <span className="text-textGreen">GitHub</span> while working
            collaboratively with a team.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Built the application to be a{' '}
            <span className="text-textGreen">
              Progressive Web Application(PWA)
            </span>{' '}
            to provide a seamless user experience.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Successfully implemented the{' '}
            <span className="text-textGreen"> agile methodology</span>,
            contributing to efficient project management and timely delivery.
          </p>
        </li>
      </ul>
    </motion.div>
  )
}

export default Webilicious
