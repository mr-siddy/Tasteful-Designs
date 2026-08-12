import { StarRow } from './Icons'

const NUMBERS = [
  { value: '4.9', caption: 'from 412 reviews', label: 'Google rating' },
  { value: '640', caption: 'members on the books', label: 'Members' },
  { value: '81%', caption: 'still here after two years', label: 'Retention' },
  { value: '2017', caption: 'the year we took the lease', label: 'Opened' },
]

const PARTNERS = [
  'Delaney Wharf Physio',
  'Harbourline Runners',
  'Corvin Street Clinic',
  'Wharfside Rowing Club',
]

export default function TrustBar() {
  return (
    <section data-testid="proof" aria-labelledby="proof-heading" className="border-y border-[#E4DCD0] bg-[#FFFCF8]">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="proof-heading" className="text-sm font-black uppercase tracking-[0.2em] text-[#7A8A80]">
              Nine years on the wharf
            </h2>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-[#4B5A52]">
              We have never run a January promotion and we have never had a
              treadmill. People stay because the coaching is good and the room is
              kind, which turns out to be the whole business.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <StarRow title="Rated 4.9 out of 5" className="h-5" />
            <span className="text-sm font-bold text-[#16211C]">4.9 · 412 reviews</span>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {NUMBERS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#E4DCD0] bg-[#FAF6F0] px-5 py-6"
            >
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-[#7A8A80]">
                {item.label}
              </dt>
              <dd className="mt-2 text-3xl font-black tracking-tight text-[#1F4A3C]">{item.value}</dd>
              <dd className="mt-1 text-sm text-[#5C6B63]">{item.caption}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 border-t border-[#E4DCD0] pt-8">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#7A8A80]">
            We refer to, and take referrals from
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {PARTNERS.map((name) => (
              <li
                key={name}
                className="flex items-center gap-3 rounded-xl border border-[#E4DCD0] bg-[#FFFCF8] px-4 py-3"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" role="img" aria-label={name}>
                  <rect width="24" height="24" rx="7" fill="#E3EDE7" />
                  <path
                    d="M7 15.5l3.4-7 3.4 4.4 1.6-2.2L18 15.5z"
                    fill="none"
                    stroke="#1F4A3C"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-semibold leading-tight text-[#3C4A42]">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
