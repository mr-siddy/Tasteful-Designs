// Inline SVG only. The practice site is served from the surgery's own box with
// no outbound network, so nothing in here may reference a remote asset.

type IconProps = { className?: string }

export function HarbourMark({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Harbourline Dental">
      <defs>
        <linearGradient id="mark-water" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3FA394" />
          <stop offset="100%" stopColor="#0F2E4A" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="23" fill="url(#mark-water)" />
      <path
        d="M17 13c2.3-1.6 4.7-1.6 7 0 2.3-1.6 4.7-1.6 7 0 2.6 1.8 3 5 2.1 8.4-.7 2.7-1.4 5.5-2 8.3-.5 2-1.2 3.2-2.3 3.2-1.4 0-2-1.5-2.5-3.9-.4-2-.9-3.3-2.3-3.3s-1.9 1.3-2.3 3.3c-.5 2.4-1.1 3.9-2.5 3.9-1.1 0-1.8-1.2-2.3-3.2-.6-2.8-1.3-5.6-2-8.3-.9-3.4-.5-6.6 2.1-8.4Z"
        fill="#FAF6F1"
      />
      <path d="M11 37h26" stroke="#F2683C" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 41h20" stroke="#F2683C" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

export function ShieldCheck({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.7 4.4 6v6.1c0 4.5 3.1 8.1 7.6 9.3 4.5-1.2 7.6-4.8 7.6-9.3V6L12 2.7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m8.5 12.1 2.4 2.4 4.6-4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function AnchorIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="4.6" r="2.1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 6.7V21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8.2 9.6h7.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4.2 14.1c0 4 3.5 6.9 7.8 6.9s7.8-2.9 7.8-6.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function ToothIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.6 4.5c1.4-.9 2.9-.9 4.4 0 1.5-.9 3-.9 4.4 0 1.6 1.1 1.9 3.1 1.3 5.1-.5 1.7-.9 3.4-1.3 5.2-.3 1.3-.7 2-1.4 2-.9 0-1.2-.9-1.5-2.4-.3-1.3-.6-2.1-1.5-2.1s-1.2.8-1.5 2.1c-.3 1.5-.6 2.4-1.5 2.4-.7 0-1.1-.7-1.4-2-.4-1.8-.8-3.5-1.3-5.2-.6-2-.3-4 1.3-5.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ClockIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.3V12l3.3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function WaveIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 9c2.2-2.4 4.4-2.4 6.6 0s4.4 2.4 6.6 0 4.4-2.4 6.8 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M2 15c2.2-2.4 4.4-2.4 6.6 0s4.4 2.4 6.6 0 4.4-2.4 6.8 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function PoundIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15.6 6.4c-.9-1.2-2.2-1.8-3.7-1.8-2.3 0-3.8 1.6-3.8 3.9 0 1.6.4 3 .4 4.5 0 2.4-1 3.7-2.2 4.4h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.2 11.6h6.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function HeartHandIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20.4S4.2 15.9 4.2 10.3a3.9 3.9 0 0 1 7.8-1.2 3.9 3.9 0 0 1 7.8 1.2c0 5.6-7.8 10.1-7.8 10.1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowLeftIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 5.5 8 12l7 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 5.5 16 12l-7 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function QuoteGlyph({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M6 26c0-8 4.4-14.2 11.6-16.4l1.4 3.6C14.3 15 11.6 18 11.4 21.3h5.2V32H6V26Zm17 0c0-8 4.4-14.2 11.6-16.4l1.4 3.6C31.3 15 28.6 18 28.4 21.3h5.2V32H23V26Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function StarRow({ className = 'h-5 w-5' }: IconProps) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className={className} viewBox="0 0 20 20" fill="currentColor">
          <path d="m10 1.8 2.5 5.1 5.6.8-4 3.9 1 5.6-5.1-2.7-5 2.7 1-5.6-4.1-3.9 5.6-.8L10 1.8Z" />
        </svg>
      ))}
    </div>
  )
}

export function LighthouseSpot({ className = 'h-16 w-16' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M26 24h12l4 32H22l4-32Z" fill="#FAF6F1" stroke="#0F2E4A" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M24 36h16M23 46h18" stroke="#0F2E4A" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="26" y="14" width="12" height="10" rx="2" fill="#F2683C" />
      <path d="M32 6v6" stroke="#0F2E4A" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M44 15 56 9M44 23l12 4M20 15 8 9M20 23 8 27" stroke="#F2683C" strokeWidth="2.2" strokeLinecap="round" opacity="0.7" />
      <path d="M14 56h36" stroke="#3FA394" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
