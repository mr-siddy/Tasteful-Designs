import { PortraitMedallion } from './Icons'

const TEAM = [
  {
    name: 'Dr. Nadia Kwarteng',
    initials: 'NK',
    tint: '#2AA79B',
    role: 'Principal dentist, owner since 2013',
    bio: 'Trained at Guy’s, spent six years in a busy hospital restorative unit, and opened Tidewater because she was tired of quoting people prices they had never been shown. Runs the mill and most of the crown work.',
  },
  {
    name: 'Dr. Tomas Bergerac',
    initials: 'TB',
    tint: '#F26D5B',
    role: 'Endodontist, Tuesdays and Thursdays',
    bio: 'Does nothing but root canals, under a microscope, roughly nine hundred of them so far. If your tooth has been called hopeless somewhere else, he is the second opinion worth getting.',
  },
  {
    name: 'Alina Petrova',
    initials: 'AP',
    tint: '#5B87B0',
    role: 'Hygienist and periodontal therapist',
    bio: 'Twelve years in practice and the person patients ask for by name. Runs the gum health programme and the smoking-cessation referrals, and is unreasonably good with nervous teenagers.',
  },
  {
    name: 'Marta Oyelaran',
    initials: 'MO',
    tint: '#F2B45B',
    role: 'Practice manager, front desk',
    bio: 'Books the emergency slots, argues with insurers on your behalf, and is the one who will tell you honestly whether the whitening is worth it. Answers the phone before the third ring.',
  },
]

export function ClinicianRoster() {
  return (
    <section id="team" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2AA79B]">
            Four people, no locums
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12263F] sm:text-4xl">
            The same faces every time you come in
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5B7089]">
            Tidewater has never used an agency dentist. Whoever starts your treatment finishes it, and
            you can ask for them by name when you book.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {TEAM.map((person) => (
            <article
              key={person.name}
              className="flex gap-5 rounded-2xl border border-[#12263F]/8 bg-[#F1F5F7] p-6"
            >
              <PortraitMedallion
                initials={person.initials}
                tint={person.tint}
                className="h-20 w-20 shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[#12263F]">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#2AA79B]">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#5B7089]">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
