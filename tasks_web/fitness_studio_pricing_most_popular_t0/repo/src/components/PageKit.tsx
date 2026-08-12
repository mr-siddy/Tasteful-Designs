import type { ReactNode } from 'react'

/** Shared layout furniture so every section on the page shares one rhythm. */

export function Shell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function Eyebrow({ children, tone = 'ember' }: { children: ReactNode; tone?: 'ember' | 'pine' | 'sand' }) {
  const tones = {
    ember: 'text-[#D9481F] border-[#D9481F]/30 bg-[#D9481F]/10',
    pine: 'text-[#12554D] border-[#12554D]/30 bg-[#12554D]/10',
    sand: 'text-[#E2D6C6] border-[#E2D6C6]/30 bg-[#FBF7F1]/10',
  }
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${tones[tone]}`}
    >
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = 'ember',
  align = 'left',
}: {
  eyebrow: string
  title: string
  lede: string
  tone?: 'ember' | 'pine' | 'sand'
  align?: 'left' | 'center'
}) {
  const wrap = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
  return (
    <div className={wrap}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-tight sm:text-[2.6rem]">{title}</h2>
      <p className="mt-4 text-lg leading-relaxed text-[#4A4438]">{lede}</p>
    </div>
  )
}

export function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div data-testid="stat-block" className="rounded-2xl border border-[#E2D6C6] bg-[#FBF7F1] px-5 py-4">
      <p className="text-2xl font-black tracking-tight text-[#14181D]">{value}</p>
      <p className="mt-1 text-sm leading-snug text-[#7A6E60]">{label}</p>
    </div>
  )
}
