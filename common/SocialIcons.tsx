'use client'
import { TbBrandGithub } from 'react-icons/tb'
import { FaLinkedinIn } from 'react-icons/fa'
import { RxTwitterLogo } from 'react-icons/rx'
import { BiMailSend } from 'react-icons/bi'
import { Tooltip } from '@nextui-org/react'

const SocialIcons = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className=" flex flex-col gap-4">
        <Tooltip
          content="Visit Deepak's Github"
          color="invert"
          placement="right"
        >
          <a href="https://github.com/Iam-DeepakVel" target="_blank">
            <span className=" w-10 h-10 text-xl bg-bodyColor border-[1px]  border-textGreen/80 hover:border-textGreen  rounded-full inline-flex items-center justify-center text-textGreen/80 hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandGithub />
            </span>
          </a>
        </Tooltip>
        <Tooltip
          content="View Linkedin Profile"
          color="invert"
          placement="right"
        >
          <a href="https://www.linkedin.com/in/iamdeepakvel" target="_blank">
            <span className=" w-10 h-10 text-xl bg-bodyColor border-[1px]  border-textGreen/80 hover:border-textGreen  rounded-full inline-flex items-center justify-center text-textGreen/80 hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <FaLinkedinIn />
            </span>
          </a>
        </Tooltip>
        <Tooltip
          content="View Twitter Profile"
          color="invert"
          placement="right"
        >
          <a href="https://twitter.com/Iam_DeepakVel" target="_blank">
            <span className=" w-10 h-10 text-xl bg-bodyColor border-[1px]  border-textGreen/80 hover:border-textGreen  rounded-full inline-flex items-center justify-center text-textGreen/80 hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <RxTwitterLogo />
            </span>
          </a>
        </Tooltip>
        <Tooltip content="Send Email" color="invert" placement="right">
          <a href="mailto:deepakvel82@gmail.com" target="_blank">
            <span className=" w-10 h-10 text-xl bg-bodyColor border-[1px]  border-textGreen/80 hover:border-textGreen  rounded-full inline-flex items-center justify-center text-textGreen/80 hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <BiMailSend />
            </span>
          </a>
        </Tooltip>
      </div>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  )
}

export default SocialIcons
