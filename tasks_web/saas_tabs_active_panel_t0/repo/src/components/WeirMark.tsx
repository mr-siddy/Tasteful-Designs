type MarkProps = { className?: string }

/** The Weirline mark: a notched weir plate with water stepping over it. */
export function WeirMark({ className = 'h-8 w-8' }: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Weirline">
      <rect x="2" y="2" width="44" height="44" rx="12" fill="#08312F" />
      <path
        d="M8 30h9l4-9 5 15 4-9h10"
        fill="none"
        stroke="#17A398"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 37h32" stroke="#D97742" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 12h16" stroke="#F1E9DC" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
