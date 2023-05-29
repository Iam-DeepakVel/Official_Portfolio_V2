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
        Full Stack Developer Intern{' '}
        <span className="text-textGreen tracking-wide">@Webilicious</span>{' '}
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Jan 2023</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen" mt-1>
            <TiArrowForward />{' '}
          </span>
          <p>
            Led the development of Rurket, a rural side groceries delivery
            application, utilizing ReactJS, TailwindCSS, and Firebase for the
            backend.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen" mt-1>
            <TiArrowForward />{' '}
          </span>
          <p>
            Developed a strong understanding of React and implemented Agile
            methodology throughout the software development lifecycle.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen" mt-1>
            <TiArrowForward />{' '}
          </span>
          <p>
            Responsible for end-to-end testing and reviewing of code to ensure
            high-quality and functionality.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen" mt-1>
            <TiArrowForward />{' '}
          </span>
          <p>
            Built the application to be a Progressive Web Application to provide
            a seamless user experience.
          </p>
        </li>
      </ul>
    </motion.div>
  )
}

export default Webilicious
