const TEAM = [
  {
    name: 'Dr. Neve Ashworth',
    role: 'Principal dentist · implant surgeon',
    reg: 'GDC 84213',
    bio: 'Bought the practice back off the chain in 2016 and has placed every implant we have fitted since. Trained in Cardiff, spent six years in maxillofacial before coming home to the coast. Sails a very slow boat out of the west basin.',
    tone: '#0F2E4A',
  },
  {
    name: 'Dr. Rhodri Vane',
    role: 'Dentist · sedation lead',
    reg: 'GDC 91507',
    bio: 'Runs the Friday sedation list and the nervous-patient clinic on Wednesdays. Has a particular soft spot for people who have been putting it off for a decade, having been one of them himself until he was twenty-six.',
    tone: '#2A7C70',
  },
  {
    name: 'Rosa Idowu',
    role: 'Dental hygienist',
    reg: 'GDC 72844',
    bio: 'Nineteen years on the quay and knows most of the fleet by first name. Will tell you plainly if your brushing has slipped and then show you the two minutes of technique that fixes it, rather than selling you a gadget.',
    tone: '#F2683C',
  },
  {
    name: 'Bram Ostler',
    role: 'Dental technician · in-house lab',
    reg: 'GDC 66019',
    bio: 'Mills, stains and glazes every crown and bridge we fit, twelve feet from the surgery door. If your shade is a fraction off he will walk through and look at it in daylight rather than guess from a photograph.',
    tone: '#3B5A6E',
  },
]

function Portrait({ tone, initials }: { tone: string; initials: string }) {
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24" role="img" aria-label={`Portrait illustration, ${initials}`}>
      <defs>
        <linearGradient id={`portrait-${initials}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={tone} />
          <stop offset="100%" stopColor="#0F2E4A" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="58" fill={`url(#portrait-${initials})`} />
      <circle cx="60" cy="48" r="20" fill="#FAF6F1" opacity="0.92" />
      <path d="M24 108c4-20 18-30 36-30s32 10 36 30" fill="#FAF6F1" opacity="0.92" />
      <path d="M14 96c8-6 16-6 24 0M82 96c8-6 16-6 24 0" stroke="#FAF6F1" strokeWidth="3" strokeLinecap="round" opacity="0.35" fill="none" />
    </svg>
  )
}

export function TeamRoster() {
  return (
    <section id="team" className="bg-[#FAF6F1] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2A7C70]">Who you will actually see</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F2E4A] sm:text-4xl">
            Nine of us, and none of them are locums
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3B4A54]">
            The four below are the ones you are most likely to end up in front of. Registration numbers are printed so
            you can look every one of us up on the GDC register in about thirty seconds, which we would encourage.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {TEAM.map((person) => (
            <li
              key={person.name}
              data-testid="team-member"
              className="flex gap-6 rounded-2xl border border-[#0F2E4A]/10 bg-white p-6 shadow-sm shadow-[#0F2E4A]/5"
            >
              <Portrait
                tone={person.tone}
                initials={person.name
                  .replace('Dr. ', '')
                  .split(' ')
                  .map((p) => p[0])
                  .join('')}
              />
              <div>
                <h3 className="text-lg font-semibold text-[#0F2E4A]">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#2A7C70]">{person.role}</p>
                <p className="mt-0.5 text-xs uppercase tracking-widest text-[#8A7A66]">{person.reg}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4A5A64]">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
