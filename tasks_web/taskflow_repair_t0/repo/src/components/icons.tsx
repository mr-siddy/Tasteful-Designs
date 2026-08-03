/** Inline SVG set. No network is available, so every mark on the page is drawn here. */

type IconProps = { className?: string }

const base = 'h-6 w-6'

export function Wordmark({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="Taskflow">
      <defs>
        <linearGradient id="wm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#wm)" />
      <path d="M10 14h20M10 21h13M10 28h7" stroke="#0f172a" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="29" cy="27" r="4.5" fill="#0f172a" />
    </svg>
  )
}

export function BoardIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 4v16M15 4v16" stroke="currentColor" strokeWidth="1.7" />
      <rect x="4.6" y="7" width="2.8" height="3.4" rx="1" fill="currentColor" />
      <rect x="10.6" y="10" width="2.8" height="3.4" rx="1" fill="currentColor" />
      <rect x="16.6" y="7" width="2.8" height="5.6" rx="1" fill="currentColor" />
    </svg>
  )
}

export function RouteIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="2.6" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="18" cy="18" r="2.6" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M6 8.6v4.2a3.2 3.2 0 0 0 3.2 3.2h5.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeDasharray="2.4 2.6"
      />
    </svg>
  )
}

export function SignalIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="7" y="2.5" width="10" height="19" rx="2.4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10.6 18.4h2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M9.6 8.4l1.9 2.2 3.1-3.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function InvoiceIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M6 3h9l4 4v13.5l-2.3-1.4-2.4 1.4-2.3-1.4-2.4 1.4L6 19.1V3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9.2 9h6M9.2 12.6h4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function VanIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M2.5 7.5h11v9h-11z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M13.5 10.5h4l4 3.4v2.6h-8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="7" cy="17.5" r="1.9" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="17.5" r="1.9" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

export function GaugeIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M4 17a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 17l4.2-4.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function CheckIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.14" />
      <path d="M6 10.4l2.6 2.6L14.2 7.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StarIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path
        d="M10 1.8l2.5 5.1 5.6.8-4 3.9 1 5.6L10 14.5l-5.1 2.7 1-5.6-4-3.9 5.6-.8L10 1.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MenuIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  )
}

export function CloseIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  )
}

/** A customer's logo: a drawn monogram tile plus the shop name, no image files. */
export function CustomerMark({ initials, name }: { initials: string; name: string }) {
  return (
    <div className="flex items-center gap-2.5" data-testid="customer-logo">
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" role="img" aria-label={`${name} logo`}>
        <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="9" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="currentColor"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          {initials}
        </text>
      </svg>
      <span className="whitespace-nowrap text-sm font-semibold tracking-tight">{name}</span>
    </div>
  )
}
