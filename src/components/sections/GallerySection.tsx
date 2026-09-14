import { motion } from "framer-motion"
import { useMemo, useState } from "react"
import type { GalleryItem } from "../../data/portfolio"
import { ImageLightbox, type LightboxItem } from "../ui/ImageLightbox"
import { SectionHeading } from "../ui/SectionHeading"

interface GallerySectionProps {
  id: string
  label: string
  title: string
  description: string
  items: GalleryItem[]
}

function imagesForItem(item: GalleryItem): string[] {
  if (item.galleryImages && item.galleryImages.length > 0) {
    return item.galleryImages
  }
  return [item.image]
}

function buildLightboxItems(items: GalleryItem[]): LightboxItem[] {
  return items.flatMap((item) => {
    const images = imagesForItem(item)
    return images.map((image, imageIndex) => ({
      id: `${item.id}-${imageIndex}`,
      title:
        images.length > 1
          ? `${item.title} (${imageIndex + 1}/${images.length})`
          : item.title,
      description: item.description,
      image,
      imageAlt: item.imageAlt,
      skills: item.skills,
      category: item.category,
      assetUrl: item.assetUrl,
      assetLabel: item.assetLabel,
    }))
  })
}

function buildLightboxOffsets(items: GalleryItem[]): number[] {
  let offset = 0
  return items.map((item) => {
    const start = offset
    offset += imagesForItem(item).length
    return start
  })
}

export function GallerySection({
  id,
  label,
  title,
  description,
  items,
}: GallerySectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const lightboxItems = useMemo(() => buildLightboxItems(items), [items])
  const lightboxOffsets = useMemo(() => buildLightboxOffsets(items), [items])

  return (
    <section id={id} className="section-container py-20 md:py-28">
      <SectionHeading label={label} title={title} description={description} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            onClick={() => setActiveIndex(lightboxOffsets[index] ?? 0)}
            className="group overflow-hidden rounded-xl border border-white/10 bg-background-alt text-left transition hover:border-accent/40"
          >
            <div className="aspect-[4/3] overflow-hidden bg-black/30">
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                onError={(event) => {
                  event.currentTarget.src = `/images/placeholder.svg?type=${id}&n=${index + 1}`
                }}
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {item.category}
              </p>
              <h3 className="mt-1 font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-text-secondary">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
    </section>
  )
}
