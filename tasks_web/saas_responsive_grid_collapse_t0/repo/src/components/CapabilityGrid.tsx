import type { ReactNode } from 'react'

type Capability = {
  id: string
  title: string
  blurb: string
  detail: string
  icon: ReactNode
}

const stroke = {
  fill: 'none',
  stroke: '#2C5C4F',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const CAPABILITIES: Capability[] = [
  {
    id: 'cut-tickets',
    title: 'Cut tickets',
    blurb:
      'Every ticket carries its marker, lay length, ply count and the roll it was cut from, and it keeps carrying them all the way to the packing table.',
    detail: 'Printed, scanned, or read off a phone at the spreader.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7">
        <path d="M6 5h20v22l-4-3-3 3-3-3-3 3-3-3-4 3z" {...stroke} />
        <path d="M11 12h10M11 17h7" {...stroke} />
      </svg>
    ),
  },
  {
    id: 'fabric-lots',
    title: 'Fabric lots and shade',
    blurb:
      'Rolls come in by lot with width, weight, shrinkage and shade band recorded once. Grainline will not let two shade bands land in the same bundle.',
    detail: 'Roll-level yardage, reserved against open tickets.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7">
        <rect x="6" y="9" width="20" height="16" rx="3" {...stroke} />
        <path d="M6 14h20M12 9v16M20 9v16" {...stroke} />
        <path d="M10 6h12" {...stroke} />
      </svg>
    ),
  },
  {
    id: 'sew-line',
    title: 'Sew-line boards',
    blurb:
      'Bundles move by operation — join shoulders, set sleeve, hem, finish — so the floor lead can see where a run is stalling before the run is late.',
    detail: 'One board per line, updated from the operator’s station.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7">
        <path d="M4 24h24" {...stroke} />
        <rect x="6" y="15" width="5" height="9" rx="1.5" {...stroke} />
        <rect x="14" y="10" width="5" height="14" rx="1.5" {...stroke} />
        <rect x="22" y="6" width="5" height="18" rx="1.5" {...stroke} />
      </svg>
    ),
  },
  {
    id: 'size-runs',
    title: 'Size runs and ratios',
    blurb:
      'Break 400 units to XS–XXL once and the ratio follows the ticket through cutting, sewing and pick-and-pack instead of being re-typed at each stop.',
    detail: 'Per-size shortfalls flagged before the box is sealed.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7">
        <path d="M4 20h24" {...stroke} />
        <path d="M8 20v-4M13 20v-8M18 20v-6M23 20v-11" {...stroke} />
        <path d="M4 26h24" {...stroke} />
      </svg>
    ),
  },
  {
    id: 'subcontractors',
    title: 'Subcontractor handoffs',
    blurb:
      'When a run goes out to a partner floor, the ticket goes with it. They update the same bundles you do, and nobody emails a spreadsheet back at midnight.',
    detail: 'Scoped access — they see their tickets, not your costs.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7">
        <path d="M5 12h13l4 4-4 4H5z" {...stroke} />
        <path d="M27 22H14l-4-4" {...stroke} />
        <circle cx="26" cy="10" r="3" {...stroke} />
      </svg>
    ),
  },
  {
    id: 'rework',
    title: 'Reject and rework log',
    blurb:
      'A bad seam gets logged against the operation, the operator and the lot, so quality becomes a number you can look at instead of an argument on Friday.',
    detail: 'Weekly rework rate by line, by style, by fabric.',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7">
        <path d="M26 9a11 11 0 10.9 10" {...stroke} />
        <path d="M27 4v6h-6" {...stroke} />
        <path d="M13 16l2.5 2.5L21 13" {...stroke} />
      </svg>
    ),
  },
]

export default function CapabilityGrid() {
  return (
    <section
      id="platform"
      aria-labelledby="platform-heading"
      className="border-b border-[#E0D6C6] bg-[#F6F2EC]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C1552F]">
            The platform
          </p>
          <h2
            id="platform-heading"
            className="mt-4 text-3xl font-black tracking-tight sm:text-4xl"
          >
            Everything the floor already asks for, in one place
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4A4455]">
            Grainline is not a general project tool with apparel words pasted on
            it. Each of these six pieces exists because a floor we worked on kept
            rebuilding it by hand, every season, in a shared spreadsheet nobody
            trusted by August.
          </p>
        </div>

        <div
          data-testid="capability-grid"
          className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-3"
        >
          {CAPABILITIES.map((cap) => (
            <article
              key={cap.id}
              data-testid="capability-card"
              className="flex h-full flex-col rounded-2xl border border-[#DCCFB8] bg-[#FFFDF8] p-7 shadow-[0_12px_36px_-28px_rgba(30,27,38,0.6)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6DCCD]">
                {cap.icon}
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight">
                {cap.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4A4455]">
                {cap.blurb}
              </p>
              <p className="mt-5 border-t border-[#E6DCCD] pt-4 text-xs font-medium uppercase tracking-wider text-[#7A7286]">
                {cap.detail}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-[#7A7286]">
          Every board is readable on a phone at the spreader, on the shop tablet
          bolted to the end of line two, and on the office laptop where the
          invoices get cut.
        </p>
      </div>
    </section>
  )
}
