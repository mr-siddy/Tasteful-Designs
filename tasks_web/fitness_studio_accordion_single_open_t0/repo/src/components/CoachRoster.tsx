const COACHES = [
  {
    name: 'Dev Raman',
    role: 'Head coach and co-owner',
    creds: 'CSCS · USA Weightlifting Level 2',
    bio: 'Signed the lease on the print works in 2016 with a rack, a platform and a kettle. Writes every Strong Hour block and still coaches the six a.m. himself.',
    tone: '#123B31',
  },
  {
    name: 'Anneke Voss',
    role: 'Mobility and masters coach',
    creds: 'FRCms · Precision Nutrition Level 1',
    bio: 'Fourteen years in dance before she found a barbell. Runs Mobility & Breath and the Masters mornings, and is the reason nobody here skips their ankles.',
    tone: '#2F6B57',
  },
  {
    name: 'Marisol Vega',
    role: 'Conditioning lead',
    creds: 'CSCS · Ex-national rowing squad',
    bio: 'Coaches every Conditioning Club hour on the turf lane. Believes intervals should be measured in heart rate and finished in forty-five minutes flat.',
    tone: '#D2683F',
  },
  {
    name: 'Tomas Ilves',
    role: 'Return to Lifting coach',
    creds: 'CSCS · Post-rehab certified',
    bio: 'Works alongside Fairmount Physiotherapy on the twelve-week protocol. Rebuilt his own back after a 2019 disc injury, which is how he ended up doing this.',
    tone: '#8A6B2F',
  },
]

function Portrait({ tone, name }: { tone: string; name: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      role="img"
      aria-label={`Portrait illustration of ${name}`}
      className="h-24 w-24"
    >
      <circle cx="80" cy="80" r="78" fill="#EFE6D8" />
      <circle cx="80" cy="62" r="30" fill={tone} />
      <path d="M22 154c6-36 28-52 58-52s52 16 58 52z" fill={tone} opacity="0.85" />
      <path d="M50 58c8-16 52-16 60 0" fill="none" stroke="#FBF7F1" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export function CoachRoster() {
  return (
    <section id="coaches" className="bg-[#FBF7F1]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A7F6C]">The floor team</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-[#123B31]">
              Four coaches, and you will be handed off to none of them
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#5C554A]">
            Whoever runs your movement screen writes your programme and coaches your sessions. That
            is the whole staffing model, and it is why the cap is eight.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COACHES.map((c) => (
            <article
              key={c.name}
              data-testid="coach-card"
              className="rounded-3xl border border-[#E2D8C6] bg-white p-7 text-center shadow-sm"
            >
              <div className="flex justify-center">
                <Portrait tone={c.tone} name={c.name} />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#1B1A17]">{c.name}</h3>
              <p className="mt-1 text-sm font-medium text-[#2F6B57]">{c.role}</p>
              <p className="mt-3 text-[11px] uppercase tracking-wider text-[#8A7F6C]">{c.creds}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#5C554A]">{c.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
