import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { careerGoals, careerRoadmap } from "../../data/portfolio"
import { SectionHeading } from "../ui/SectionHeading"

export function CareerGoals() {
  const [expandedId, setExpandedId] = useState<string | null>(careerGoals[0]?.id ?? null)

  return (
    <section id="career-goals" className="section-container py-20 md:py-28">
      <SectionHeading
        label="Career Goals"
        title="Professional Development Goals"
        description="Long-term objectives across career advancement, skills, wellness, and community — as documented in the career portfolio."
      />

      <div className="mb-10 overflow-x-auto rounded-xl border border-white/10 bg-background-alt p-4">
        <div className="flex min-w-max items-center gap-3">
          {careerRoadmap.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <div className="rounded-lg border border-accent/30 bg-background px-4 py-2 text-sm font-medium text-text-primary">
                {step}
              </div>
              {index < careerRoadmap.length - 1 && (
                <span className="text-accent" aria-hidden>
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {careerGoals.map((goal, index) => {
          const isExpanded = expandedId === goal.id
          return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="overflow-hidden rounded-xl border border-white/10 bg-background-alt"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between gap-3 p-5 text-left"
                aria-expanded={isExpanded}
                onClick={() => setExpandedId(isExpanded ? null : goal.id)}
              >
                <div>
                  <h3 className="text-lg font-semibold text-accent">{goal.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{goal.summary}</p>
                </div>
                <ChevronDown
                  size={18}
                  className={`mt-1 shrink-0 text-text-secondary transition ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-text-secondary">
                      {goal.details}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-6"
      >
        <h3 className="text-lg font-semibold text-accent">Engineering + Technology</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          Electrical engineering and technology development are complementary strengths —
          combining core engineering fundamentals with programming, automation, and web
          development for practical, modern engineering solutions.
        </p>
      </motion.div>
    </section>
  )
}
