type Clinician = {
  name: string
  role: string
  since: string
  bio: string
  skin: string
  hair: string
  tunic: string
}

const TEAM: Clinician[] = [
  {
    name: 'Dr. Maren Okonkwo',
    role: 'Principal dentist',
    since: 'Here since 2009',
    bio: 'Bought the practice at thirty-one and put the price board up in her first week. Takes most of the nervous referrals and still does Saturday mornings herself.',
    skin: '#8B5E3C',
    hair: '#231A12',
    tunic: '#332A56',
  },
  {
    name: 'Dr. Sam Ferreira',
    role: 'Restorative dentist',
    since: 'Here since 2016',
    bio: 'Runs the milling lab and fitted ninety-one of last year’s same-day crowns. Teaches the ceramics module at Wyeford College on Wednesdays.',
    skin: '#E8B48C',
    hair: '#4A3220',
    tunic: '#5B4BA8',
  },
  {
    name: 'Ijeoma Balogun',
    role: 'Lead hygienist',
    since: 'Here since 2014',
    bio: 'Has a genuinely famous five-minute brushing lesson and a rule that nobody leaves her chair feeling told off. Sees gum-treatment patients on Tuesdays and Fridays.',
    skin: '#6B4226',
    hair: '#151013',
    tunic: '#E4735B',
  },
  {
    name: 'Rufus Deane',
    role: 'Practice manager',
    since: 'Here since 2011',
    bio: 'The voice on the phone, the keeper of the emergency slot and the owner of the waiting-room fish tank. Sorts insurance claims so patients never have to.',
    skin: '#F0C9A6',
    hair: '#8A7052',
    tunic: '#7E71C4',
  },
]

function Portrait({ clinician }: { clinician: Clinician }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label={`Portrait illustration of ${clinician.name}, ${clinician.role.toLowerCase()}`}
      className="h-auto w-full"
    >
      <rect width="200" height="200" rx="24" fill="#F1ECE3" />
      <circle cx="100" cy="82" r="42" fill={clinician.skin} />
      <path d="M58 84a42 42 0 0 1 84 0c0-30-14-44-42-44S58 54 58 84Z" fill={clinician.hair} />
      <circle cx="86" cy="82" r="4" fill="#1C1A17" />
      <circle cx="114" cy="82" r="4" fill="#1C1A17" />
      <path
        d="M88 100c4 5 20 5 24 0"
        fill="none"
        stroke="#1C1A17"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M46 200c0-38 24-60 54-60s54 22 54 60Z" fill={clinician.tunic} />
      <path d="M86 140h28l-14 26-14-26Z" fill="#FBF9F5" />
      <circle cx="140" cy="168" r="9" fill="#FBF9F5" opacity="0.8" />
    </svg>
  )
}

export function TeamRoster() {
  return (
    <section id="team" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8B8375]">
            Who you will actually see
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#332A56]">
            Four people, and no locums
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5A5347]">
            The same faces have been here for over a decade. You are booked with a named clinician
            and you stay with them, which is why nobody has to explain their history twice.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((clinician) => (
            <article
              key={clinician.name}
              data-testid="team-member"
              className="rounded-3xl border border-[#EFE9E0] bg-[#FBF9F5] p-6 shadow-sm"
            >
              <Portrait clinician={clinician} />
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#1C1A17]">
                {clinician.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#5B4BA8]">{clinician.role}</p>
              <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-[#8B8375]">
                {clinician.since}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#6A6255]">{clinician.bio}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-[#6A6255]">
          Every clinician here is registered with the General Dental Council and the practice is
          inspected annually. Registration numbers are on the frame beside the reception desk.
        </p>
      </div>
    </section>
  )
}
