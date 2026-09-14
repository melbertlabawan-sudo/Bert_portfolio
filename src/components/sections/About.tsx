import { motion } from "framer-motion"
import { about } from "../../data/portfolio"
import { SectionHeading } from "../ui/SectionHeading"

export function About() {
  return (
    <section id="about" className="section-container py-20 md:py-28">
      <SectionHeading
        label="About"
        title="Professional Summary"
        description="Registered Electrical Engineer focused on precision, technical excellence, and continuous development."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-white/10 bg-background-alt p-6 md:p-8"
      >
        <h3 className="mb-6 text-lg font-semibold text-accent">Career Interests</h3>
        <div className="grid gap-5 sm:grid-cols-2">
          {about.careerInterests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-lg border border-white/10 bg-background p-5 transition hover:border-accent/35"
            >
              <div className="flex gap-3">
                <span className="text-2xl leading-none" aria-hidden>
                  {interest.icon}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-text-primary">{interest.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {interest.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="mt-6">
        <h3 className="mb-4 text-lg font-semibold text-text-primary">Technical Strengths</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {about.technicalStrengths.map((strength, index) => (
            <motion.div
              key={strength}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-lg border border-white/10 bg-background-alt px-4 py-3 text-sm font-medium text-text-primary transition hover:border-accent/40"
            >
              {strength}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
