const NUMBERS = [
  { value: '11 yrs', label: 'On Ellicott Street', note: 'Same room, same platforms, since 2015.' },
  { value: '91%', label: 'Still here at 12 months', note: 'Measured on everyone who joined in 2024.' },
  { value: '4.9', label: 'Average member rating', note: '318 reviews across Google and Yelp.' },
  { value: '14:1', label: 'Busiest floor ratio', note: 'Never more than fourteen lifters per coach.' },
]

const CREDENTIALS = [
  'USA Weightlifting L2',
  'NSCA CSCS',
  'Precision Nutrition L1',
  'Barbell Medicine Seminar Staff',
  'Red Cross CPR / AED',
]

export default function ProofBand() {
  return (
    <section data-testid="proof-band" className="border-y border-slate-200 bg-stone-100 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-xs font-bold uppercase tracking-[0.28em] text-lime-700">
          Eleven years of receipts
        </h2>
        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((stat) => (
            <div key={stat.label} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <dt className="text-4xl font-black tracking-tight text-slate-900">{stat.value}</dt>
              <dd className="mt-2">
                <span className="block text-sm font-semibold text-slate-700">{stat.label}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate-500">{stat.note}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {CREDENTIALS.map((credential) => (
            <span key={credential} className="flex items-center gap-2">
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-lime-500" />
              {credential}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
