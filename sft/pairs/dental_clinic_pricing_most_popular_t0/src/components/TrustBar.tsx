const STATS = [
  { value: '12 yrs', label: 'On Ellery Avenue', note: 'Same address since 2013' },
  { value: '4,180', label: 'Patients on the books', note: 'Roughly 40% carry no insurance' },
  { value: '4.9 / 5', label: 'Average review score', note: '612 reviews, none of them solicited' },
  { value: '0', label: 'Treatments booked without a written quote', note: 'Price first, always' },
]

const CREDENTIALS = [
  { name: 'Wren Harbor Dental Society', line: 'Member practice since 2014' },
  { name: 'Academy of General Dentistry', line: 'Fellowship — Dr. Raghunathan' },
  { name: 'Cobblehill Small Business Award', line: 'Neighbourhood choice, 2021 and 2024' },
  { name: 'Sedation Certification Board', line: 'Nitrous and oral sedation certified' },
]

function ShieldIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 text-[#1B6B60]" aria-hidden="true">
      <path
        d="M16 3l11 4v9c0 7-4.6 11.6-11 13C9.6 27.6 5 23 5 16V7z"
        fill="currentColor"
        opacity="0.13"
      />
      <path
        d="M16 3l11 4v9c0 7-4.6 11.6-11 13C9.6 27.6 5 23 5 16V7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M11 16l3.4 3.4L21 12.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TrustBar() {
  return (
    <section id="trust" className="border-y border-[#0F3B36]/10 bg-[#F3EDE4]" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2
          id="trust-heading"
          className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0F3B36]/60"
        >
          What the last twelve years look like in numbers
        </h2>

        <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} data-testid="trust-stat" className="text-center sm:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <p className="font-serif text-4xl font-semibold text-[#0F3B36]">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-[#14201E]">{stat.label}</p>
                <p className="mt-1 text-sm text-[#14201E]/60">{stat.note}</p>
              </dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-14 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0F3B36]/60">
          Credentials we actually keep current
        </h3>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((credential) => (
            <li
              key={credential.name}
              data-testid="credential"
              className="flex items-start gap-3 rounded-2xl border border-[#0F3B36]/10 bg-[#FBF8F3] px-4 py-4"
            >
              <ShieldIcon />
              <span>
                <span className="block text-sm font-semibold text-[#0F3B36]">{credential.name}</span>
                <span className="block text-xs text-[#14201E]/60">{credential.line}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
