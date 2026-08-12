type IconProps = { className?: string }

const base = 'h-6 w-6'

export function LogoMark({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="pl-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#F43F5E" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#pl-mark)" />
      <path
        d="M9 22V10h6.4a4 4 0 0 1 0 8H12"
        fill="none"
        stroke="#0B1220"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="21" r="2" fill="#0B1220" />
    </svg>
  )
}

export function IconTimeline({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="8" cy="6" r="2.4" fill="currentColor" />
      <circle cx="15" cy="12" r="2.4" fill="currentColor" />
      <circle cx="11" cy="18" r="2.4" fill="currentColor" />
    </svg>
  )
}

export function IconChecklist({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m8 9 2 2 4-4M8 16h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconPulse({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M2 13h4l2.5-7 4 14L15 13h7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconShield({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M12 3l7 3v5.5c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconPeople({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19M16.2 14.6c2.2.2 3.7 1.7 4.3 4.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconSearch({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <circle cx="11" cy="11" r="6.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconBell({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M6.5 10a5.5 5.5 0 0 1 11 0c0 3.2.7 4.8 1.6 5.8H4.9C5.8 14.8 6.5 13.2 6.5 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M10 19a2.2 2.2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconArrowRight({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M5 12h13m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconCheck({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="m5 12.5 4.2 4.2L19 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconQuote({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M9.4 5.5C6 7 4 10 4 13.6c0 3 1.7 4.9 4.2 4.9 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8 0-1.1.2.4-1.7 1.6-3.2 3.4-4.2l-1.6-1.8Zm9.2 0C15.2 7 13.2 10 13.2 13.6c0 3 1.7 4.9 4.2 4.9 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8 0-1.1.2.4-1.7 1.6-3.2 3.4-4.2l-1.6-1.8Z" />
    </svg>
  )
}

/** Abstract marks for the integrations grid — drawn, never fetched. */
export function IntegrationGlyph({ shape, className = 'h-7 w-7' }: IconProps & { shape: number }) {
  const shapes = [
    <path key="a" d="M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-9v4m0 10v4m9-9h-4M7 12H3" strokeLinecap="round" />,
    <path key="b" d="M4 8h7v12H4zM13 4h7v9h-7z" strokeLinejoin="round" />,
    <path key="c" d="M12 3 3 8v8l9 5 9-5V8l-9-5Zm0 6v12" strokeLinejoin="round" />,
    <path key="d" d="M5 17V9m5 8V5m5 12v-6m5 6V7" strokeLinecap="round" />,
    <path key="e" d="M4 12a8 8 0 0 0 16 0A8 8 0 0 0 4 12Zm4 0h8" strokeLinecap="round" />,
    <path key="f" d="M6 5h12l-6 7v7l-4-2v-5L6 5Z" strokeLinejoin="round" />,
    <path key="g" d="M4 19 10 5l4 9 2-4 4 9H4Z" strokeLinejoin="round" />,
    <path key="h" d="M12 4v16M4 8l8 4 8-4M4 16l8-4 8 4" strokeLinejoin="round" />,
  ]
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      {shapes[shape % shapes.length]}
    </svg>
  )
}

/** Customer wordmarks for the proof bar: drawn text + a small glyph. */
export function CustomerMark({ label, glyph }: { label: string; glyph: number }) {
  return (
    <span className="flex items-center gap-2 text-slate-400">
      <IntegrationGlyph shape={glyph} className="h-5 w-5" />
      <span className="text-[15px] font-semibold tracking-tight">{label}</span>
    </span>
  )
}
