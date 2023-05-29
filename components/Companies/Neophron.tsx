'use client'
import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Neophron = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3>
        Backend Developer Intern{' '}
        <span className="text-textGreen tracking-wide">@Neophron</span>{' '}
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">July 2022</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen  mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Responsible for backend development with popular technologies like
            Node.js, Express.js and MongoDB.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen  mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Built API with REST Architecture for a project and got exposure with
            Postman.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen  mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            {`Got exposure to devops tools that increases an organization's
            ability to deliver applications and services.`}
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen  mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Learnt about distributed version control system like git and hosting
            service like Github
          </p>
        </li>
      </ul>
    </motion.div>
  )
}

export default Neophron
