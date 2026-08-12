import { useState } from 'react'

type FieldName = 'name' | 'email' | 'crew'
type FieldErrors = Partial<Record<FieldName, string>>

type FormValues = {
  name: string
  email: string
  crew: string
  notes: string
}

const EMPTY: FormValues = { name: '', email: '', crew: '', notes: '' }

const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const WHAT_HAPPENS = [
  'A solutions engineer calls you back within one business day — not a sales development rep reading a script.',
  'You get a sandbox loaded with your trade, your price book format and a week of realistic calls to drag around.',
  'We quote against your actual technician count and tell you plainly if your shop is too small for us yet.',
]

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Tell us who we are meeting with.'
  }

  const email = values.email.trim()
  if (!email) {
    errors.email = 'We need a work email to send the walkthrough invite.'
  } else if (!EMAIL_SHAPE.test(email)) {
    errors.email = 'That address is missing an @ or a domain — check it once more.'
  }

  const crew = values.crew.trim()
  if (!crew) {
    errors.crew = 'How many technicians do you dispatch on a normal week?'
  } else if (!Number.isFinite(Number(crew)) || Number(crew) < 1) {
    errors.crew = 'Enter a crew size of at least 1 technician.'
  }

  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [sent, setSent] = useState(false)

  function update(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSent(false)
      return
    }
    setSent(true)
  }

  const fieldClass = (field: FieldName) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#0A1220] outline-none transition placeholder:text-[#9AA5B8] focus:border-[#1F4FD8] focus:ring-2 focus:ring-[#C9D5F3] ${
      errors[field] ? 'border-[#D92D20]' : 'border-[#D9DFEC]'
    }`

  return (
    <section id="walkthrough" data-testid="contact" className="bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F4FD8]">
            Book a walkthrough
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A1220] sm:text-4xl">
            Forty-five minutes on your board, not a slide deck
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5B6577]">
            Bring your worst dispatch day — the July Friday with two callbacks, a
            no-show and a compressor that failed under warranty. We will run it on
            Rivetwork while you watch, and you can decide from there.
          </p>

          <ul className="mt-8 space-y-4">
            {WHAT_HAPPENS.map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm leading-relaxed text-[#3D4658]">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-0.5 h-5 w-5 shrink-0"
                  role="img"
                  aria-label="What happens next"
                >
                  <circle cx="10" cy="10" r="9" fill="#EDF1FD" />
                  <path
                    d="M6 10.4l2.6 2.6L14 7.6"
                    fill="none"
                    stroke="#1F4FD8"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-[#E4E8F2] bg-[#FBFCFE] p-6">
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-[#0A1220]">
              Would rather just call?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5B6577]">
              Dial (616) 555-0142 between 7am and 6pm Eastern and ask for the
              walkthrough desk. Ask for Renata if you are switching off a competitor —
              she runs migrations.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-[#E4E8F2] bg-[linear-gradient(160deg,#FFFFFF_0%,#F4F7FE_100%)] p-8 shadow-[0_28px_60px_-36px_rgba(10,18,32,0.45)]">
          {sent ? (
            <div
              data-testid="contact-success"
              role="status"
              className="rounded-2xl border border-[#B7E4CD] bg-[#E9F8F0] p-8 text-center"
            >
              <svg
                viewBox="0 0 48 48"
                className="mx-auto h-14 w-14"
                role="img"
                aria-label="Request received"
              >
                <circle cx="24" cy="24" r="22" fill="#12B76A" />
                <path
                  d="M15 24.5l6.5 6.5L33 19"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mt-5 text-2xl font-black tracking-tight text-[#0A1220]">
                Your walkthrough request is in
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#3D4658]">
                A Rivetwork solutions engineer will email you within one business day
                with two time slots and a sandbox already loaded with your trade's
                work-order templates. If today is the July Friday, call the walkthrough
                desk and we will pull someone off a demo for you.
              </p>
            </div>
          ) : (
            <form
              data-testid="contact-form"
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              <h3 className="text-xl font-black tracking-tight text-[#0A1220]">
                Tell us about your shop
              </h3>

              <div>
                <label
                  htmlFor="visitor-name"
                  className="mb-1.5 block text-sm font-bold text-[#22304F]"
                >
                  Full name
                </label>
                <input
                  id="visitor-name"
                  name="name"
                  type="text"
                  data-testid="field-name"
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? 'error-name' : undefined}
                  value={values.name}
                  onChange={(event) => update('name', event.target.value)}
                  placeholder="Renata Alcott"
                  className={fieldClass('name')}
                />
                {errors.name ? (
                  <p
                    id="error-name"
                    data-testid="error-name"
                    role="alert"
                    className="mt-1.5 text-sm font-semibold text-[#D92D20]"
                  >
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="work-email"
                  className="mb-1.5 block text-sm font-bold text-[#22304F]"
                >
                  Work email
                </label>
                <input
                  id="work-email"
                  name="email"
                  type="text"
                  inputMode="email"
                  data-testid="field-email"
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                  value={values.email}
                  onChange={(event) => update('email', event.target.value)}
                  placeholder="dispatch@kestrelmechanical.com"
                  className={fieldClass('email')}
                />
                {errors.email ? (
                  <p
                    id="error-email"
                    data-testid="error-email"
                    role="alert"
                    className="mt-1.5 text-sm font-semibold text-[#D92D20]"
                  >
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="crew-size"
                  className="mb-1.5 block text-sm font-bold text-[#22304F]"
                >
                  Technicians you dispatch
                </label>
                <input
                  id="crew-size"
                  name="crew"
                  type="text"
                  inputMode="numeric"
                  data-testid="field-crew"
                  aria-required="true"
                  aria-invalid={errors.crew ? true : undefined}
                  aria-describedby={errors.crew ? 'error-crew' : undefined}
                  value={values.crew}
                  onChange={(event) => update('crew', event.target.value)}
                  placeholder="14"
                  className={fieldClass('crew')}
                />
                {errors.crew ? (
                  <p
                    id="error-crew"
                    data-testid="error-crew"
                    role="alert"
                    className="mt-1.5 text-sm font-semibold text-[#D92D20]"
                  >
                    {errors.crew}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="job-notes"
                  className="mb-1.5 block text-sm font-bold text-[#22304F]"
                >
                  What are you running today? (optional)
                </label>
                <textarea
                  id="job-notes"
                  name="notes"
                  rows={3}
                  data-testid="field-notes"
                  value={values.notes}
                  onChange={(event) => update('notes', event.target.value)}
                  placeholder="Whiteboard plus a group text, and QuickBooks Desktop in the office."
                  className="w-full rounded-xl border border-[#D9DFEC] bg-white px-4 py-3 text-sm text-[#0A1220] outline-none transition placeholder:text-[#9AA5B8] focus:border-[#1F4FD8] focus:ring-2 focus:ring-[#C9D5F3]"
                />
              </div>

              <button
                type="submit"
                data-testid="contact-submit"
                className="w-full rounded-xl bg-[#1F4FD8] px-6 py-3.5 text-base font-bold text-white shadow-[0_14px_30px_-16px_rgba(31,79,216,0.95)] transition hover:bg-[#1A41B8]"
              >
                Book my walkthrough
              </button>

              <p className="text-xs leading-relaxed text-[#5B6577]">
                We use this to route you to the right solutions engineer and nothing
                else. No newsletter, no drip campaign, no reselling your crew size to a
                supply house.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
