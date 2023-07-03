'use client'
import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const StayYoung = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3>
        Freelance Web Developer{' '}
        <span className="text-textGreen tracking-wide">@StayYoung</span>{' '}
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Apr 2023 - Jun 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Built an{' '}
            <span className="text-textGreen">full-stack ecommerce website</span>{' '}
            using Next.js, Tailwind CSS, Nest.js, and MongoDB.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Utilized <span className="text-textGreen">Typescript</span> to
            enhance codebase maintainability and reliability.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Implemented{' '}
            <span className="text-textGreen">server-side rendering (SSR)</span>{' '}
            using Next.js for improved performance and SEO optimization.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Employed <span className="text-textGreen">Docker</span> and{' '}
            <span className="text-textGreen">Jenkins</span> for containerization
            and CI/CD pipeline setup.
          </p>
        </li>
      </ul>
    </motion.div>
  )
}

export default StayYoung
