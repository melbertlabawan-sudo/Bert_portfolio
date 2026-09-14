import { motion } from "framer-motion"
import { highlights, stats } from "../../data/portfolio"

export function Stats() {
  return (
    <section className="border-y border-white/5 bg-background-alt/60 py-12">
      <div className="section-container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-xl border border-white/10 bg-background p-5 text-center"
            >
              <p className="text-3xl font-bold text-accent">{stat.value}</p>
              <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {highlights.map((item) => (
            <span
              key={item.label}
              className="rounded-full border border-accent/25 px-4 py-2 text-xs font-medium uppercase tracking-wide text-text-secondary"
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
