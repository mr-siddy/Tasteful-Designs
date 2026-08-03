import { useState } from 'react'

type Screen = {
  id: string
  name: string
  summary: string
  accent: string
  rows: { label: string; meta: string }[]
}

const SCREENS: Screen[] = [
  {
    id: 'timeline',
    name: 'Deploy timeline',
    summary:
      'Every release across the estate on one horizontal axis, coloured by environment. Hovering a change opens the approval that let it through.',
    accent: '#4ADEC0',
    rows: [
      { label: 'ledger-api  4.31.0', meta: 'approved 38s' },
      { label: 'payments-edge  2.9.4', meta: 'approved 51s' },
      { label: 'statements-worker  1.14', meta: 'approved 22s' },
      { label: 'fraud-scoring  7.2.1', meta: 'approved 2m 04s' },
      { label: 'notify-gateway  0.48', meta: 'rolled back' },
    ],
  },
  {
    id: 'queue',
    name: 'Approval queue',
    summary:
      'What a reviewer sees when a change lands on them: the diff, the services it touches, and the last four deploys of the same component.',
    accent: '#F2A93B',
    rows: [
      { label: 'ledger-api  raise batch ceiling', meta: '4 services' },
      { label: 'payments-edge  retry policy', meta: '2 services' },
      { label: 'schema  add settlement_ref', meta: '1 dataset' },
      { label: 'waiting on  D. Winslet', meta: 'SLA 4h 12m' },
      { label: 'auto-approved  docs only', meta: 'policy 12b' },
    ],
  },
  {
    id: 'evidence',
    name: 'Evidence bundle',
    summary:
      'The quarter, assembled continuously rather than the week before the audit. Every line is signed and traceable back to a commit.',
    accent: '#4ADEC0',
    rows: [
      { label: 'Q1 bundle  1,904 changes', meta: 'signed' },
      { label: 'Approvals with named reviewer', meta: '100%' },
      { label: 'Break-glass events', meta: '3 recorded' },
      { label: 'Export target  Drata', meta: 'nightly' },
      { label: 'Retention  7 years, eu-central', meta: 'locked' },
    ],
  },
  {
    id: 'radius',
    name: 'Blast-radius preview',
    summary:
      'Resolved from your service graph and data contracts at request time, so a reviewer never has to guess what a change can reach.',
    accent: '#F2A93B',
    rows: [
      { label: 'payments-edge  changed', meta: 'origin' },
      { label: 'ledger-api  downstream', meta: 'tier 1' },
      { label: 'settlement-batch  downstream', meta: 'tier 1' },
      { label: 'balances  dataset', meta: 'frozen' },
      { label: 'reporting-mart  dataset', meta: 'tier 2' },
    ],
  },
  {
    id: 'freeze',
    name: 'Freeze calendar',
    summary:
      'Freezes are declared once and enforced everywhere, with exemptions granted per service and logged as break-glass records.',
    accent: '#4ADEC0',
    rows: [
      { label: 'Year-end freeze  20 Dec to 3 Jan', meta: 'estate wide' },
      { label: 'Payments  exempt for sev-1 only', meta: 'break-glass' },
      { label: 'Ledger  fully frozen', meta: 'no exemption' },
      { label: 'Internal tools  unfrozen', meta: 'shipping' },
      { label: 'Requests blocked this week', meta: '11' },
    ],
  },
]

/** Renders a screen as a self-contained data: URI so the page needs no network. */
function screenshot(screen: Screen): string {
  const rows = screen.rows
    .map(
      (row, index) => `
        <g transform="translate(28 ${86 + index * 56})">
          <rect width="584" height="44" rx="10" fill="#16263D"/>
          <circle cx="24" cy="22" r="6" fill="${screen.accent}"/>
          <text x="46" y="27" font-size="14" fill="#DCE5EF" font-family="ui-sans-serif, system-ui">${row.label}</text>
          <text x="560" y="27" font-size="12.5" text-anchor="end" fill="#7F93AB" font-family="ui-sans-serif, system-ui">${row.meta}</text>
        </g>`,
    )
    .join('')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400" width="640" height="400">
      <rect width="640" height="400" rx="16" fill="#0F1B2D"/>
      <rect width="640" height="58" rx="16" fill="#132238"/>
      <rect y="42" width="640" height="16" fill="#132238"/>
      <circle cx="26" cy="29" r="5" fill="#F2A93B"/>
      <circle cx="44" cy="29" r="5" fill="${screen.accent}"/>
      <circle cx="62" cy="29" r="5" fill="#2C3E58"/>
      <text x="86" y="34" font-size="14" font-weight="600" fill="#E7EEF6" font-family="ui-sans-serif, system-ui">Halyard — ${screen.name}</text>
      <text x="612" y="34" font-size="12" text-anchor="end" fill="#7F93AB" font-family="ui-sans-serif, system-ui">fernpost-prod</text>
      ${rows}
      <rect x="28" y="366" width="584" height="6" rx="3" fill="#16263D"/>
      <rect x="28" y="366" width="352" height="6" rx="3" fill="${screen.accent}"/>
    </svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true" focusable="false">
    <path
      d={direction === 'left' ? 'M14.5 5.5L8 12l6.5 6.5' : 'M9.5 5.5L16 12l-6.5 6.5'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function ProductGallery() {
  const [active, setActive] = useState(0)
  const screen = SCREENS[active]
  const step = (delta: number) => setActive((current) => (current + delta + SCREENS.length) % SCREENS.length)

  return (
    <section id="gallery" className="bg-[#0B1524] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4ADEC0]">The product</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-[2.75rem]">
              Every release, on one screen
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              Five screens carry the whole workflow. Step through them here, or open a live sandbox during the trial and
              push a change through the real thing in about ten minutes.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              data-testid="gallery-nav"
              onClick={() => step(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:border-white/40 hover:text-white"
            >
              <ArrowIcon direction="left" />
            </button>
            <p className="w-32 text-center text-sm font-medium text-slate-400" data-testid="gallery-position">
              {active + 1} of {SCREENS.length}
            </p>
            <button
              type="button"
              data-testid="gallery-nav"
              onClick={() => step(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:border-white/40 hover:text-white"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <figure className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#132238] p-4 shadow-2xl shadow-black/50 sm:p-6">
          <img
            data-testid="gallery-stage"
            src={screenshot(screen)}
            alt=""
            width={640}
            height={400}
            className="w-full rounded-2xl"
          />
          <figcaption className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 px-1" data-testid="gallery-caption">
            <span className="text-base font-semibold text-white">{screen.name}</span>
            <span className="text-sm text-slate-400">{screen.summary}</span>
          </figcaption>
        </figure>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {SCREENS.map((item, index) => (
            <li key={item.id}>
              <figure
                className={`h-full rounded-2xl border p-4 transition ${
                  index === active ? 'border-[#F2A93B]/60 bg-white/[0.06]' : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <img
                  data-testid="tour-shot"
                  src={screenshot(item)}
                  alt=""
                  width={640}
                  height={400}
                  className="w-full rounded-lg"
                />
                <figcaption className="mt-4">
                  <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{item.summary}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
