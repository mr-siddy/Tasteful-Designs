const INSTRUCTORS = [
  {
    name: 'Imogen Castellanos',
    role: 'Founder & lead instructor',
    hue: '#C2571F',
    bio: 'Eleven years dancing with the Waterfire Contemporary company, then six as a movement-rehab specialist in the outpatient clinic at Blackstone General. Opened Sundial in 2016 with four reformers and a card table for a front desk.',
    creds: ['Meridian Reformer, Level 3', 'Clinical movement rehab, 6 yrs'],
  },
  {
    name: 'Dara Whitlock',
    role: 'Reformer & post-operative',
    hue: '#24493B',
    bio: 'Writes every Post-Op block in the studio, usually in conversation with the member’s surgeon or physical therapist. Twelve years teaching; spent four of them in a hospital cardiac-rehab gym and it shows in how carefully she progresses load.',
    creds: ['Meridian Reformer, Level 3', 'Post-surgical exercise cert.'],
  },
  {
    name: 'Kwame Adjei',
    role: 'Barre-strength & Slow Strength',
    hue: '#8FB8C9',
    bio: 'Came to Pilates sideways, through eight years coaching sprinters at Rhode Island club level. Teaches the barbell classes and the tower wall, and is the reason half the room can now do a proper hip hinge with a straight face.',
    creds: ['Meridian Reformer, Level 2', 'Track & field coaching, Level 3'],
  },
  {
    name: 'Yuki Sorensen',
    role: 'Mobility & breath',
    hue: '#E8A33F',
    bio: 'Runs everything that happens upstairs in the loft. Studied respiratory mechanics before teaching, and has a genuinely alarming ability to spot which side of your ribcage is not moving from the other end of the room.',
    creds: ['Loaded mobility, Level 2', 'Breath mechanics practitioner'],
  },
]

function Portrait({ name, hue }: { name: string; hue: string }) {
  return (
    <svg viewBox="0 0 96 96" className="h-20 w-20 shrink-0" role="img" aria-label={`Drawn portrait medallion of ${name}`}>
      <circle cx="48" cy="48" r="46" fill="#F1E7D2" stroke={hue} strokeWidth="3" />
      <circle cx="48" cy="38" r="15" fill={hue} opacity="0.85" />
      <path d="M18 84 C 24 60, 72 60, 78 84 Z" fill={hue} opacity="0.55" />
      <path d="M30 34 C 36 22, 60 22, 66 34" fill="none" stroke="#1E1B16" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export function InstructorRoster() {
  return (
    <section id="instructors" className="border-y border-[#E3D6BE] bg-[#FFFCF5]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C2571F]">
            Four people, no rotating roster
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Who is going to be teaching you
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4A4436]">
            Every instructor here is on staff, salaried and in the building most days of the week.
            You will not get a stranger covering your Tuesday because someone took a better-paid
            class across town.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {INSTRUCTORS.map((instructor) => (
            <li
              key={instructor.name}
              className="flex gap-5 rounded-3xl border border-[#E3D6BE] bg-[#F7F1E6] p-7"
            >
              <Portrait name={instructor.name} hue={instructor.hue} />
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{instructor.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#C2571F]">
                  {instructor.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#4A4436]">{instructor.bio}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {instructor.creds.map((cred) => (
                    <li
                      key={cred}
                      className="rounded-full border border-[#E3D6BE] bg-white/60 px-3 py-1 text-[11px] text-[#6B6455]"
                    >
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
