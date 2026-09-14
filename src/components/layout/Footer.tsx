import { navLinks, personalInfo } from "../../data/portfolio"

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="border-t border-white/10 bg-background-alt">
      <div className="section-container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-text-primary">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-accent">{personalInfo.title}</p>
          <p className="mt-2 text-sm text-text-secondary">
            Career Portfolio • Code {personalInfo.portfolioCode}
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">
            Contact
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="block text-sm text-text-primary transition hover:text-accent"
          >
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="mt-1 block text-sm text-text-primary transition hover:text-accent"
          >
            {personalInfo.phone}
          </a>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">
            Navigation
          </p>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="text-left text-sm text-text-secondary transition hover:text-accent"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs text-text-secondary">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </div>
    </footer>
  )
}
