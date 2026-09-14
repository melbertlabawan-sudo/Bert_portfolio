export function EngineeringBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="engineering-grid absolute inset-0 opacity-40" />
      <svg
        className="animate-pulse-line absolute -right-8 top-20 h-40 w-40 text-accent/30"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon
          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <svg
        className="animate-pulse-line absolute bottom-16 left-8 h-28 w-28 text-accent/20"
        style={{ animationDelay: "1.5s" }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon
          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute right-0 top-2/3 h-px w-2/3 bg-gradient-to-l from-transparent via-accent/20 to-transparent" />
    </div>
  )
}
