'use client'
import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const LiveApps = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3>
        Full Stack Developer (Part-time){' '}
        <span className="text-textGreen tracking-wide">@LiveApps</span>{' '}
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Apr 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Live Apps is an{' '}
            <span className="text-textGreen">open-source organization</span>{' '}
            where we actively develop and maintain projects with the purpose of
            learning new technologies and helping others learn as well.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Actively contributing to the open source project{' '}
            <span className="text-textGreen">{'kitty chan'} </span> to enhance
            my skills and knowledge as a web developer.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            kitty chan is a{' '}
            <span className="text-textGreen">powerful Discord bot</span> ,
            currently serving{' '}
            <span className="text-textGreen">1000+ users</span> in{' '}
            <span className="text-textGreen">15+ Discord servers</span> , with
            capabilities for server moderation.
          </p>
        </li>
        <li className="flex text-base gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />{' '}
          </span>
          <p>
            Responsible for building the frontend for kitty chan bot using{' '}
            <span className="text-textGreen">
              Next.js (Typescript), Tailwind CSS, and Framer Motion.
            </span>
          </p>
        </li>
      </ul>
    </motion.div>
  )
}

export default LiveApps
