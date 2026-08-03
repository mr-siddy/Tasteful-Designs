const INCLUDED = [
  'A sixty-minute movement assessment',
  'Seven days on the real timetable',
  'Your first twelve-week block, written',
]

export function ClosingCta() {
  return (
    <section
      id="trial"
      className="relative overflow-hidden bg-amber-400 text-stone-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(50% 60% at 85% 20%, rgba(255,255,255,0.65), transparent 65%), radial-gradient(40% 50% at 5% 90%, rgba(120,53,15,0.35), transparent 70%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-900">
            Free trial week
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Come and lift for a week. We&rsquo;ll take it from there.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-amber-950">
            Leave your email and Priya or Marcus will call within a working day to book your
            assessment. No card, no sales appointment, no seven-day countdown timer.
          </p>

          <ul className="mt-8 space-y-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
                  <circle cx="9" cy="9" r="9" fill="#0c0a09" />
                  <path
                    d="M5 9.4l2.6 2.6L13 6.6"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <form
          data-testid="trial-form"
          onSubmit={(event) => event.preventDefault()}
          className="rounded-3xl bg-stone-950 p-8 text-stone-100 shadow-2xl"
        >
          <h3 className="text-xl font-bold tracking-tight">Book your trial week</h3>
          <p className="mt-2 text-sm text-stone-400">
            Weekday calls between 6am and 7pm, Saturdays until midday.
          </p>

          <label htmlFor="trial-name" className="mt-6 block text-sm font-semibold">
            Your name
          </label>
          <input
            id="trial-name"
            name="name"
            type="text"
            placeholder="Alex Whitcombe"
            className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-sm text-stone-100"
          />

          <label htmlFor="trial-email" className="mt-5 block text-sm font-semibold">
            Email address
          </label>
          <input
            id="trial-email"
            name="email"
            type="email"
            placeholder="alex@northlinestrength.com.au"
            className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-sm text-stone-100"
          />

          <label htmlFor="trial-goal" className="mt-5 block text-sm font-semibold">
            What are you after?
          </label>
          <select
            id="trial-goal"
            name="goal"
            className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-sm text-stone-100"
          >
            <option>Get strong from scratch</option>
            <option>Come back from an injury</option>
            <option>Barbell sport and competition</option>
            <option>Keep training as I get older</option>
          </select>

          <button
            type="submit"
            data-testid="trial-submit"
            className="mt-7 w-full rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-black uppercase tracking-widest text-stone-950 transition-colors hover:bg-amber-300"
          >
            Request my trial week
          </button>

          <p className="mt-4 text-xs leading-relaxed text-stone-500">
            We keep your details for this enquiry only, and one coach reads them. No newsletter
            unless you tick it later.
          </p>
        </form>
      </div>
    </section>
  )
}
