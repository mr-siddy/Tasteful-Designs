type Treatment = {
  name: string
  price: string
  duration: string
  blurb: string
  icon: 'exam' | 'clean' | 'filling' | 'crown' | 'root' | 'brace'
}

const TREATMENTS: Treatment[] = [
  {
    name: 'New patient exam',
    price: '$95',
    duration: '45 minutes',
    icon: 'exam',
    blurb:
      'A full look around, low-dose digital x-rays, a gum check and photographs on the screen in front of you. You leave with a written plan and what each item costs, and nothing gets booked that day.',
  },
  {
    name: 'Hygienist clean',
    price: '$130',
    duration: '50 minutes',
    icon: 'clean',
    blurb:
      'Scale, polish and a gum-pocket chart so you can see whether things improved since last time. Bring your own brush and Ilse will tell you honestly whether you are wasting money on it.',
  },
  {
    name: 'White filling',
    price: '$210 — $290',
    duration: '40 minutes',
    icon: 'filling',
    blurb:
      'Composite matched to the tooth beside it, placed under rubber dam so nothing ends up in the back of your throat. The price depends on how many surfaces, and we tell you which before we start.',
  },
  {
    name: 'Same-day ceramic crown',
    price: '$1,190',
    duration: '2 hours, one visit',
    icon: 'crown',
    blurb:
      'Scanned, designed and milled in the room behind reception while you wait. No putty impression, no temporary that falls off over the weekend, no second appointment three weeks later.',
  },
  {
    name: 'Root canal treatment',
    price: '$780 — $1,150',
    duration: '90 minutes',
    icon: 'root',
    blurb:
      'Done under a microscope by Dr. Ovalle, usually in one sitting. Front teeth sit at the lower end of that range and molars at the top, and you will know which before you agree to anything.',
  },
  {
    name: 'Clear aligner assessment',
    price: 'Free',
    duration: '30 minutes',
    icon: 'brace',
    blurb:
      'A scan and a simulation of where your teeth could end up, with a flat quote for the full course. About one in four people who come in for this are told they do not need it.',
  },
]

function TreatmentIcon({ kind }: { kind: Treatment['icon'] }) {
  const common = { fill: 'none', stroke: '#14312c', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="15" fill="#f3e9dd" />
      {kind === 'exam' && (
        <>
          <circle cx="14" cy="15" r="6" {...common} />
          <path d="M18.4 19.4L24 25" {...common} />
        </>
      )}
      {kind === 'clean' && (
        <>
          <path d="M9 21l9-9 3 3-9 9H9z" {...common} />
          <path d="M20 10l2-2 2 2-2 2z" {...common} />
        </>
      )}
      {kind === 'filling' && (
        <>
          <path d="M16 8c2.6 0 3.8 1.2 5.4 1.2 2 0 3.4 1.5 3.4 4 0 3.2-1.5 5.6-2.2 8-.6 2-1.2 3.2-2.3 3.2-1.2 0-1.6-2-2-3.6-.4-1.4-.8-2.2-1.3-2.2s-.9.8-1.3 2.2c-.4 1.6-.9 3.6-2.1 3.6-1.1 0-1.7-1.2-2.3-3.2-.7-2.4-2.2-4.8-2.2-8 0-2.5 1.4-4 3.4-4C12.1 9.2 13.4 8 16 8z" {...common} />
          <path d="M13.5 13.5h5" stroke="#d9682f" strokeWidth="2.2" strokeLinecap="round" />
        </>
      )}
      {kind === 'crown' && (
        <>
          <path d="M8 20l1.5-9 4 4 2.5-5 2.5 5 4-4L24 20z" {...common} />
          <path d="M9 23h14" {...common} />
        </>
      )}
      {kind === 'root' && (
        <>
          <path d="M16 8c3 0 5 1.6 5 4.4 0 3-1.6 4.6-2.2 7.4-.4 2-.8 3.4-1.6 3.4s-1-1.6-1.2-3M16 8c-3 0-5 1.6-5 4.4 0 3 1.6 4.6 2.2 7.4" {...common} />
          <path d="M16 12v9" stroke="#d9682f" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      {kind === 'brace' && (
        <>
          <path d="M7 14c3 3 15 3 18 0" {...common} />
          <path d="M7 19c3 3 15 3 18 0" {...common} />
          <circle cx="16" cy="16.6" r="1.6" fill="#d9682f" />
        </>
      )}
    </svg>
  )
}

export function TreatmentMenu() {
  return (
    <section id="treatments" className="bg-[#fbf6f0]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9682f]">
            What we do and what it costs
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#14312c] sm:text-4xl">
            Every treatment, with the price on it
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#3f524b]">
            Half the reason people put off the dentist is not knowing what the bill will be. So
            here is the whole list. These are the prices you pay if you have no insurance at all;
            if you do have cover, we bill them first and you pay the difference.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t) => (
            <li
              key={t.name}
              data-testid="treatment-card"
              className="flex flex-col rounded-2xl border border-[#14312c]/10 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <TreatmentIcon kind={t.icon} />
              <h3 className="mt-5 font-serif text-xl font-semibold text-[#14312c]">{t.name}</h3>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="font-serif text-2xl font-semibold text-[#d9682f]">{t.price}</span>
                <span className="text-xs uppercase tracking-[0.16em] text-[#6b7d75]">
                  {t.duration}
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#3f524b]">{t.blurb}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 rounded-2xl border border-dashed border-[#14312c]/20 bg-[#f3e9dd]/60 px-6 py-5 text-sm leading-relaxed text-[#3f524b]">
          Emergency appointments are $140 including the x-ray, and registered patients in real
          pain get one the same day even if it means we stay late. If a treatment you need is not
          on this list, ask at reception and we will quote it in writing before you commit.
        </p>
      </div>
    </section>
  )
}
