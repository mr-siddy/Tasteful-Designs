import { useState } from 'react'
import { AnchorIcon, ClockIcon } from './Icons'

const HOURS = [
  { day: 'Monday', open: '8:00am — 5:30pm' },
  { day: 'Tuesday', open: '8:00am — 5:30pm' },
  { day: 'Wednesday', open: '8:00am — 5:30pm · nervous clinic till 12' },
  { day: 'Thursday', open: '8:00am — 7:00pm' },
  { day: 'Friday', open: '8:00am — 4:00pm · sedation list' },
  { day: 'Saturday', open: 'First of the month, 9:00am — 1:00pm' },
  { day: 'Sunday', open: 'Closed — answerphone gives the urgent number' },
]

function QuayMap() {
  return (
    <svg viewBox="0 0 360 220" className="h-full w-full" role="img" aria-label="Drawn map of Saltmere quay showing the surgery at 4 Quay Parade, the west basin and Marram Lane parking">
      <rect x="0" y="0" width="360" height="220" rx="18" fill="#EDF3F2" />
      <path d="M0 148h360v72H0z" fill="#3FA394" opacity="0.35" />
      <path d="M0 160c30-10 60-10 90 0s60 10 90 0 60-10 90 0 60 10 90 0" stroke="#0F2E4A" strokeWidth="2" fill="none" opacity="0.25" />
      <path d="M18 132h324" stroke="#FAF6F1" strokeWidth="14" strokeLinecap="round" />
      <path d="M18 132h324" stroke="#0F2E4A" strokeWidth="1.6" strokeDasharray="8 10" opacity="0.35" />
      <path d="M112 132V38" stroke="#FAF6F1" strokeWidth="11" strokeLinecap="round" />
      <path d="M244 132V52" stroke="#FAF6F1" strokeWidth="9" strokeLinecap="round" />
      <rect x="66" y="82" width="64" height="38" rx="5" fill="#FAF6F1" stroke="#0F2E4A" strokeWidth="2" />
      <rect x="152" y="74" width="72" height="46" rx="5" fill="#F2683C" />
      <rect x="256" y="86" width="58" height="34" rx="5" fill="#FAF6F1" stroke="#0F2E4A" strokeWidth="2" />
      <circle cx="188" cy="60" r="11" fill="#0F2E4A" />
      <path d="M188 49v-9" stroke="#0F2E4A" strokeWidth="3" strokeLinecap="round" />
      <text x="188" y="112" textAnchor="middle" fontSize="12" fontWeight="700" fill="#FAF6F1" fontFamily="ui-sans-serif, system-ui">
        US
      </text>
      <text x="30" y="176" fontSize="12" fill="#0F2E4A" fontFamily="ui-sans-serif, system-ui" opacity="0.8">
        West basin
      </text>
      <text x="252" y="42" fontSize="11" fill="#0F2E4A" fontFamily="ui-sans-serif, system-ui" opacity="0.8">
        Marram Ln
      </text>
      <text x="30" y="126" fontSize="11" fill="#0F2E4A" fontFamily="ui-sans-serif, system-ui" opacity="0.8">
        Quay Parade
      </text>
    </svg>
  )
}

export function VisitUsSection() {
  const [sent, setSent] = useState(false)

  return (
    <section id="visit" className="bg-[#EDF3F2] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2A7C70]">Find us</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F2E4A] sm:text-4xl">
            Four Quay Parade, the blue door beside the chandlery
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3B4A54]">
            Ring reception on 01998 442 610 between eight and half five and you will get Kerry or Lin, both of whom
            have worked here longer than most of the dentists. Or leave a number below and one of them will call you
            back the same working day.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-[#0F2E4A]/10 bg-[#FAF6F1] p-7">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-[#0F2E4A]">
              <ClockIcon className="h-5 w-5 text-[#3FA394]" />
              Opening hours
            </h3>
            <dl className="mt-5 space-y-3">
              {HOURS.map((row) => (
                <div key={row.day} className="flex justify-between gap-4 border-b border-[#0F2E4A]/8 pb-3 last:border-0">
                  <dt className="text-sm font-semibold text-[#0F2E4A]">{row.day}</dt>
                  <dd className="text-right text-sm text-[#4A5A64]">{row.open}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-3xl border border-[#0F2E4A]/10 bg-[#FAF6F1] p-3">
            <QuayMap />
            <div className="px-4 pb-4 pt-5">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-[#0F2E4A]">
                <AnchorIcon className="h-5 w-5 text-[#3FA394]" />
                Getting here
              </h3>
              <address className="mt-3 not-italic text-sm leading-relaxed text-[#4A5A64]">
                Harbourline Dental
                <br />
                4 Quay Parade, Saltmere SM7 2QD
                <br />
                Two spaces behind the building on Marram Lane
                <br />
                Level threshold, wide door, ground-floor surgery
              </address>
            </div>
          </div>

          <div className="rounded-3xl border border-[#0F2E4A]/10 bg-[#0F2E4A] p-7 text-[#EDF3F2]">
            <h3 className="text-lg font-semibold text-white">Ask for a call back</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#B7CFD9]">
              Same working day, before half five. We will not add you to anything.
            </p>
            {sent ? (
              <p data-testid="callback-confirmation" className="mt-6 rounded-2xl bg-white/10 p-5 text-sm text-white">
                Thanks — Kerry has your number and will ring you before half five today.
              </p>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSent(true)
                }}
              >
                <div>
                  <label htmlFor="callback-name" className="block text-xs font-semibold uppercase tracking-widest text-[#7FC4B8]">
                    Your name
                  </label>
                  <input
                    id="callback-name"
                    name="name"
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-[#8AA7B6]"
                    placeholder="Marta Kowalczyk"
                  />
                </div>
                <div>
                  <label htmlFor="callback-phone" className="block text-xs font-semibold uppercase tracking-widest text-[#7FC4B8]">
                    Telephone
                  </label>
                  <input
                    id="callback-phone"
                    name="phone"
                    type="tel"
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-[#8AA7B6]"
                    placeholder="01998 000 000"
                  />
                </div>
                <div>
                  <label htmlFor="callback-note" className="block text-xs font-semibold uppercase tracking-widest text-[#7FC4B8]">
                    What is it about?
                  </label>
                  <textarea
                    id="callback-note"
                    name="note"
                    rows={3}
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-[#8AA7B6]"
                    placeholder="Chipped a molar on Sunday"
                  />
                </div>
                <button
                  type="submit"
                  data-testid="callback-submit"
                  className="w-full rounded-full bg-[#F2683C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#DD5629]"
                >
                  Ask reception to ring me
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
