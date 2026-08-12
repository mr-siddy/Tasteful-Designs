const COACHES = [
  {
    name: 'Ines Okonkwo',
    role: 'Co-founder · Head of Rowing',
    initials: 'IO',
    tint: '#12626c',
    bio:
      'Nine years on a national lightweight squad and two world-cup finals before she ever wrote a session for anyone else. Ines writes every rowing block in the club and still calls splits at the Wednesday 2k.',
    credit: 'British Rowing Level 3 · Indoor coaching accreditation',
  },
  {
    name: 'Callum Reyes-Barrett',
    role: 'Co-founder · Head of Strength',
    initials: 'CR',
    tint: '#e0813d',
    bio:
      'Six years rehabbing rowers who had been trained into the ground, which is a good way to learn what not to program. Callum runs the annexe and is the reason nothing here is loaded off a whiteboard.',
    credit: 'UKSCA accredited · MSc Strength & Conditioning',
  },
  {
    name: 'Marguerite Duplessis',
    role: 'Restore & soft-tissue',
    initials: 'MD',
    tint: '#5b7c81',
    bio:
      'Twelve years as a sports masseuse for two rowing clubs and a ballet company. Mags runs the recovery bay, the Friday clinic, and the only session in the building where you are told to slow down.',
    credit: 'Sports massage L5 · Breathwork practitioner',
  },
  {
    name: 'Tomas Beckley',
    role: 'Technique & testing',
    initials: 'TB',
    tint: '#0b3a41',
    bio:
      'Came in as a member in 2019 forty seconds off his old 2k and left his logistics job two years later to coach. Tomas films every landing session and runs the technique clinics for new rowers.',
    credit: 'Level 2 coach · Erg technique specialist',
  },
]

export function Coaches() {
  return (
    <section id="coaches" className="bg-[#f1e7d7]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#12626c]">On the floor</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0b3a41] md:text-5xl">
            Four coaches, and you will know all of them
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#2c565c]">
            There is no rotating cast of instructors here. Four people coach every session on the
            timetable, they all read your card, and by your second month they will know what your
            splits do when you have had a bad week at work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {COACHES.map((coach) => (
            <article
              key={coach.name}
              className="flex gap-5 rounded-3xl border border-[#0b3a41]/10 bg-[#faf6ef] p-7"
            >
              <span
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-lg font-semibold text-[#faf6ef]"
                style={{ backgroundColor: coach.tint }}
                aria-hidden="true"
              >
                {coach.initials}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[#0b3a41]">{coach.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#12626c]">{coach.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#2c565c]">{coach.bio}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[#5b7c81]">
                  {coach.credit}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
