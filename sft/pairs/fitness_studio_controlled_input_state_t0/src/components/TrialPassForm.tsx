import { useState } from 'react'

type TrialDraft = {
  name: string
  email: string
  phone: string
  start: string
  goal: string
}

type DraftField = keyof TrialDraft

const EMPTY_DRAFT: TrialDraft = { name: '', email: '', phone: '', start: 'Monday 6:15am', goal: '' }

const GOAL_LIMIT = 240

const START_OPTIONS = ['Monday 6:15am', 'Tuesday 12:10pm', 'Thursday 5:45am', 'Saturday 8:00am']

const INCLUDED = [
  'A fifty-minute movement screen with Priya or Tobias before you touch a barbell',
  'Your first written four-week block, printed and stuck to your platform',
  'Unlimited Strength Hall and Engine Room sessions for fourteen days',
  'A coffee at Marrow & Fig on the Saturday, because that is where the club talks',
]

function TicketEdge() {
  return (
    <svg viewBox="0 0 320 14" className="h-3.5 w-full text-[#10161C]" role="img" aria-label="Perforated ticket edge">
      <path
        d="M0 7h320"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="9 9"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
    </svg>
  )
}

export function TrialPassForm() {
  // One object holds the whole trial pass so the fields, the live preview beside
  // them and the lock on the submit button all read the same draft.
  const [draft, setDraft] = useState<TrialDraft>(EMPTY_DRAFT)
  const [booked, setBooked] = useState<TrialDraft | null>(null)

  const update =
    (field: DraftField) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = event.target.value
      setDraft((current) => ({ ...current, [field]: value }))
    }

  const clear = () => {
    setDraft(EMPTY_DRAFT)
    setBooked(null)
  }

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setBooked(draft)
  }

  const ready = draft.name.trim().length > 0 && draft.email.trim().length > 0
  const remaining = GOAL_LIMIT - draft.goal.length

  const fieldClass =
    'mt-2 w-full rounded-xl border border-[#10161C]/15 bg-[#F4F1EA] px-4 py-3 text-[15px] text-[#10161C] outline-none transition-colors focus:border-[#10161C] focus:bg-white'
  const labelClass = 'block text-xs font-black uppercase tracking-[0.18em] text-[#4C5B54]'

  return (
    <section id="trial" className="bg-[#10161C] text-[#F4F1EA]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C7F04A]">
            Fourteen days, no card, no contract
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Book the two-week trial pass
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#CFD6CE]">
            Tell us who you are and what you are chasing. Priya reads every one of these herself and
            writes back within a working day with a screen time that suits your week, not ours.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form
            data-testid="trial-form"
            onSubmit={submit}
            noValidate
            className="rounded-3xl border border-[#F4F1EA]/12 bg-[#141C24] p-7 sm:p-9"
          >
            <h3 className="text-lg font-black tracking-tight">Your details</h3>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="trial-name" className={labelClass}>
                  Full name
                </label>
                <input
                  id="trial-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  data-testid="trial-name"
                  className={fieldClass}
                  value={draft.name}
                  onChange={update('name')}
                />
              </div>

              <div>
                <label htmlFor="trial-email" className={labelClass}>
                  Email address
                </label>
                <input
                  id="trial-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  data-testid="trial-email"
                  className={fieldClass}
                  value={draft.email}
                  onChange={update('email')}
                />
              </div>

              <div>
                <label htmlFor="trial-phone" className={labelClass}>
                  Mobile number
                </label>
                <input
                  id="trial-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  data-testid="trial-phone"
                  className={fieldClass}
                  value={draft.phone}
                  onChange={update('phone')}
                />
              </div>

              <div>
                <label htmlFor="trial-start" className={labelClass}>
                  Preferred first session
                </label>
                <select
                  id="trial-start"
                  name="start"
                  data-testid="trial-start"
                  className={fieldClass}
                  value={draft.start}
                  onChange={update('start')}
                >
                  {START_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="trial-goal" className={labelClass}>
                What do you want out of the next eight weeks?
              </label>
              <textarea
                id="trial-goal"
                name="goal"
                rows={4}
                maxLength={GOAL_LIMIT}
                data-testid="trial-goal"
                className={`${fieldClass} resize-none`}
                value={draft.goal}
                onChange={update('goal')}
              />
              <p data-testid="goal-counter" className="mt-2 text-xs font-semibold text-[#8E9A93]">
                {remaining} characters left
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                data-testid="trial-submit"
                disabled={!ready}
                className="rounded-full bg-[#C7F04A] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-[#10161C] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-[#3A4550] disabled:text-[#8E9A93]"
              >
                Book my trial fortnight
              </button>
              <button
                type="button"
                data-testid="trial-clear"
                onClick={clear}
                className="text-sm font-bold text-[#8E9A93] underline underline-offset-4 transition-colors hover:text-[#F4F1EA]"
              >
                Start over
              </button>
              <p className="text-xs text-[#6E7A72]">A name and an email unlock the button.</p>
            </div>

            {booked ? (
              <p
                data-testid="trial-confirmation"
                role="status"
                className="mt-6 rounded-2xl border border-[#C7F04A]/40 bg-[#C7F04A]/10 px-5 py-4 text-sm font-semibold text-[#C7F04A]"
              >
                Booked. See you {booked.start}, {booked.name} — confirmation on its way to{' '}
                {booked.email}.
              </p>
            ) : null}
          </form>

          <aside
            data-testid="pass-preview"
            className="rounded-3xl border border-[#F4F1EA]/12 bg-gradient-to-br from-[#1B2830] to-[#0C1217] p-7 sm:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C7F04A]">
                  Trial pass
                </p>
                <h3 className="mt-2 text-xl font-black tracking-tight">Ashgrove Barbell Club</h3>
              </div>
              <p className="rounded-lg bg-[#F4F1EA]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#CFD6CE]">
                14 days
              </p>
            </div>

            <div className="mt-6">
              <TicketEdge />
            </div>

            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6E7A72]">
                  Issued to
                </dt>
                <dd data-testid="pass-preview-name" className="mt-1 text-lg font-black text-[#F4F1EA]">
                  {draft.name.trim() || '—'}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6E7A72]">
                  Confirmation to
                </dt>
                <dd data-testid="pass-preview-email" className="mt-1 font-semibold text-[#CFD6CE]">
                  {draft.email.trim() || '—'}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6E7A72]">
                  First session
                </dt>
                <dd data-testid="pass-preview-start" className="mt-1 font-semibold text-[#CFD6CE]">
                  {draft.start}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6E7A72]">
                  What we are working on
                </dt>
                <dd data-testid="pass-preview-goal" className="mt-1 leading-relaxed text-[#CFD6CE]">
                  {draft.goal.trim() || 'Tell us and it lands here.'}
                </dd>
              </div>
            </dl>

            <ul className="mt-8 space-y-3 border-t border-[#F4F1EA]/12 pt-6">
              {INCLUDED.map((line) => (
                <li key={line} data-testid="pass-included" className="flex gap-3 text-sm text-[#CFD6CE]">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-[#C7F04A]" aria-hidden="true">
                    <path
                      d="M4 10.5l4 4 8-9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
