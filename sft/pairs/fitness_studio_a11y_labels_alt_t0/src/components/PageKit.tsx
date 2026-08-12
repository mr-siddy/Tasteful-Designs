import type { ReactNode } from 'react'

// The small shared kit every section on this page is built out of. Keeping the
// photo frame, the round icon control and the form row in one place is what
// stops the club's site drifting into five slightly different button styles.

export type Shot = {
  /** Vector art from src/art.ts, already encoded as a data: URI. */
  src: string
  /** What the photograph shows, written the way the front desk would say it. */
  alt: string
}

export type Control = {
  /** What pressing this does, in plain words. */
  name: string
  /** The inline glyph. Decorative — the words that describe it live in `name`. */
  icon: ReactNode
}

export type FieldSpec = {
  id: string
  label: string
  hint?: string
}

type FigureProps = {
  shot: Shot
  caption?: string
  testId?: string
  className?: string
  frameClassName?: string
  captionClassName?: string
}

/** A framed photograph with an optional caption underneath. */
export function Figure({ shot, caption, testId, className, frameClassName, captionClassName }: FigureProps) {
  return (
    <figure className={frameClassName ?? 'flex h-full flex-col'}>
      <img
        src={shot.src}
        alt={shot.alt}
        data-testid={testId}
        className={className ?? 'w-full rounded-2xl border border-[#12141A]/15 object-cover shadow-sm'}
      />
      {caption ? (
        <figcaption className={captionClassName ?? 'mt-3 text-sm leading-relaxed text-[#12141A]/70'}>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

type IconButtonProps = {
  control: Control
  onClick: () => void
  testId?: string
  expanded?: boolean
  tone?: 'dark' | 'light'
  className?: string
}

/** A round control that shows a glyph and nothing else. */
export function IconButton({ control, onClick, testId, expanded, tone = 'dark', className }: IconButtonProps) {
  const palette =
    tone === 'light'
      ? 'border-[#12141A]/15 bg-white text-[#12141A] hover:border-[#E1552B] hover:text-[#E1552B]'
      : 'border-white/20 bg-white/5 text-[#F7F3EC] hover:border-[#E1552B] hover:bg-[#E1552B]/15'
  return (
    <button
      type="button"
      aria-label={control.name}
      aria-expanded={expanded}
      onClick={onClick}
      data-testid={testId}
      className={
        className ??
        `flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${palette}`
      }
    >
      {control.icon}
    </button>
  )
}

type FieldProps = {
  spec: FieldSpec
  children: ReactNode
  /** Checkbox rows read better with the wording to the right of the box. */
  inline?: boolean
}

/** One row of the booking form: its wording, the control, and any note under it. */
export function Field({ spec, children, inline }: FieldProps) {
  const label = (
    <label
      htmlFor={spec.id}
      className={
        inline
          ? 'text-sm leading-relaxed text-[#F7F3EC]/85'
          : 'text-xs font-semibold uppercase tracking-[0.14em] text-[#F7F3EC]/70'
      }
    >
      {spec.label}
    </label>
  )
  if (inline) {
    return (
      <div className="flex items-start gap-3" data-testid="booking-row">
        {children}
        <div>
          {label}
          {spec.hint ? <p className="mt-1 text-xs text-[#F7F3EC]/50">{spec.hint}</p> : null}
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-2" data-testid="booking-row">
      {label}
      {children}
      {spec.hint ? <p className="text-xs text-[#F7F3EC]/50">{spec.hint}</p> : null}
    </div>
  )
}

/** The eyebrow + headline pair every section on the page opens with. */
export function SectionHeading({
  eyebrow,
  title,
  blurb,
  tone = 'light',
}: {
  eyebrow: string
  title: string
  blurb?: string
  tone?: 'dark' | 'light'
}) {
  const heading = tone === 'dark' ? 'text-[#F7F3EC]' : 'text-[#12141A]'
  const body = tone === 'dark' ? 'text-[#F7F3EC]/70' : 'text-[#12141A]/70'
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E1552B]">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl ${heading}`}>{title}</h2>
      {blurb ? <p className={`mt-4 text-base leading-relaxed sm:text-lg ${body}`}>{blurb}</p> : null}
    </div>
  )
}
