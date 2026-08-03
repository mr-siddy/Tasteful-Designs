export function FireStory() {
  return (
    <section id="fire" aria-labelledby="fire-heading" className="bg-[#123C43] text-[#FAF6EF]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#E9C79A]">The fire</p>
          <h2 id="fire-heading" className="mt-3 text-4xl font-semibold tracking-tight">
            One hearth, lit at half past ten in the morning
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#D9CFC0]">
            There is no gas line into this building and we have never wanted one. Everything that
            reaches your table has been cooked over a bed of embers that Marta starts before the fish
            arrives and feeds all day, so the heat is settled and even by the time the first table
            sits down.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div data-testid="fire-block">
            <h3 className="text-2xl font-semibold tracking-tight text-[#E9C79A]">
              Oak from the Wend Valley, burned down to nothing
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#D9CFC0]">
              We burn seasoned oak and a little apple in a firebox at the left of the hearth, then
              rake the coals across to the grill as they go grey. Nothing is cooked over flame — flame
              is smoke and soot and a hard char. Embers give you a dry, even radiant heat that cooks a
              turbot through without tearing the skin, and that is the whole trick.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#A9B7B6]">
              {[
                'Two tonnes of oak a year, cut and stacked by the Hallett brothers at Wend Bridge',
                'The grill is winched by hand, six heights, so heat is set by distance not by dial',
                'Ash from the firebox goes back to Callowfield and into the beds every spring',
              ].map((line) => (
                <li key={line} data-testid="fire-fact" className="flex gap-3">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-[#E08A3C]">
                    <path d="m5 12 5 5L19 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <svg
            viewBox="0 0 400 300"
            role="img"
            aria-label="Cutaway illustration of the hearth showing the firebox, the raked ember bed and the hand-winched grill"
            className="h-auto w-full rounded-3xl bg-[#0F3239] p-4"
          >
            <rect x="16" y="24" width="368" height="252" rx="18" fill="#0B262C" />
            <rect x="40" y="180" width="140" height="72" rx="10" fill="#2B1C16" />
            <rect x="196" y="180" width="164" height="72" rx="10" fill="#2B1C16" />
            <text x="52" y="170" fill="#8CA09B" fontSize="13" fontFamily="sans-serif">
              firebox
            </text>
            <text x="208" y="170" fill="#8CA09B" fontSize="13" fontFamily="sans-serif">
              ember bed
            </text>
            <g>
              <path d="M78 214c8-14 2-20 6-28 4 6 8 6 9 12 5-8 2-14 8-20 5 11 12 13 12 24 0 10-8 16-18 16s-17-4-17-4Z" fill="#F2B25C" />
              <path d="M120 220c6-10 1-14 4-20 3 5 6 5 7 9 3-6 1-10 6-14 4 8 9 9 9 17 0 7-6 12-13 12s-13-4-13-4Z" fill="#E08A3C" />
            </g>
            <g>
              <circle cx="222" cy="228" r="9" fill="#C4472A" />
              <circle cx="250" cy="234" r="7" fill="#E08A3C" />
              <circle cx="278" cy="228" r="10" fill="#F2B25C" />
              <circle cx="308" cy="235" r="7" fill="#C4472A" />
              <circle cx="336" cy="228" r="8" fill="#E08A3C" />
            </g>
            <g stroke="#B8C6C2" strokeWidth="3" strokeLinecap="round">
              <path d="M196 140h164" />
              <path d="M212 140v-18M340 140v-18" />
              <path d="M276 122V86" />
              <circle cx="276" cy="78" r="9" fill="none" />
            </g>
            <g stroke="#8CA09B" strokeWidth="2" strokeDasharray="5 6" opacity="0.7">
              <path d="M196 116h164M196 96h164" />
            </g>
            <path d="M40 276h320" stroke="#3E2B24" strokeWidth="8" strokeLinecap="round" />
          </svg>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <svg
            viewBox="0 0 400 300"
            role="img"
            aria-label="Illustration of the salt-dough method: a celeriac wrapped in dough, buried in ash and carved at the table"
            className="order-last h-auto w-full rounded-3xl bg-[#0F3239] p-4 lg:order-first"
          >
            <rect x="16" y="24" width="368" height="252" rx="18" fill="#0B262C" />
            <g transform="translate(56 88)">
              <circle cx="48" cy="60" r="44" fill="#E4DACB" />
              <circle cx="48" cy="60" r="30" fill="#C9B79B" />
              <path d="M48 30v-16M40 18l8-8 8 8" stroke="#8CA09B" strokeWidth="3" fill="none" strokeLinecap="round" />
              <text x="6" y="130" fill="#8CA09B" fontSize="12" fontFamily="sans-serif">
                1 · salt dough
              </text>
            </g>
            <g transform="translate(160 88)">
              <path d="M8 96c8-30 28-44 52-44s44 14 52 44Z" fill="#3E2B24" />
              <circle cx="60" cy="72" r="22" fill="#C9B79B" opacity="0.55" />
              <circle cx="30" cy="88" r="5" fill="#C4472A" />
              <circle cx="88" cy="86" r="6" fill="#E08A3C" />
              <text x="8" y="130" fill="#8CA09B" fontSize="12" fontFamily="sans-serif">
                2 · four hours in ash
              </text>
            </g>
            <g transform="translate(268 88)">
              <ellipse cx="52" cy="70" rx="46" ry="20" fill="#B8C6C2" />
              <path d="M30 66c14-10 30-10 44 0" stroke="#0B262C" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M74 40l16-18M90 22l6 6-16 18" stroke="#E9C79A" strokeWidth="3" fill="none" strokeLinecap="round" />
              <text x="4" y="130" fill="#8CA09B" fontSize="12" fontFamily="sans-serif">
                3 · carved at the table
              </text>
            </g>
          </svg>

          <div data-testid="fire-block">
            <h3 className="text-2xl font-semibold tracking-tight text-[#E9C79A]">
              Salt, ash and a great deal of waiting
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#D9CFC0]">
              The second half of the hearth is the quiet half. Roots go into salt dough and then into
              the ash, where nothing much appears to happen for four hours and then everything happens
              at once: the skin steams away, the flesh goes sweet and dense, and it comes out tasting
              of itself twice over. We do beetroot the same way in winter and kohlrabi in the spring.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#D9CFC0]">
              It is not a technique that suits a busy kitchen — you cannot hurry ash — which is why we
              only ever cook two sittings a night and why the last root goes in before we open the
              door. When the celeriac is gone, it is gone, and the board by the pass gets crossed out.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
