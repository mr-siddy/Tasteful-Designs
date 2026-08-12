import { useState } from 'react'

const HOURS = [
  { day: 'Monday', open: '7:00am — 5:00pm' },
  { day: 'Tuesday', open: '7:00am — 6:30pm' },
  { day: 'Wednesday', open: '7:00am — 5:00pm' },
  { day: 'Thursday', open: '7:00am — 6:30pm' },
  { day: 'Friday', open: '7:00am — 2:00pm' },
  { day: 'Saturday', open: 'Emergencies only, by phone' },
]

const INSURERS = [
  'Meridian Dental',
  'Harbourline PPO',
  'Wren Harbor Teachers',
  'Coastal Union Health',
  'Delmore Employee Plan',
  'Most other PPOs, filed as out-of-network',
]

function StreetMap() {
  return (
    <svg viewBox="0 0 360 220" className="h-full w-full" role="img" aria-label="Simplified map of Ellery Avenue and the Cobblehill Ward block the practice sits on">
      <rect width="360" height="220" rx="20" fill="#DCEDE7" />
      <g stroke="#FBF8F3" strokeWidth="16" strokeLinecap="round">
        <path d="M0 120h360" />
        <path d="M120 0v220" />
      </g>
      <g stroke="#FBF8F3" strokeWidth="7" strokeLinecap="round" opacity="0.8">
        <path d="M0 50h360" />
        <path d="M250 0v220" />
      </g>
      <g fill="#0F3B36" opacity="0.16">
        <rect x="20" y="140" width="70" height="52" rx="8" />
        <rect x="150" y="140" width="64" height="52" rx="8" />
        <rect x="278" y="140" width="60" height="52" rx="8" />
        <rect x="20" y="66" width="70" height="38" rx="8" />
        <rect x="150" y="66" width="80" height="38" rx="8" />
      </g>
      <g>
        <circle cx="180" cy="94" r="18" fill="#C2557E" />
        <path d="M180 128l-9-16h18z" fill="#C2557E" />
        <circle cx="180" cy="94" r="6" fill="#FBF8F3" />
      </g>
      <text x="196" y="46" fontSize="13" fill="#0F3B36" fontWeight="600" fontFamily="Georgia, serif">
        Ellery Ave
      </text>
    </svg>
  )
}

export function VisitUs() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [joined, setJoined] = useState(false)

  return (
    <section id="visit" className="bg-[#F3EDE4]" aria-labelledby="visit-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C2557E]">
            Visit us
          </p>
          <h2
            id="visit-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#0F3B36] sm:text-4xl"
          >
            1140 Ellery Avenue, Cobblehill Ward
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#14201E]/70">
            Two doors down from the Cobblehill post office, on the corner with Fenner Street. Street
            parking is free after 9am and the number 14 bus stops directly outside. The entrance is
            step-free and both operatories take a wheelchair without transfer.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-[#0F3B36]/10 bg-[#FBF8F3] p-7">
            <h3 className="font-serif text-xl font-semibold text-[#0F3B36]">Opening hours</h3>
            <dl className="mt-5 space-y-2.5">
              {HOURS.map((slot) => (
                <div key={slot.day} data-testid="hours-row" className="flex justify-between gap-4 text-sm">
                  <dt className="font-medium text-[#14201E]/80">{slot.day}</dt>
                  <dd className="text-right text-[#14201E]/60">{slot.open}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-[#14201E]/55">
              Two emergency slots are held every weekday morning. Members take them at no charge.
            </p>
          </div>

          <div className="rounded-3xl border border-[#0F3B36]/10 bg-[#FBF8F3] p-7">
            <h3 className="font-serif text-xl font-semibold text-[#0F3B36]">Insurance we file</h3>
            <ul className="mt-5 space-y-2.5">
              {INSURERS.map((insurer) => (
                <li key={insurer} data-testid="insurer" className="text-sm text-[#14201E]/70">
                  {insurer}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-[#14201E]/55">
              Send a photo of your card and we will quote your share in dollars before booking.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#0F3B36]/10 bg-[#FBF8F3] p-4">
            <StreetMap />
            <div className="px-3 pb-2 pt-4">
              <p className="text-sm font-semibold text-[#0F3B36]">Foxglove Dental Studio</p>
              <p className="text-sm text-[#14201E]/65">1140 Ellery Avenue, Wren Harbor</p>
              <a href="tel:5550172" data-testid="visit-phone" className="mt-2 inline-block text-sm font-semibold text-[#C2557E]">
                (555) 0172
              </a>
            </div>
          </div>
        </div>

        <form
          data-testid="reminder-form"
          onSubmit={(event) => {
            event.preventDefault()
            setJoined(true)
          }}
          className="mt-10 rounded-3xl border border-[#0F3B36]/10 bg-[#FBF8F3] p-7"
        >
          <h3 className="font-serif text-xl font-semibold text-[#0F3B36]">
            Recall reminders, four times a year at most
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#14201E]/70">
            A note when your cleaning is due, a note when the membership renews, and nothing else.
            We have never sold a patient list and we never will.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-[1fr,1fr,auto]">
            <div>
              <label htmlFor="reminder-name" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#14201E]/60">
                Your name
              </label>
              <input
                id="reminder-name"
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full rounded-xl border border-[#0F3B36]/20 bg-white px-4 py-3 text-sm text-[#14201E]"
              />
            </div>
            <div>
              <label htmlFor="reminder-email" className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#14201E]/60">
                Email address
              </label>
              <input
                id="reminder-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-xl border border-[#0F3B36]/20 bg-white px-4 py-3 text-sm text-[#14201E]"
              />
            </div>
            <button
              type="submit"
              data-testid="reminder-submit"
              className="mt-2 self-end rounded-full bg-[#0F3B36] px-7 py-3 text-sm font-semibold text-[#FBF8F3] transition-colors hover:bg-[#14524A] sm:mt-7"
            >
              Add me
            </button>
          </div>
          {joined && (
            <p data-testid="reminder-confirmation" className="mt-4 text-sm font-semibold text-[#1B6B60]">
              You are on the list. We will write when your recall is due.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
