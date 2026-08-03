export function FishFryStory() {
  return (
    <section id="fish-fry" className="bg-[#F6F1E4]">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 lg:grid-cols-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#7C2D2D]">Every Friday</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#17130F]">
            The fry line starts at 3:45, and nobody minds
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5C5445]">
            Two hundred and twelve dinners is an ordinary Friday. The perch come up from the
            narrows on Thursday afternoon, get cut and held on ice overnight, and go into cracker
            meal within a minute of hitting the fryer — not batter, not beer batter, cracker meal,
            because that is what Vera used and it shatters instead of sogging.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#5C5445]">
            Four fillets to a basket, potato pancakes or the American fries, coleslaw that Rosa
            dresses at two o’clock so it has time to sit, dark rye from the Harlow Bend bakery two
            doors down from the hardware store, and a wedge of lemon nobody asked for. If the wait
            runs past forty minutes we will send a relish tray out to you at the bar, which is the
            closest thing to an apology this building offers.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-[#5C5445]">
            {[
              'Cod, three pieces, for anybody who does not want bones — $24',
              'All-you-can-eat is Wednesday, not Friday. We are not a tavern.',
              'Last fry basket goes down at 9:45 sharp.',
            ].map((line) => (
              <li key={line} data-testid="fry-note" className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D2A24C]" />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[#1C4535] to-[#0C1F17] p-8">
          <svg
            viewBox="0 0 380 300"
            role="img"
            aria-label="Illustration of a Friday fish fry basket: four perch fillets, potato pancakes, coleslaw and a lemon wedge"
            className="h-auto w-full"
          >
            <defs>
              <linearGradient id="fry-plate" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F6F1E4" />
                <stop offset="100%" stopColor="#DCD2BB" />
              </linearGradient>
            </defs>
            <ellipse cx="190" cy="176" rx="152" ry="86" fill="url(#fry-plate)" />
            <ellipse cx="190" cy="176" rx="128" ry="68" fill="#EDE3CC" />
            <g fill="#D2A24C">
              <path d="M78 168c22-26 66-32 92-14 8 6 10 14 4 20-20 20-72 20-96 2Z" />
              <path d="M84 196c24-22 66-24 90-6 7 6 8 13 2 18-20 16-70 12-92-12Z" />
              <path d="M112 146c22-22 62-24 84-6 7 6 8 13 2 18-20 16-66 14-86-12Z" />
            </g>
            <g fill="#B8813A" opacity="0.55">
              <path d="M96 170c22-18 56-22 78-8M100 196c22-16 54-18 76-6M126 148c22-16 52-18 74-6" fill="none" stroke="#B8813A" strokeWidth="2.5" strokeLinecap="round" />
            </g>
            <g>
              <circle cx="264" cy="152" r="30" fill="#C9A86A" />
              <circle cx="286" cy="188" r="28" fill="#C9A86A" />
              <circle cx="264" cy="152" r="30" fill="none" stroke="#A8873F" strokeWidth="2" />
              <circle cx="286" cy="188" r="28" fill="none" stroke="#A8873F" strokeWidth="2" />
            </g>
            <g>
              <path d="M232 212c14-10 40-12 54-2 6 4 4 12-4 16-16 8-42 6-52-4-4-4-2-8 2-10Z" fill="#EAE6C8" />
              <path d="M240 214c10 4 30 4 40 0M238 222c12 4 30 4 42-2" stroke="#9FA86F" strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>
            <g transform="translate(292 108)">
              <path d="M0 24a24 24 0 0 1 24-24v48A24 24 0 0 1 0 24Z" fill="#F2D24B" />
              <path d="M4 24a20 20 0 0 1 20-20" stroke="#E7C43B" strokeWidth="3" fill="none" />
              <path d="M24 4v40M8 12l16 12M8 36l16-12" stroke="#FBEFA8" strokeWidth="2" fill="none" />
            </g>
            <rect x="52" y="242" width="276" height="12" rx="6" fill="#0E2019" />
            <text x="190" y="278" textAnchor="middle" fontSize="13" fill="#E8C87E" letterSpacing="4">
              PERCH · FRIDAY · 4 TO A BASKET
            </text>
          </svg>
          <p className="mt-6 text-sm leading-relaxed text-[#A9B49F]">
            Junior once counted the fryer baskets on a Good Friday and stopped at three hundred and
            forty. He has never been asked to count again.
          </p>
        </div>
      </div>
    </section>
  )
}
