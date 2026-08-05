export function ReserveCta() {
  return (
    <section
      id="visit"
      data-testid="reserve-cta"
      className="relative overflow-hidden bg-stone-950 py-24 text-stone-100"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_70%_at_80%_20%,rgba(245,158,11,0.25),transparent_60%),radial-gradient(45%_45%_at_10%_90%,rgba(13,148,136,0.2),transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-400">
            118 Rope Walk, Larkspur District
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Come sit near the fire
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-stone-300">
            Send a request and Amaia will confirm by phone within a day, usually within an hour if
            you ask for a weeknight. Parties of nine or more go to the Sail Loft.
          </p>
          <dl className="mt-10 grid max-w-md gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-widest text-stone-500">Dinner</dt>
              <dd className="mt-1 text-stone-200">Tuesday – Saturday, 5:00 – 10:00</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-stone-500">Lunch</dt>
              <dd className="mt-1 text-stone-200">Friday – Sunday, 12:00 – 3:00</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-stone-500">Sunday rice</dt>
              <dd className="mt-1 text-stone-200">Sunday, 12:00 – 7:00</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-stone-500">Closed</dt>
              <dd className="mt-1 text-stone-200">Mondays, and the first week of August</dd>
            </div>
          </dl>
        </div>

        <form
          data-testid="reserve-form"
          onSubmit={(event) => event.preventDefault()}
          className="rounded-3xl border border-stone-800 bg-stone-900/70 p-8 shadow-2xl backdrop-blur"
        >
          <h3 className="font-serif text-2xl font-semibold">Request a table</h3>
          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="reserve-name" className="block text-sm font-medium text-stone-300">
                Name on the booking
              </label>
              <input
                id="reserve-name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label htmlFor="reserve-date" className="block text-sm font-medium text-stone-300">
                Date you would like
              </label>
              <input
                id="reserve-date"
                name="date"
                type="date"
                className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label htmlFor="reserve-party" className="block text-sm font-medium text-stone-300">
                How many of you
              </label>
              <select
                id="reserve-party"
                name="party"
                className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 outline-none focus:border-amber-400"
              >
                <option>Two</option>
                <option>Three or four</option>
                <option>Five to eight</option>
                <option>Nine or more (Sail Loft)</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            data-testid="reserve-submit"
            className="mt-8 w-full rounded-full bg-amber-500 px-6 py-4 text-base font-semibold text-stone-950 transition hover:bg-amber-400"
          >
            Send the request
          </button>
          <p className="mt-4 text-center text-xs text-stone-500">
            No deposit is taken for tables of eight or fewer.
          </p>
        </form>
      </div>
    </section>
  )
}
