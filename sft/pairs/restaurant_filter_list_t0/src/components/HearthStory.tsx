function FireDiagram() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full"
      role="img"
      aria-label="Diagram of the hearth showing the burn box, the ember bed and the hanging grill"
    >
      <rect x="8" y="8" width="384" height="284" rx="20" fill="#241C17" />
      <rect x="30" y="34" width="150" height="232" rx="12" fill="#3A2C23" />
      <rect x="196" y="34" width="174" height="232" rx="12" fill="#31251E" />

      <text x="46" y="62" fill="#F2A65A" fontSize="13" fontWeight="700">
        Burn box
      </text>
      <path
        d="M105 210c-24 0-42-15-42-36 0-19 15-29 21-45 4 11 11 14 16 21 5-13 2-23-3-32 21 10 36 27 36 50 0 24-16 42-28 42z"
        fill="#C4552B"
      />
      <path d="M105 210c-10 0-18-7-18-17 0-10 9-15 12-25 5 8 9 12 13 18 3-6 2-13 1-17 8 6 12 16 12 25 0 10-7 16-20 16z" fill="#F6C46A" />
      <path d="M46 240h118" stroke="#6E5B4A" strokeWidth="6" strokeLinecap="round" />

      <text x="214" y="62" fill="#F2A65A" fontSize="13" fontWeight="700">
        Cooking side
      </text>
      <path d="M240 78v40M280 78v40M320 78v40" stroke="#8A7361" strokeWidth="3" />
      <rect x="222" y="118" width="126" height="9" rx="4" fill="#8A7361" />
      <rect x="232" y="127" width="106" height="7" rx="3" fill="#6E5B4A" />
      <ellipse cx="285" cy="212" rx="72" ry="20" fill="#7A2E12" />
      <ellipse cx="285" cy="208" rx="60" ry="15" fill="#C4552B" opacity="0.75" />
      <ellipse cx="262" cy="205" rx="9" ry="4" fill="#F6C46A" />
      <ellipse cx="300" cy="211" rx="11" ry="4" fill="#F2A65A" />
      <path d="M222 246h126" stroke="#6E5B4A" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

function BreadDiagram() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full"
      role="img"
      aria-label="Illustration of a scored country loaf, a bag of stone-milled rye and a proving basket"
    >
      <rect x="8" y="8" width="384" height="284" rx="20" fill="#F3E4D0" />
      <ellipse cx="196" cy="176" rx="126" ry="80" fill="#B5763F" />
      <ellipse cx="196" cy="168" rx="126" ry="80" fill="#D19A5B" />
      <path
        d="M120 150c22 26 130 26 152 0"
        stroke="#8A5238"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M138 186c20 18 100 18 120 0" stroke="#8A5238" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M196 96l10 22-10 8-10-8z" fill="#4A5D3A" />
      <rect x="42" y="52" width="76" height="96" rx="10" fill="#4A5D3A" opacity="0.9" />
      <path d="M56 74h48M56 90h48M56 106h34" stroke="#F3E4D0" strokeWidth="5" strokeLinecap="round" />
      <circle cx="316" cy="86" r="44" fill="none" stroke="#C4552B" strokeWidth="7" />
      <path d="M292 86h48M316 62v48" stroke="#C4552B" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export function HearthStory() {
  return (
    <section id="hearth" aria-labelledby="hearth-heading" className="border-b border-[#241C17]/10">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A5D3A]">
            How the cooking actually works
          </p>
          <h2 id="hearth-heading" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            One fire, lit at eleven in the morning, and everything else follows from it
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-black tracking-tight">
              We burn the wood on one side and cook on the other
            </h3>
            <p className="mt-5 leading-relaxed text-[#544940]">
              White oak and hickory go into the left-hand box at eleven, and for the first two hours
              nothing is cooked at all — that fire exists only to make embers. From about one
              o&rsquo;clock a cook shovels coals across to the right-hand side, and that is the bed
              everything is grilled over. It means the heat is even and the smoke is clean, because
              nothing is ever cooked over a flame that is still working through green sap.
            </p>
            <p className="mt-4 leading-relaxed text-[#544940]">
              The grill itself hangs from a chain, so it can be dropped to two inches over the coals
              for a chop or lifted a foot for a whole fish. There are no dials in the kitchen. The
              temperature is a distance, and the cooks learn it in their forearms over about a year.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Fire lit 11:00am, first embers raked across at 1:00pm',
                'Roughly 2.5 tonnes of split white oak a year, cut in Dickson County',
                'Ash from the box goes back to Hollow Bend for the brassica beds',
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-[#3F352E]">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#C4552B]" aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-[#241C17]/12 bg-white p-5 shadow-sm">
            <FireDiagram />
          </div>
        </div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 rounded-3xl border border-[#241C17]/12 bg-white p-5 shadow-sm lg:order-1">
            <BreadDiagram />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-black tracking-tight">
              The bread is baked on the hearth floor after service starts
            </h3>
            <p className="mt-5 leading-relaxed text-[#544940]">
              Ibrahim Sow joined in 2021 from a bakery in Memphis and asked for one thing: the right
              to bake in the same fire the cooks were using. So at four in the afternoon, when the
              coals have been pushed back for the evening, he sweeps a patch of the hearth floor
              clean and slides four loaves straight onto the brick.
            </p>
            <p className="mt-4 leading-relaxed text-[#544940]">
              The flour is stone-milled at Cane Ridge Mill forty minutes north of us, and it is
              coarse enough that the dough behaves differently every week depending on the wheat. He
              refuses to standardise it. When the bread runs out at half past eight, it is out.
            </p>
            <blockquote className="mt-7 border-l-4 border-[#C4552B] pl-5 text-lg italic leading-relaxed text-[#3F352E]">
              &ldquo;A bread oven holds a number. A hearth holds a mood. You learn to bake for the
              mood.&rdquo;
              <cite className="mt-3 block text-sm not-italic font-bold text-[#7A6B5F]">
                Ibrahim Sow, head baker
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
