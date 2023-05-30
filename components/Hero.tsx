'use client'
import { motion } from 'framer-motion'
import { Link as ReactScrollLink } from 'react-scroll'

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
          I Love Full Stack Development.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        Welcome to my portfolio! I am a web developer with 1 year of experience
        building dynamic and responsive web applications. I am continuously
        expanding my skillset, currently focusing on technologies such as React,
        Node.js, Express, MongoDB, Eleventy, Tailwind CSS, and PostgreSQL. Here,
        you will find a collection of my past projects and my experiences.
        Thanks for visiting!
      </motion.p>

      <ReactScrollLink
        to="project"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1500}
      >
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 mt-4 md:mt-0 text-sm font-inter border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my Projects!
        </motion.button>
      </ReactScrollLink>
    </section>
  )
}

export default Hero
