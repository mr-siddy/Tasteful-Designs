const AMENITIES = [
  { name: 'Cedar sauna', detail: 'Eight seats, 88°C, on from 5:30 am' },
  { name: 'Two cold tubs', detail: 'Held at 9°C with a two-minute timer' },
  { name: 'Compression boots', detail: 'Four pairs, twenty-minute cycles' },
  { name: 'Quiet bunks', detail: 'Three curtained bunks for a real nap' },
  { name: 'Mobility bay', detail: 'Rings, bands, benches and a rack of rollers' },
  { name: 'Filter coffee', detail: 'Ground on site, free, honesty jar for pastries' },
  { name: 'Full changing rooms', detail: 'Towels included, twelve day lockers' },
  { name: 'Skylight stretch floor', detail: 'Sixty square metres under the old glass' },
]

export function RecoveryLoft() {
  return (
    <section className="border-y border-[#E2D8C6] bg-[#EFE6D8]">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <figure className="rounded-3xl border border-[#D6C8AE] bg-[#FBF7F1] p-6 shadow-sm">
          <svg
            viewBox="0 0 380 300"
            role="img"
            aria-label="Floorplan of the Redpine recovery loft showing the sauna, two cold tubs, bunks and stretch floor"
            className="h-auto w-full"
          >
            <rect x="8" y="8" width="364" height="284" rx="18" fill="#FFFFFF" stroke="#123B31" strokeWidth="3" />
            <rect x="28" y="28" width="140" height="104" rx="10" fill="#D2683F" opacity="0.18" stroke="#D2683F" strokeWidth="2" />
            <text x="98" y="84" textAnchor="middle" fill="#8A3F1E" fontSize="15" fontFamily="sans-serif">
              Cedar sauna
            </text>
            <rect x="188" y="28" width="76" height="104" rx="10" fill="#2F6B57" opacity="0.2" stroke="#2F6B57" strokeWidth="2" />
            <text x="226" y="76" textAnchor="middle" fill="#123B31" fontSize="13" fontFamily="sans-serif">
              Cold
            </text>
            <text x="226" y="94" textAnchor="middle" fill="#123B31" fontSize="13" fontFamily="sans-serif">
              tubs
            </text>
            <rect x="278" y="28" width="66" height="104" rx="10" fill="#123B31" opacity="0.12" stroke="#123B31" strokeWidth="2" />
            <text x="311" y="84" textAnchor="middle" fill="#123B31" fontSize="13" fontFamily="sans-serif">
              Bunks
            </text>
            <rect x="28" y="152" width="316" height="118" rx="10" fill="#E8A33D" opacity="0.16" stroke="#E8A33D" strokeWidth="2" />
            <text x="186" y="206" textAnchor="middle" fill="#7A5411" fontSize="16" fontFamily="sans-serif">
              Stretch floor · 60 m²
            </text>
            <text x="186" y="232" textAnchor="middle" fill="#8A7F6C" fontSize="12" fontFamily="sans-serif">
              Rollers, rings, bands, mobility bay
            </text>
            <path d="M8 142h364" stroke="#123B31" strokeWidth="2" strokeDasharray="8 8" />
            <circle cx="352" cy="282" r="6" fill="#123B31" />
          </svg>
          <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-[#8A7F6C]">
            The loft, second floor, under the print works skylights
          </figcaption>
        </figure>

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A7F6C]">Upstairs</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#123B31]">
            The recovery loft is included, not an upsell
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#5C554A]">
            When we took the lease in 2016 the second floor was full of pallets. It is now the part
            of the building members talk about most: a cedar sauna, two cold tubs a coach actually
            keeps clean, three quiet bunks, and sixty square metres of floor for the twenty minutes
            after a heavy squat day. Every membership includes it, seven days a week, whether or not
            you trained that morning.
          </p>

          <ul className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {AMENITIES.map((a) => (
              <li key={a.name} data-testid="amenity" className="flex gap-3">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="7" fill="#123B31" />
                  <path d="M12 7v10M7 12h10" stroke="#E8A33D" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>
                  <span className="block text-sm font-semibold text-[#1B1A17]">{a.name}</span>
                  <span className="block text-sm text-[#6B6355]">{a.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
