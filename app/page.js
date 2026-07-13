'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { Marquee, Work, Experience, Skills, AIDev, Footer } from '@/components/Sections'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Cursor from '@/components/Cursor'
import ScrollReveal from '@/components/ScrollReveal'
import BgAnimation from '@/components/BgAnimation'
import MobileNav from '@/components/MobileNav'
import StickyAssets from '@/components/StickyAssets'

export default function Home() {
  return (
    <>
      <BgAnimation variant="home" />
      <StickyAssets variant="home" />
      <Cursor />
      <ScrollReveal />
      <Navbar />
      <MobileNav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Experience />
        <Skills />
        <AIDev />

        <Contact />
      </main>
      <Footer />
    </>
  )
}
