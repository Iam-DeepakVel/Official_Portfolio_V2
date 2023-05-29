import SectionTitle from '@/widgets/SectionTitle'
import { useState } from 'react'
import Neophron from './Companies/Neophron'
import Webilicious from './Companies/Webilicious'
import Skematix from './Companies/Skematix'

const Experience = () => {
  const [value, setValue] = useState<string>('neophron')
  return (
    <section
      id="experience"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle titleNo="02" title="Where I have Worked" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-46 flex flex-col">
          <li
            onClick={() => setValue('skematix')}
            className={`${
              value === 'skematix'
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            Skematix Technologies
          </li>
          <li
            onClick={() => setValue('webilicious')}
            className={`${
              value === 'webilicious'
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            Team Webilicious
          </li>
          <li
            onClick={() => setValue('neophron')}
            className={`${
              value === 'neophron'
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            }  border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            Neophron Technologies
          </li>
        </ul>
        {value === 'skematix' && <Skematix />}
        {value === 'webilicious' && <Webilicious />}
        {value === 'neophron' && <Neophron />}
      </div>
    </section>
  )
}

export default Experience
