const CAPABILITIES = [
  {
    title: 'Works with no bars',
    copy: 'Everything a technician touches is written to the phone first. Photos, readings, parts and signatures queue locally and upload when signal returns — a basement boiler room is the normal case, not the edge case.',
  },
  {
    title: 'Job history in the driveway',
    copy: 'Before the tech knocks, the app has the last four visits, the equipment nameplate photos, the gate code and the note that the dog is friendly but the customer is not.',
  },
  {
    title: 'Parts off the truck, not off memory',
    copy: 'Scan a barcode and the part posts to the work order, comes off truck stock, and drops onto the invoice at the price book rate. Nobody reconstructs it from a napkin on Friday.',
  },
  {
    title: 'Payment before the tailgate closes',
    copy: 'Tap-to-pay on the phone, ACH for the property managers, and a signed PDF in the customer inbox before the truck leaves the lot.',
  },
]

export default function TruckAppSection() {
  return (
    <section data-testid="truck-app" className="bg-[#0A1220] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <figure className="mx-auto w-full max-w-sm">
          <svg
            viewBox="0 0 300 520"
            className="h-[420px] w-full"
            role="img"
            aria-label="The Rivetwork truck app showing an open work order with readings and photos"
          >
            <defs>
              <linearGradient id="phoneGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1F4FD8" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#FF9F1C" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <rect x="16" y="16" width="268" height="488" rx="46" fill="url(#phoneGlow)" />
            <rect x="28" y="28" width="244" height="464" rx="38" fill="#0F1B33" />
            <rect x="40" y="40" width="220" height="440" rx="30" fill="#F6F7FB" />
            <rect x="118" y="50" width="64" height="10" rx="5" fill="#0F1B33" />

            <rect x="56" y="80" width="188" height="56" rx="14" fill="#0A1220" />
            <rect x="70" y="94" width="96" height="10" rx="5" fill="#3A4E7A" />
            <rect x="70" y="112" width="140" height="8" rx="4" fill="#22304F" />
            <circle cx="222" cy="108" r="12" fill="#FF9F1C" />

            <rect x="56" y="150" width="188" height="86" rx="14" fill="#FFFFFF" />
            <rect x="70" y="164" width="72" height="9" rx="4.5" fill="#C9D5F3" />
            <rect x="70" y="182" width="152" height="7" rx="3.5" fill="#E7ECF7" />
            <rect x="70" y="198" width="118" height="7" rx="3.5" fill="#E7ECF7" />
            <rect x="70" y="214" width="60" height="9" rx="4.5" fill="#12B76A" />

            <rect x="56" y="250" width="90" height="90" rx="14" fill="#E7ECF7" />
            <path d="M74 322l24-30 18 22 12-14 16 22z" fill="#9FB2D6" />
            <circle cx="88" cy="276" r="9" fill="#FFD9A0" />
            <rect x="154" y="250" width="90" height="90" rx="14" fill="#E7ECF7" />
            <path d="M172 322l22-28 16 20 14-16 16 24z" fill="#9FB2D6" />
            <circle cx="186" cy="276" r="9" fill="#FFD9A0" />

            <rect x="56" y="354" width="188" height="44" rx="12" fill="#FFFFFF" />
            <rect x="70" y="368" width="60" height="8" rx="4" fill="#C9D5F3" />
            <rect x="70" y="382" width="110" height="6" rx="3" fill="#E7ECF7" />

            <rect x="56" y="412" width="188" height="46" rx="14" fill="#1F4FD8" />
            <rect x="104" y="430" width="92" height="10" rx="5" fill="#FFFFFF" />
          </svg>
          <figcaption className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#9FB2D6]">
            Work order 41-2209 · Fairlane Cold Storage
          </figcaption>
        </figure>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF9F1C]">
            In the truck
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            The app your technicians will actually open
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#C6D2EA]">
            We built the truck app first and the office app second, because a field
            tool that annoys a fourteen-year journeyman does not get used — it gets
            worked around, and then your data is wrong for the next two years.
          </p>

          <dl className="mt-10 space-y-7">
            {CAPABILITIES.map((item) => (
              <div key={item.title} className="border-l-2 border-white/15 pl-5">
                <dt className="text-lg font-black tracking-tight text-white">{item.title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-[#A9BAD9]">{item.copy}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#walkthrough"
            className="mt-10 inline-flex rounded-xl border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:border-white/60 hover:bg-white/10"
          >
            Put it in a technician's hands
          </a>
        </div>
      </div>
    </section>
  )
}
