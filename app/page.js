import Hero from '@/components/home/Hero'
import Marquee from '@/components/home/Marquee'
import Work from '@/components/home/Work'
import ScreenRail from '@/components/home/ScreenRail'
import About from '@/components/home/About'
import Process from '@/components/home/Process'
import Build from '@/components/home/Build'
import Experience from '@/components/home/Experience'
import Contact from '@/components/home/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Work />
      <ScreenRail />
      <About />
      <Process />
      <Build />
      <Experience />
      <Contact />
    </>
  )
}
