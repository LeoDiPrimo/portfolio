import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import ScrollProgress from './components/ui/ScrollProgress'
import About from './sections/about/About'
import Contact from './sections/contact/Contact'
import Education from './sections/education/Education'
import Experience from './sections/experience/Experience'
import Hero from './sections/hero/Hero'
import Stack from './sections/stack/Stack'

/**
 * Single page composition. New sections are added here and registered in
 * `src/data/sections.js` so the header nav and the scroll spy pick them up.
 */
export default function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <div className="aurora" aria-hidden="true" />

      <ScrollProgress />
      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
