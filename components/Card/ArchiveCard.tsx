import { FaRegFolder } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { FC } from 'react'

interface ArchiveProject {
  title: string
  description: string
  link: string
  technologies: Array<string>
}

const ArchiveCard: FC<ArchiveProject> = ({
  title,
  description,
  technologies,
  link,
}) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen" />
          <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
        </div>
        <div>
          <h2 className=" text-xl font-inter font-semibold tracking-wide group-hover:text-textGreen transition-all duration-300 ease-in-out">
            {title}
          </h2>
          <p className="text-sm mt-3">{description}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {technologies.map((technology, index) => (
            <li
              key={index}
              className="group-hover:text-textGreen transition-all duration-300 ease-in-out"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )
}

export default ArchiveCard
