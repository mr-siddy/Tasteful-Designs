const CLINICIANS = [
  {
    name: 'Dr. Priya Raman',
    role: 'Principal dentist · restorative and same-day ceramics',
    creds: 'BDS, Manchester 2004 · Fellow, Academy of General Dentistry',
    body: 'Bought the building in 2011 when it was still full of lathes and pigeon nests. Designs every crown that comes off the mill herself and will happily talk you through the software if you find that sort of thing interesting.',
    human: 'Cycles in from Sorrel Street in all weather. Keeps a very old dog under the reception desk on Fridays.',
    hue: '#d9682f',
  },
  {
    name: 'Dr. Marcus Ovalle',
    role: 'Partner · endodontics and sedation',
    creds: 'DMD, Oregon Health & Science 2009 · Certified in oral conscious sedation',
    body: 'Does the root canals nobody else wants to attempt, under a microscope, usually in one sitting. Has an unusually calm voice and an unusually dry sense of humour, which patients seem to find equally useful.',
    human: 'Plays double bass badly in a Foundry Quarter covers band. Will not be drawn on the band name.',
    hue: '#20524a',
  },
  {
    name: 'Ilse Bergqvist',
    role: 'Lead hygienist · periodontal care',
    creds: 'RDH, Portland 2013 · Periodontal maintenance certification',
    body: 'Runs the gum programme and the school visits at Kilnwood Primary. She is the reason the recall reminders are polite rather than nagging, and the reason half our patients finally learned to floss properly.',
    human: 'Grows tomatoes on the roof terrace and gives most of them away in August.',
    hue: '#8a5a2b',
  },
]

function Portrait({ hue, initials }: { hue: string; initials: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24"
      role="img"
      aria-label={`Portrait illustration for ${initials}`}
    >
      <circle cx="60" cy="60" r="60" fill="#f3e9dd" />
      <circle cx="60" cy="46" r="20" fill={hue} />
      <path d="M18 116c4-24 20-36 42-36s38 12 42 36z" fill={hue} opacity="0.85" />
      <path d="M18 116h84" stroke="#14312c" strokeWidth="2" opacity="0.15" />
      <text
        x="60"
        y="54"
        textAnchor="middle"
        fontSize="18"
        fontFamily="serif"
        fill="#fbf6f0"
        letterSpacing="1"
      >
        {initials}
      </text>
    </svg>
  )
}

export function DentistRoster() {
  return (
    <section id="team" className="bg-[#fbf6f0]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9682f]">
            Three people, not a rotating list
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#14312c] sm:text-4xl">
            You will see the same face next time
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#3f524b]">
            Nobody here is a locum passing through on a six-month contract. The two dentists own
            the practice and the hygienist has been on Kilnwood Street since 2014.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {CLINICIANS.map((c) => (
            <li
              key={c.name}
              data-testid="clinician-card"
              className="rounded-2xl border border-[#14312c]/10 bg-white p-7 shadow-sm"
            >
              <Portrait
                hue={c.hue}
                initials={c.name
                  .replace('Dr. ', '')
                  .split(' ')
                  .map((w) => w[0])
                  .join('')}
              />
              <h3 className="mt-5 font-serif text-xl font-semibold text-[#14312c]">{c.name}</h3>
              <p className="mt-1 text-sm font-medium text-[#d9682f]">{c.role}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#6b7d75]">{c.creds}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#3f524b]">{c.body}</p>
              <p className="mt-4 border-t border-[#14312c]/10 pt-4 text-sm italic leading-relaxed text-[#6b7d75]">
                {c.human}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
