type IconProps = {
  className?: string
}

/** Brand mark: a tooth riding a tide line. */
export function TidewaterMark({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Tidewater Dental Studio">
      <defs>
        <linearGradient id="tw-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2AA79B" />
          <stop offset="100%" stopColor="#12263F" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="23" fill="url(#tw-mark)" />
      <path
        d="M16 14c2.6-1.9 5.4-1.9 8 0 2.6-1.9 5.4-1.9 8 0 1.9 1.4 2.4 4 1.7 7.4-.8 4-1.9 7.6-3.4 10.8-.8 1.7-2.9 1.7-3.6 0L24 26l-2.7 6.2c-.7 1.7-2.8 1.7-3.6 0-1.5-3.2-2.6-6.8-3.4-10.8-.7-3.4-.2-6 1.7-7.4z"
        fill="#F1F5F7"
      />
      <path
        d="M9 35.5c3-2.3 6-2.3 9 0s6 2.3 9 0 6-2.3 9 0"
        stroke="#F26D5B"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ShieldCheckIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 2.8 4.5 5.8v6c0 4.3 3 8.2 7.5 9.4 4.5-1.2 7.5-5.1 7.5-9.4v-6L12 2.8z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m8.6 12.1 2.3 2.3 4.5-4.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SparkleIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 2.6 14 9l6.4 2-6.4 2-2 6.4-2-6.4L3.6 11 10 9l2-6.4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M19 3.2v3.4M17.3 4.9h3.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function CrownIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M3.4 8.2 7 12l5-7.2L17 12l3.6-3.8-1.5 10.4H4.9L3.4 8.2z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M8.4 18.6h7.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function SirenIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 2.9a9.1 9.1 0 0 1 9.1 9.1c0 3.6-2 6.7-4.9 8.3H7.8A9.1 9.1 0 0 1 12 2.9z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M12 7.4v5.2M12 15.8h.01" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  )
}

export function GridIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3.4" y="3.4" width="7.2" height="7.2" rx="1.8" stroke="currentColor" strokeWidth="1.7" />
      <rect x="13.4" y="3.4" width="7.2" height="7.2" rx="1.8" stroke="currentColor" strokeWidth="1.7" />
      <rect x="3.4" y="13.4" width="7.2" height="7.2" rx="1.8" stroke="currentColor" strokeWidth="1.7" />
      <rect x="13.4" y="13.4" width="7.2" height="7.2" rx="1.8" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

export function ClockIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 6.9V12l3.4 2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function CheckIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" fill="currentColor" opacity="0.14" />
      <path
        d="m7.8 12.3 2.8 2.8 5.6-5.9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4.6 12h14.2m-5.4-5.6L18.8 12l-5.4 5.6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function StarIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="m12 3.1 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.6l6.1-.9L12 3.1z"
        fill="currentColor"
      />
    </svg>
  )
}

export function QuoteMark({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M13.4 6.6c-5 2.3-8 6.4-8 11.6 0 4.6 2.6 7.2 6 7.2 2.9 0 5.1-2.1 5.1-4.9 0-2.7-1.9-4.6-4.4-4.6-.5 0-1 .1-1.3.2.5-2.6 2.5-5 5.3-6.4l-2.7-3.1zm14.2 0c-5 2.3-8 6.4-8 11.6 0 4.6 2.6 7.2 6 7.2 2.9 0 5.1-2.1 5.1-4.9 0-2.7-1.9-4.6-4.4-4.6-.5 0-1 .1-1.3.2.5-2.6 2.5-5 5.3-6.4l-2.7-3.1z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Accreditation-style seal used along the trust bar. */
export function SealIcon({ className = 'h-9 w-9' }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.6" opacity="0.5" />
      <circle cx="20" cy="20" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m15.9 20.2 2.8 2.8 5.6-5.9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 3.4v3M20 33.6v3M36.6 20h-3M6.4 20h-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

/** Flat portrait medallion — initials over a two-tone disc. */
export function PortraitMedallion({
  initials,
  tint,
  className = 'h-20 w-20',
}: IconProps & { initials: string; tint: string }) {
  const gradId = `portrait-${initials.toLowerCase()}`
  return (
    <svg viewBox="0 0 80 80" className={className} role="img" aria-label={`Portrait of ${initials}`}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor={tint} />
          <stop offset="100%" stopColor="#12263F" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill={`url(#${gradId})`} />
      <circle cx="40" cy="31" r="12" fill="#F1F5F7" opacity="0.92" />
      <path d="M18 71c3.4-11 11.4-16.6 22-16.6S58.6 60 62 71z" fill="#F1F5F7" opacity="0.92" />
      <text
        x="40"
        y="45"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        fill="#12263F"
        opacity="0.9"
      >
        {initials}
      </text>
    </svg>
  )
}
