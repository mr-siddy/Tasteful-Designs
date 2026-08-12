type IconProps = { className?: string }

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function LanternMark({ className = 'h-9 w-9' }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="lantern-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f9c58d" />
          <stop offset="100%" stopColor="#f2704a" />
        </linearGradient>
      </defs>
      <path d="M20 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 9h16l-2 4H14z" fill="currentColor" opacity="0.9" />
      <path d="M14 13h12v14a6 6 0 0 1-12 0z" fill="url(#lantern-glow)" />
      <path d="M20 16c2.4 2 3.4 4 3.4 6a3.4 3.4 0 0 1-6.8 0c0-2 1-4 3.4-6z" fill="#fff8ef" />
      <path d="M13 31h14l1.5 4h-17z" fill="currentColor" opacity="0.9" />
    </svg>
  )
}

export function ToothIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        {...base}
        d="M7.2 3.4c1.6 0 2.2.8 4.8.8s3.2-.8 4.8-.8c2 0 3.2 1.5 3.2 4 0 3-1.1 4.4-1.7 7.3-.5 2.4-.6 5.7-2.3 5.7-1.5 0-1.5-2.6-2-4.7-.3-1.3-.8-2-2-2s-1.7.7-2 2c-.5 2.1-.5 4.7-2 4.7-1.7 0-1.8-3.3-2.3-5.7C4.1 11.8 3 10.4 3 7.4c0-2.5 1.2-4 3.2-4z"
      />
    </svg>
  )
}

export function SparkleIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path {...base} d="M12 2.5l1.9 5.1 5.1 1.9-5.1 1.9L12 16.5l-1.9-5.1L5 9.5l5.1-1.9z" />
      <path {...base} d="M18.5 15.5l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9z" />
    </svg>
  )
}

export function ShieldIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path {...base} d="M12 2.8l7.2 2.6v6c0 4.6-3 8.2-7.2 9.8-4.2-1.6-7.2-5.2-7.2-9.8v-6z" />
      <path {...base} d="M8.9 11.9l2.2 2.2 4-4.4" />
    </svg>
  )
}

export function ScanIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path {...base} d="M3.5 8.2V5.4a1.9 1.9 0 0 1 1.9-1.9h2.8M20.5 8.2V5.4a1.9 1.9 0 0 0-1.9-1.9h-2.8" />
      <path {...base} d="M3.5 15.8v2.8a1.9 1.9 0 0 0 1.9 1.9h2.8M20.5 15.8v2.8a1.9 1.9 0 0 1-1.9 1.9h-2.8" />
      <path {...base} d="M3.5 12h17" />
    </svg>
  )
}

export function CrownIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path {...base} d="M3.4 8.4l3.5 3 5.1-5.6 5.1 5.6 3.5-3-1.7 10.8H5.1z" />
      <path {...base} d="M6.6 15.6h10.8" />
    </svg>
  )
}

export function AlignerIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path {...base} d="M4.4 6.6c2.5-1.4 12.7-1.4 15.2 0-.8 4.6-2.2 8.2-4.1 10.6-1.6 2-5.4 2-7 0-1.9-2.4-3.3-6-4.1-10.6z" />
      <path {...base} d="M9 6.2v10.9M15 6.2v10.9M4.9 10.8h14.2" />
    </svg>
  )
}

export function ImplantIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path {...base} d="M7.5 4.4h9l-1.6 3.8h-5.8z" />
      <path {...base} d="M12 8.2v11.4" />
      <path {...base} d="M9.6 11h4.8M9.6 13.6h4.8M10.4 16.2h3.2" />
    </svg>
  )
}

export function FillingIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        {...base}
        d="M7.6 4c1.4 0 1.9.7 4.4.7S15 4 16.4 4c1.9 0 3.1 1.4 3.1 3.8 0 2.8-1.1 4.1-1.6 6.8-.5 2.3-.6 5.4-2.2 5.4-1.4 0-1.4-2.5-1.9-4.4-.3-1.2-.7-1.9-1.8-1.9s-1.5.7-1.8 1.9c-.5 1.9-.5 4.4-1.9 4.4-1.6 0-1.7-3.1-2.2-5.4C5.6 11.9 4.5 10.6 4.5 7.8 4.5 5.4 5.7 4 7.6 4z"
      />
      <path {...base} d="M9.6 8.1l4.8 4.6M14.4 8.1l-4.8 4.6" />
    </svg>
  )
}

export function ClockIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <circle {...base} cx="12" cy="12" r="8.6" />
      <path {...base} d="M12 7.2V12l3.2 2" />
    </svg>
  )
}

export function PhoneIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        {...base}
        d="M6.1 3.6h3l1.5 3.8-2 1.3a11.4 11.4 0 0 0 5.4 5.4l1.3-2 3.8 1.5v3a1.9 1.9 0 0 1-2.1 1.9C10.4 18 5.6 13.2 4.2 5.7A1.9 1.9 0 0 1 6.1 3.6z"
      />
    </svg>
  )
}

export function PinIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path {...base} d="M12 21.2c4.1-4.4 6.2-7.7 6.2-10.4a6.2 6.2 0 1 0-12.4 0c0 2.7 2.1 6 6.2 10.4z" />
      <circle {...base} cx="12" cy="10.6" r="2.4" />
    </svg>
  )
}

export function StarIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        d="M12 3.2l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.6 6.7 19.4l1.1-5.9-4.3-4.1 5.9-.8z"
        fill="currentColor"
      />
    </svg>
  )
}

export function CheckIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9.2" fill="currentColor" opacity="0.14" />
      <path {...base} d="M8.1 12.3l2.6 2.6 5.2-5.6" />
    </svg>
  )
}

export function ArrowIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path {...base} d="M4.6 12h14M13.4 6.6l5.2 5.4-5.2 5.4" />
    </svg>
  )
}

export function QuoteMark({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <path
        d="M6 22.4c0-6.4 3-11 8.4-13.6l1.4 2.6c-3.2 1.9-4.9 4.2-5.1 6.9h3.9v8.5H6zm12.3 0c0-6.4 3-11 8.4-13.6l1.4 2.6c-3.2 1.9-4.9 4.2-5.1 6.9H27v8.5h-8.7z"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  )
}

export function RibbonDivider({ className = 'h-16 w-full' }: IconProps) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 34c180-28 300 22 480 12s300-44 480-30 300 40 480 22v56H0z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}
