import { CustomerMark } from './icons'

const CUSTOMERS = [
  { label: 'Northwind Freight', glyph: 0 },
  { label: 'Cadence Health', glyph: 1 },
  { label: 'Alder Bank', glyph: 2 },
  { label: 'Tessellate', glyph: 3 },
  { label: 'Havenline', glyph: 4 },
  { label: 'Pinewood Robotics', glyph: 5 },
]

const STATS = [
  { value: '1,900', label: 'reviews closed last quarter', note: 'across 240 platform teams' },
  { value: '2 days', label: 'median time from resolved to reviewed', note: 'down from 11 before Postlude' },
  { value: '94%', label: 'of action items carry a named owner', note: 'and 81% ship inside the sprint' },
]

export function TrustBar() {
  return (
    <section id="proof" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Reviewing incidents at
        </h2>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {CUSTOMERS.map((c) => (
            <CustomerMark key={c.label} label={c.label} glyph={c.glyph} />
          ))}
        </div>
        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center ring-1 ring-slate-900/[0.03]"
            >
              <dt className="text-4xl font-semibold tracking-tight text-[#0B1220]">{s.value}</dt>
              <dd className="mt-2 text-sm font-medium text-slate-700">{s.label}</dd>
              <dd className="mt-1 text-xs text-slate-500">{s.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
