import { FlameMark } from './Icons'

export function ReserveCta() {
  return (
    <section
      id="reserve"
      className="relative overflow-hidden bg-stone-950 text-stone-100"
      aria-labelledby="reserve-heading"
    >
      <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-orange-700/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <FlameMark className="h-10 w-10" />
          <h2 id="reserve-heading" className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Come sit near the fire
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-stone-400">
            Tables open thirty days ahead at 9am. If the night you want is gone, leave us a note
            below — we release held tables at 4pm daily and we work the waiting list by hand, in
            order, every afternoon.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="tel:+15550172"
              data-testid="reserve-call"
              className="rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-stone-950 shadow-xl shadow-amber-900/40 transition-colors hover:bg-amber-400"
            >
              Call 555 0172
            </a>
            <a
              href="#menu"
              className="rounded-full border border-stone-700 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-amber-400 hover:text-amber-300"
            >
              See what is cooking
            </a>
          </div>
        </div>

        <form
          data-testid="reserve-form"
          onSubmit={(event) => event.preventDefault()}
          className="rounded-3xl border border-stone-800 bg-stone-900/70 p-8 shadow-2xl shadow-black/50"
        >
          <h3 className="text-lg font-semibold tracking-tight">Join the waiting list</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="reserve-name" className="block text-sm font-medium text-stone-300">
                Name on the booking
              </label>
              <input
                id="reserve-name"
                name="name"
                type="text"
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-stone-100"
              />
            </div>
            <div>
              <label htmlFor="reserve-date" className="block text-sm font-medium text-stone-300">
                Preferred date
              </label>
              <input
                id="reserve-date"
                name="date"
                type="text"
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-stone-100"
              />
            </div>
            <div>
              <label htmlFor="reserve-party" className="block text-sm font-medium text-stone-300">
                Party size
              </label>
              <select
                id="reserve-party"
                name="party"
                defaultValue="2"
                className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-stone-100"
              >
                <option value="2">Two of us</option>
                <option value="4">Three or four</option>
                <option value="6">Five or six</option>
                <option value="14">Seven or more (Brass Room)</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="reserve-note" className="block text-sm font-medium text-stone-300">
                Anything we should cook around?
              </label>
              <textarea
                id="reserve-note"
                name="note"
                rows={3}
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-stone-100"
              />
            </div>
          </div>
          <button
            type="submit"
            data-testid="reserve-submit"
            className="mt-7 w-full rounded-full bg-amber-500 px-6 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-amber-400"
          >
            Add me to the list
          </button>
          <p className="mt-4 text-xs leading-relaxed text-stone-500">
            We hold your details for the season and use them for nothing else. No newsletter unless
            you ask for one.
          </p>
        </form>
      </div>
    </section>
  )
}
