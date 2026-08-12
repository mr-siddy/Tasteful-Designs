// Shared inline artwork. Everything the page draws is an SVG defined here or in
// the section that owns it — the site ships offline, so there are no image URLs.

type IconProps = { className?: string }

export function FlameMark({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 2c1.9 5.2.4 8-2.6 10.6-3.2 2.8-5.4 5.3-5.4 9.1A8 8 0 0 0 16 30a8 8 0 0 0 8-8.3c0-3.6-1.7-5.7-3.4-8.2-1.2 1.4-2.2 1.9-3.1 1.6 1.6-3.4 1.4-7.6-1.5-13.1Z"
        fill="url(#emberGradient)"
      />
      <path
        d="M16 30a4.4 4.4 0 0 0 4.4-4.6c0-2.3-1.9-3.6-2.9-5.6-1.3 1.9-2 2.3-3 2.6-1 1.2-2.9 1.6-2.9 3.6A4.4 4.4 0 0 0 16 30Z"
        fill="#fde68a"
      />
      <defs>
        <linearGradient id="emberGradient" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f97316" />
          <stop offset="1" stopColor="#b91c1c" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function StarIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 1.6l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.4 5 17l1-5.6-4.1-3.9 5.6-.8L10 1.6Z" />
    </svg>
  )
}

export function ArrowLeftIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function QuoteMark({ className = 'h-9 w-9' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="currentColor" aria-hidden="true">
      <path d="M14 8c-4.4 1.7-7 5.6-7 10.6V28h10V17.5h-4.6c.2-2.6 1.5-4.4 4-5.6L14 8Zm15 0c-4.4 1.7-7 5.6-7 10.6V28h10V17.5h-4.6c.2-2.6 1.5-4.4 4-5.6L29 8Z" />
    </svg>
  )
}

export function LeafIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 20c0-8 5-14 16-14 0 9-5 13-11 13H4Z" strokeLinejoin="round" />
      <path d="M8 20c2-4 5-6.5 9-8" strokeLinecap="round" />
    </svg>
  )
}

export function KnifeIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 15L15 4l3 3-9 11-5 2 0-5Z" strokeLinejoin="round" />
      <path d="M13 9l4 4" strokeLinecap="round" />
    </svg>
  )
}

export function GlassIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M7 3h10l-1 7a4 4 0 0 1-8 0L7 3Z" strokeLinejoin="round" />
      <path d="M12 14v6M9 20h6" strokeLinecap="round" />
    </svg>
  )
}

export function ClockIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.4 2" strokeLinecap="round" />
    </svg>
  )
}

export function SmokeDivider({ className = 'h-12 w-full' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 1200 48" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path
        d="M0 34c120-18 200 10 320 4s180-26 300-20 200 30 320 22 180-22 260-26v48H0V34Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M0 40c140-12 220 8 340 4s200-20 320-14 200 24 320 16 140-16 220-18v20H0V40Z"
        fill="currentColor"
      />
    </svg>
  )
}
