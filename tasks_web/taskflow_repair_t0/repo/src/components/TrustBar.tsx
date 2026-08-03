import { CustomerMark } from './icons'

const CUSTOMERS = [
  { initials: 'HM', name: 'Halverson Mechanical' },
  { initials: 'RP', name: 'Ridgeline Plumbing' },
  { initials: 'CV', name: 'Cedar & Vine Electric' },
  { initials: 'BW', name: 'Brightwater Solar' },
  { initials: 'KR', name: 'Kestrel Roofing' },
]

export default function TrustBar() {
  return (
    <section data-testid="trust-bar" className="border-y border-slate-800 bg-slate-900/70 py-12">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Dispatching from Erie to Tulsa on Taskflow
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-slate-400">
          {CUSTOMERS.map((customer) => (
            <CustomerMark key={customer.name} initials={customer.initials} name={customer.name} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-400">
          Most shops move over on a Sunday and dispatch their first full day on Taskflow the next
          morning. We import your customers, equipment history and open work orders before you sign
          anything, so you can see your own jobs on the board during the demo instead of ours.
        </p>
      </div>
    </section>
  )
}
