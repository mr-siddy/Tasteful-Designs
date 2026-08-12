const PROMISES = [
  {
    title: 'A signal that actually stops us',
    body: 'Raise your left hand and the drill stops mid-cut, every time, no negotiation and no "nearly done". Patients who have tested it once tend to relax for the rest of the appointment.',
  },
  {
    title: 'Numbing before the numbing',
    body: 'Topical gel goes on for a full two minutes before any needle, and the anaesthetic itself is warmed and delivered slowly on a computer-controlled syringe rather than pushed by thumb.',
  },
  {
    title: 'Nothing decided in the chair',
    body: 'Prices, options and consent are all handled sitting upright at the desk before you lie back. If something unexpected turns up mid-treatment we stop, sit you up, and talk about it.',
  },
  {
    title: 'The quiet first slot',
    body: 'The 8:00 appointment each day is kept free of the mill and the ultrasonic scaler. If noise is the part you dread, ask Marta for the quiet slot when you book.',
  },
]

export function ComfortProtocol() {
  return (
    <section id="comfort" className="bg-[#12263F] text-[#F1F5F7]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7fd8ce]">
              The quiet chair protocol
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Written down, because “don’t worry” is not a plan
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#C6D3DF]">
              About a third of the people who walk through our door have not seen a dentist in five
              years or more, usually because of something that happened in a chair when they were
              small. We cannot undo that, so we do the next best thing: we publish exactly how an
              appointment here runs, and we stick to it.
            </p>
            <svg viewBox="0 0 320 180" className="mt-10 w-full max-w-sm" role="img" aria-label="Illustration of a raised hand pausing a treatment">
              <rect x="0" y="0" width="320" height="180" rx="20" fill="#F1F5F7" opacity="0.08" />
              <path
                d="M96 152V96c0-9 6-15 14-15s14 6 14 15V60c0-9 6-15 14-15s14 6 14 15v36V44c0-9 6-15 14-15s14 6 14 15v52V66c0-9 6-15 14-15s14 6 14 15v70c0 10-12 16-30 16z"
                fill="#F1F5F7"
                opacity="0.9"
              />
              <path
                d="M40 138c22-16 44-16 66 0"
                stroke="#F26D5B"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="248" cy="52" r="20" fill="#F26D5B" opacity="0.9" />
              <rect x="240" y="44" width="6" height="17" rx="3" fill="#12263F" />
              <rect x="252" y="44" width="6" height="17" rx="3" fill="#12263F" />
            </svg>
          </div>

          <dl className="grid gap-6 sm:grid-cols-2">
            {PROMISES.map((promise) => (
              <div
                key={promise.title}
                className="rounded-2xl border border-[#F1F5F7]/12 bg-[#F1F5F7]/5 p-6"
              >
                <dt className="text-lg font-semibold tracking-tight">{promise.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-[#C6D3DF]">{promise.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
