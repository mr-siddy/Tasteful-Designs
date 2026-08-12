// Inline SVG only — the site ships offline, so nothing here may fetch a file.

type IconProps = { className?: string }

export function ToothLeafMark({ className = 'h-9 w-9' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Marigold Dental Co.">
      <defs>
        <linearGradient id="mark-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5C458" />
          <stop offset="100%" stopColor="#E8A020" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="23" fill="#123B36" />
      <path
        d="M16 14c2.6-1.8 5.4-1.8 8 0 2.6-1.8 5.4-1.8 8 0 2.9 2 3.4 5.6 2.4 9.4-.8 3-1.6 6.2-2.3 9.4-.5 2.3-1.3 3.6-2.6 3.6-1.6 0-2.2-1.7-2.8-4.4-.5-2.3-1-3.7-2.7-3.7s-2.2 1.4-2.7 3.7c-.6 2.7-1.2 4.4-2.8 4.4-1.3 0-2.1-1.3-2.6-3.6-.7-3.2-1.5-6.4-2.3-9.4-1-3.8-.5-7.4 2.4-9.4Z"
        fill="url(#mark-gold)"
      />
      <path d="M24 11c1.6-3 4.4-4.4 8-4.2-.3 3.6-2.2 5.8-5.6 6.4-1 .2-1.8-.1-2.4-.9Z" fill="#7FB08A" />
    </svg>
  )
}

export function ShieldCheck({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.8 4.5 6v6c0 4.5 3.1 8 7.5 9.2 4.4-1.2 7.5-4.7 7.5-9.2V6L12 2.8Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8.6 12 2.4 2.4 4.6-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SparkleTooth({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.6 4.6c1.4-.9 2.9-.9 4.4 0 1.5-.9 3-.9 4.4 0 1.6 1 1.9 3 1.3 5-.5 1.7-.9 3.4-1.3 5.1-.3 1.3-.7 2-1.4 2-.9 0-1.2-.9-1.5-2.4-.3-1.2-.6-2-1.5-2s-1.2.8-1.5 2c-.3 1.5-.6 2.4-1.5 2.4-.7 0-1.1-.7-1.4-2-.4-1.7-.8-3.4-1.3-5.1-.6-2-.3-4 1.3-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M19.4 3.2 20 5l1.8.6-1.8.6-.6 1.8-.6-1.8L17 5.6 18.8 5l.6-1.8Z" fill="currentColor" />
    </svg>
  )
}

export function ClockLeaf({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.4V12l3.2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChairIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 4h3.4a2 2 0 0 1 2 1.7l.9 6.3H6.6a2 2 0 0 1-2-1.8L4 4.8A.8.8 0 0 1 5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11.3 12h6.1a2.6 2.6 0 0 1 0 5.2H9.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.5 17.2 5 21m11.5-3.8L18 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function BraceIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="4.4" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9.8" y="8" width="4.4" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="16.6" y="8" width="4.4" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function FirstAidIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="13" rx="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 6V4.8A1.8 1.8 0 0 1 10.8 3h2.4A1.8 1.8 0 0 1 15 4.8V6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 9.8v5.6M9.2 12.6h5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function ChildIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="7.4" r="3.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.6 20.4c.6-3.7 3.2-5.8 6.4-5.8s5.8 2.1 6.4 5.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function LeafIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 4c0 8.4-4.2 13-11.4 13H5.6C6 10.2 10.6 5.6 20 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 21c1.6-4.4 4.6-7.6 9-9.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function StarRow({ className = 'h-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 96 18" aria-label="Rated five out of five" role="img">
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          transform={`translate(${i * 19.2} 0)`}
          d="M9 1.4 11 6l5 .5-3.8 3.3 1.2 4.9L9 12.1 4.6 14.7l1.2-4.9L2 6.5 7 6l2-4.6Z"
          fill="#E8A020"
        />
      ))}
    </svg>
  )
}

export function QuoteMark({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9.4 5.2C6.2 6.6 4.4 9.2 4.4 12.6c0 3.4 1.9 5.6 4.6 5.6 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8 0-1.1.2.4-1.8 1.6-3.2 3.4-4.2l-2.4-1.8Zm10 0C16.2 6.6 14.4 9.2 14.4 12.6c0 3.4 1.9 5.6 4.6 5.6 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8 0-1.1.2.4-1.8 1.6-3.2 3.4-4.2l-2.4-1.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function PortraitMedallion({ initials, tone }: { initials: string; tone: string }) {
  return (
    <svg className="h-20 w-20" viewBox="0 0 80 80" role="img" aria-label={`Portrait illustration, ${initials}`}>
      <circle cx="40" cy="40" r="38" fill={tone} />
      <circle cx="40" cy="31" r="13" fill="#FBF7F0" opacity="0.92" />
      <path d="M15 74c3-14 12.5-21 25-21s22 7 25 21Z" fill="#FBF7F0" opacity="0.92" />
      <text x="40" y="46" textAnchor="middle" fontSize="15" fontWeight="700" fill="#123B36">
        {initials}
      </text>
    </svg>
  )
}
