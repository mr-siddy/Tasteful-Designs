import { PortraitMedallion } from './Icons'

const PEOPLE = [
  {
    initials: 'PR',
    tone: '#1B5049',
    name: 'Dr. Priya Raghunathan',
    role: 'Principal dentist · GDC 84120',
    bio:
      'Opened Marigold on Pennant Street in 2011 after nine years in hospital restorative work. Takes the long appointments and most of the nervous first visits.',
    focus: 'Restorative work, anxious adults',
  },
  {
    initials: 'TO',
    tone: '#123B36',
    name: 'Dr. Tobi Okafor',
    role: 'Implant surgeon · GDC 91744',
    bio:
      'Places every implant we restore and teaches surgical technique two Fridays a month at the county postgraduate centre. Known for explaining the boring bits properly.',
    focus: 'Implants, oral surgery',
  },
  {
    initials: 'MK',
    tone: '#3C6B60',
    name: 'Marta Kowalczyk',
    role: 'Dental hygienist · GDC 77301',
    bio:
      'Thirteen years of gum therapy and the person most patients end up seeing most often. Will hand you a mirror and show you the two spots you keep missing.',
    focus: 'Gum health, airflow polishing',
  },
  {
    initials: 'DA',
    tone: '#8A7A5C',
    name: 'Dilan Abara',
    role: 'Practice manager',
    bio:
      'Answers the phone before nine, holds the emergency slots, and sets up every payment plan. If a bill ever confuses you, he is the one who will unpick it.',
    focus: 'Bookings, plans, complaints',
  },
]

export function ClinicianRoster() {
  return (
    <section id="team" className="bg-[#FBF7F0] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B98B22]">The people here</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#123B36] sm:text-4xl">
            A small team, and you keep the same one
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4A5A53]">
            There are four of us and no rotating locums. Whoever examines you is whoever treats you, all the way
            through to the review appointment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PEOPLE.map((person) => (
            <article
              key={person.name}
              data-testid="clinician-card"
              className="flex gap-5 rounded-2xl border border-[#123B36]/10 bg-white p-7 shadow-sm"
            >
              <PortraitMedallion initials={person.initials} tone={person.tone} />
              <div>
                <h3 className="text-lg font-semibold text-[#123B36]">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#B98B22]">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4A5A53]">{person.bio}</p>
                <p className="mt-3 inline-flex rounded-full bg-[#EFF4EE] px-3 py-1 text-xs font-semibold text-[#1B5049]">
                  {person.focus}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
