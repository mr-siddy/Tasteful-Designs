const BUILD = [
  'Muddle a sugar cube with three dashes of Angostura and an orange slice, hard, in the bottom of the glass.',
  'Two ounces of Korbel brandy. Not whiskey. People ask; the answer has been no since 1946.',
  'Ice, then press — that is the whole argument. Sweet gets Sprite, sour gets Squirt, press gets both.',
  'Cherry, orange, and a short straw that exists only so you can stir it once and take it out.',
]

const POURS = [
  { name: 'Old fashioned, pressed & sweet', price: '$12', note: 'The house drink. Junior makes about ninety on a Friday.' },
  { name: 'Grasshopper, blended', price: '$13', note: 'Crème de menthe, crème de cacao, hard ice cream from Two Rivers.' },
  { name: 'Brandy Alexander', price: '$13', note: 'Nutmeg grated over the top, which is not optional.' },
  { name: 'Wanetka Cider Highball', price: '$9', note: 'No alcohol: pressed apple, lime, bitters-free, plenty of ice.' },
]

export function BrandyBar() {
  return (
    <section id="bar" className="bg-[#0C1F17]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#E8C87E]">The brandy bar</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#F6F1E4]">
              Sixteen stools, one correct drink
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#D9D2C0]">
              Junior Wexler has been behind this bar for nineteen years and can build eleven old
              fashioneds without looking up. The bar is walk-in only, the full supper menu is served
              on it, and if the dining room is running long this is where you want to be anyway —
              the muskie above the back bar was caught in 1958 by a man who never paid his tab.
            </p>

            <ol className="mt-10 space-y-5">
              {BUILD.map((step, index) => (
                <li key={step} data-testid="build-step" className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D2A24C] text-sm font-semibold text-[#E8C87E]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-[#A9B49F]">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <svg
              viewBox="0 0 320 340"
              role="img"
              aria-label="Illustration of a pressed brandy old fashioned in a rocks glass with an orange slice and a cherry"
              className="mx-auto h-auto w-3/4"
            >
              <defs>
                <linearGradient id="bar-glass" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E4A13F" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#9C4E1C" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              <ellipse cx="160" cy="312" rx="96" ry="16" fill="#D2A24C" opacity="0.2" />
              <path d="M84 96h152l-14 196a16 16 0 0 1-16 14h-92a16 16 0 0 1-16-14Z" fill="#173124" />
              <path d="M92 112h136l-13 176a10 10 0 0 1-10 9h-90a10 10 0 0 1-10-9Z" fill="url(#bar-glass)" />
              <g fill="#F6F1E4" opacity="0.35">
                <rect x="106" y="140" width="34" height="34" rx="6" transform="rotate(-12 123 157)" />
                <rect x="164" y="168" width="38" height="38" rx="6" transform="rotate(9 183 187)" />
                <rect x="120" y="204" width="32" height="32" rx="6" transform="rotate(16 136 220)" />
              </g>
              <circle cx="196" cy="132" r="26" fill="#F0A93A" stroke="#C97D24" strokeWidth="3" />
              <path d="M196 106v52M170 132h52M177 114l38 36M215 114l-38 36" stroke="#FBD79A" strokeWidth="2" fill="none" />
              <circle cx="132" cy="128" r="14" fill="#9E2B2B" />
              <path d="M132 114c4-14 16-18 24-16-6 4-12 8-16 18Z" fill="#4E6B32" />
              <rect x="150" y="66" width="7" height="86" rx="3.5" fill="#F6F1E4" opacity="0.8" transform="rotate(12 153 109)" />
              <path d="M84 96h152" stroke="#E8C87E" strokeWidth="5" strokeLinecap="round" />
            </svg>

            <ul className="mt-10 space-y-4">
              {POURS.map((pour) => (
                <li
                  key={pour.name}
                  data-testid="bar-pour"
                  className="border-b border-[#F6F1E4]/10 pb-4"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-base font-semibold text-[#F6F1E4]">{pour.name}</h3>
                    <span className="text-sm font-semibold text-[#E8C87E]">{pour.price}</span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-[#A9B49F]">{pour.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
