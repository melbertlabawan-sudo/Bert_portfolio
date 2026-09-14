import { motion } from "framer-motion"
import { useState } from "react"
import { certificates, professionalDevelopment } from "../../data/portfolio"
import { ImageLightbox, type LightboxItem } from "../ui/ImageLightbox"
import { SectionHeading } from "../ui/SectionHeading"

export function Certificates() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const lightboxItems: LightboxItem[] = certificates.map((cert) => ({
    id: cert.id,
    title: cert.title,
    description: `${cert.organization} • ${cert.date}\n${cert.description}`,
    image: cert.image,
    imageAlt: `Certificate: ${cert.title}`,
  }))

  return (
    <section id="certificates" className="border-y border-white/5 bg-background-alt/40 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          label="Certificates"
          title="Certificates & Professional Development"
          description="Technical training, webinars, and continuous learning documented in the career portfolio."
        />

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {professionalDevelopment.map((item, index) => (
            <motion.div
              key={item.theme}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-xl border border-white/10 bg-background p-4"
            >
              <h3 className="text-sm font-semibold text-accent">{item.theme}</h3>
              <ul className="mt-2 space-y-1">
                {item.topics.map((topic) => (
                  <li key={topic} className="text-xs text-text-secondary">
                    • {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, index) => (
            <motion.button
              key={cert.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              onClick={() => setActiveIndex(index)}
              className="group overflow-hidden rounded-xl border border-white/10 bg-background text-left transition hover:border-accent/40"
            >
              <div className="aspect-[3/4] overflow-hidden bg-black/20">
                <img
                  src={cert.image}
                  alt={`Certificate: ${cert.title}`}
                  loading="lazy"
                  className="h-full w-full object-contain p-2 transition duration-300 group-hover:scale-[1.02]"
                  onError={(event) => {
                    event.currentTarget.src = `/images/placeholder.svg?type=cert&n=${index + 1}`
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-sm font-semibold text-text-primary">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-accent">{cert.organization}</p>
                <p className="text-xs text-text-secondary">{cert.date}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <ImageLightbox
          items={lightboxItems}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      </div>
    </section>
  )
}
