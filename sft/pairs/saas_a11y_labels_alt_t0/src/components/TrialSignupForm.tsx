import { useState } from 'react'

const SCOPE_OPTIONS = ['1 to 10 services', '11 to 25 services', '26 to 100 services', 'More than 100 services']
const REGIME_OPTIONS = ['SOC 2 Type II', 'PCI DSS', 'HIPAA', 'DORA', 'ISO 27001', 'Something else']

const ASSURANCES = [
  'Sandbox estate provisioned in under ten minutes',
  'No card, and the trial does not auto-convert',
  'A solutions engineer translates your existing policy for free',
]

export default function TrialSignupForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="trial" className="bg-[#0B1524] py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4ADEC0]">Start the trial</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-[2.75rem]">
            Twenty-one days, one real service
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Put one service under policy, run it in shadow mode for three weeks, and read the report on what Halyard
            would have blocked. If that report does not change a single conversation on your team, walk away — we will
            tell you so ourselves.
          </p>
          <ul className="mt-9 space-y-3.5">
            {ASSURANCES.map((assurance) => (
              <li key={assurance} className="flex items-start gap-3 text-sm text-slate-300">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" focusable="false">
                  <circle cx="10" cy="10" r="9" fill="#F2A93B" opacity="0.16" />
                  <path
                    d="M6 10.4l2.6 2.6L14 7.6"
                    stroke="#F2A93B"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {assurance}
              </li>
            ))}
          </ul>
          <p className="mt-10 border-l-2 border-[#F2A93B]/50 pl-5 text-sm leading-relaxed text-slate-500">
            Prefer to talk first? Call the support line on (401) 555 0168 — it is answered by the same engineers who run
            the control plane, twenty-four hours a day.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#132238] p-8 shadow-2xl shadow-black/40">
          <h3 className="text-xl font-semibold tracking-tight text-white">Request your sandbox estate</h3>
          <p className="mt-2 text-sm text-slate-400">
            Six answers and we will have the environment waiting. Nothing here is passed to a sales sequence.
          </p>

          <form
            data-testid="signup-form"
            className="mt-7 space-y-5"
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
          >
            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-slate-300">
                Work email
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                data-testid="signup-field"
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0F1B2D] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2A93B]"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="signup-name" className="block text-sm font-medium text-slate-300">
                  Full name
                </label>
                <input
                  id="signup-name"
                  name="name"
                  type="text"
                  data-testid="signup-field"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0F1B2D] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2A93B]"
                />
              </div>
              <div>
                <label htmlFor="signup-company" className="block text-sm font-medium text-slate-300">
                  Company
                </label>
                <input
                  id="signup-company"
                  name="company"
                  type="text"
                  data-testid="signup-field"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0F1B2D] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2A93B]"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="signup-scope" className="block text-sm font-medium text-slate-300">
                  Services to start with
                </label>
                <select
                  id="signup-scope"
                  name="scope"
                  data-testid="signup-field"
                  defaultValue={SCOPE_OPTIONS[0]}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0F1B2D] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2A93B]"
                >
                  {SCOPE_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="signup-regime" className="block text-sm font-medium text-slate-300">
                  Compliance regime
                </label>
                <select
                  id="signup-regime"
                  name="regime"
                  data-testid="signup-field"
                  defaultValue={REGIME_OPTIONS[0]}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0F1B2D] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2A93B]"
                >
                  {REGIME_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="signup-goal" className="block text-sm font-medium text-slate-300">
                What you want to automate first
              </label>
              <textarea
                id="signup-goal"
                name="goal"
                rows={3}
                data-testid="signup-field"
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0F1B2D] px-4 py-3 text-sm text-white outline-none transition focus:border-[#F2A93B]"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="signup-digest"
                name="digest"
                type="checkbox"
                data-testid="signup-field"
                className="mt-0.5 h-4 w-4 flex-none rounded border-white/20 bg-[#0F1B2D] accent-[#F2A93B]"
              />
              <label htmlFor="signup-digest" className="text-sm leading-snug text-slate-400">
                Send me the monthly release-engineering digest
              </label>
            </div>

            <button
              type="submit"
              data-testid="signup-submit"
              className="w-full rounded-xl bg-[#F2A93B] px-6 py-3.5 text-sm font-semibold text-[#0B1524] transition hover:bg-[#ffc063]"
            >
              Request the sandbox
            </button>
          </form>

          {submitted ? (
            <p
              data-testid="signup-confirmation"
              className="mt-6 rounded-xl border border-[#4ADEC0]/30 bg-[#4ADEC0]/10 px-5 py-4 text-sm leading-relaxed text-[#9BEBDA]"
            >
              Request received. A solutions engineer will send your sandbox credentials and a draft policy within one
              business day.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
