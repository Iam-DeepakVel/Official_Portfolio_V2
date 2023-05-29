import SectionTitle from '@/widgets/SectionTitle'
import Image from 'next/image'
import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle titleNo="03" title="Some Things I have Built" />

      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Smiley Notes */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href=""
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
                  href=""
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href=""
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
              href=""
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
                  href=""
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href=""
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
              href=""
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
                <li>Javascript</li>
                <li>Tailwindcss</li>
                <li>Framer Motion</li>
                <li>Firebase</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href=""
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href=""
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
      </div>
    </section>
  )
}

export default Projects
