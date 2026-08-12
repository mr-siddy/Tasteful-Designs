import { useState } from 'react'
import { CheckIcon } from './Icons'

type FieldName = 'name' | 'email' | 'phone' | 'week'
type FieldErrors = Partial<Record<FieldName, string>>

type FormValues = {
  name: string
  email: string
  phone: string
  week: string
  notes: string
}

const EMPTY: FormValues = { name: '', email: '', phone: '', week: '', notes: '' }

const START_WEEKS = [
  { value: 'apr-06', label: 'Week of Monday 6 April' },
  { value: 'apr-13', label: 'Week of Monday 13 April' },
  { value: 'apr-20', label: 'Week of Monday 20 April' },
  { value: 'apr-27', label: 'Week of Monday 27 April' },
  { value: 'later', label: 'Later than that — put me on the list' },
]

const WHAT_HAPPENS = [
  'A teacher calls you back the same day to find a slot before or after hours, when the reformer room is empty.',
  'The session runs thirty-five minutes: a conversation about your history, then a little movement so we can see how you hinge and breathe.',
  'You leave with two named classes on two named days. No card, no contract, and no follow-up call trying to sell you one.',
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values: FormValues): FieldErrors {
  const found: FieldErrors = {}

  if (!values.name.trim()) {
    found.name = 'Tell us who we are booking in.'
  }

  if (!values.email.trim()) {
    found.email = 'We need an email address to send the confirmation to.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    found.email = 'That does not look like an address we can reply to.'
  }

  const digits = values.phone.replace(/\D/g, '')
  if (!values.phone.trim()) {
    found.phone = 'A mobile number, so the teacher can call you back today.'
  } else if (digits.length < 10) {
    found.phone = 'That is not a full ten-digit mobile number.'
  }

  if (!values.week) {
    found.week = 'Pick the week you would like to start.'
  }

  return found
}

export default function IntroForm() {
  const [values, setValues] = useState<FormValues>(EMPTY)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [booked, setBooked] = useState(false)

  function update(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      return
    }
    setBooked(true)
  }

  const fieldClass = (field: FieldName) =>
    `w-full rounded-xl border bg-[#FFFCF8] px-4 py-3 text-sm text-[#16211C] outline-none transition placeholder:text-[#9BA79F] focus:border-[#1F4A3C] focus:ring-2 focus:ring-[#C9DED3] ${
      errors[field] ? 'border-[#B4402A]' : 'border-[#DDD3C6]'
    }`

  const labelClass = 'block text-sm font-bold text-[#16211C]'
  const errorClass = 'mt-1.5 text-sm font-semibold text-[#B4402A]'

  return (
    <section id="intro" data-testid="intro" aria-labelledby="intro-heading" className="bg-[#FFFCF8] border-y border-[#E4DCD0]">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C4623A]">Book an intro session</p>
          <h2 id="intro-heading" className="mt-3 text-3xl font-black tracking-tight text-[#16211C] sm:text-4xl">
            Thirty-five minutes, one to one, and it costs nothing
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B5A52]">
            Tell us how to reach you and roughly when you would like to start.
            A teacher — usually Tova or Camille — will call you back the same day
            to put a time in the book. Bring whatever you would normally walk in.
          </p>

          <ul className="mt-8 space-y-4">
            {WHAT_HAPPENS.map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm leading-relaxed text-[#3C4A42]">
                <CheckIcon title="What happens next" className="mt-0.5 h-5 w-5 shrink-0" />
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-[#E4DCD0] bg-[#FAF6F0] p-6">
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-[#16211C]">
              Would rather just talk to somebody?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4B5A52]">
              Call the front desk on (555) 014-8820 between 6am and 8pm on
              weekdays, or walk up the stairs at 218 Delaney Wharf and ask. If
              you are coming back from an injury or a birth, say so when you call
              and we will put you with Camille rather than the next teacher free.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-[#E4DCD0] bg-[linear-gradient(160deg,#FFFCF8_0%,#F1EAE0_100%)] p-8 shadow-[0_30px_64px_-40px_rgba(22,33,28,0.65)]">
          {booked ? (
            <div
              data-testid="intro-success"
              role="status"
              className="rounded-2xl border border-[#B5D6C4] bg-[#E9F4EE] p-8 text-center"
            >
              <svg viewBox="0 0 48 48" className="mx-auto h-14 w-14" role="img" aria-label="Intro session requested">
                <circle cx="24" cy="24" r="22" fill="#1F4A3C" />
                <path
                  d="M15 24.5l6.5 6.5L33 19"
                  fill="none"
                  stroke="#FAF6F0"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mt-5 text-2xl font-black tracking-tight text-[#16211C]">
                You&rsquo;re booked in for an intro session
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#3C4A42]">
                A teacher will call you before eight tonight to fix the exact
                time. If you would rather they emailed, reply to the confirmation
                that just went out and say so — nobody here minds.
              </p>
              <p className="mt-4 text-sm font-bold text-[#1F4A3C]">
                Sablewood Movement Co. · 218 Delaney Wharf · (555) 014-8820
              </p>
            </div>
          ) : (
            <form data-testid="intro-form" noValidate onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="intro-name" className={labelClass}>
                  Full name
                </label>
                <input
                  id="intro-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={(event) => update('name', event.target.value)}
                  placeholder="Alma Whitcombe"
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? 'intro-name-error' : undefined}
                  className={`mt-1.5 ${fieldClass('name')}`}
                />
                {errors.name && (
                  <p id="intro-name-error" data-testid="error-name" role="alert" className={errorClass}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="intro-email" className={labelClass}>
                  Email address
                </label>
                <input
                  id="intro-email"
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={(event) => update('email', event.target.value)}
                  placeholder="alma@wharfsiderowing.org"
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? 'intro-email-error' : undefined}
                  className={`mt-1.5 ${fieldClass('email')}`}
                />
                {errors.email && (
                  <p id="intro-email-error" data-testid="error-email" role="alert" className={errorClass}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="intro-phone" className={labelClass}>
                  Mobile number
                </label>
                <input
                  id="intro-phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={(event) => update('phone', event.target.value)}
                  placeholder="(555) 014-2277"
                  aria-invalid={errors.phone ? true : undefined}
                  aria-describedby={errors.phone ? 'intro-phone-error' : undefined}
                  className={`mt-1.5 ${fieldClass('phone')}`}
                />
                {errors.phone && (
                  <p id="intro-phone-error" data-testid="error-phone" role="alert" className={errorClass}>
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="intro-week" className={labelClass}>
                  Preferred start week
                </label>
                <select
                  id="intro-week"
                  name="week"
                  value={values.week}
                  onChange={(event) => update('week', event.target.value)}
                  aria-invalid={errors.week ? true : undefined}
                  aria-describedby={errors.week ? 'intro-week-error' : undefined}
                  className={`mt-1.5 ${fieldClass('week')}`}
                >
                  <option value="">Choose a week</option>
                  {START_WEEKS.map((week) => (
                    <option key={week.value} value={week.value}>
                      {week.label}
                    </option>
                  ))}
                </select>
                {errors.week && (
                  <p id="intro-week-error" data-testid="error-week" role="alert" className={errorClass}>
                    {errors.week}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="intro-notes" className={labelClass}>
                  Anything we should know? <span className="font-medium text-[#7A8A80]">(optional)</span>
                </label>
                <textarea
                  id="intro-notes"
                  name="notes"
                  rows={4}
                  value={values.notes}
                  onChange={(event) => update('notes', event.target.value)}
                  placeholder="Injuries, surgeries, a birth, or what you are hoping to get back to."
                  className={`mt-1.5 w-full rounded-xl border border-[#DDD3C6] bg-[#FFFCF8] px-4 py-3 text-sm text-[#16211C] outline-none transition placeholder:text-[#9BA79F] focus:border-[#1F4A3C] focus:ring-2 focus:ring-[#C9DED3]`}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#C4623A] px-6 py-3.5 text-base font-bold text-[#FFF8F2] shadow-[0_16px_32px_-18px_rgba(196,98,58,0.95)] transition hover:bg-[#AC5330]"
              >
                Book my intro session
              </button>

              <p className="text-xs leading-relaxed text-[#7A8A80]">
                We use your details to book the session and nothing else. No
                mailing list, no partners, and the record is deleted if you do
                not come in within ninety days.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
