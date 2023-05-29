'use client'
import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Skematix = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3>
        Full Stack Developer Intern{' '}
        <span className="text-textGreen tracking-wide">@Skematix</span>{' '}
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sep 2022 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen" mt-1>
            <TiArrowForward />{' '}
          </span>
          <p>
            Responsible for building custom web applications using Next.js,
            Eleventy, Nunjucks, Tailwindcss and NetlifyCMS.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen" mt-1>
            <TiArrowForward />{' '}
          </span>
          <p>
            Learnt to use AWS EC2, lambda function, Simple Email Service(SES).
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen" mt-1>
            <TiArrowForward />{' '}
          </span>
          <p>
            Exposure with Shopify, Hydrogen, Oxygen and worked with PostgreSQL
            and Postgraphile.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen" mt-1>
            <TiArrowForward />{' '}
          </span>
          <p>
            Implemented Agile development process for Software Development Life
            Cycle.
          </p>
        </li>
      </ul>
    </motion.div>
  )
}

export default Skematix
