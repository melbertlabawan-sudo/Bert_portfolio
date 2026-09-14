import { motion } from "framer-motion"
import { Download, Mail, User } from "lucide-react"
import { personalInfo } from "../../data/portfolio"
import { EngineeringBackground } from "../ui/EngineeringBackground"

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <EngineeringBackground />

      <div className="section-container relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-accent sm:text-2xl">
            {personalInfo.title}
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-text-secondary">
            {personalInfo.tagline}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary">
            {personalInfo.heroIntro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-background transition hover:bg-accent-muted"
            >
              View My Portfolio
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-5 py-3 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent/10"
            >
              <Download size={16} />
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent/40 hover:text-accent"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-full border border-accent/20" />
            <div className="absolute inset-4 rounded-full border border-accent/30" />
            <div className="absolute -right-2 top-8 h-16 w-16 rounded-lg border border-accent/30 bg-accent/5" />
            <div className="absolute -left-2 bottom-10 h-12 w-12 rotate-45 border border-accent/20" />

            <div className="absolute inset-8 overflow-hidden rounded-full border-4 border-accent/60 bg-background-alt shadow-[0_0_60px_rgba(255,208,0,0.15)]">
              <img
                src={personalInfo.profileImage}
                alt={`Professional photo of ${personalInfo.name}`}
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.src = "/images/profile-placeholder.svg"
                }}
              />
            </div>

            <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-background-alt px-4 py-2 text-xs font-medium text-text-secondary">
              <User size={14} className="text-accent" />
              {personalInfo.title}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
