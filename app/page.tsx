'use client'
import CustomLink from '@/common/CustomLink'
import Hero from '@/components/Hero'
import NavBar from '@/common/NavBar'
import SocialIcons from '@/common/SocialIcons'
import { motion } from 'framer-motion'
import About from '@/components/About'

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className=" w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <SocialIcons />
        </motion.div>
        <div className="h-[88vh] w-full mx-auto p-4">
          <Hero />
          <About />
          {/* Experience */}
          {/* Projects */}
          {/* Archive */}
          {/* Contact */}
          {/* footer */}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
          <CustomLink />
        </motion.div>
      </div>
    </main>
  )
}
