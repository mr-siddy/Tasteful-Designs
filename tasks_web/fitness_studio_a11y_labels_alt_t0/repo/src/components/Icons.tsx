// Inline glyphs. Every one is decorative — it is hidden from assistive tech on
// purpose, because the words that describe the control belong on the control.

type IconProps = { className?: string }

const base = (className?: string) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: className ?? 'h-5 w-5',
  'aria-hidden': true,
  focusable: 'false' as const,
})

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  )
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 3z" />
    </svg>
  )
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function MemberIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
    </svg>
  )
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  )
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function BarbellMark({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className ?? 'h-9 w-9'}
      aria-hidden
      focusable="false"
    >
      <rect x="1" y="1" width="38" height="38" rx="10" fill="#E1552B" />
      <rect x="8" y="18.4" width="24" height="3.2" rx="1.6" fill="#12141A" />
      <rect x="9" y="13" width="4.4" height="14" rx="1.6" fill="#12141A" />
      <rect x="26.6" y="13" width="4.4" height="14" rx="1.6" fill="#12141A" />
      <rect x="5" y="16.5" width="3" height="7" rx="1.2" fill="#12141A" />
      <rect x="32" y="16.5" width="3" height="7" rx="1.2" fill="#12141A" />
    </svg>
  )
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
    </svg>
  )
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function MinusIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M5 12h14" />
    </svg>
  )
}
