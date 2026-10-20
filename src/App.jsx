'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Achievements from './sections/Achievements'
import Testimonials from './sections/Testimonials'
import Certificates from './sections/Certificates'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader show={loading} />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative bg-bg"
      >
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Education />
        <Achievements />
        <Testimonials />
        <Certificates />
        <TechStack />
        <Contact />
        <Footer />
      </motion.main>

      <BackToTop />
    </>
  )
}
