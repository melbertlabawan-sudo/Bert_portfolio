import { motion } from "framer-motion"
import { Download, Mail, Phone } from "lucide-react"
import { personalInfo } from "../../data/portfolio"
import { SectionHeading } from "../ui/SectionHeading"

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 bg-background-alt/60 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          description="Interested in working together or learning more about my professional background?"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-background p-8 text-center"
        >
          <div className="space-y-3">
            <p className="text-sm text-text-secondary">{personalInfo.location}</p>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center justify-center gap-2 text-lg text-text-primary transition hover:text-accent"
            >
              <Phone size={18} className="text-accent" />
              {personalInfo.phone}
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 text-lg text-text-primary transition hover:text-accent"
            >
              <Mail size={18} className="text-accent" />
              {personalInfo.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-background transition hover:bg-accent-muted"
            >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10"
            >
              <Phone size={16} />
              Call Me
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-accent/40 hover:text-accent"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
