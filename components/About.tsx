import SectionTitle from '@/widgets/SectionTitle'
import Image from 'next/image'
import { AiFillThunderbolt } from 'react-icons/ai'

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle titleNo="01" title="About Me" />

      <div className="flex flex-col lgl:flex-row gap-16">
        {/* Content Section */}
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I am a highly motivated and dedicated individual with a passion for
            technology. With a strong background in front-end and back-end
            development, I possess good interpersonal skills, leadership
            abilities, and strong teamwork capabilities.
          </p>
          <p>
            I am currently in my fourth year, pursuing a B.Tech degree in
            Information Technology from{' '}
            <span className="text-textGreen">
              Coimbatore Institute of Technology
            </span>{' '}
            , with an expected graduation in 2024.
          </p>
          <p>
            My expertise in both front-end and back-end development allows me to
            understand and empathize with my clients, enabling me to create
            custom software solutions that precisely meet their requirements.
          </p>
          <p>
            I have a strong commitment to continuous learning, always seeking
            more efficient ways to improve my skills. To find out more about
            what I can do for you, check out my work below.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-inter grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Typescript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Nest.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Docker
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full w-3/4 lgl:w-full object-cover"
                src="/assets/images/deepak_image.jpg"
                alt="Deepak"
                width={500}
                height={500}
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/5 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  )
}

export default About
