import { useState } from 'react'

type ContactAction = {
  id: string
  label: string
  headline: string
  detail: string
  icon: JSX.Element
}

const CONTACT_ACTIONS: ContactAction[] = [
  {
    id: 'call',
    label: 'Call the front desk',
    headline: '(614) 555 0142',
    detail:
      'Wes picks up from 6:45am on weekdays and 7:45am on Saturdays. Out of hours the same number reaches the on-call dentist until 9:00pm.',
    icon: (
      <path
        d="M6.2 3.5h3.1l1.6 4-2 1.4a11.4 11.4 0 006.2 6.2l1.4-2 4 1.6v3.1a1.8 1.8 0 01-2 1.8C11.4 19.9 4.1 12.6 3.4 5.5a1.8 1.8 0 011.8-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 'text',
    label: 'Send a text message',
    headline: 'Text 614 555 0177',
    detail:
      'The quickest way to move or cancel an appointment, and the way most of our nervous patients prefer to book their first one.',
    icon: (
      <path
        d="M4 5.5h16v10.2H10.4L5.6 19.5v-3.8H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 'directions',
    label: 'Get directions to the studio',
    headline: '14 Sorrel Street, Ashbourne Green',
    detail:
      'Two minutes from the Sorrel Street tram stop, with eleven free patient spaces behind the building and a step-free entrance on the north side.',
    icon: (
      <path
        d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z M12 7.4a2.6 2.6 0 110 5.2 2.6 2.6 0 010-5.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 'email',
    label: 'Email the front desk',
    headline: 'desk@cedarandvale.dental',
    detail:
      'Send referral letters, insurance pre-approvals or a photo of the tooth that is bothering you. Answered within one working day.',
    icon: (
      <path
        d="M3.5 6h17v12h-17z M3.5 6.6l8.5 6.4 8.5-6.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    ),
  },
]

const STUDIO_PHOTOS = [
  {
    src: '/photos/quiet-room.svg',
    alt: 'The quiet room, with a weighted blanket folded on the chair, a dimmed floor lamp and noise-cancelling headphones',
    caption: 'The quiet room — booked by roughly a fifth of our adult patients.',
  },
  {
    src: '/photos/treatment-room.svg',
    alt: 'A ground-floor treatment room with the scanner screen angled towards the chair',
    caption: 'Ground-floor room three, where the scanner screen faces you, not the wall.',
  },
  {
    src: '/photos/front-desk.svg',
    alt: 'The front desk beneath the Cedar and Vale sign, where patients check in',
    caption: 'The desk. Wes has checked in every one of our patients since 2019.',
  },
]

const PREFERRED_DAYS = [
  'A weekday before 9:00am',
  'A weekday lunchtime',
  'A weekday after 5:00pm',
  'Saturday morning',
  'Whenever you can fit me in',
]

const VISIT_REASONS = [
  'Check-up and clean',
  'Something is hurting',
  "My child's first visit",
  'Whitening or aligners',
  'A second opinion on a quoted treatment',
]

export function BookingPanel() {
  const [openAction, setOpenAction] = useState('call')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [day, setDay] = useState(PREFERRED_DAYS[0])
  const [reason, setReason] = useState(VISIT_REASONS[0])
  const [note, setNote] = useState('')
  const [reminder, setReminder] = useState(false)
  const [request, setRequest] = useState<{ name: string; day: string } | null>(null)

  const active = CONTACT_ACTIONS.find((action) => action.id === openAction) ?? CONTACT_ACTIONS[0]

  return (
    <section
      id="book"
      data-testid="booking-panel"
      className="border-y border-[#0b2d45]/10 bg-[#0b2d45] text-white"
    >
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2fb99b]">
            Book a visit
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Ask for a chair and we will call you back the same working day
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Tell us roughly when you can get here and what is going on. Wes reads every request at
            the desk and calls back with two or three real times rather than putting you on a list.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8fd3c4]">
              Or reach us directly
            </h3>
            <div data-testid="contact-rail" className="mt-4 flex flex-wrap gap-3">
              {CONTACT_ACTIONS.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  data-testid="contact-action"
                  aria-label={action.label}
                  aria-pressed={openAction === action.id}
                  onClick={() => setOpenAction(action.id)}
                  className={
                    openAction === action.id
                      ? 'flex h-14 w-14 items-center justify-center rounded-full bg-[#2fb99b] text-[#0b2d45] shadow-lg'
                      : 'flex h-14 w-14 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-[#2fb99b] hover:text-[#8fd3c4]'
                  }
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" focusable="false">
                    {action.icon}
                  </svg>
                </button>
              ))}
            </div>

            <div
              data-testid="contact-detail"
              className="mt-5 rounded-2xl border border-white/15 bg-white/5 p-6"
            >
              <p className="font-serif text-xl font-semibold text-white">{active.headline}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{active.detail}</p>
            </div>

            <ul className="mt-8 space-y-5">
              {STUDIO_PHOTOS.map((photo) => (
                <li key={photo.src} className="flex items-center gap-4">
                  <img
                    data-testid="studio-photo"
                    src={photo.src}
                    alt={photo.alt}
                    width={132}
                    height={99}
                    className="h-[74px] w-[98px] shrink-0 rounded-xl border border-white/15 object-cover"
                  />
                  <p className="text-sm leading-relaxed text-white/70">{photo.caption}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 text-[#0b2d45] shadow-2xl">
            {request ? (
              <div data-testid="booking-confirmation">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf4f5]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-[#2fb99b]"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M4.5 12.5l5 5 10-11"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  Thank you, {request.name} — that is with the desk.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0b2d45]/75">
                  You asked for {request.day.toLowerCase()}, and Wes will call you back before the
                  end of the next working day with the times we can actually offer. If the pain gets
                  worse before then, call (614) 555 0142 and say it is urgent.
                </p>
              </div>
            ) : (
              <form
                data-testid="booking-form"
                noValidate
                onSubmit={(event) => {
                  event.preventDefault()
                  setRequest({ name: fullName.trim().split(' ')[0] || 'there', day })
                }}
              >
                <h3 className="font-serif text-2xl font-semibold">Request an appointment</h3>
                <p className="mt-2 text-sm text-[#0b2d45]/65">
                  Six boxes, about forty seconds. Nothing is confirmed until we have spoken.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-sm font-semibold text-[#0b2d45]"
                    >
                      Full name
                    </label>
                    <input
                      id="booking-name"
                      data-testid="booking-field"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#0b2d45]/20 px-4 py-3 text-sm outline-none focus:border-[#2fb99b]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-sm font-semibold text-[#0b2d45]"
                    >
                      Email address
                    </label>
                    <input
                      id="booking-email"
                      data-testid="booking-field"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#0b2d45]/20 px-4 py-3 text-sm outline-none focus:border-[#2fb99b]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-sm font-semibold text-[#0b2d45]"
                    >
                      Mobile number
                    </label>
                    <input
                      id="booking-phone"
                      data-testid="booking-field"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#0b2d45]/20 px-4 py-3 text-sm outline-none focus:border-[#2fb99b]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="booking-day"
                      className="block text-sm font-semibold text-[#0b2d45]"
                    >
                      Preferred day
                    </label>
                    <select
                      id="booking-day"
                      data-testid="booking-field"
                      name="day"
                      value={day}
                      onChange={(event) => setDay(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#0b2d45]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#2fb99b]"
                    >
                      {PREFERRED_DAYS.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="booking-reason"
                      className="block text-sm font-semibold text-[#0b2d45]"
                    >
                      Reason for visit
                    </label>
                    <select
                      id="booking-reason"
                      data-testid="booking-field"
                      name="reason"
                      value={reason}
                      onChange={(event) => setReason(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#0b2d45]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#2fb99b]"
                    >
                      {VISIT_REASONS.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="booking-note"
                      className="block text-sm font-semibold text-[#0b2d45]"
                    >
                      Anything we should know
                    </label>
                    <textarea
                      id="booking-note"
                      data-testid="booking-field"
                      name="note"
                      rows={3}
                      value={note}
                      onChange={(event) => setNote(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-[#0b2d45]/20 px-4 py-3 text-sm outline-none focus:border-[#2fb99b]"
                    />
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <input
                    id="booking-reminder"
                    data-testid="booking-field"
                    name="reminder"
                    type="checkbox"
                    checked={reminder}
                    onChange={(event) => setReminder(event.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-[#0b2d45]/30"
                  />
                  <label htmlFor="booking-reminder" className="text-sm text-[#0b2d45]/75">
                    Text me a reminder the day before
                  </label>
                </div>

                <button
                  type="submit"
                  data-testid="booking-submit"
                  className="mt-7 w-full rounded-full bg-[#0b2d45] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#17466a]"
                >
                  Send my request
                </button>
                <p className="mt-4 text-xs leading-relaxed text-[#0b2d45]/55">
                  We use what you write here to call you back and for nothing else. No newsletters,
                  no third parties, and we delete requests that never turn into appointments after
                  ninety days.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
