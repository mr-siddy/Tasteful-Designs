type IconProps = { className?: string }

const base = 'h-6 w-6'

export function BarbellIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className} aria-hidden="true">
      <path d="M4 8v8M7 6v12M17 6v12M20 8v8" strokeLinecap="round" />
      <path d="M7 12h10" strokeLinecap="round" />
    </svg>
  )
}

export function StopwatchIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className} aria-hidden="true">
      <circle cx="12" cy="14" r="7" />
      <path d="M12 14V10.5M9.5 3h5M18.5 7.5l1.5-1.5" strokeLinecap="round" />
    </svg>
  )
}

export function HeartIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className} aria-hidden="true">
      <path d="M12 20s-7-4.4-7-9.2A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.8C19 15.6 12 20 12 20Z" strokeLinejoin="round" />
    </svg>
  )
}

export function CalendarIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  )
}

export function ShieldIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className} aria-hidden="true">
      <path d="M12 3.5 19 6v5.5c0 4-2.9 7.3-7 8.9-4.1-1.6-7-4.9-7-8.9V6l7-2.5Z" strokeLinejoin="round" />
      <path d="m9 12 2.2 2.2L15.5 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SparkIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className} aria-hidden="true">
      <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.2 10.2 12.6 4.5 10.8 10.2 9 12 3.5Z" strokeLinejoin="round" />
    </svg>
  )
}

export function ChartIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className} aria-hidden="true">
      <path d="M4 19h16M7 19v-5M12 19V8M17 19v-8" strokeLinecap="round" />
    </svg>
  )
}

export function LockIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className} aria-hidden="true">
      <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowLeftIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d="M15 5.5 8.5 12l6.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d="M9 5.5 15.5 12 9 18.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function QuoteMark({ className = 'h-9 w-9' }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6 20.5c0-5.4 3.1-9.6 8.2-11.5l1.1 2.4c-2.9 1.3-4.6 3.3-4.9 5.6h3.4v8.4H6v-4.9Zm14.2 0c0-5.4 3.1-9.6 8.2-11.5l1.1 2.4c-2.9 1.3-4.6 3.3-4.9 5.6H28v8.4h-7.8v-4.9Z" />
    </svg>
  )
}

/** The plate-loaded barbell used as the brand mark in the header and footer. */
export function FoundryMark({ className = 'h-9 w-9' }: IconProps) {
  return (
    <svg viewBox="0 0 44 44" className={className} role="img" aria-label="Foundry Hill Strength Co. barbell mark">
      <defs>
        <linearGradient id="foundry-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d9f99d" />
          <stop offset="100%" stopColor="#65a30d" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="42" height="42" rx="13" fill="#0f172a" />
      <rect x="1" y="1" width="42" height="42" rx="13" fill="none" stroke="url(#foundry-mark)" strokeWidth="1.6" />
      <rect x="7" y="18" width="4" height="8" rx="1.6" fill="url(#foundry-mark)" />
      <rect x="12.5" y="14" width="4.5" height="16" rx="1.8" fill="url(#foundry-mark)" />
      <rect x="27" y="14" width="4.5" height="16" rx="1.8" fill="url(#foundry-mark)" />
      <rect x="33" y="18" width="4" height="8" rx="1.6" fill="url(#foundry-mark)" />
      <rect x="17" y="20.4" width="10" height="3.2" rx="1.6" fill="#e2e8f0" />
    </svg>
  )
}

/** Small duotone portrait tile — no photography, no network. */
export function MemberPortrait({ tint, initials }: { tint: string; initials: string }) {
  return (
    <svg viewBox="0 0 96 96" className="h-20 w-20 shrink-0" role="img" aria-label={`Portrait illustration for ${initials}`}>
      <rect width="96" height="96" rx="28" fill={tint} />
      <circle cx="48" cy="37" r="16" fill="#0f172a" opacity="0.82" />
      <path d="M16 92c4-18 16-27 32-27s28 9 32 27Z" fill="#0f172a" opacity="0.82" />
      <text
        x="48"
        y="54"
        textAnchor="middle"
        fontSize="17"
        fontWeight="700"
        fill="#f8fafc"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {initials}
      </text>
    </svg>
  )
}
