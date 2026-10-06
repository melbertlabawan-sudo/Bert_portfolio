import type { ReactNode } from "react"

const protectedClass =
  "protected-media relative select-none [-webkit-user-drag:none] [user-drag:none]"

export function ProtectedMediaShell({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`${protectedClass} ${className}`}
      onContextMenu={(event) => event.preventDefault()}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden
        onContextMenu={(event) => event.preventDefault()}
      />
    </div>
  )
}

export function ProtectedImage({
  src,
  alt,
  className = "",
  imgClassName = "h-full w-full object-contain",
  loading,
  onError,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  loading?: "lazy" | "eager"
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void
}) {
  return (
    <ProtectedMediaShell className={className}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        draggable={false}
        className={`pointer-events-none ${imgClassName}`}
        onError={onError}
      />
    </ProtectedMediaShell>
  )
}
