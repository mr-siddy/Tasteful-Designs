import { useState } from 'react'

const GOALS = [
  'Get stronger on the main lifts',
  'Learn to lift properly for the first time',
  'Come back from an injury',
  'Train for a meet',
  'Build conditioning without wrecking my knees',
]

export function JoinSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [goal, setGoal] = useState(GOALS[0])
  const [notes, setNotes] = useState('')
  const [booked, setBooked] = useState(false)

  return (
    <section id="join" data-testid="join-section" className="relative overflow-hidden bg-stone-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-lime-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10rem] left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-amber-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-300">Start here</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight text-stone-50">
            Book a free intro session
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-300">
            One hour, no cost, no sales pitch at the end of it. You will meet a coach, move a
            little, talk about what you want out of the next year, and leave with something written
            down. Most people book for a weekday morning before work.
          </p>

          <ul className="mt-9 space-y-4 text-sm text-stone-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lime-300" aria-hidden="true" />
              We reply within one working day, usually the same morning.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lime-300" aria-hidden="true" />
              Wear whatever you train in. Flat shoes help; we have loaners in most sizes.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lime-300" aria-hidden="true" />
              Street parking on Alder Way is free after nine, and the 14 bus stops outside.
            </li>
          </ul>
        </div>

        <form
          data-testid="join-form"
          className="rounded-3xl bg-stone-900 p-8 ring-1 ring-white/10"
          onSubmit={(event) => {
            event.preventDefault()
            setBooked(true)
          }}
        >
          <h3 className="text-xl font-bold text-stone-50">Tell us where you are starting from</h3>

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="join-name" className="block text-xs font-bold uppercase tracking-wide text-stone-400">
                Your name
              </label>
              <input
                id="join-name"
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-stone-950 px-4 py-3 text-sm text-stone-100 outline-none focus:border-lime-300"
              />
            </div>

            <div>
              <label htmlFor="join-email" className="block text-xs font-bold uppercase tracking-wide text-stone-400">
                Email address
              </label>
              <input
                id="join-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-stone-950 px-4 py-3 text-sm text-stone-100 outline-none focus:border-lime-300"
              />
            </div>

            <div>
              <label htmlFor="join-goal" className="block text-xs font-bold uppercase tracking-wide text-stone-400">
                What are you after
              </label>
              <select
                id="join-goal"
                name="goal"
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-stone-950 px-4 py-3 text-sm text-stone-100 outline-none focus:border-lime-300"
              >
                {GOALS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="join-notes" className="block text-xs font-bold uppercase tracking-wide text-stone-400">
                Anything we should know
              </label>
              <textarea
                id="join-notes"
                name="notes"
                rows={3}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-stone-950 px-4 py-3 text-sm text-stone-100 outline-none focus:border-lime-300"
              />
            </div>
          </div>

          <button
            type="submit"
            data-testid="join-submit"
            className="mt-7 w-full rounded-full bg-lime-300 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-stone-950 transition-colors hover:bg-lime-200"
          >
            Request my intro session
          </button>

          {booked ? (
            <p data-testid="join-confirmation" className="mt-4 text-sm font-semibold text-lime-300">
              Thanks — a coach will be in touch within one working day.
            </p>
          ) : (
            <p className="mt-4 text-xs text-stone-500">
              We use your details to arrange the session and nothing else. No mailing list.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
