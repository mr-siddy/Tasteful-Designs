import { useState } from 'react'

const GOALS = [
  'I have never lifted and want to start properly',
  'I lift already and want a written plan',
  'I am coming back from an injury or a long break',
  'I want conditioning that is easy on my joints',
]

export function ClosingCta() {
  const [booked, setBooked] = useState(false)

  return (
    <section
      id="book-intro"
      className="relative overflow-hidden bg-gradient-to-br from-[#0B2A33] via-[#123c48] to-[#1D7A6B] text-[#F7F2EA]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#E4682A]/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E4682A]">
            The last thing on the page
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            Come and see the room before you decide anything
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#F7F2EA]/80">
            Twenty minutes, no cost, and you will leave knowing exactly what your first twelve weeks
            would look like and what they would cost. If we are not the right room for you, we will
            tell you where to go instead.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-[#F7F2EA]/80">
            {[
              'Intros run Monday to Thursday, 10am to 2pm, and Saturday mornings',
              'Nothing to sign, no card taken, no tour of a supplement wall',
              'Bring a shift roster if your week moves around',
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" focusable="false">
                  <path
                    d="M4 10.5l4 4 8-9"
                    fill="none"
                    stroke="#E4682A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {line}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm font-bold text-[#F7F2EA]/70">
            Or just call the desk: (410) 555 0176
          </p>
        </div>

        <div className="rounded-3xl bg-[#F7F2EA] p-8 text-[#0B2A33] shadow-2xl shadow-black/20">
          <h3 className="text-xl font-black tracking-tight">Book your free intro</h3>
          <p className="mt-2 text-sm text-[#5B6B70]">
            Marisol or Dez will call you back the same day, usually within a couple of hours.
          </p>

          {booked ? (
            <p
              data-testid="intro-confirmation"
              className="mt-6 rounded-2xl bg-[#1D7A6B]/12 px-5 py-6 text-sm font-bold leading-relaxed text-[#1D7A6B]"
            >
              Thanks — that is with the desk. A coach will call you back today between 10am and 6pm
              to find a time that fits your week.
            </p>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault()
                setBooked(true)
              }}
            >
              <div>
                <label htmlFor="intro-name" className="block text-xs font-bold uppercase tracking-wider">
                  Your name
                </label>
                <input
                  id="intro-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-[#0B2A33]/20 bg-white px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label htmlFor="intro-phone" className="block text-xs font-bold uppercase tracking-wider">
                  Phone number
                </label>
                <input
                  id="intro-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 w-full rounded-xl border border-[#0B2A33]/20 bg-white px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label htmlFor="intro-goal" className="block text-xs font-bold uppercase tracking-wider">
                  What brings you in
                </label>
                <select
                  id="intro-goal"
                  name="goal"
                  className="mt-2 w-full rounded-xl border border-[#0B2A33]/20 bg-white px-4 py-3 text-sm"
                >
                  {GOALS.map((goal) => (
                    <option key={goal} value={goal}>
                      {goal}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#E4682A] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#c9551d]"
              >
                Ask for a call back
              </button>

              <p className="text-xs leading-relaxed text-[#5B6B70]">
                We use your number to arrange the intro and nothing else. No mailing list, no
                partners, and we delete it if you decide not to join.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
