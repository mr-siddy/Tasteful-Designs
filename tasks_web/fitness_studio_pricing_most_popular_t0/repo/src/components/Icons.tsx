// Inline SVG only — the club runs offline in the studio kiosk, so nothing here
// may reach the network for an asset.

type IconProps = { className?: string }

export function ClubMark({ className = 'h-9 w-9' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Foundry Row Strength Club">
      <defs>
        <linearGradient id="mark-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D9481F" />
          <stop offset="100%" stopColor="#12554D" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="13" fill="url(#mark-grad)" />
      <rect x="9" y="21" width="6" height="6" rx="2" fill="#FBF7F1" />
      <rect x="33" y="21" width="6" height="6" rx="2" fill="#FBF7F1" />
      <rect x="16" y="22.5" width="16" height="3" rx="1.5" fill="#FBF7F1" />
      <path d="M17 33h14l-3 5h-8z" fill="#FBF7F1" opacity="0.75" />
      <path d="M24 9l4 6h-8z" fill="#FBF7F1" opacity="0.75" />
    </svg>
  )
}

export function CheckMark({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.14" />
      <path
        d="M6 10.4l2.6 2.6L14.2 7.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FlameIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5c3.4 3.2 5 5.9 5 8.4a5 5 0 01-10 0c0-1 .3-1.9.9-2.8.5 1.4 1.3 2.2 2.4 2.4-.6-2.6-.1-5 1.7-8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 18.5h6M10 21.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function BarbellIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 9v6M6 7v10M18 7v10M21 9v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function HeartRateIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.5 12.5h4l2-5 3.5 10 2.5-7 1.8 3h5.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ClipboardIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="4" width="15" height="16.5" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 3h6v3H9z" fill="currentColor" opacity="0.35" />
      <path d="M8.5 11h7M8.5 15h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function StopwatchIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="13.5" r="7.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 10v3.5l2.3 1.6M9.5 2.5h5M12 2.5V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function ShieldIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.8l7.5 3v6c0 4.3-3 8-7.5 9.4C7.5 19.8 4.5 16.1 4.5 11.8v-6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 12.2l2.2 2.2 4-4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function StarRow({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 1.6l2.5 5.1 5.6.8-4 4 .9 5.6-5-2.7-5 2.7.9-5.6-4-4 5.6-.8z" />
    </svg>
  )
}

export function ArrowRight({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3.5 10h13M11.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function QuoteGlyph({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M6 20.5c0-5.6 3-9.6 8.4-11.5l1.2 2.6C12.4 13 10.6 14.9 10.3 17h3.5v8H6zM18 20.5c0-5.6 3-9.6 8.4-11.5l1.2 2.6c-3.2 1.4-5 3.3-5.3 5.4H26v8h-8z" />
    </svg>
  )
}

/** The hero illustration: a loaded bar over the studio's gradient field. */
export function HeroIllustration({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 480 380" role="img" aria-label="A loaded barbell resting on a platform inside the strength floor">
      <defs>
        <linearGradient id="hero-field" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1B2027" />
          <stop offset="55%" stopColor="#14181D" />
          <stop offset="100%" stopColor="#0E2A27" />
        </linearGradient>
        <linearGradient id="hero-ember" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#D9481F" />
          <stop offset="100%" stopColor="#F0803F" />
        </linearGradient>
        <radialGradient id="hero-glow" cx="0.3" cy="0.25" r="0.7">
          <stop offset="0%" stopColor="#D9481F" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#D9481F" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="480" height="380" rx="28" fill="url(#hero-field)" />
      <rect width="480" height="380" rx="28" fill="url(#hero-glow)" />
      <g opacity="0.16" stroke="#FBF7F1" strokeWidth="1">
        <path d="M0 300h480M0 250h480M0 200h480" />
        <path d="M80 0v380M160 0v380M240 0v380M320 0v380M400 0v380" />
      </g>
      <rect x="46" y="292" width="388" height="16" rx="6" fill="#2B333C" />
      <rect x="46" y="292" width="388" height="5" rx="2.5" fill="#3B454F" />
      <rect x="96" y="214" width="288" height="10" rx="5" fill="#C9CFD6" />
      <g fill="url(#hero-ember)">
        <rect x="86" y="176" width="18" height="86" rx="6" />
        <rect x="376" y="176" width="18" height="86" rx="6" />
      </g>
      <g fill="#12554D">
        <rect x="66" y="192" width="16" height="54" rx="5" />
        <rect x="398" y="192" width="16" height="54" rx="5" />
      </g>
      <g fill="#FBF7F1" opacity="0.9">
        <rect x="56" y="205" width="8" height="28" rx="3" />
        <rect x="416" y="205" width="8" height="28" rx="3" />
      </g>
      <g opacity="0.6">
        <circle cx="240" cy="96" r="44" fill="none" stroke="#F0803F" strokeWidth="2" strokeDasharray="6 9" />
        <circle cx="240" cy="96" r="26" fill="none" stroke="#12554D" strokeWidth="3" />
      </g>
      <text x="240" y="103" textAnchor="middle" fill="#FBF7F1" fontSize="19" fontWeight="700" letterSpacing="1">
        6,200 SQ FT
      </text>
      <g opacity="0.5" stroke="#FBF7F1" strokeWidth="1.5" fill="none">
        <path d="M46 330h72M132 330h58M204 330h96M314 330h50M378 330h56" />
      </g>
    </svg>
  )
}

/** The floor plan used in the facility tour. */
export function FloorPlan({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 460 300" role="img" aria-label="Floor plan of the club: twelve platforms, a conditioning bay and the rehab annex">
      <defs>
        <linearGradient id="plan-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F2EAE0" />
          <stop offset="100%" stopColor="#E2D6C6" />
        </linearGradient>
      </defs>
      <rect width="460" height="300" rx="20" fill="url(#plan-bg)" />
      <rect x="20" y="20" width="250" height="180" rx="10" fill="#FBF7F1" stroke="#D9481F" strokeWidth="2" />
      <g fill="#E2D6C6" stroke="#7A6E60" strokeWidth="1">
        <rect x="36" y="38" width="52" height="34" rx="4" />
        <rect x="98" y="38" width="52" height="34" rx="4" />
        <rect x="160" y="38" width="52" height="34" rx="4" />
        <rect x="36" y="84" width="52" height="34" rx="4" />
        <rect x="98" y="84" width="52" height="34" rx="4" />
        <rect x="160" y="84" width="52" height="34" rx="4" />
        <rect x="36" y="130" width="52" height="34" rx="4" />
        <rect x="98" y="130" width="52" height="34" rx="4" />
        <rect x="160" y="130" width="52" height="34" rx="4" />
        <rect x="222" y="38" width="32" height="34" rx="4" />
        <rect x="222" y="84" width="32" height="34" rx="4" />
        <rect x="222" y="130" width="32" height="34" rx="4" />
      </g>
      <text x="145" y="188" textAnchor="middle" fill="#14181D" fontSize="13" fontWeight="700" letterSpacing="1">
        STRENGTH FLOOR · 12 PLATFORMS
      </text>
      <rect x="286" y="20" width="154" height="110" rx="10" fill="#FBF7F1" stroke="#12554D" strokeWidth="2" />
      <g fill="none" stroke="#12554D" strokeWidth="2">
        <circle cx="316" cy="58" r="12" />
        <circle cx="352" cy="58" r="12" />
        <circle cx="388" cy="58" r="12" />
        <circle cx="424" cy="58" r="12" />
        <path d="M300 88h124" strokeDasharray="5 6" />
      </g>
      <text x="363" y="118" textAnchor="middle" fill="#14181D" fontSize="12" fontWeight="700" letterSpacing="1">
        CONDITIONING BAY
      </text>
      <rect x="286" y="146" width="154" height="54" rx="10" fill="#FBF7F1" stroke="#7A6E60" strokeWidth="2" />
      <text x="363" y="178" textAnchor="middle" fill="#14181D" fontSize="12" fontWeight="700" letterSpacing="1">
        REHAB ANNEX
      </text>
      <rect x="20" y="216" width="420" height="60" rx="10" fill="#14181D" />
      <text x="230" y="252" textAnchor="middle" fill="#FBF7F1" fontSize="13" fontWeight="700" letterSpacing="2">
        FRONT DESK · CHANGING ROOMS · CANAL-SIDE ENTRANCE
      </text>
    </svg>
  )
}

/** Partner / accreditation marks for the proof strip. */
export function PartnerMark({ label, className = 'h-8 w-28' }: IconProps & { label: string }) {
  return (
    <svg className={className} viewBox="0 0 140 40" role="img" aria-label={label}>
      <rect x="1" y="1" width="138" height="38" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="24" cy="20" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l3 3 5-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="42" y="25" fill="currentColor" fontSize="12" fontWeight="700" letterSpacing="0.5">
        {label}
      </text>
    </svg>
  )
}
