const NUMBERS = [
  { value: '14 yrs', label: 'On Pennant Street' },
  { value: '1,840', label: 'Households registered' },
  { value: '4.9 / 5', label: 'Across 612 reviews' },
  { value: '92%', label: 'Seen within 5 minutes of their slot' },
]

const CREDENTIALS = [
  'General Dental Council',
  'Fernbank Chamber of Trade',
  'Academy of Minimally Invasive Dentistry',
  'Anxious Patient Care Charter',
]

function CrestMark({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 44 44" className="h-10 w-10 shrink-0" role="img" aria-label={`${label} accreditation mark`}>
      <path d="M22 3 39 9v13c0 9-7 15.6-17 19C12 37.6 5 31 5 22V9l17-6Z" fill="none" stroke="#123B36" strokeWidth="2" opacity="0.55" />
      <path d="M15 22.5 20 27l9.5-10" fill="none" stroke="#E8A020" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function TrustBar() {
  return (
    <section id="trust" className="border-y border-[#123B36]/10 bg-[#123B36] py-14 text-[#FBF7F0]">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#F5C458]">
          Fourteen years on the same street
        </h2>

        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((item) => (
            <div key={item.label} data-testid="trust-stat" className="text-center lg:text-left">
              <dt className="text-3xl font-bold tracking-tight text-white">{item.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#C8D8CD]">{item.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((name) => (
            <div key={name} data-testid="credential" className="flex items-center gap-3">
              <span className="text-[#F5C458]">
                <CrestMark label={name} />
              </span>
              <span className="text-sm font-medium leading-snug text-[#DCE7DF]">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
