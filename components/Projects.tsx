import SectionTitle from '@/widgets/SectionTitle'
import Image from 'next/image'
import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projects = () => {
  return (
    <section
      id="project"
      className="max-w-container mx-auto lgl:px-20 py-20 lgl:py-24"
    >
      <SectionTitle titleNo="03" title="Some Things I have Built" />

      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Smiley Notes */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/Iam-DeepakVel/SmileyNotes-V2.0-Client"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src="/assets/images/projects/smiley-notes.png"
                  alt="Smiley Notes"
                  width={1000}
                  height={1000}
                />
              </div>
            </a>
            {/* Content */}
            <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="font-inter text-textGreen text-sm tracking-wide mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Smiley Notes</h3>
              </div>

              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                SmileyNotes is a platform for spreading positivity and
                inspiration through notes and quotes. Our website allows users
                to create and store their own{' '}
                <span className="text-textGreen">notes</span> with titles and
                content, making it easy to keep track of their ideas, thoughts,
                and to-do lists.
              </p>
              <ul className="text-xs md:text-sm font-inter tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs</li>
                <li>Typescript</li>
                <li>Tailwindcss</li>
                <li>FramerMotion</li>
                <li>React Hook forms</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/Iam-DeepakVel/SmileyNotes-V2.0-Client"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href="https://github.com/Iam-DeepakVel/SmileyNotes-V2.0-Client"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Smiley Notes End*/}

        {/* Twitter clone */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://dee-twitter.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src="/assets/images/projects/twitter-clone.png"
                  alt="Twitter Clone"
                  width={1000}
                  height={1000}
                />
              </div>
            </a>
            {/* Content */}
            <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <div>
                <p className="font-inter text-textGreen text-sm tracking-wide mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Twitter Clone</h3>
              </div>

              <p className="bg-[#112240] text-sm md:text-base xl:-mr-16 p-2 md:p-6 rounded-md">
                Twitter clone, expertly crafted using the latest technologies to
                offer you an unparalleled user experience. Our platform is built
                on a robust foundation of{' '}
                <span className="text-textGreen">
                  Next.js, Tailwind CSS, NextAuth, TypeScript, and Sanity.io
                </span>{' '}
                , which ensures unparalleled functionality, speed, and security.
              </p>
              <ul className="text-xs md:text-sm font-inter tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs</li>
                <li>Typescript</li>
                <li>Tailwindcss</li>
                <li>FramerMotion</li>
                <li>Sanity io</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/Iam-DeepakVel/Twitter"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href="https://dee-twitter.vercel.app/"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Twitter clone End*/}

        {/* Spicy Wingz */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/Iam-DeepakVel/SpicyWingz"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src="/assets/images/projects/spicy-wingz.png"
                  alt="Spicy Wingz"
                  width={1000}
                  height={1000}
                />
              </div>
            </a>
            {/* Content */}
            <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="font-inter text-textGreen text-sm tracking-wide mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Spicy Wingz</h3>
              </div>

              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Spicywingz is a food delivery web application built using
                ReactJS, Firebase, Framer Motion, and TailwindCSS. The project
                utilizes{' '}
                <span className="text-textGreen">
                  Firebase for user authentication
                </span>{' '}
                and real-time database management, while Framer Motion and
                TailwindCSS provide smooth animations and a modern design.
              </p>
              <ul className="text-xs md:text-sm font-inter tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>Tailwindcss</li>
                <li>Framer Motion</li>
                <li>Firebase</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/Iam-DeepakVel/SpicyWingz"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href="https://github.com/Iam-DeepakVel/SpicyWingz"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Spicy Wingz End*/}

        {/* Celestra Start */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://celestra.in"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src="/assets/images/projects/celestra.png"
                  alt="Celestra 2k23"
                  width={1000}
                  height={1000}
                />
              </div>
            </a>
            {/* Content */}
            <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <div>
                <p className="font-inter text-textGreen text-sm tracking-wide mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Celestra 2k23</h3>
              </div>

              <p className="bg-[#112240] text-sm md:text-base xl:-mr-16 p-2 md:p-6 rounded-md">
                The is the official website for a highly anticipated national
                level technical symposium organized by the{' '}
                <span className="text-textGreen"> IT Department</span> at{' '}
                <span className="text-textGreen">
                  Coimbatore Institute of Technology
                </span>{' '}
                . Built with{' '}
                <span className="text-textGreen">
                  {' '}
                  React.js, Tailwind CSS, and Framer Motion
                </span>
                , this project showcases my expertise in modern web
                technologies.
              </p>
              <ul className="text-xs md:text-sm font-inter tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Reactjs</li>
                <li>Tailwindcss</li>
                <li>FramerMotion</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/Iam-DeepakVel/celestra"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href="https://celestra.in/"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Celestra End*/}

        {/* Stay Young Start */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://stayyoung.jaga.live"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src="/assets/images/projects/stay-young.png"
                  alt="Stay Young"
                  width={1000}
                  height={1000}
                />
              </div>
            </a>
            {/* Content */}
            <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="font-inter text-textGreen text-sm tracking-wide mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Stay Young</h3>
              </div>

              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                StayYoung is a{' '}
                <span className="text-textGreen">
                  premier Korean skincare website
                </span>{' '}
                that brings you the latest in beauty technology. Powered by{' '}
                <span className="text-textGreen">
                  Next.js and Tailwind CSS,
                </span>{' '}
                our frontend offers a seamless user experience with stunning
                visuals and responsive design. With{' '}
                <span className="text-textGreen">Nest.js and MongoDB</span> on
                the backend, we ensure robust functionality and secure data
                storage. Enjoy captivating animations powered by Framer Motion.
              </p>
              <ul className="text-xs md:text-sm font-inter tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Next.js</li>
                <li>TailwindCss</li>
                <li>Framer Motion</li>
                <li>Nest.js</li>
                <li>MongoDB</li>
                <li>Docker</li>
                <li>Jenkins</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/Iam-DeepakVel/stay-young-ui"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href="https://stayyoung.jaga.live"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Stay Young End*/}
      </div>
    </section>
  )
}

export default Projects
