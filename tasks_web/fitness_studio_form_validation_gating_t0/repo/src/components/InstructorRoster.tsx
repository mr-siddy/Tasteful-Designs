import { Monogram } from './Icons'

const TEACHERS = [
  {
    name: 'Tova Lindqvist',
    initials: 'TL',
    tint: '#1F4A3C',
    role: 'Founder · reformer and strength',
    credentials: 'BASI-certified · 9 years in outpatient physio',
    bio:
      'Tova spent nine years rebuilding knees and shoulders at Corvin Street before she taught a single class, which is why the beginner track here is the best-written thing in the building. She teaches the 5:45am reformer four mornings a week and still writes every progression herself.',
  },
  {
    name: 'Desmond Achebe',
    initials: 'DA',
    tint: '#8A5230',
    role: 'Head of the loft · barbell',
    credentials: 'NSCA-CSCS · former collegiate hammer thrower',
    bio:
      'Desmond runs the platforms and the twelve-week progressions. He coaches beginners the same way he coaches the two members who compete in masters powerlifting: percentages written down, cues in plain English, nothing loaded before it is earned.',
  },
  {
    name: 'Priya Raghavan',
    initials: 'PR',
    tint: '#33697F',
    role: 'Heated yoga and slow flow',
    credentials: 'E-RYT 500 · trained in Mysore and Portland',
    bio:
      'Priya has taught here since the second month we were open and has never once used a microphone. Her Sunday nine o\'clock has a waitlist most weeks; her Thursday slow flow is where half the wharf goes to fix its back.',
  },
  {
    name: 'Camille Beaulieu',
    initials: 'CB',
    tint: '#6B4A82',
    role: 'Pre and postnatal · restorative',
    credentials: 'Pelvic-floor certified · doula since 2014',
    bio:
      'Camille built the Postnatal Return cohort in 2019 after having her second at the clinic across the road. She screens every person in week one, works with three midwives on the wharf, and keeps the babies-on-the-back-mats rule that everyone loves.',
  },
]

export default function InstructorRoster() {
  return (
    <section id="teachers" data-testid="teachers" aria-labelledby="teachers-heading" className="bg-[#EDF3EF]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C4623A]">Who teaches you</p>
          <h2 id="teachers-heading" className="mt-3 text-3xl font-black tracking-tight text-[#16211C] sm:text-4xl">
            Four teachers, all of them here on purpose
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B5A52]">
            No rotating roster of subs and no auditions off an app. Everyone on
            this list has taught at Sablewood for at least three years and is
            paid for the hour they spend planning as well as the one they teach.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TEACHERS.map((teacher) => (
            <article
              key={teacher.name}
              data-testid="teacher-card"
              className="flex gap-5 rounded-2xl border border-[#DCE7E0] bg-[#FFFCF8] p-7"
            >
              <Monogram initials={teacher.initials} tint={teacher.tint} title={`Portrait of ${teacher.name}`} />
              <div>
                <h3 className="text-lg font-black tracking-tight text-[#16211C]">{teacher.name}</h3>
                <p className="mt-1 text-sm font-bold text-[#1F4A3C]">{teacher.role}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#8A9A90]">
                  {teacher.credentials}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5A52]">{teacher.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
