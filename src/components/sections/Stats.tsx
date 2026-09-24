import { motion } from "framer-motion"
import { stats } from "../../data/portfolio"

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
              <p className="text-lg font-bold leading-tight text-accent sm:text-xl lg:text-2xl xl:whitespace-nowrap">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-text-secondary sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
