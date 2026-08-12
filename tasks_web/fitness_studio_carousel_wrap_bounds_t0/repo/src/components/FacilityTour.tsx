const ZONES = [
  {
    name: 'The platform row',
    detail: 'Eight competition platforms with calibrated plates, Eleiko bars, and a spotter within arm’s reach.',
  },
  {
    name: 'Conditioning bay',
    detail: 'Six Concept2 rowers, four bikes, two sleds and forty feet of turf that never has a queue.',
  },
  {
    name: 'The warm-up corner',
    detail: 'Bands, boxes, a wall of rollers, and a coach who will actually watch you do the drill.',
  },
  {
    name: 'Locker rooms',
    detail: 'Six showers, towels included, and lockers you do not have to bring a padlock for.',
  },
]

const EQUIPMENT = [
  '8 Eleiko competition bars',
  '4 Rogue trap bars',
  'Calibrated plates to 0.25 kg',
  'Dumbbells 5–120 lb',
  '6 Concept2 RowErgs',
  '2 SkiErgs',
  'Belt squat and reverse hyper',
  'Chalk — real chalk, not a spray',
]

export default function FacilityTour() {
  return (
    <section id="facility" data-testid="facility" className="bg-slate-900 py-24 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-300">The room</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              4,200 square feet on Ellicott Street
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              One floor, no mirrors on the platform wall, and windows on two sides. It was a printing
              shop until 2015, which is why the ceilings are fifteen feet and the floor can take a
              dropped deadlift without anybody upstairs filing a complaint.
            </p>

            <dl className="mt-10 space-y-6">
              {ZONES.map((zone) => (
                <div key={zone.name} data-testid="facility-zone" className="border-l-2 border-lime-400 pl-5">
                  <dt className="text-lg font-bold text-white">{zone.name}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-400">{zone.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-6 shadow-2xl">
              <svg viewBox="0 0 420 300" className="w-full" role="img" aria-label="Floorplan of the gym showing the platform row, conditioning bay, warm-up corner and locker rooms">
                <rect width="420" height="300" rx="16" fill="#0b1220" />
                <rect x="18" y="18" width="384" height="264" rx="12" fill="none" stroke="#334155" strokeWidth="2" />

                <rect x="34" y="36" width="230" height="104" rx="10" fill="#1a2e05" stroke="#65a30d" strokeWidth="1.5" />
                {Array.from({ length: 4 }, (_, i) => (
                  <g key={i}>
                    <rect x={46 + i * 56} y={54} width="40" height="30" rx="5" fill="#a3e635" opacity="0.75" />
                    <rect x={46 + i * 56} y={96} width="40" height="30" rx="5" fill="#a3e635" opacity="0.55" />
                  </g>
                ))}
                <text x="44" y="48" fontSize="10" fill="#d9f99d" fontFamily="ui-sans-serif, system-ui, sans-serif">
                  PLATFORM ROW
                </text>

                <rect x="278" y="36" width="108" height="160" rx="10" fill="#082f49" stroke="#0ea5e9" strokeWidth="1.5" />
                {Array.from({ length: 3 }, (_, i) => (
                  <rect key={i} x={292} y={62 + i * 40} width="80" height="24" rx="6" fill="#38bdf8" opacity="0.6" />
                ))}
                <text x="288" y="48" fontSize="10" fill="#bae6fd" fontFamily="ui-sans-serif, system-ui, sans-serif">
                  CONDITIONING
                </text>

                <rect x="34" y="156" width="150" height="106" rx="10" fill="#1c1917" stroke="#a8a29e" strokeWidth="1.5" />
                <circle cx="74" cy="200" r="14" fill="#d6d3d1" opacity="0.5" />
                <circle cx="112" cy="216" r="10" fill="#d6d3d1" opacity="0.4" />
                <rect x="132" y="188" width="36" height="36" rx="6" fill="#d6d3d1" opacity="0.35" />
                <text x="44" y="176" fontSize="10" fill="#e7e5e4" fontFamily="ui-sans-serif, system-ui, sans-serif">
                  WARM-UP
                </text>

                <rect x="198" y="212" width="188" height="50" rx="10" fill="#292524" stroke="#78716c" strokeWidth="1.5" />
                <text x="208" y="232" fontSize="10" fill="#e7e5e4" fontFamily="ui-sans-serif, system-ui, sans-serif">
                  LOCKERS · SHOWERS
                </text>
                <rect x="198" y="156" width="188" height="42" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                <text x="208" y="182" fontSize="10" fill="#cbd5e1" fontFamily="ui-sans-serif, system-ui, sans-serif">
                  FRONT DESK · ENTRY
                </text>
              </svg>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {EQUIPMENT.map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3">
                  <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-lime-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
