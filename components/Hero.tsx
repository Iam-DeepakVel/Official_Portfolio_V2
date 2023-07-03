'use client'
import { Tooltip } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { Link as ReactScrollLink } from 'react-scroll'
import ReactTyped from 'react-typed'

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto pt-24 pb-12 mdl:pt-44 mdl:pb-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-inter tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-4xl lgl:text-6xl font-inter font-semibold flex flex-col"
      >
        Deepak{' '}
        <span className="text-textDark  mt-2 lgl:mt-4">
          <ReactTyped
            strings={[
              'Frontend Developer',
              'Backend Developer',
              'IT Student',
              'Active Programmer',
              'Love to Code and Create',
              'I Love Full Stack Development',
            ]}
            typeSpeed={60}
            backSpeed={45}
            loop
          />
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        Welcome to my portfolio! I am a passinate software developer with{' '}
        <span className="text-textGreen">1 year of experience </span> building
        dynamic and responsive web applications. I am continuously expanding my
        skillset, currently focusing on technologies such as{' '}
        <span className="text-textGreen tracking-wide">
          {' '}
          Next.js(Typescript), Tailwindcss, Node.js, Express.js, MongoDB,
        </span>{' '}
        and
        <span className="text-textGreen"> PostgreSQL.</span> Here, you will find
        a collection of my past projects and my experiences. Thanks for
        visiting!
      </motion.p>

      <ReactScrollLink
        to="project"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1500}
      >
        <Tooltip content="My Projects" color="invert">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-52 h-14 mt-4 md:mt-0 text-sm font-inter border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
          >
            Check out my Projects!
          </motion.button>
        </Tooltip>
      </ReactScrollLink>
    </section>
  )
}

export default Hero
