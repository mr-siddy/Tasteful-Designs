const TRAY = [
  { item: 'Pickled crabapples', detail: 'Put up in September from the Ostrowski trees behind the lot.' },
  { item: 'Braunschweiger crock', detail: 'Whipped with grated onion, served cold with rye toast.' },
  { item: 'Bread-and-butter chips', detail: 'Rosa’s brine, seven days, cut thick enough to snap.' },
  { item: 'Sharp cheddar spread', detail: 'Two-year cheddar and a little beer, from a dairy in Two Rivers.' },
  { item: 'Radishes and celery hearts', detail: 'On ice, with salt in a small dish, the way it was in 1946.' },
  { item: 'Marinated herring', detail: 'Sour cream and onion, Fridays and Saturdays only.' },
]

export function RelishTradition() {
  return (
    <section className="bg-[#EFE7D5]">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="order-2 rounded-3xl border border-[#17130F]/10 bg-[#F6F1E4] p-8 lg:order-1">
          <svg
            viewBox="0 0 340 300"
            role="img"
            aria-label="Illustration of the Blue Iris relish tray: a lazy susan of pickles, radishes, cheese spread and a braunschweiger crock"
            className="h-auto w-full"
          >
            <circle cx="170" cy="160" r="128" fill="#E1D6BB" />
            <circle cx="170" cy="160" r="112" fill="#D9CCAE" />
            <circle cx="170" cy="160" r="44" fill="#7C2D2D" />
            <circle cx="170" cy="160" r="34" fill="#8F3838" />
            <g stroke="#C4B58F" strokeWidth="3">
              <path d="M170 48v68M170 204v68M58 160h68M214 160h68" />
              <path d="M91 81l48 48M201 221l48 48M249 81l-48 48M139 221l-48 48" />
            </g>
            <g fill="#5F7A3A">
              <ellipse cx="170" cy="82" rx="26" ry="12" />
              <ellipse cx="170" cy="82" rx="20" ry="7" fill="#82994F" />
            </g>
            <g fill="#C4433F">
              <circle cx="240" cy="112" r="9" />
              <circle cx="258" cy="128" r="8" />
              <circle cx="236" cy="134" r="7" />
            </g>
            <g fill="#E8C87E">
              <ellipse cx="252" cy="204" rx="26" ry="14" />
              <ellipse cx="252" cy="200" rx="26" ry="14" fill="#F0D89B" />
            </g>
            <g fill="#B98A4A">
              <ellipse cx="170" cy="240" rx="30" ry="16" />
              <ellipse cx="170" cy="235" rx="30" ry="16" fill="#CE9E5C" />
            </g>
            <g fill="#9BB06A">
              <rect x="66" y="188" width="12" height="34" rx="5" />
              <rect x="84" y="182" width="12" height="40" rx="5" />
              <rect x="102" y="190" width="12" height="32" rx="5" />
            </g>
            <g fill="#D9DCC6">
              <ellipse cx="92" cy="116" rx="28" ry="16" />
              <ellipse cx="92" cy="112" rx="28" ry="16" fill="#EAEBD8" />
            </g>
            <circle cx="170" cy="160" r="128" fill="none" stroke="#B7A67E" strokeWidth="4" />
          </svg>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#7C2D2D]">
            Before you order anything
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#17130F]">
            The relish tray is not an appetiser
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5C5445]">
            It arrives because you sat down. Nobody brings you a menu first, nobody asks whether you
            would like to start with something — the tray comes out on the lazy susan, the
            braunschweiger crock goes in the middle, and the table settles down around it. That is
            the moment a supper club becomes a supper club, and it is the part people who grew up
            somewhere else always ask about.
          </p>
          <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {TRAY.map((entry) => (
              <div key={entry.item} data-testid="tray-item">
                <dt className="text-base font-semibold text-[#17130F]">{entry.item}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-[#5C5445]">{entry.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm leading-relaxed text-[#7C6B4B]">
            Refills are free and expected. Delia has watched a table of four go through three trays
            before ordering, and considers that a compliment rather than a problem.
          </p>
        </div>
      </div>
    </section>
  )
}
