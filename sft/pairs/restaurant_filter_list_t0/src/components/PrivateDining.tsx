const LOFT_FACTS = [
  { label: 'Seated', value: '24 guests' },
  { label: 'Standing', value: '40 guests' },
  { label: 'Minimum spend', value: '$1,900 midweek' },
  { label: 'Booked through', value: 'Tomás Vela' },
]

export function PrivateDining() {
  return (
    <section id="loft" aria-labelledby="loft-heading" className="border-b border-[#241C17]/10 bg-[#EDE3D3]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-[#241C17]/12 bg-[#FBF6EE] p-6 shadow-sm">
          <svg
            viewBox="0 0 420 320"
            className="w-full"
            role="img"
            aria-label="Floor plan of the upstairs loft showing one long table, the service stair and four windows"
          >
            <rect x="12" y="12" width="396" height="296" rx="18" fill="#F3E4D0" />
            <rect x="34" y="34" width="352" height="252" rx="12" fill="none" stroke="#241C17" strokeWidth="3" />
            <rect x="128" y="96" width="164" height="128" rx="10" fill="#B5763F" />
            <rect x="136" y="104" width="148" height="112" rx="8" fill="#D19A5B" />
            {[0, 1, 2, 3].map((i) => (
              <circle key={`l-${i}`} cx="108" cy={116 + i * 30} r="11" fill="#4A5D3A" />
            ))}
            {[0, 1, 2, 3].map((i) => (
              <circle key={`r-${i}`} cx="312" cy={116 + i * 30} r="11" fill="#4A5D3A" />
            ))}
            <circle cx="210" cy="76" r="11" fill="#4A5D3A" />
            <circle cx="210" cy="244" r="11" fill="#4A5D3A" />
            <path d="M34 60h24M34 96h24M34 132h24M34 168h24" stroke="#C4552B" strokeWidth="6" strokeLinecap="round" />
            <rect x="330" y="240" width="56" height="46" rx="8" fill="#241C17" opacity="0.15" />
            <path d="M338 282v-34M352 282v-26M366 282v-18M380 282v-10" stroke="#241C17" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <p className="mt-4 text-sm leading-relaxed text-[#6B5F55]">
            The loft sits directly above the hearth, so the floor is warm all winter and you can hear
            the kitchen working underneath you. Four windows onto Monroe Street.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4552B]">
            Upstairs, behind the stair
          </p>
          <h2 id="loft-heading" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            The Loft takes twenty-four people around one table
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#544940]">
            We built it for the kind of dinner that has a reason — a fortieth, a rehearsal, a company
            that has just closed something and wants to eat properly about it. There is one table and
            everybody sits at it, which is the point.
          </p>
          <p className="mt-4 leading-relaxed text-[#544940]">
            Menus are written with you about a fortnight out, and they run family-style: four or five
            things from the hearth landing in the middle of the table, bread and butter all night, and
            two sweets at the end. Tomás will build a wine flight around it or leave the list open,
            whichever you prefer.
          </p>

          <dl className="mt-9 grid grid-cols-2 gap-6 border-t border-[#241C17]/12 pt-8">
            {LOFT_FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[11px] font-bold uppercase tracking-wider text-[#7A6B5F]">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-xl font-black tracking-tight">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#book"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#241C17]/25 px-6 py-3 text-sm font-bold text-[#241C17] hover:border-[#C4552B] hover:text-[#C4552B]"
          >
            Enquire about the Loft
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true" focusable="false">
              <path
                d="M4 10h12M11 5l5 5-5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
