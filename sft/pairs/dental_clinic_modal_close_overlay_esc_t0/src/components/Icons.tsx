type IconProps = { className?: string }

/** Shared inline SVG set. No network is available, so every mark is drawn here. */

export function ToothMark({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M8.4 5.2c2.6-1.7 5-1 7.6-1s5-.7 7.6 1c2.9 1.9 3.2 6 2.2 10.2-.7 3-1.3 4.6-2 7.9-.6 2.8-1.3 5-3 5s-2.2-2.4-2.7-5.2c-.5-2.6-.8-4.5-2.1-4.5s-1.6 1.9-2.1 4.5c-.5 2.8-1 5.2-2.7 5.2s-2.4-2.2-3-5c-.7-3.3-1.3-4.9-2-7.9C5.2 11.2 5.5 7.1 8.4 5.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function AnchorMark({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="4.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7.5 11h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M4 15.5c0 3.3 3.6 5.5 8 5.5s8-2.2 8-5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ShieldIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.8 4.5 5.7v6c0 4.4 3.1 8.2 7.5 9.5 4.4-1.3 7.5-5.1 7.5-9.5v-6L12 2.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m8.8 12 2.3 2.3 4.1-4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function ClockIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 6.8V12l3.4 2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function SparkIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5c.9 4.6 2.4 6.1 7 7-4.6.9-6.1 2.4-7 7-.9-4.6-2.4-6.1-7-7 4.6-.9 6.1-2.4 7-7Z"
        fill="currentColor"
      />
      <path d="M19.2 15.8c.4 2 1.1 2.7 3.1 3.1-2 .4-2.7 1.1-3.1 3.1-.4-2-1.1-2.7-3.1-3.1 2-.4 2.7-1.1 3.1-3.1Z" fill="currentColor" opacity=".55" />
    </svg>
  )
}

export function PhoneIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.2 3.5h3l1.5 4-2 1.4a12.5 12.5 0 0 0 6.4 6.4l1.4-2 4 1.5v3c0 1-.8 1.8-1.8 1.7C11 19 5 13 4.5 5.3c-.1-1 .7-1.8 1.7-1.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PinIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.2" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function StarIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 3.2 2.7 5.6 6.1.8-4.5 4.2 1.2 6-5.5-3-5.5 3 1.2-6L3.2 9.6l6.1-.8L12 3.2Z" />
    </svg>
  )
}

export function CheckIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity=".14" />
      <path d="m6 10.3 2.7 2.6L14 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CloseIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  )
}

/** The hero illustration: an operatory window looking out on the ship canal. */
export function StudioIllustration({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 420 340" fill="none" role="img" aria-label="Illustration of the Alder & Bay operatory looking out over the ship canal">
      <defs>
        <linearGradient id="ab-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DCE9EC" />
          <stop offset="100%" stopColor="#F6EDE2" />
        </linearGradient>
        <linearGradient id="ab-water" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4E7C6A" />
          <stop offset="100%" stopColor="#0B2540" />
        </linearGradient>
      </defs>
      <rect x="14" y="14" width="392" height="312" rx="26" fill="url(#ab-sky)" />
      <rect x="38" y="38" width="344" height="176" rx="16" fill="#EFE3D4" />
      <rect x="52" y="52" width="316" height="148" rx="10" fill="url(#ab-water)" opacity=".92" />
      <circle cx="312" cy="92" r="24" fill="#F3D9BE" opacity=".9" />
      <path d="M52 158c46-16 74 10 118-4s72-24 118-6v42a10 10 0 0 1-10 10H62a10 10 0 0 1-10-10v-32Z" fill="#0B2540" opacity=".55" />
      <path d="M150 150v-56l44 56h-44Z" fill="#FAF6F1" opacity=".9" />
      <path d="M198 150v-40l34 40h-34Z" fill="#FAF6F1" opacity=".7" />
      <rect x="120" y="150" width="122" height="10" rx="4" fill="#0B2540" />
      <rect x="38" y="236" width="204" height="72" rx="18" fill="#FFFFFF" />
      <rect x="58" y="256" width="112" height="10" rx="5" fill="#0B2540" opacity=".8" />
      <rect x="58" y="276" width="72" height="8" rx="4" fill="#C2703D" opacity=".85" />
      <circle cx="206" cy="272" r="16" fill="#4E7C6A" opacity=".28" />
      <path d="m198 272 6 6 12-13" stroke="#0B2540" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="258" y="236" width="124" height="72" rx="18" fill="#0B2540" />
      <rect x="278" y="256" width="84" height="10" rx="5" fill="#FAF6F1" opacity=".85" />
      <rect x="278" y="276" width="52" height="8" rx="4" fill="#C2703D" />
    </svg>
  )
}

/** A drawn portrait plate; `tone` swaps the two-colour scheme per clinician. */
export function PortraitPlate({ tone, initials }: { tone: string; initials: string }) {
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24" role="img" aria-label={`Portrait illustration, ${initials}`}>
      <circle cx="60" cy="60" r="58" fill={tone} opacity=".18" />
      <circle cx="60" cy="46" r="20" fill={tone} opacity=".55" />
      <path d="M18 112c4-24 20-34 42-34s38 10 42 34a58 58 0 0 1-84 0Z" fill={tone} opacity=".38" />
      <text x="60" y="66" textAnchor="middle" fontSize="26" fontWeight="600" fill="#0B2540" opacity=".72">
        {initials}
      </text>
    </svg>
  )
}

/** Wordmark plates for the plans the studio bills directly. */
export function PlanMark({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 168 44" className="h-10 w-40" role="img" aria-label={`${label} accepted here`}>
      <rect x="1" y="1" width="166" height="42" rx="10" fill="none" stroke="currentColor" strokeWidth="1.4" opacity=".45" />
      <circle cx="24" cy="22" r="8" fill="currentColor" opacity=".35" />
      <text x="42" y="27" fontSize="13" fontWeight="600" fill="currentColor" opacity=".8">
        {label}
      </text>
    </svg>
  )
}

export function WaveDivider({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 34c180-28 300 24 480 18s300-46 480-40 300 42 480 20v28H0V34Z" fill="currentColor" />
    </svg>
  )
}
