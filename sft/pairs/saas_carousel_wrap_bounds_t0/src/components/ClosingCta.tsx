const ASSURANCES = [
  'A 30-minute call with an implementation lead, not a sales development rep',
  'We open your own spreadsheet on the call and tell you what the import will find',
  'Pricing on the same call, in writing, with implementation included',
]

export default function ClosingCta() {
  return (
    <section id="demo" className="bg-gradient-to-br from-[#131A2A] via-[#1B2540] to-[#2A2270] text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9AA6C6]">Book a walkthrough</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-[2.6rem] sm:leading-[1.1]">
            Bring your messiest spreadsheet. We have seen worse.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#C2CADF]">
            Thirty minutes, screen shared, your own portfolio on the table. By the end you will know whether Rooftree
            fits your organisation and roughly what your first quarterly export would look like. If it is not a fit we
            will say so and point you at whoever is.
          </p>

          <ul className="mt-8 space-y-3">
            {ASSURANCES.map((line) => (
              <li key={line} data-testid="cta-assurance" className="flex items-start gap-3 text-sm text-[#C2CADF]">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#0E8F6F" opacity="0.28" />
                  <path d="m6 10.4 2.6 2.6L14 7.6" fill="none" stroke="#5FE3BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-lg font-semibold tracking-tight">Request a time</h3>
          <p className="mt-2 text-sm text-[#C2CADF]">We reply within one working day, from Providence.</p>

          <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="cta-org" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#9AA6C6]">
                Organisation
              </label>
              <input
                id="cta-org"
                name="organisation"
                type="text"
                data-testid="cta-org"
                placeholder="Ninth Street Land Trust"
                className="mt-2 w-full rounded-xl border border-white/15 bg-[#0D1424] px-4 py-3 text-sm text-white placeholder:text-[#6B7690] focus:border-[#5C6BF5] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="cta-email" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#9AA6C6]">
                Work email
              </label>
              <input
                id="cta-email"
                name="email"
                type="email"
                data-testid="cta-email"
                placeholder="you@yourtrust.org"
                className="mt-2 w-full rounded-xl border border-white/15 bg-[#0D1424] px-4 py-3 text-sm text-white placeholder:text-[#6B7690] focus:border-[#5C6BF5] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="cta-homes" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#9AA6C6]">
                Homes under stewardship
              </label>
              <select
                id="cta-homes"
                name="homes"
                data-testid="cta-homes"
                defaultValue="12-49"
                className="mt-2 w-full rounded-xl border border-white/15 bg-[#0D1424] px-4 py-3 text-sm text-white focus:border-[#5C6BF5] focus:outline-none"
              >
                <option value="12-49">12 to 49 homes</option>
                <option value="50-149">50 to 149 homes</option>
                <option value="150-399">150 to 399 homes</option>
                <option value="400+">400 homes or more</option>
              </select>
            </div>
            <button
              type="submit"
              data-testid="cta-submit"
              className="w-full rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#131A2A] transition hover:bg-[#E6EAF6]"
            >
              Request a walkthrough
            </button>
          </form>

          <p className="mt-4 text-xs leading-relaxed text-[#9AA6C6]">
            We use your details to arrange the call and nothing else. No sequences, no reselling, unsubscribe in one
            click.
          </p>
        </div>
      </div>
    </section>
  )
}
