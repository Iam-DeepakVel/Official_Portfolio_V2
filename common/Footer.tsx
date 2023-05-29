import { TbBrandGithub } from 'react-icons/tb'
import { FaLinkedinIn } from 'react-icons/fa'
import { RxTwitterLogo } from 'react-icons/rx'
import { BiMailSend } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="" target="_blank">
        <span className=" w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <TbBrandGithub />
        </span>
      </a>
      <a href="" target="_blank">
        <span className=" w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <FaLinkedinIn />
        </span>
      </a>
      <a href="" target="_blank">
        <span className=" w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <RxTwitterLogo />
        </span>
      </a>
      <a href="" target="_blank">
        <span className=" w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <BiMailSend />
        </span>
      </a>
    </div>
  )
}

export default Footer
