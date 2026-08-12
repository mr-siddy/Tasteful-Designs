import { ArrowRightIcon } from './Icons'

export function ClosingCta() {
  return (
    <section
      id="book"
      className="relative overflow-hidden bg-gradient-to-br from-[#2AA79B] via-[#1c7f76] to-[#12263F] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Book the $130 first visit
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/85">
            Forty-five minutes, a full check, a scan you watch being taken, and a printed plan with
            prices on it that you take home and think about. No treatment is booked on the day unless
            you ask for it.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:5550142200"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#12263F] transition hover:bg-[#F1F5F7]"
            >
              Ring (555) 014-2200
              <ArrowRightIcon />
            </a>
            <a
              href="#treatments"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white"
            >
              Read the price list again
            </a>
          </div>
        </div>

        <form className="rounded-2xl bg-white/10 p-7 backdrop-blur" aria-label="Request a call back">
          <h3 className="text-lg font-semibold tracking-tight">Or leave us your email</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            Marta rings back within one working day, usually the same morning, and will tell you
            honestly if what you need is quicker done somewhere else.
          </p>
          <div className="mt-5">
            <label htmlFor="callback-email" className="block text-sm font-medium text-white/90">
              Email address
            </label>
            <input
              id="callback-email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2 w-full rounded-full border border-white/25 bg-white/95 px-5 py-3 text-sm text-[#12263F] outline-none focus:border-white"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="callback-note" className="block text-sm font-medium text-white/90">
              What is bothering you? (optional)
            </label>
            <textarea
              id="callback-note"
              name="note"
              rows={3}
              className="mt-2 w-full rounded-2xl border border-white/25 bg-white/95 px-5 py-3 text-sm text-[#12263F] outline-none focus:border-white"
            />
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-[#F26D5B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e05a48]"
          >
            Ask for a call back
          </button>
        </form>
      </div>
    </section>
  )
}
