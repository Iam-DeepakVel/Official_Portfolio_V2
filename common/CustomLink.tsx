'use client'
const CustomLink = () => {
  return (
    <div className=" w-full  h-full flex flex-col items-center justify-end gap-12 text-textLight">
      <a href="mailto:deepakvel82@gmail.com" target="_blank">
        <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen hover:-translate-y-2 transition-all duration-300">
          deepakvel82@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  )
}

export default CustomLink
