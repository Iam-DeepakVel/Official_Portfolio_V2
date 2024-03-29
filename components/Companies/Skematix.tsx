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
        Front-end Developer Intern{' '}
        <span className="text-textGreen tracking-wide">@Skematix</span>{' '}
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sep 2022 - Apr 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Worked on 2 projects utilizing frontend technologies such as{' '}
            <span className="text-textGreen">ReactJS, Next.js, Astro</span>, and{' '}
            <span className="text-textGreen">Eleventy</span>.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Developed projects with a well-organized folder structure using
            Next.js framework and gained proficiency in state management
            libraries like <span className="text-textGreen">Redux</span> .
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Managed{' '}
            <span className="text-textGreen">
              implementing my own design ideas
            </span>{' '}
            with <span className="text-textGreen">Tailwindcss</span> for theming
            and reusable components.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Strengthened <span className="text-textGreen">teamwork</span> and
            communication abilities through collaborative project work.
          </p>
        </li>
      </ul>
    </motion.div>
  )
}

export default Skematix
