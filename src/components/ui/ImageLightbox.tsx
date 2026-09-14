import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react"
import { useCallback, useEffect, useState } from "react"

export interface LightboxItem {
  id: string
  title: string
  description?: string
  image: string
  imageAlt: string
  skills?: string[]
  category?: string
  assetUrl?: string
  assetLabel?: string
}

interface ImageLightboxProps {
  items: LightboxItem[]
  activeIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function ImageLightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const [zoom, setZoom] = useState(1)
  const [fullscreen, setFullscreen] = useState(false)

  const isOpen = activeIndex !== null
  const item = activeIndex !== null ? items[activeIndex] : null

  const handlePrevious = useCallback(() => {
    if (activeIndex === null) return
    onNavigate(activeIndex === 0 ? items.length - 1 : activeIndex - 1)
  }, [activeIndex, items.length, onNavigate])

  const handleNext = useCallback(() => {
    if (activeIndex === null) return
    onNavigate(activeIndex === items.length - 1 ? 0 : activeIndex + 1)
  }, [activeIndex, items.length, onNavigate])

  useEffect(() => {
    if (!isOpen) return

    setZoom(1)
    setFullscreen(false)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowLeft") handlePrevious()
      if (event.key === "ArrowRight") handleNext()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen, onClose, handlePrevious, handleNext])

  if (!item) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 ${
            fullscreen ? "p-0" : ""
          }`}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            className={`relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/10 bg-background-alt ${
              fullscreen ? "h-screen max-h-screen max-w-none rounded-none" : ""
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <div className="min-w-0">
                <h3 className="truncate text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                {item.category && (
                  <p className="text-sm text-accent">{item.category}</p>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  aria-label="Zoom out"
                  className="rounded-lg p-2 text-text-secondary transition hover:bg-white/5 hover:text-accent"
                  onClick={() => setZoom((value) => Math.max(1, value - 0.25))}
                >
                  <ZoomOut size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Zoom in"
                  className="rounded-lg p-2 text-text-secondary transition hover:bg-white/5 hover:text-accent"
                  onClick={() => setZoom((value) => Math.min(3, value + 0.25))}
                >
                  <ZoomIn size={18} />
                </button>
                <button
                  type="button"
                  aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                  className="rounded-lg p-2 text-text-secondary transition hover:bg-white/5 hover:text-accent"
                  onClick={() => setFullscreen((value) => !value)}
                >
                  {fullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
                <button
                  type="button"
                  aria-label="Close lightbox"
                  className="rounded-lg p-2 text-text-secondary transition hover:bg-white/5 hover:text-accent"
                  onClick={onClose}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto bg-black/40 p-4">
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                className="max-h-full max-w-full object-contain transition-transform duration-200"
                style={{ transform: `scale(${zoom})` }}
                onError={(event) => {
                  event.currentTarget.src = "/images/placeholder.svg"
                }}
              />
              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous item"
                    className="absolute left-3 rounded-full border border-white/10 bg-background/80 p-2 text-text-primary transition hover:border-accent/50 hover:text-accent"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next item"
                    className="absolute right-3 rounded-full border border-white/10 bg-background/80 p-2 text-text-primary transition hover:border-accent/50 hover:text-accent"
                    onClick={handleNext}
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {(item.description || item.skills?.length || item.assetUrl) && (
              <div className="border-t border-white/10 px-4 py-3">
                {item.description && (
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                )}
                {item.skills && item.skills.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-accent/30 px-2.5 py-0.5 text-xs text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                {item.assetUrl && (
                  <a
                    href={item.assetUrl}
                    download
                    className="mt-3 inline-flex rounded-lg border border-accent/40 px-3 py-2 text-xs font-semibold text-accent transition hover:bg-accent/10"
                  >
                    {item.assetLabel ?? "Download original file"}
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
