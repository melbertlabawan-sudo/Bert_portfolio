import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { navLinks } from "../../data/portfolio"
import { useActiveSection } from "../../hooks/useActiveSection"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((link) => link.id))

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/85 backdrop-blur-md">
      <div className="section-container flex h-16 items-center justify-end lg:justify-center">
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                activeId === link.id
                  ? "bg-accent/10 text-accent"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-text-primary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/5 bg-background-alt lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="section-container flex flex-col py-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`rounded-lg px-3 py-3 text-left text-sm font-medium transition ${
                  activeId === link.id
                    ? "bg-accent/10 text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
