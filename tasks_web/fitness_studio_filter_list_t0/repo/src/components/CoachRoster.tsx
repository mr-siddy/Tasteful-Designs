type Coach = {
  name: string
  initials: string
  role: string
  credential: string
  tint: string
  bio: string
  teaches: string
}

const COACHES: Coach[] = [
  {
    name: 'Marisol Reyes',
    initials: 'MR',
    role: 'Head coach and founder',
    credential: 'USAW Level 2 · eleven years in collegiate weight rooms',
    tint: '#E4682A',
    bio: 'Marisol opened Tidewater in 2017 with four platforms and a rowing machine she bought off a departing crew coach. She still teaches every Barbell Foundations group herself, because she thinks the first six weeks decide whether someone lifts for the next thirty years.',
    teaches: 'Barbell Foundations · Press Club · Semi-Private Strength',
  },
  {
    name: 'Dez Okafor',
    initials: 'DO',
    role: 'Strength coach',
    credential: 'CSCS · former Mid-Atlantic 105kg record holder',
    tint: '#1D7A6B',
    bio: 'Dez runs the heavy end of the week and the return-to-lifting slots, which is a stranger combination than it sounds until you watch him load a bar for someone eleven weeks out of a knee operation.',
    teaches: 'Heavy Day · Engine Room · Return to Lifting',
  },
  {
    name: 'Priya Raghavan',
    initials: 'PR',
    role: 'Conditioning lead',
    credential: 'Four seasons coaching at the Baltimore Rowing Club',
    tint: '#0B2A33',
    bio: 'Priya writes every engine session in the building and can tell from six metres whether you are pulling with your back or your legs. She tests the room twice a block and keeps the splits herself.',
    teaches: 'Rowing Intervals · Shoulder Reset · Sunday Long Lift',
  },
  {
    name: 'Theo Lindqvist',
    initials: 'TL',
    role: 'Movement and recovery',
    credential: 'Licensed physical therapist, Harbor East Physical Therapy',
    tint: '#5B6B70',
    bio: 'Theo splits his week between the clinic on Aliceanna Street and our mezzanine. If something hurts, he is the person who decides whether you train around it or take it to a doctor, and he is not shy about the second answer.',
    teaches: 'Hips and Hinge · Slow Flow · Sled and Carry',
  },
]

function CoachPortrait({ initials, tint }: { initials: string; tint: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24"
      role="img"
      aria-label={`Portrait monogram for ${initials}`}
      focusable="false"
    >
      <circle cx="60" cy="60" r="58" fill={tint} fillOpacity="0.14" />
      <circle cx="60" cy="60" r="58" fill="none" stroke={tint} strokeOpacity="0.4" strokeWidth="2" />
      <path
        d="M22 104c6-20 20-30 38-30s32 10 38 30"
        fill={tint}
        fillOpacity="0.22"
      />
      <circle cx="60" cy="50" r="20" fill={tint} fillOpacity="0.3" />
      <text
        x="60"
        y="68"
        textAnchor="middle"
        fontSize="30"
        fontWeight="800"
        fill={tint}
        fillOpacity="0.95"
      >
        {initials}
      </text>
    </svg>
  )
}

export function CoachRoster() {
  return (
    <section id="coaches" className="border-b border-[#0B2A33]/10 bg-[#EFE6D8]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D7A6B]">
            Who is on the floor
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Four coaches, salaried, and none of them are selling you anything
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3C4E54]">
            Nobody here earns commission on a membership or a supplement, so the advice you get is
            the advice they would give a friend. You will see the same faces week after week, and
            they will remember your numbers without looking them up.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {COACHES.map((coach) => (
            <article
              key={coach.name}
              data-testid="coach-card"
              className="flex gap-6 rounded-3xl border border-[#0B2A33]/10 bg-white p-7 shadow-sm"
            >
              <div className="shrink-0">
                <CoachPortrait initials={coach.initials} tint={coach.tint} />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight">{coach.name}</h3>
                <p className="mt-1 text-sm font-bold text-[#E4682A]">{coach.role}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#5B6B70]">
                  {coach.credential}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#3C4E54]">{coach.bio}</p>
                <p className="mt-4 text-xs font-bold text-[#1D7A6B]">Teaches {coach.teaches}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
