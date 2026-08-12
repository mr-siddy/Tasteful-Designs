type IconProps = {
  className?: string
  title: string
}

/** The studio mark: a rope coil over a spruce disc, from the old rope-works. */
export function SablewoodMark({ className = 'h-10 w-10', title }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label={title}>
      <circle cx="24" cy="24" r="23" fill="#1F4A3C" />
      <path
        d="M14 30c0-8 4.5-13 10-13s10 4 10 10-4 9-8 9-7-2.5-7-6 2.5-5.5 5-5.5 4 1.8 4 3.8"
        fill="none"
        stroke="#F3E7D8"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="31.5" cy="17" r="2.6" fill="#C4623A" />
    </svg>
  )
}

export function ReformerIcon({ className = 'h-7 w-7', title }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-label={title}>
      <rect x="3" y="12" width="26" height="5" rx="2.5" fill="#1F4A3C" />
      <rect x="7" y="8" width="11" height="4" rx="2" fill="#C4623A" />
      <path d="M6 17v6M26 17v6" stroke="#1F4A3C" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M20 14.5h7" stroke="#F3E7D8" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function FlameIcon({ className = 'h-7 w-7', title }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-label={title}>
      <path
        d="M16 3c1.5 5.5 7 7 7 13a7 7 0 11-14 0c0-3.4 2-4.8 3-7 .8 1.6 2 2.2 3 2.4C14.4 8.6 15 5.6 16 3z"
        fill="#C4623A"
      />
      <path d="M16 17c1.6 1.4 2.4 2.7 2.4 4a2.4 2.4 0 11-4.8 0c0-1.3.8-2.6 2.4-4z" fill="#F3E7D8" />
    </svg>
  )
}

export function KettlebellIcon({ className = 'h-7 w-7', title }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-label={title}>
      <path
        d="M11 12a5 5 0 0110 0"
        fill="none"
        stroke="#1F4A3C"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M9 13h14c2.4 3 3 6.4 2 11H7c-1-4.6-.4-8 2-11z" fill="#1F4A3C" />
      <circle cx="16" cy="19.5" r="3" fill="#F3E7D8" />
    </svg>
  )
}

export function BreathIcon({ className = 'h-7 w-7', title }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-label={title}>
      <circle cx="16" cy="16" r="5" fill="#C4623A" />
      <path
        d="M16 4v3M16 25v3M4 16h3M25 16h3M8 8l2 2M22 22l2 2M24 8l-2 2M10 22l-2 2"
        stroke="#1F4A3C"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SpineIcon({ className = 'h-7 w-7', title }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-label={title}>
      <path
        d="M16 4c-3 3-3 5 0 8s3 5 0 8 -3 5 0 8"
        fill="none"
        stroke="#1F4A3C"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="8" r="2" fill="#C4623A" />
      <circle cx="16" cy="20" r="2" fill="#C4623A" />
    </svg>
  )
}

export function ClockIcon({ className = 'h-5 w-5', title }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label={title}>
      <circle cx="12" cy="12" r="9.5" fill="none" stroke="#5C6B63" strokeWidth="1.8" />
      <path d="M12 6.8V12l3.4 2.2" fill="none" stroke="#C4623A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function CheckIcon({ className = 'h-5 w-5', title }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} role="img" aria-label={title}>
      <circle cx="10" cy="10" r="9" fill="#E3EDE7" />
      <path
        d="M6 10.4l2.6 2.6L14 7.6"
        fill="none"
        stroke="#1F4A3C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function StarRow({ className = 'h-5', title }: IconProps) {
  return (
    <svg viewBox="0 0 108 20" className={className} role="img" aria-label={title}>
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          transform={`translate(${i * 22} 0)`}
          d="M10 1.5l2.5 5.4 5.9.7-4.4 4 1.2 5.8L10 14.5 4.8 17.4 6 11.6 1.6 7.6l5.9-.7L10 1.5z"
          fill="#C4623A"
        />
      ))}
    </svg>
  )
}

/** Monogram portrait tile for the instructor roster. */
export function Monogram({ initials, tint, title }: { initials: string; tint: string; title: string }) {
  return (
    <svg viewBox="0 0 96 96" className="h-20 w-20" role="img" aria-label={title}>
      <rect width="96" height="96" rx="26" fill={tint} />
      <circle cx="48" cy="36" r="15" fill="#FAF6F0" opacity="0.92" />
      <path d="M20 88c4-16 14-24 28-24s24 8 28 24z" fill="#FAF6F0" opacity="0.92" />
      <text
        x="48"
        y="60"
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fill={tint}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {initials}
      </text>
    </svg>
  )
}
