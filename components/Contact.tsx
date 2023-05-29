import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-20 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className=" font-inter text-lg text-textGreen font-semibold flex items-center tracking-wide">{`04. What's Next?`}</p>
      <h2 className=" font-inter text-5xl font-semibold">Get In Touch</h2>
      <p className=" max-w-[800px] text-center text-textDart">
        {` If you'd like to get in touch with me to discuss potential collaborations or projects, please feel free contact me at ✨ deepakvel82@gmail.com. I'm always open to exploring new opportunities and ideas, and would be happy to hear from you`}
      </p>
      <a href="mailto:deepakvel82@gmail.com" target="_blank">
        <button className="w-40 h-14 border border-textGreen mt-6 font-inter text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  )
}

export default Contact
