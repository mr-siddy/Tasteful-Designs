import type { FormEvent } from 'react'

export function ClosingCta() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="visit" className="bg-[#152A22] text-[#F4EFE2]">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E8A33F]">
            Book the intro
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Forty-five minutes, twenty-five dollars, no sales pitch at the end
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#C9C2B1]">
            Tell us roughly when you are free and we will offer you two times within the next week.
            If we think another studio in Providence is a better fit for what you need, we will tell
            you that instead — it has happened four times this year and we would rather it kept
            happening.
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-[#A7A091]">Where</dt>
              <dd className="mt-2 text-base">
                17 Almond Court, Cobbler&apos;s Hill
                <br />
                Providence, Rhode Island 02903
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-[#A7A091]">Front desk</dt>
              <dd className="mt-2 text-base">
                (401) 555 0173
                <br />
                hello@sundialmovement.com
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          data-testid="intro-form"
          className="rounded-3xl border border-white/15 bg-white/[0.04] p-8"
        >
          <h3 className="text-xl font-semibold tracking-tight">Ask for two times</h3>
          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="intro-name" className="block text-sm font-medium text-[#E7E1D4]">
                Your name
              </label>
              <input
                id="intro-name"
                name="name"
                type="text"
                className="mt-2 w-full rounded-xl border border-white/20 bg-[#0F2019] px-4 py-3 text-sm text-[#F4EFE2]"
              />
            </div>
            <div>
              <label htmlFor="intro-email" className="block text-sm font-medium text-[#E7E1D4]">
                Email
              </label>
              <input
                id="intro-email"
                name="email"
                type="email"
                className="mt-2 w-full rounded-xl border border-white/20 bg-[#0F2019] px-4 py-3 text-sm text-[#F4EFE2]"
              />
            </div>
            <div>
              <label htmlFor="intro-window" className="block text-sm font-medium text-[#E7E1D4]">
                When are you usually free?
              </label>
              <select
                id="intro-window"
                name="window"
                className="mt-2 w-full rounded-xl border border-white/20 bg-[#0F2019] px-4 py-3 text-sm text-[#F4EFE2]"
              >
                <option>Early mornings, before 8am</option>
                <option>Middle of the day</option>
                <option>Evenings, after 5pm</option>
                <option>Weekends only</option>
              </select>
            </div>
            <div>
              <label htmlFor="intro-notes" className="block text-sm font-medium text-[#E7E1D4]">
                Anything we should know about your body
              </label>
              <textarea
                id="intro-notes"
                name="notes"
                rows={3}
                className="mt-2 w-full rounded-xl border border-white/20 bg-[#0F2019] px-4 py-3 text-sm text-[#F4EFE2]"
              />
            </div>
          </div>
          <button
            type="submit"
            data-testid="intro-submit"
            className="mt-7 w-full rounded-full bg-[#C2571F] px-6 py-3.5 text-sm font-semibold text-[#FFF8EC]"
          >
            Request my intro session
          </button>
          <p className="mt-4 text-xs leading-relaxed text-[#A7A091]">
            We reply by email within one working day. We do not add you to a mailing list and we do
            not pass your details to anybody.
          </p>
        </form>
      </div>
    </section>
  )
}
