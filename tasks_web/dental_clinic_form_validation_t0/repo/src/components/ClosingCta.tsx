export function ClosingCta() {
  return (
    <section id="closing" className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600 text-stone-50">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            The appointment you keep putting off takes one hour
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-teal-50/85">
            Whatever you are imagining, it is almost certainly smaller than that. Send the request
            form on this page and Joel will ring you back with a time, a fee and an honest answer
            about how urgent it really is.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#book"
              data-testid="closing-cta"
              className="rounded-full bg-amber-300 px-7 py-3.5 text-sm font-semibold text-teal-950 shadow-lg shadow-teal-950/20 transition hover:bg-amber-200"
            >
              Request an appointment
            </a>
            <a
              href="tel:+12065550142"
              className="rounded-full px-7 py-3.5 text-sm font-semibold text-stone-50 ring-1 ring-inset ring-stone-50/40 transition hover:bg-stone-50/10"
            >
              Or call (206) 555-0142
            </a>
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-amber-200">Address</dt>
              <dd className="mt-1 text-sm text-teal-50/85">22 Alder Court, Kestrel Park</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-amber-200">Weekdays</dt>
              <dd className="mt-1 text-sm text-teal-50/85">7:30am – 6:00pm, Friday until 4pm</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-amber-200">Saturdays</dt>
              <dd className="mt-1 text-sm text-teal-50/85">9:00am – 2:00pm, fortnightly</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-[2rem] bg-stone-50/10 p-4 ring-1 ring-inset ring-stone-50/20">
          <svg
            viewBox="0 0 420 300"
            className="h-auto w-full rounded-[1.6rem]"
            role="img"
            aria-label="Simplified map showing Alder Court between Sedge Lane and the Kestrel Park bus stop"
          >
            <rect width="420" height="300" rx="24" fill="#ecfeff" />
            <path d="M0 190h420" stroke="#a7f3d0" strokeWidth="26" />
            <path d="M150 0v300" stroke="#a7f3d0" strokeWidth="22" />
            <path d="M300 0v300" stroke="#ccfbf1" strokeWidth="16" />
            <path d="M0 84h420" stroke="#ccfbf1" strokeWidth="14" />
            <rect x="36" y="106" width="86" height="60" rx="10" fill="#99f6e4" />
            <rect x="180" y="106" width="98" height="60" rx="10" fill="#5eead4" />
            <rect x="330" y="212" width="70" height="52" rx="10" fill="#99f6e4" />
            <rect x="36" y="214" width="84" height="50" rx="10" fill="#99f6e4" />
            <circle cx="229" cy="136" r="26" fill="#0f766e" />
            <path
              d="M229 122c-5 0-9 4-9 9 0 7 9 17 9 17s9-10 9-17c0-5-4-9-9-9zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
              fill="#fbbf24"
            />
            <circle cx="150" cy="190" r="10" fill="#f59e0b" />
            <text x="196" y="196" fill="#0f766e" fontSize="15" fontWeight="700">
              Alder Court
            </text>
            <text x="30" y="76" fill="#0d9488" fontSize="13" fontWeight="600">
              Sedge Lane
            </text>
            <text x="312" y="196" fill="#0d9488" fontSize="13" fontWeight="600">
              Bus 14
            </text>
          </svg>
          <p className="px-3 pb-2 pt-4 text-sm text-teal-50/80">
            Ground floor, teal door beside the bakery. Two accessible parks at the rear, and the 14
            bus stops on the corner of Sedge Lane.
          </p>
        </div>
      </div>
    </section>
  )
}
