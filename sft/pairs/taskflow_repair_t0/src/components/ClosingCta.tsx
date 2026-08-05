import { ArrowIcon, CheckIcon } from './icons'

const REASSURANCE = [
  'Twenty minutes, on your own job data',
  'No slide deck and no sales engineer',
  'A written quote the same afternoon',
]

export default function ClosingCta() {
  return (
    <section id="demo" data-testid="closing-cta" className="relative overflow-hidden bg-slate-900 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.16),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.14),transparent_55%)]"
      />
      <div className="relative mx-auto grid max-w-5xl gap-12 px-5 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See your own Tuesday on the board
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Send us last week&rsquo;s dispatch sheet and we will load it into Taskflow before the call.
            Twenty minutes later you will know whether this fits your shop, and we will tell you
            plainly if it does not.
          </p>
          <ul className="mt-8 space-y-3">
            {REASSURANCE.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-200">
                <span className="mt-0.5 text-amber-400">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <form
          data-testid="demo-form"
          onSubmit={(event) => event.preventDefault()}
          className="rounded-3xl border border-slate-700 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/50"
        >
          <h3 className="text-lg font-semibold text-white">Book a 20-minute demo</h3>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="demo-shop" className="block text-sm font-medium text-slate-300">
                Shop name
              </label>
              <input
                id="demo-shop"
                name="shop"
                type="text"
                className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white"
              />
            </div>
            <div>
              <label htmlFor="demo-email" className="block text-sm font-medium text-slate-300">
                Work email
              </label>
              <input
                id="demo-email"
                name="email"
                type="email"
                className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white"
              />
            </div>
            <div>
              <label htmlFor="demo-trucks" className="block text-sm font-medium text-slate-300">
                Trucks on the road
              </label>
              <select
                id="demo-trucks"
                name="trucks"
                className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white"
              >
                <option>1 to 8 trucks</option>
                <option>9 to 30 trucks</option>
                <option>31 to 80 trucks</option>
                <option>More than 80 trucks</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Pick a time
            <ArrowIcon />
          </button>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            We answer within one business hour. Your dispatch sheet stays yours — we delete the sample
            data after the call unless you ask us to keep building on it.
          </p>
        </form>
      </div>
    </section>
  )
}
