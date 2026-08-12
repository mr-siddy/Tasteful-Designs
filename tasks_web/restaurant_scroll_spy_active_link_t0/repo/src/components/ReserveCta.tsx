const PARTY_SIZES = ['2 guests', '3 guests', '4 guests', '5 – 6 guests', '7 – 12 (Mill Room)']

export function ReserveCta() {
  return (
    <section
      id="reserve"
      data-section="reserve"
      className="relative overflow-hidden bg-[#B7411F] text-[#FBF6EC]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_85%_15%,rgba(216,162,68,0.55),transparent_60%),radial-gradient(60%_60%_at_10%_90%,rgba(20,16,13,0.55),transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#FBF6EC]/70">
            Reservations
          </p>
          <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight">
            The book opens on the first of the month
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#FBF6EC]/85">
            Send the form and Aoife will come back to you within a day with a time, or with
            the two nearest nights if the one you asked for has gone. Nothing is charged at
            the point of booking; Mill Room suppers of eight or more hold a card against the
            table and nothing else.
          </p>
          <ul className="mt-10 space-y-3 text-sm text-[#FBF6EC]/85">
            {[
              'No deposit for tables of six or fewer',
              'Cancel free up to 24 hours before, by phone or email',
              'Tell us about allergies here and Nadia writes you a card',
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
                  <path
                    d="M2 8.5 6 12.5 14 3.5"
                    fill="none"
                    stroke="#FBF6EC"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <form
          data-testid="reserve-form"
          onSubmit={(event) => event.preventDefault()}
          className="rounded-3xl bg-[#FBF6EC] p-8 text-[#1B1410] shadow-2xl shadow-black/25"
        >
          <h3 className="font-serif text-2xl font-semibold">Request a table</h3>
          <p className="mt-2 text-sm text-[#2A211B]/70">
            Wednesday to Sunday, one seating from six o&apos;clock.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="reserve-name" className="block text-sm font-semibold">
                Name on the booking
              </label>
              <input
                id="reserve-name"
                name="name"
                type="text"
                placeholder="Priya Ramanathan"
                className="mt-2 w-full rounded-xl border border-[#2A211B]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#B7411F]"
              />
            </div>
            <div>
              <label htmlFor="reserve-email" className="block text-sm font-semibold">
                Email
              </label>
              <input
                id="reserve-email"
                name="email"
                type="email"
                placeholder="you@yourdomain.co.uk"
                className="mt-2 w-full rounded-xl border border-[#2A211B]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#B7411F]"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="reserve-date" className="block text-sm font-semibold">
                  Evening
                </label>
                <input
                  id="reserve-date"
                  name="date"
                  type="date"
                  className="mt-2 w-full rounded-xl border border-[#2A211B]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#B7411F]"
                />
              </div>
              <div>
                <label htmlFor="reserve-party" className="block text-sm font-semibold">
                  Party size
                </label>
                <select
                  id="reserve-party"
                  name="party"
                  className="mt-2 w-full rounded-xl border border-[#2A211B]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#B7411F]"
                >
                  {PARTY_SIZES.map((size) => (
                    <option key={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="reserve-notes" className="block text-sm font-semibold">
                Allergies, occasion, anything else
              </label>
              <textarea
                id="reserve-notes"
                name="notes"
                rows={3}
                placeholder="Coeliac at the table, and it is my father's birthday."
                className="mt-2 w-full rounded-xl border border-[#2A211B]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#B7411F]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-[#2A211B] px-6 py-4 text-sm font-semibold tracking-wide text-[#FBF6EC] transition-colors hover:bg-[#B7411F]"
          >
            Send the request
          </button>
          <p className="mt-4 text-xs leading-relaxed text-[#2A211B]/60">
            We answer between two and five on service days. For tonight, ring 0117 555 0184 —
            the pass keeps six stools back for people who did not plan ahead.
          </p>
        </form>
      </div>
    </section>
  )
}
