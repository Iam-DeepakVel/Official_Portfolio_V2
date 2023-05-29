'use client'
import CustomLink from '@/common/CustomLink'
import Hero from '@/components/Hero'
import SocialIcons from '@/common/SocialIcons'
import NavBar from '@/common/NavBar'
import { motion } from 'framer-motion'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Archive from '@/components/Archive'
import Contact from '@/components/Contact'
import Footer from '@/common/Footer'

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
          <Experience />
          <Projects />
          <Archive />
          <Contact />
          <Footer />
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
