import { PortraitPlate } from './Icons'

const TEAM = [
  {
    name: 'Dr. Nadia Okonkwo, DDS',
    role: 'Founder · restorative and implant dentistry',
    initials: 'NO',
    tone: '#0B2540',
    body: 'Trained at the University of Washington, opened Alder & Bay in 2014 with one chair and a borrowed autoclave. She does the implants, the same-day crowns and most of the full-mouth rehabilitation, and she still writes every treatment plan by hand before it is typed up.',
  },
  {
    name: 'Dr. Theo Marchetti, DMD',
    role: 'Cosmetic dentistry and clear aligners',
    initials: 'TM',
    tone: '#C2703D',
    body: 'Joined in 2019 from a practice in Portland. He plans every aligner case himself rather than sending it to a lab technician, which is why refinements here are included rather than billed, and he has an unnerving eye for shade matching on a single front tooth.',
  },
  {
    name: 'Priya Raghunathan, RDH',
    role: 'Hygiene lead',
    initials: 'PR',
    tone: '#4E7C6A',
    body: 'Eight years in the second chair and the person most patients actually come back for. She runs the periodontal programme, teaches the interdental technique that finally works for you, and will tell you kindly but plainly when the electric brush is doing nothing.',
  },
  {
    name: 'Marisol Vega',
    role: 'Patient coordinator',
    initials: 'MV',
    tone: '#7A6A58',
    body: 'Answers the phone, files the claims, and knows which plans pay for what without having to look it up. If you have ever been surprised by a dental bill, Marisol is the reason it will not happen here — she checks the benefits before you sit down, not after.',
  },
]

export function CareTeam() {
  return (
    <section id="team" aria-labelledby="team-heading" className="bg-[#F4EDE3]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2703D]">Who you will meet</p>
          <h2 id="team-heading" className="mt-3 text-3xl font-semibold tracking-tight text-[#0B2540] sm:text-4xl">
            Nine people, and you will learn all their names
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#42566A]">
            There is no rotating roster and no associate you have never met finishing work someone else
            started. Four of us are in front of patients every day; the rest keep the room turning over
            and the claims moving.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TEAM.map((person) => (
            <article
              key={person.name}
              className="flex gap-6 rounded-3xl border border-[#E4D8C8] bg-white p-7 shadow-sm"
            >
              <div className="shrink-0">
                <PortraitPlate tone={person.tone} initials={person.initials} />
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-[#0B2540]">{person.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#9A8973]">{person.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#42566A]">{person.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
