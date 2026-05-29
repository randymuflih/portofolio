import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
