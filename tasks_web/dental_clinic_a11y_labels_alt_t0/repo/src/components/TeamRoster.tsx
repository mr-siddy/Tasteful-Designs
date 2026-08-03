const TEAM = [
  {
    name: 'Dr. Priya Nandakumar',
    role: 'Principal dentist',
    photo: '/photos/priya-nandakumar.svg',
    alt: 'Dr. Priya Nandakumar, principal dentist, photographed in the front window of the studio',
    bio: 'Bought the practice in 2015 and still takes the 7:00am list herself three days a week. Restorative work, crowns and second opinions.',
    detail: 'Fourteen years qualified · Restorative dentistry',
  },
  {
    name: 'Dr. Theo Marchetti',
    role: "Children's dentist",
    photo: '/photos/theo-marchetti.svg',
    alt: 'Dr. Theo Marchetti, the children’s dentist, standing on the first-floor landing',
    bio: 'Runs the children’s floor and every first visit under twelve. Believes a child who leaves laughing is worth more than a child who leaves polished.',
    detail: 'Paediatric residency · Four children of his own',
  },
  {
    name: 'Renée Aboagye',
    role: 'Lead hygienist',
    photo: '/photos/renee-aboagye.svg',
    alt: 'Renée Aboagye, lead hygienist, beside the hygiene chair in room two',
    bio: 'Nine years with us and the reason our gum-disease numbers are what they are. Will show you the two spots you miss instead of listing all twelve.',
    detail: 'Periodontal therapy · Saturday hygiene lists',
  },
  {
    name: 'Wes Okonkwo',
    role: 'Treatment coordinator',
    photo: '/photos/wes-okonkwo.svg',
    alt: 'Wes Okonkwo, treatment coordinator, at the front desk with the appointment book open',
    bio: 'Answers the phone, reads every appointment request, argues with insurers on your behalf and knows which slot you will actually keep.',
    detail: 'At the desk since 2019 · Insurance and payment plans',
  },
]

export function TeamRoster() {
  return (
    <section id="team" data-testid="team" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2fb99b]">
              Who you will meet
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Four people, and you will see the same ones every time
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#0b2d45]/70">
            We do not use locums. If your dentist is away, we move your appointment rather than hand
            you to a stranger halfway through a course of treatment.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((person) => (
            <article key={person.name} data-testid="team-member" className="group">
              <div className="overflow-hidden rounded-3xl border border-[#0b2d45]/10 bg-[#eaf4f5]">
                <img
                  data-testid="team-photo"
                  src={person.photo}
                  alt={person.alt}
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover transition group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold">{person.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#2fb99b]">
                {person.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#0b2d45]/70">{person.bio}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-[#0b2d45]/45">
                {person.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
