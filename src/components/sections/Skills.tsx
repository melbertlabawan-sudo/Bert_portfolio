import { motion } from "framer-motion"
import { skillItems } from "../../data/portfolio"
import { SectionHeading } from "../ui/SectionHeading"

export function Skills() {
  return (
    <section id="skills" className="border-y border-white/5 bg-background-alt/40 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="Technical & Professional Skills"
          description="Engineering, technology, and professional competencies from career portfolio."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillItems.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-lg border border-white/10 bg-background px-4 py-3 text-sm font-medium text-text-primary transition hover:border-accent/40"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
