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
            Responsible for{' '}
            <span className="text-textGreen">backend development</span> using
            popular technologies including{' '}
            <span className="text-textGreen">Node.js, Express.js</span>, and{' '}
            <span className="text-textGreen">MongoDB</span>.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen  mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Utilized <span className="text-textGreen">Postman</span> for API
            testing and documentation.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen  mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Got exposure to <span className="text-textGreen"> devops</span>{' '}
            tools that increases an {`organization's`}
            ability to deliver applications and services.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen  mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Learnt about{' '}
            <span className="text-textGreen">
              distributed version control system
            </span>{' '}
            like git and hosting service like Github.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen  mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Successfully developed a{' '}
            <span className="text-textGreen">REST API </span> and gained a
            strong understanding of API development fundamentals.
          </p>
        </li>
      </ul>
    </motion.div>
  )
}

export default Neophron
