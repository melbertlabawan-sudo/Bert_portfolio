import { motion } from "framer-motion"

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 md:mb-12"
    >
      {label && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold text-text-primary md:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </motion.div>
  )
}
