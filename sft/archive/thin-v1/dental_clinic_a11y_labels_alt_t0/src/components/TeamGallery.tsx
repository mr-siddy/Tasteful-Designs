type Clinician = {
  id: string
  name: string
  role: string
  bio: string
  photo: string
  photoAlt: string
}

const CLINICIANS: Clinician[] = [
  {
    id: 'mara-ellison',
    name: 'Dr. Mara Ellison',
    role: 'Principal dentist · implants and restorative',
    bio: 'Opened the practice in 2009 and still takes the first appointment of the day. Happiest rebuilding a tooth someone was told to give up on.',
    photo: '/photos/mara-ellison.svg',
    photoAlt: 'Dr. Mara Ellison, principal dentist, standing in the Kingsmead Row surgery',
  },
  {
    id: 'tobias-frey',
    name: 'Dr. Tobias Frey',
    role: 'Cosmetic dentistry and clear aligners',
    bio: 'Talks patients out of more treatment than he talks them into. Runs the Thursday evening clinic for people who cannot take a day off.',
    photo: '/photos/tobias-frey.svg',
    photoAlt: 'Dr. Tobias Frey, cosmetic dentist, at the treatment room window',
  },
  {
    id: 'imogen-vance',
    name: 'Imogen Vance',
    role: 'Lead hygienist',
    bio: 'Fifteen years of gentle scaling and unhurried explanations. Sees most of our nervous patients, usually more than once.',
    photo: '/photos/imogen-vance.svg',
    photoAlt: 'Imogen Vance, lead hygienist, seated beside the hygiene chair',
  },
]

export function TeamGallery() {
  return (
    <section id="team" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-center text-3xl font-bold text-teal-900">Who you&rsquo;ll see</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-teal-700">
        Three clinicians, one waiting room, and no rotating locums. You will know who is
        treating you before you arrive.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {CLINICIANS.map((c) => (
          <article
            key={c.id}
            data-testid="clinician-card"
            className="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm"
          >
            <img
              src={c.photo}
              alt={c.photoAlt}
              data-testid="clinician-photo"
              width={300}
              height={300}
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <h3 className="mt-5 text-lg font-semibold text-teal-900">{c.name}</h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-teal-600">
              {c.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-teal-800">{c.bio}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
