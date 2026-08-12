const REASONS = [
  { label: "It's been a while and I'd like a check-up" },
  { label: 'Something hurts and I need seeing soon' },
  { label: 'I want a quote for a crown or aligners' },
  { label: 'I am registering my children' },
]

export function ClosingCta() {
  return (
    <section id="book" className="relative overflow-hidden bg-[#FBF9F5]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#5B4BA8]/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 rounded-[2rem] border border-[#E3DCD0] bg-white p-9 shadow-lg sm:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E4735B]">
              Book a visit
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#332A56] sm:text-5xl">
              Come and read the board yourself
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#5A5347]">
              New patient examinations are usually available inside nine days, and there is no
              charge for the fifteen-minute talk-only appointment if you would rather start there.
              Ring the desk, or send the form and Rufus will call you back the same working day.
            </p>

            <ul className="mt-8 space-y-3">
              {REASONS.map((reason) => (
                <li
                  key={reason.label}
                  data-testid="cta-reason"
                  className="flex items-start gap-3 text-[15px] text-[#4A4438]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 flex-none text-[#5B4BA8]"
                  >
                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path
                      d="m8.5 12 2.5 2.5 4.5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{reason.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="tel:5550164"
                data-testid="closing-call"
                className="rounded-full bg-[#332A56] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#332A56]/20"
              >
                Call (555) 0164
              </a>
              <a
                href="#fees"
                data-testid="closing-fees"
                className="rounded-full border border-[#332A56]/25 px-7 py-3.5 text-base font-semibold text-[#332A56]"
              >
                See the price list again
              </a>
            </div>
          </div>

          <form
            data-testid="callback-form"
            aria-label="Request a call back from the front desk"
            className="rounded-3xl bg-[#F1ECE3] p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <h3 className="text-xl font-semibold tracking-tight text-[#1C1A17]">
              Ask Rufus to call you back
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6A6255]">
              Weekdays before five and he will ring the same day. We never pass your details on.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="cta-name" className="block text-sm font-medium text-[#4A4438]">
                  Your name
                </label>
                <input
                  id="cta-name"
                  name="name"
                  type="text"
                  data-testid="cta-name"
                  className="mt-2 w-full rounded-xl border border-[#E3DCD0] bg-white px-4 py-3 text-[15px] text-[#1C1A17]"
                />
              </div>
              <div>
                <label htmlFor="cta-phone" className="block text-sm font-medium text-[#4A4438]">
                  Phone number
                </label>
                <input
                  id="cta-phone"
                  name="phone"
                  type="tel"
                  data-testid="cta-phone"
                  className="mt-2 w-full rounded-xl border border-[#E3DCD0] bg-white px-4 py-3 text-[15px] text-[#1C1A17]"
                />
              </div>
              <div>
                <label htmlFor="cta-reason" className="block text-sm font-medium text-[#4A4438]">
                  What is it about?
                </label>
                <select
                  id="cta-reason"
                  name="reason"
                  data-testid="cta-reason-select"
                  className="mt-2 w-full rounded-xl border border-[#E3DCD0] bg-white px-4 py-3 text-[15px] text-[#1C1A17]"
                >
                  <option>A check-up</option>
                  <option>Something hurts</option>
                  <option>A quote for treatment</option>
                  <option>Registering children</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              data-testid="cta-submit"
              className="mt-7 w-full rounded-full bg-[#E4735B] px-6 py-3.5 text-sm font-semibold text-white"
            >
              Request a call back
            </button>
            <p className="mt-4 text-xs leading-relaxed text-[#8B8375]">
              Out of hours with a dental emergency? Ring (555) 0177 and a duty dentist will pick up.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
