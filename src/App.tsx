import { Footer } from "./components/layout/Footer"
import { Navbar } from "./components/layout/Navbar"
import { About } from "./components/sections/About"
import { Certificates } from "./components/sections/Certificates"
import { Contact } from "./components/sections/Contact"
import { ExperienceTimeline } from "./components/sections/ExperienceTimeline"
import { GallerySection } from "./components/sections/GallerySection"
import { Hero } from "./components/sections/Hero"
import { Resume } from "./components/sections/Resume"
import { Skills } from "./components/sections/Skills"
import { Stats } from "./components/sections/Stats"
import { projects, technicalDrawings } from "./data/portfolio"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Resume />
        <ExperienceTimeline />
        <Skills />
        <GallerySection
          id="projects"
          label="Projects"
          title="Work Samples"
          description="Selected engineering and technology projects showcasing software development, power systems, and embedded energy solutions."
          items={projects}
        />
        <GallerySection
          id="technical-drawings"
          label="Drawings"
          title="Technical Drawings"
          description="LIC 3rd Floor electrical design — power layout, project report, and AutoCAD drawing files."
          items={technicalDrawings}
        />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
