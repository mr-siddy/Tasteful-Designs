const SITTINGS = [
  { label: 'Early — 5:00pm to 6:45pm', value: 'early' },
  { label: 'Middle — 7:00pm to 8:45pm', value: 'middle' },
  { label: 'Late — 9:00pm onwards', value: 'late' },
]

export function ReserveCta() {
  return (
    <section id="reserve" className="relative overflow-hidden bg-[#16110F] py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#E4572E]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-[#2F7A6B]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E4572E]">
            Thirty days out, eighteen seats
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#FBF5EC] sm:text-5xl">
            Come and eat with us
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#FBF5EC]/75">
            Send the form and Dai will confirm by email within one service, usually the same night.
            If the sitting you want has gone, we will offer the nearest one we have rather than
            leave you guessing, and you are always welcome to take your chances on the bench.
          </p>

          <ul className="mt-10 space-y-4">
            {[
              'Bookings cover the north wall and the long table only',
              'Groups of eight or more go out as a Full Lantern feast',
              'Tell us about allergies here, not on the night',
              'No deposit, no card, no confirmation texts at 9am',
            ].map((line) => (
              <li key={line} className="flex gap-3 text-base text-[#FBF5EC]/70">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 fill-[#F5A623]">
                  <path d="M8 14.5l-4.2-4.2 1.4-1.4L8 11.7l6.8-6.8 1.4 1.4z" />
                </svg>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <p className="mt-10 font-serif text-2xl text-[#FBF5EC]">
            Or just call the lane phone:{' '}
            <a href="tel:5550172" className="text-[#E4572E]">
              555 0172
            </a>
          </p>
        </div>

        <form
          data-testid="reserve-form"
          className="rounded-3xl border border-[#FBF5EC]/12 bg-[#1D1512] p-8 shadow-2xl shadow-black/40"
          onSubmit={(event) => event.preventDefault()}
        >
          <h3 className="font-serif text-2xl font-semibold text-[#FBF5EC]">Request a table</h3>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="reserve-name" className="block text-xs uppercase tracking-[0.2em] text-[#FBF5EC]/55">
                Name
              </label>
              <input
                id="reserve-name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-[#FBF5EC]/15 bg-[#16110F] px-4 py-3 text-sm text-[#FBF5EC] outline-none focus:border-[#E4572E]"
              />
            </div>
            <div>
              <label htmlFor="reserve-email" className="block text-xs uppercase tracking-[0.2em] text-[#FBF5EC]/55">
                Email
              </label>
              <input
                id="reserve-email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-[#FBF5EC]/15 bg-[#16110F] px-4 py-3 text-sm text-[#FBF5EC] outline-none focus:border-[#E4572E]"
              />
            </div>
            <div>
              <label htmlFor="reserve-date" className="block text-xs uppercase tracking-[0.2em] text-[#FBF5EC]/55">
                Date
              </label>
              <input
                id="reserve-date"
                name="date"
                type="date"
                className="mt-2 w-full rounded-xl border border-[#FBF5EC]/15 bg-[#16110F] px-4 py-3 text-sm text-[#FBF5EC] outline-none focus:border-[#E4572E]"
              />
            </div>
            <div>
              <label htmlFor="reserve-guests" className="block text-xs uppercase tracking-[0.2em] text-[#FBF5EC]/55">
                Guests
              </label>
              <input
                id="reserve-guests"
                name="guests"
                type="number"
                min={1}
                max={14}
                className="mt-2 w-full rounded-xl border border-[#FBF5EC]/15 bg-[#16110F] px-4 py-3 text-sm text-[#FBF5EC] outline-none focus:border-[#E4572E]"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="reserve-sitting" className="block text-xs uppercase tracking-[0.2em] text-[#FBF5EC]/55">
              Sitting
            </label>
            <select
              id="reserve-sitting"
              name="sitting"
              className="mt-2 w-full rounded-xl border border-[#FBF5EC]/15 bg-[#16110F] px-4 py-3 text-sm text-[#FBF5EC] outline-none focus:border-[#E4572E]"
            >
              {SITTINGS.map((sitting) => (
                <option key={sitting.value} value={sitting.value}>
                  {sitting.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label htmlFor="reserve-notes" className="block text-xs uppercase tracking-[0.2em] text-[#FBF5EC]/55">
              Allergies, occasion, anything else
            </label>
            <textarea
              id="reserve-notes"
              name="notes"
              rows={3}
              className="mt-2 w-full rounded-xl border border-[#FBF5EC]/15 bg-[#16110F] px-4 py-3 text-sm text-[#FBF5EC] outline-none focus:border-[#E4572E]"
            />
          </div>

          <button
            type="submit"
            data-testid="reserve-submit"
            className="mt-7 w-full rounded-full bg-[#E4572E] px-6 py-3.5 text-sm font-semibold text-[#16110F] transition hover:bg-[#F5A623]"
          >
            Send the request
          </button>
          <p className="mt-4 text-center text-xs text-[#FBF5EC]/45">
            We hold booked tables fifteen minutes on a weeknight, ten on a Friday and Saturday.
          </p>
        </form>
      </div>
    </section>
  )
}
