export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#241C17]/10 bg-[linear-gradient(160deg,#FBF6EE_0%,#F6E9D8_46%,#EFD9C2_100%)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,85,43,0.22),transparent_68%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C4552B]">
            214 Monroe Street · Wednesday to Sunday
          </p>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
            Persimmon &amp; Rye
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#544940]">
            Fifty-four seats around a nine-foot open hearth in Germantown, where every plate that
            leaves the pass has been cooked over white oak and hickory — there is no gas range in the
            building, and the menu is reprinted every afternoon around whatever the farms sent that
            morning.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="rounded-full bg-[#241C17] px-7 py-3.5 text-sm font-bold text-[#FBF6EE] shadow-sm hover:bg-[#3F352E]"
            >
              Book a table
            </a>
            <a
              href="#menu"
              className="rounded-full border border-[#241C17]/25 px-7 py-3.5 text-sm font-bold text-[#241C17] hover:border-[#C4552B] hover:text-[#C4552B]"
            >
              Read tonight&rsquo;s menu
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[#241C17]/10 pt-8">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-wider text-[#7A6B5F]">
                Open since
              </dt>
              <dd className="mt-1 text-2xl font-black tracking-tight">2019</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-wider text-[#7A6B5F]">
                Seats
              </dt>
              <dd className="mt-1 text-2xl font-black tracking-tight">54</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-wider text-[#7A6B5F]">
                Sourced within
              </dt>
              <dd className="mt-1 text-2xl font-black tracking-tight">100 mi</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 460 400"
            className="w-full drop-shadow-sm"
            role="img"
            aria-label="Illustration of the open hearth with a suspended grill and a rack of split oak"
          >
            <defs>
              <linearGradient id="hero-wall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F3E4D0" />
                <stop offset="100%" stopColor="#E2C9AC" />
              </linearGradient>
              <linearGradient id="hero-flame" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#C4552B" />
                <stop offset="60%" stopColor="#E8863C" />
                <stop offset="100%" stopColor="#F6C46A" />
              </linearGradient>
            </defs>

            <rect x="10" y="10" width="440" height="380" rx="26" fill="url(#hero-wall)" />
            <rect x="46" y="52" width="368" height="248" rx="18" fill="#2B211B" />
            <rect x="66" y="72" width="328" height="208" rx="12" fill="#170F0C" />

            <path d="M74 92h312" stroke="#4A5D3A" strokeWidth="4" strokeLinecap="round" />
            <path d="M112 92v34M172 92v34M232 92v34M292 92v34M352 92v34" stroke="#6E5B4A" strokeWidth="3" />
            <rect x="120" y="126" width="220" height="10" rx="5" fill="#8A7361" />
            <rect x="132" y="136" width="196" height="8" rx="4" fill="#6E5B4A" />

            <path
              d="M230 268c-30 0-52-19-52-45 0-24 18-36 26-56 5 14 14 18 20 26 6-16 2-28-4-40 26 12 44 34 44 62 0 30-20 53-34 53z"
              fill="url(#hero-flame)"
            />
            <path
              d="M230 268c-13 0-23-9-23-21 0-13 12-19 15-32 6 10 12 15 16 23 4-8 3-16 1-22 10 8 16 20 16 32 0 12-9 20-25 20z"
              fill="#F8DC9A"
            />

            <rect x="96" y="264" width="268" height="16" rx="6" fill="#3A2C23" />
            <path d="M110 262l40-16 42 16zM206 262l38-18 40 18z" fill="#5C4636" />
            <rect x="252" y="248" width="86" height="14" rx="5" fill="#6E5B4A" />

            <rect x="46" y="312" width="176" height="66" rx="12" fill="#C4552B" opacity="0.14" />
            <rect x="238" y="312" width="176" height="66" rx="12" fill="#4A5D3A" opacity="0.16" />
            <path
              d="M74 330h48M74 344h72M74 358h56"
              stroke="#8A5238"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="300" cy="345" r="19" fill="none" stroke="#4A5D3A" strokeWidth="5" />
            <path d="M300 330v30M285 345h30" stroke="#4A5D3A" strokeWidth="4" strokeLinecap="round" />
          </svg>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#6B5F55]">
            The hearth was built into the room in 2019 by metalworker Ruben Salcido. The grill hangs
            from a chain so the cooks can raise and drop it by hand all night.
          </p>
        </div>
      </div>
    </section>
  )
}
