type IconProps = { className?: string }

/** The house mark: a copper fern frond curling out of a flame. */
export function FernMark({ className = 'h-9 w-9' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#12261F" />
      <path
        d="M24 39c0-9 2-15 6-20 1.6-2 3.4-3.6 5.4-4.8-.6 3.2-1.8 6-3.6 8.4-2.6 3.4-5.4 5.2-7.8 5.8"
        stroke="#E08B4F"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M24 39c0-8-1.8-13.4-5.2-17.8-1.4-1.8-3-3.2-4.8-4.2.6 2.8 1.6 5.2 3.2 7.4 2.2 3 4.6 4.6 6.8 5.2"
        stroke="#C4653A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M24 40V21" stroke="#F7F1E8" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M24 8c3.4 3.2 5 6.2 5 9 0 3-2.2 5-5 5s-5-2-5-5c0-2.8 1.6-5.8 5-9Z"
        fill="#E08B4F"
      />
    </svg>
  )
}

export function FlameIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3c3.6 3.4 5.4 6.4 5.4 9.2A5.4 5.4 0 0 1 12 17.6a5.4 5.4 0 0 1-5.4-5.4C6.6 9.4 8.4 6.4 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 20.5c-2 0-3.4-1.2-3.4-2.8 0-1.3.9-2.4 2.2-3.4.5.9 1 1.4 1.8 1.8.7-.6 1-1.2 1-2 1.3 1.2 1.8 2.4 1.8 3.6 0 1.6-1.4 2.8-3.4 2.8Z"
        fill="currentColor"
        opacity=".35"
      />
    </svg>
  )
}

export function CoalIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 16.5 7 12l3.5 3 3-5.5L18 16.5 20 20H4l0-3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7" r="1.4" fill="currentColor" />
      <circle cx="15" cy="5" r="1" fill="currentColor" opacity=".6" />
    </svg>
  )
}

export function EmberIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="14" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="14" r="2.6" fill="currentColor" opacity=".5" />
      <path d="M12 4v2.4M5.6 6.6 7.2 8.2M18.4 6.6 16.8 8.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function BoatIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 16h18l-2.4 4H5.4L3 16Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 3v13M12 6l6 4-6 2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export function LeafIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 4c0 8.8-4.6 13.4-11 13.4H5.6C5.6 9.4 10.6 4 20 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M16 8 5 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function WheatIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 8c0-2.2 1.4-4 3.4-5-.2 2.6-1.2 4.2-3.4 5Zm0 0c0-2.2-1.4-4-3.4-5 .2 2.6 1.2 4.2 3.4 5Zm0 5c0-2.2 1.4-4 3.4-5-.2 2.6-1.2 4.2-3.4 5Zm0 0c0-2.2-1.4-4-3.4-5 .2 2.6 1.2 4.2 3.4 5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CheeseIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12 15 5l6 7v6H3v-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="8" cy="15" r="1.2" fill="currentColor" />
      <circle cx="14" cy="14" r="1.6" fill="currentColor" opacity=".6" />
    </svg>
  )
}

export function StarIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6.1L12 16.8 6.7 19.7l1.1-6.1L3.4 9.4l6-.8L12 3Z" />
    </svg>
  )
}

export function QuoteGlyph({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.6 5.4C6.4 6.9 4.6 9.4 4.6 12.6c0 3.3 1.9 5.4 4.5 5.4 2.2 0 3.8-1.5 3.8-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8.1-1 .2.4-1.6 1.6-2.9 3.4-3.8l-2.4-2Zm9 0C15.4 6.9 13.6 9.4 13.6 12.6c0 3.3 1.9 5.4 4.5 5.4 2.2 0 3.8-1.5 3.8-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8.1-1 .2.4-1.6 1.6-2.9 3.4-3.8l-2.4-2Z" />
    </svg>
  )
}

export function ArrowIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PinIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function ClockIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5.3l3.4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function PhoneIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.2 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.4 5.4l1.4-2 4 1.5v3c0 .9-.7 1.7-1.7 1.7A15.7 15.7 0 0 1 4.5 5.2c0-1 .8-1.7 1.7-1.7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}
