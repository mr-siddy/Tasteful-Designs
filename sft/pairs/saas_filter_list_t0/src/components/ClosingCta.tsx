export default function ClosingCta() {
  return (
    <section id="trial" className="relative overflow-hidden bg-[#0B1F1B] py-24 text-[#EDF1EE]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_80%_at_80%_20%,rgba(18,118,106,0.5),transparent_65%),radial-gradient(40%_60%_at_10%_90%,rgba(232,163,61,0.22),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Give your operations team its Fridays back
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#B7CCC5]">
            Start with one run book — the one that interrupts somebody every week. Fourteen days,
            the whole template library, no card, and an engineer in a shared channel with you for the
            first one.
          </p>

          <form
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="work-email" className="sr-only">
              Work email
            </label>
            <input
              id="work-email"
              name="work-email"
              type="email"
              autoComplete="email"
              className="w-full rounded-full border border-[#33544C] bg-[#0F2A24] px-5 py-3 text-base text-[#EDF1EE] outline-none focus:border-[#4FB3A2] sm:max-w-sm"
            />
            <button
              type="submit"
              className="rounded-full bg-[#E8A33D] px-6 py-3 text-base font-semibold text-[#241703] transition-transform hover:-translate-y-0.5"
            >
              Start the trial
            </button>
          </form>

          <p className="mt-4 text-sm text-[#8FAAA2]">
            Prefer to see it first? Book a 30-minute walkthrough and bring your messiest process.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-5">
          <div className="rounded-2xl border border-[#294842] bg-[#0F2A24] p-6">
            <dt className="text-3xl font-semibold tracking-tight">1 day</dt>
            <dd className="mt-2 text-sm leading-relaxed text-[#93ADA6]">
              median time from signing up to a first workflow running on real traffic
            </dd>
          </div>
          <div className="rounded-2xl border border-[#294842] bg-[#0F2A24] p-6">
            <dt className="text-3xl font-semibold tracking-tight">43</dt>
            <dd className="mt-2 text-sm leading-relaxed text-[#93ADA6]">
              run books the average customer has moved across by month six
            </dd>
          </div>
          <div className="rounded-2xl border border-[#294842] bg-[#0F2A24] p-6">
            <dt className="text-3xl font-semibold tracking-tight">0</dt>
            <dd className="mt-2 text-sm leading-relaxed text-[#93ADA6]">
              seats to buy — invite every approver in the department
            </dd>
          </div>
          <div className="rounded-2xl border border-[#294842] bg-[#0F2A24] p-6">
            <dt className="text-3xl font-semibold tracking-tight">30 days</dt>
            <dd className="mt-2 text-sm leading-relaxed text-[#93ADA6]">
              full export window if you ever decide to walk away
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
