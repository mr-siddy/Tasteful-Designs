import { SectionHeading, Shell } from './PageKit'

const COACHES = [
  {
    name: 'Marisol Enders',
    role: 'Co-founder · Head coach, strength',
    initials: 'ME',
    tint: '#D9481F',
    credentials: 'USAW Level 2 · former collegiate throws coach · 14 years on the floor',
    body:
      'Marisol wrote the assessment every member goes through and still coaches the 6:00am block four days a week. She is the person who will tell you your deadlift is fine and your sleep is the problem.',
  },
  {
    name: 'Dev Achterberg',
    role: 'Co-founder · Physiotherapist',
    initials: 'DA',
    tint: '#12554D',
    credentials: 'MSc Physiotherapy · Return to Strength lead · runs the rehab annex',
    body:
      'Dev opened the annex after a decade of watching post-surgery clients get discharged into gyms that had no idea what to do with them. He handles every bridge program and most of the awkward questions.',
  },
  {
    name: 'Nia Okonkwo',
    role: 'Coach · Engine Room and Hybrid Athlete',
    initials: 'NO',
    tint: '#14181D',
    credentials: 'CSCS · 2:41 marathon · aerobic testing and threshold work',
    body:
      'Nia built the conditioning testing protocol and coaches everyone whose sport happens outside the building. She is unreasonably cheerful at 6:30am and will absolutely notice if you shorten a row.',
  },
  {
    name: 'Sam Reyes-Tull',
    role: 'Coach · Barbell Foundations and Masters 50+',
    initials: 'SR',
    tint: '#7A6E60',
    credentials: 'USAW Level 1 · Precision Nutrition L1 · eight years coaching older lifters',
    body:
      'Sam teaches almost every Foundations block, which means most members here learned to squat from him. He is patient in a way that makes an empty bar feel like a reasonable place to spend a month.',
  },
]

export default function CoachRoster() {
  return (
    <section id="coaches" className="bg-[#F2EAE0] py-20 sm:py-24">
      <Shell>
        <SectionHeading
          eyebrow="Who coaches you"
          title="Five full-time coaches, no rotating contractors"
          lede="You get the same coach for a whole block, and they keep your file. Four of them are here; Priya Raghunathan handles nutrition for Full Program members and runs the Thursday kitchen workshop."
          tone="pine"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {COACHES.map((coach) => (
            <article
              key={coach.name}
              data-testid="coach-card"
              className="flex h-full gap-5 rounded-3xl border border-[#E2D6C6] bg-[#FBF7F1] p-7"
            >
              <svg
                className="h-16 w-16 shrink-0"
                viewBox="0 0 64 64"
                role="img"
                aria-label={`Portrait medallion for ${coach.name}`}
              >
                <circle cx="32" cy="32" r="31" fill={coach.tint} />
                <circle cx="32" cy="32" r="27" fill="none" stroke="#FBF7F1" strokeWidth="1.5" opacity="0.55" />
                <text
                  x="32"
                  y="39"
                  textAnchor="middle"
                  fill="#FBF7F1"
                  fontSize="20"
                  fontWeight="800"
                  letterSpacing="1"
                >
                  {coach.initials}
                </text>
              </svg>
              <div>
                <h3 className="text-lg font-black tracking-tight text-[#14181D]">{coach.name}</h3>
                <p className="mt-0.5 text-sm font-semibold text-[#D9481F]">{coach.role}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-[#7A6E60]">
                  {coach.credentials}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[#4A4438]">{coach.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Shell>
    </section>
  )
}
