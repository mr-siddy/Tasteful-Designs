// Every mark on this page is drawn here — the club has no photographer on
// retainer and we would rather not ship stock imagery of people grimacing.

type IconProps = { className?: string }

export function KnotMark({ className = 'h-9 w-9' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <path
        d="M14 18c6-6 14-6 20 0-6 4-6 8 0 12-6 6-14 6-20 0 6-4 6-8 0-12Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="3.2" fill="currentColor" />
    </svg>
  )
}

export function OarIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 21 13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M14 4.5c3.5-2 6.5 1 4.5 4.5-1.4 2.4-3.6 3.6-6 3.4-.2-2.4 1-4.6 1.5-7.9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M4.5 19.5 6 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function BarbellIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="4" y="8" width="3" height="8" rx="1.2" stroke="currentColor" strokeWidth="2" />
      <rect x="17" y="8" width="3" height="8" rx="1.2" stroke="currentColor" strokeWidth="2" />
      <path d="M1.5 10.5v3M22.5 10.5v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function LeafIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 4c0 9-5 14-13 14H4c0-9 5-14 13-14h3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M4 21c3-6 7-9 12-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function StopwatchIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="13.5" r="7.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 10v3.5l2.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9.5 2.5h5M12 2.5V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function HeartIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20s-7.5-4.4-7.5-9.5A4.5 4.5 0 0 1 12 7.8a4.5 4.5 0 0 1 7.5 2.7C19.5 15.6 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SaunaIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 20h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 20V9l7-5 7 5v11" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M10 17c0-2 2-2.4 2-4.5 1.6 1.2 2.2 2.6 2 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CompassIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="m15.5 8.5-2 5.2-5.2 2 2-5.2 5.2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

export function StarIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="m10 1.8 2.4 5 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4L2.2 7.6l5.4-.8 2.4-5Z" />
    </svg>
  )
}

export function CheckIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="m4.5 10.5 3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 10h13m-4.5-4.5L16 10l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// The stroke-arc illustration behind the hero: eighteen ergs, one catch position.
export function StrokeArc({ className = 'h-full w-full' }: IconProps) {
  const blades = Array.from({ length: 9 }, (_, i) => i)
  return (
    <svg className={className} viewBox="0 0 320 260" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="arcFade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3d949c" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e0813d" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <circle cx="160" cy="150" r="118" stroke="#3d949c" strokeWidth="1" opacity="0.25" />
      <circle cx="160" cy="150" r="86" stroke="#3d949c" strokeWidth="1" opacity="0.2" />
      {blades.map((i) => {
        const angle = (-160 + i * 17.5) * (Math.PI / 180)
        const x = 160 + Math.cos(angle) * 112
        const y = 150 + Math.sin(angle) * 112
        return (
          <line
            key={i}
            x1="160"
            y1="150"
            x2={x}
            y2={y}
            stroke="url(#arcFade)"
            strokeWidth={i === 4 ? 4 : 1.6}
            strokeLinecap="round"
            opacity={i === 4 ? 1 : 0.55}
          />
        )
      })}
      <circle cx="160" cy="150" r="9" fill="#e0813d" />
      <path
        d="M28 214c34-16 66-16 100 0s66 16 100 0 66-16 100 0"
        stroke="#3d949c"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M28 232c34-16 66-16 100 0s66 16 100 0 66-16 100 0"
        stroke="#3d949c"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.28"
      />
    </svg>
  )
}

// Section divider: the water line the club is named after.
export function TideDivider({ className = 'h-10 w-full' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 1200 40" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path
        d="M0 24c100-18 200-18 300 0s200 18 300 0 200-18 300 0 200 18 300 0v16H0Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M0 18c100-18 200-18 300 0s200 18 300 0 200-18 300 0 200 18 300 0"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.35"
      />
    </svg>
  )
}

// The floor plan sketch used in the room deep-dive.
export function FloorPlan({ className = 'h-full w-full' }: IconProps) {
  const ergs = Array.from({ length: 18 }, (_, i) => i)
  return (
    <svg className={className} viewBox="0 0 340 220" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="328" height="208" rx="10" stroke="#0b3a41" strokeWidth="2" opacity="0.5" />
      <rect x="20" y="20" width="180" height="130" rx="6" fill="#12626c" opacity="0.1" />
      {ergs.map((i) => (
        <rect
          key={i}
          x={30 + (i % 6) * 28}
          y={34 + Math.floor(i / 6) * 38}
          width="18"
          height="26"
          rx="3"
          fill="#12626c"
          opacity="0.55"
        />
      ))}
      <rect x="214" y="20" width="106" height="130" rx="6" fill="#e0813d" opacity="0.13" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={226 + (i % 2) * 48}
          y={34 + Math.floor(i / 2) * 40}
          width="34"
          height="12"
          rx="3"
          fill="#e0813d"
          opacity="0.6"
        />
      ))}
      <rect x="20" y="164" width="300" height="36" rx="6" fill="#0b3a41" opacity="0.12" />
      <circle cx="70" cy="182" r="11" stroke="#0b3a41" strokeWidth="2" opacity="0.55" />
      <circle cx="110" cy="182" r="11" stroke="#0b3a41" strokeWidth="2" opacity="0.55" />
      <rect x="200" y="171" width="100" height="22" rx="4" stroke="#0b3a41" strokeWidth="2" opacity="0.55" />
    </svg>
  )
}
