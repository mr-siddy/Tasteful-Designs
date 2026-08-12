const STATS = [
  { figure: '51', unit: 'years', caption: 'On the same corner of Quay Parade' },
  { figure: '2,310', unit: 'households', caption: 'Registered across Saltmere and Fenn Bay' },
  { figure: '418', unit: 'implants', caption: 'Placed in-house since we opened the surgery' },
  { figure: '0', unit: 'referrals', caption: 'Sent out of town for routine implant work' },
]

const CREDENTIALS = [
  { name: 'General Dental Council', sub: 'All nine clinicians registered' },
  { name: 'CQC — Good, all five domains', sub: 'Inspected March 2025' },
  { name: 'BDA Good Practice', sub: 'Member since 2008' },
  { name: 'Denplan Excel', sub: 'Accredited practice' },
]

function BadgeMark({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
      <circle cx="20" cy="20" r="18" fill="none" stroke="#3FA394" strokeWidth="2" opacity="0.55" />
      {index === 0 && <path d="M20 9 12 13v7c0 5 3.4 8.6 8 9.7 4.6-1.1 8-4.7 8-9.7v-7L20 9Z" fill="#0F2E4A" opacity="0.85" />}
      {index === 1 && <path d="M13 20.5l4.6 4.6L27 15.6" stroke="#0F2E4A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />}
      {index === 2 && <path d="M20 10l3 6.8 7.4.8-5.5 5 1.5 7.3L20 26.3 13.6 30l1.5-7.4-5.5-5 7.4-.8L20 10Z" fill="#0F2E4A" opacity="0.85" />}
      {index === 3 && <path d="M12 25c2.6-3.4 5.3-3.4 8 0s5.4 3.4 8 0M12 17c2.6-3.4 5.3-3.4 8 0s5.4 3.4 8 0" stroke="#0F2E4A" strokeWidth="2.6" strokeLinecap="round" fill="none" />}
    </svg>
  )
}

export function TrustBar() {
  return (
    <section id="trust" className="border-y border-[#0F2E4A]/10 bg-[#0F2E4A] py-16 text-[#EDF3F2]">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#7FC4B8]">
          A practice you can check up on
        </h2>

        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.caption} className="text-center sm:text-left">
              <dt className="sr-only">{stat.caption}</dt>
              <dd>
                <span className="block text-4xl font-bold tracking-tight text-white">
                  {stat.figure}
                  <span className="ml-2 text-base font-medium uppercase tracking-widest text-[#7FC4B8]">{stat.unit}</span>
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-[#B7CFD9]">{stat.caption}</span>
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-12 grid gap-5 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((cred, i) => (
            <li key={cred.name} className="flex items-center gap-3">
              <BadgeMark index={i} />
              <span>
                <span className="block text-sm font-semibold text-white">{cred.name}</span>
                <span className="block text-xs text-[#B7CFD9]">{cred.sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
