type IconProps = { className?: string }

/** The letterpress mark: a press roller pressing an ink disc into paper. */
export function PressMark({ className = 'h-10 w-10' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Pressroom Athletic mark">
      <defs>
        <linearGradient id="mark-ink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1b2436" />
          <stop offset="100%" stopColor="#101826" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="12" fill="url(#mark-ink)" />
      <circle cx="24" cy="20" r="9.5" fill="none" stroke="#d94a2b" strokeWidth="3" />
      <circle cx="24" cy="20" r="3" fill="#efa63c" />
      <rect x="10" y="33" width="28" height="4" rx="2" fill="#faf5ee" />
      <rect x="15" y="39" width="18" height="3" rx="1.5" fill="#d94a2b" opacity="0.8" />
    </svg>
  )
}

export function BikeIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="5.5" cy="17" r="3.5" />
      <circle cx="18.5" cy="17" r="3.5" />
      <path d="M5.5 17l4-8h5l-3 8" strokeLinecap="round" />
      <path d="M14.5 9l4 8M12 6.5h4" strokeLinecap="round" />
    </svg>
  )
}

export function BarbellIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3 8v8M6 6v12M18 6v12M21 8v8" strokeLinecap="round" />
      <path d="M6 12h12" strokeLinecap="round" />
    </svg>
  )
}

export function BoltIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M13 2L4 14h6l-1 8 9-12h-6z" strokeLinejoin="round" />
    </svg>
  )
}

export function StopwatchIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 10v4l2.5 1.5M9.5 2.5h5M12 2.5V6" strokeLinecap="round" />
    </svg>
  )
}

export function SaunaIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M7 14c0-3 3-4 3-7 2 1.5 2.5 3 2 4.5C13 10 14 9 14.5 7.5 16 10 17 11.5 17 14a5 5 0 01-10 0z" strokeLinejoin="round" />
      <path d="M4 21h16" strokeLinecap="round" />
    </svg>
  )
}

export function MobilityIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 7v6m0 0l-4 5m4-5l4 5M7 10h10" strokeLinecap="round" />
    </svg>
  )
}

export function SoundIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2" strokeLinecap="round" />
    </svg>
  )
}

export function CheckIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 10h13m0 0l-5-5m5 5l-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PinIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M12 21s6.5-6.2 6.5-11a6.5 6.5 0 10-13 0C5.5 14.8 12 21 12 21z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}

export function PhoneIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M4 5c0 8 7 15 15 15l1.5-3.5-4.5-2-2 2c-2.4-1.3-4.2-3.1-5.5-5.5l2-2-2-4.5z" strokeLinejoin="round" />
    </svg>
  )
}

export function ClockIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.5 2" strokeLinecap="round" />
    </svg>
  )
}

export function StarIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.1 1.1 5.8L10 14.8l-5.3 2.7 1.1-5.8L1.5 7.6l5.9-.8z" />
    </svg>
  )
}

export function QuoteIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6 20c0-6 3.5-10 9-11l1 3c-3 1-4.6 3-4.8 5H14v8H6zm12 0c0-6 3.5-10 9-11l1 3c-3 1-4.6 3-4.8 5H26v8h-8z" />
    </svg>
  )
}

/** The wattage curve shown on the hero screen — a real 45-minute effort profile. */
export function WattageCurve({ className = 'h-40 w-full' }: IconProps) {
  return (
    <svg viewBox="0 0 320 120" className={className} role="img" aria-label="A 45-minute ride profile rising through four intervals and settling into a cool-down">
      <defs>
        <linearGradient id="watt-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d94a2b" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#d94a2b" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      {[24, 48, 72, 96].map((y) => (
        <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#faf5ee" strokeOpacity="0.12" strokeWidth="1" />
      ))}
      <path
        d="M0 104 L26 88 L52 92 L78 58 L104 74 L130 40 L156 62 L182 28 L208 52 L234 22 L260 48 L286 70 L320 96 L320 120 L0 120 Z"
        fill="url(#watt-fill)"
      />
      <path
        d="M0 104 L26 88 L52 92 L78 58 L104 74 L130 40 L156 62 L182 28 L208 52 L234 22 L260 48 L286 70 L320 96"
        fill="none"
        stroke="#efa63c"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="234" cy="22" r="4" fill="#faf5ee" />
    </svg>
  )
}

/** Plan of the room: bike deck, coach platform, strength floor, recovery room. */
export function RoomPlan({ className = 'h-56 w-full' }: IconProps) {
  const bikes = []
  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 6; col += 1) {
      bikes.push(<rect key={`${row}-${col}`} x={22 + col * 22} y={40 + row * 20} width="14" height="11" rx="3" fill="#d94a2b" opacity={0.55 + row * 0.1} />)
    }
  }
  return (
    <svg viewBox="0 0 320 200" className={className} role="img" aria-label="Plan of the studio: twenty-four bikes facing the coach platform, eight lifting stations behind them, and the recovery room at the back">
      <rect x="4" y="4" width="312" height="192" rx="10" fill="#101826" />
      <rect x="14" y="14" width="150" height="16" rx="4" fill="#efa63c" />
      <text x="20" y="26" fontSize="9" fill="#101826" fontFamily="monospace">COACH PLATFORM</text>
      {bikes}
      <line x1="164" y1="14" x2="164" y2="186" stroke="#faf5ee" strokeOpacity="0.2" strokeDasharray="4 4" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={180} y={30 + i * 34} width="52" height="8" rx="4" fill="#faf5ee" opacity="0.8" />
          <rect x={244} y={30 + i * 34} width="52" height="8" rx="4" fill="#faf5ee" opacity="0.8" />
        </g>
      ))}
      <rect x="180" y="170" width="116" height="16" rx="4" fill="#d94a2b" opacity="0.85" />
      <text x="188" y="182" fontSize="9" fill="#faf5ee" fontFamily="monospace">RECOVERY ROOM</text>
    </svg>
  )
}

/** Geometric coach portrait — deterministic, seeded by the coach's initials. */
export function CoachPortrait({ initials, tone }: { initials: string; tone: 'ink' | 'vermilion' | 'ember' }) {
  const fills = { ink: '#1b2436', vermilion: '#d94a2b', ember: '#efa63c' }
  const label = { ink: '#faf5ee', vermilion: '#faf5ee', ember: '#101826' }
  return (
    <svg viewBox="0 0 96 96" className="h-20 w-20" role="img" aria-label={`Portrait mark for ${initials}`}>
      <rect width="96" height="96" rx="24" fill={fills[tone]} />
      <circle cx="48" cy="38" r="15" fill={label[tone]} opacity="0.9" />
      <path d="M18 92c4-17 15-25 30-25s26 8 30 25z" fill={label[tone]} opacity="0.9" />
      <text x="48" y="44" textAnchor="middle" fontSize="15" fontWeight="700" fill={fills[tone]} fontFamily="system-ui">
        {initials}
      </text>
    </svg>
  )
}

/** Invented local-press wordmarks, drawn rather than fetched. */
export function PressWordmark({ name, className = 'h-6' }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 180 28" className={`${className} w-auto`} role="img" aria-label={name}>
      <text x="0" y="20" fontSize="17" fontFamily="Georgia, serif" letterSpacing="0.5" fill="currentColor">
        {name}
      </text>
    </svg>
  )
}
