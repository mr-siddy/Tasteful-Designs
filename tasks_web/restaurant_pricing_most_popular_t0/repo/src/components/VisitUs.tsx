const HOURS = [
  { day: 'Monday & Tuesday', time: 'Closed — the hearth is cold' },
  { day: 'Wednesday & Thursday', time: '5:30 pm – 10:00 pm' },
  { day: 'Friday & Saturday', time: '5:00 pm – 11:00 pm' },
  { day: 'Sunday', time: '4:00 pm – 9:00 pm, one long seating' },
]

function StreetMap() {
  return (
    <svg viewBox="0 0 360 220" className="h-full w-full" role="img" aria-label="Map of Halstead Row and the mill district">
      <rect width="360" height="220" rx="18" fill="#efe6d8" />
      <g stroke="#d8cbb8" strokeWidth="14" strokeLinecap="square">
        <path d="M0 84h360" />
        <path d="M0 168h360" />
        <path d="M96 0v220" />
        <path d="M252 0v220" />
      </g>
      <g stroke="#f7f2ea" strokeWidth="1.6" strokeDasharray="8 8">
        <path d="M0 84h360" />
        <path d="M0 168h360" />
      </g>
      <rect x="18" y="100" width="60" height="50" rx="6" fill="#e0d3bd" />
      <rect x="118" y="18" width="110" height="48" rx="6" fill="#e0d3bd" />
      <rect x="272" y="100" width="70" height="52" rx="6" fill="#e0d3bd" />
      <rect x="118" y="100" width="112" height="52" rx="8" fill="#171310" />
      <text x="174" y="131" textAnchor="middle" fontSize="11" fill="#e8b04b" fontFamily="ui-serif, Georgia, serif">
        Ember &amp; Rye
      </text>
      <g fontSize="9.5" fill="#6f645b" fontFamily="ui-sans-serif, system-ui">
        <text x="8" y="78">Halstead Row</text>
        <text x="8" y="162">Dunmore Ave</text>
        <text x="286" y="42">Mill Yard parking</text>
        <text x="24" y="176">Bus 12 · 41</text>
      </g>
      <circle cx="300" cy="170" r="7" fill="#b8431a" />
      <path d="M300 166v8M296 170h8" stroke="#f7f2ea" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export default function VisitUs() {
  return (
    <section id="visit" className="bg-[#f7f2ea]" aria-labelledby="visit-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b8431a]">
              Find us
            </p>
            <h2
              id="visit-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              214 Halstead Row, Dunmore Mill
            </h2>
            <p className="mt-4 leading-relaxed text-[#5b5148]">
              Ground floor of the old worsted mill, second door past the clock tower. The Mill Yard
              lot behind the building is free after five, and the 12 and 41 buses both stop at the
              corner of Dunmore Avenue.
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-[#171310]/10 bg-white p-3 shadow-sm">
              <div className="aspect-[360/220] w-full">
                <StreetMap />
              </div>
            </div>

            <dl className="mt-8 divide-y divide-[#171310]/10 rounded-2xl border border-[#171310]/10 bg-white">
              {HOURS.map((entry) => (
                <div key={entry.day} data-testid="hours-row" className="flex justify-between gap-4 px-5 py-3.5">
                  <dt className="text-sm font-semibold text-[#171310]">{entry.day}</dt>
                  <dd className="text-sm text-[#5b5148]">{entry.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-3xl border border-[#171310]/10 bg-[#171310] p-8 text-[#f7f2ea] shadow-xl">
            <h3 className="font-serif text-2xl font-semibold tracking-tight">Write to the events line</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#c8bcae]">
              Delphine answers this herself, usually inside a working day. For a table for two or
              four, ring the dining room on (401) 555-0188 instead — it is faster.
            </p>

            <form className="mt-7 space-y-5" onSubmit={(event) => event.preventDefault()}>
              <div>
                <label htmlFor="visit-name" className="block text-sm font-medium text-[#d9cfc2]">
                  Your name
                </label>
                <input
                  id="visit-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-[#f7f2ea]/20 bg-[#221c17] px-4 py-3 text-sm text-[#f7f2ea] outline-none focus:border-[#e2622a]"
                />
              </div>

              <div>
                <label htmlFor="visit-email" className="block text-sm font-medium text-[#d9cfc2]">
                  Email address
                </label>
                <input
                  id="visit-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-[#f7f2ea]/20 bg-[#221c17] px-4 py-3 text-sm text-[#f7f2ea] outline-none focus:border-[#e2622a]"
                />
              </div>

              <div>
                <label htmlFor="visit-package" className="block text-sm font-medium text-[#d9cfc2]">
                  Which package are you asking about?
                </label>
                <select
                  id="visit-package"
                  name="package"
                  defaultValue="chefs-table"
                  className="mt-2 w-full rounded-xl border border-[#f7f2ea]/20 bg-[#221c17] px-4 py-3 text-sm text-[#f7f2ea] outline-none focus:border-[#e2622a]"
                >
                  <option value="hearthside">Hearthside — up to 12</option>
                  <option value="chefs-table">Chef&apos;s Table — up to 24</option>
                  <option value="full-house">Full House — up to 70</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="visit-note" className="block text-sm font-medium text-[#d9cfc2]">
                  Anything we should know
                </label>
                <textarea
                  id="visit-note"
                  name="note"
                  rows={3}
                  className="mt-2 w-full rounded-xl border border-[#f7f2ea]/20 bg-[#221c17] px-4 py-3 text-sm text-[#f7f2ea] outline-none focus:border-[#e2622a]"
                />
              </div>

              <button
                type="submit"
                data-testid="visit-submit"
                className="w-full rounded-xl bg-[#e2622a] px-5 py-3.5 text-sm font-semibold text-[#171310] transition hover:bg-[#e8b04b]"
              >
                Send the enquiry
              </button>
              <p className="text-xs leading-relaxed text-[#9a8d80]">
                We keep your details for the length of the booking and nothing else. No mailing list
                unless you ask for one.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
