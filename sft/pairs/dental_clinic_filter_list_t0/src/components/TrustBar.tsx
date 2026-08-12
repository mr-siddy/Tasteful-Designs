import { SealIcon } from './Icons'

const NUMBERS = [
  { value: '11 years', label: 'On Cobb Street, same owner, same phone number' },
  { value: '4,180', label: 'Patients on the books across the Marlowe Quarter' },
  { value: '1 visit', label: 'Average time to a finished ceramic crown' },
  { value: '$0', label: 'Surprise charges added after a treatment is agreed' },
]

const SEALS = [
  'General Dental Council',
  'Marlowe Quarter Traders',
  'Ceramic Mill Certified',
  'Nervous Patient Accredited',
]

export function TrustBar() {
  return (
    <section id="trust" className="border-b border-[#12263F]/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#5B7089]">
          What the numbers look like from the front desk
        </h2>

        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((stat) => (
            <div key={stat.value} className="rounded-2xl bg-[#F1F5F7] p-6">
              <dt className="text-3xl font-semibold tracking-tight text-[#12263F]">{stat.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#5B7089]">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {SEALS.map((seal) => (
            <li key={seal} className="flex items-center gap-3 text-[#12263F]/70">
              <SealIcon className="h-9 w-9 text-[#2AA79B]" />
              <span className="text-sm font-semibold tracking-tight">{seal}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
