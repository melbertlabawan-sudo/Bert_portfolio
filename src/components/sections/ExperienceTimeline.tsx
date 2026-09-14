import { motion } from "framer-motion"
import { workExperience, workExposure } from "../../data/portfolio"
import { SectionHeading } from "../ui/SectionHeading"

const timelineItems = [...workExperience, ...workExposure].sort((a, b) =>
  a.period.localeCompare(b.period),
)

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-container py-20 md:py-28">
      <SectionHeading
        label="Experience"
        title="Career Timeline"
        description="Professional progression through work experience and engineering exposure."
      />

      <div className="relative">
        <div
          aria-hidden
          className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent md:left-1/2"
        />

        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08 }}
              className={`relative grid gap-4 md:grid-cols-2 ${
                index % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
              }`}
            >
              <div className="hidden md:block" />
              <div className="relative rounded-xl border border-white/10 bg-background-alt p-6 md:ml-0">
                <div className="absolute -left-[1.65rem] top-6 hidden h-3 w-3 rounded-full border-2 border-accent bg-background md:block md:-translate-x-1/2 md:left-1/2" />
                <div className="absolute -left-[0.4rem] top-6 h-3 w-3 rounded-full border-2 border-accent bg-background md:hidden" />

                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-bold text-text-primary">{item.role}</h3>
                <p className="text-sm font-medium text-text-secondary">{item.organization}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
                {item.responsibilities.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {item.responsibilities.map((task) => (
                      <li key={task} className="text-sm text-text-secondary">
                        • {task}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
