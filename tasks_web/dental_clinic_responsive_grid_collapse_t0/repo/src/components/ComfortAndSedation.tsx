const OPTIONS = [
  {
    title: 'Nitrous oxide',
    detail:
      'Twelve dollars a visit, wears off in the parking lot, and you can drive yourself home. Most of our anxious patients never need anything stronger than this.',
  },
  {
    title: 'Oral sedation',
    detail:
      'A tablet an hour before, someone else drives. You stay awake and able to answer, but the appointment goes by like a long nap you half remember.',
  },
  {
    title: 'Just going slowly',
    detail:
      'Free, and the one people underestimate. We book a double slot, agree a stop signal before we start, and honour it every single time you raise your hand.',
  },
]

/** Deep dive two: comfort and dental anxiety, illustration left, copy right. */
export default function ComfortAndSedation() {
  return (
    <section data-testid="comfort" className="bg-[#0f4c4f] text-[#faf5ec]">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <svg
            viewBox="0 0 360 320"
            className="w-full"
            role="img"
            aria-label="Illustration of a quiet treatment room with a window over the lake"
          >
            <defs>
              <linearGradient id="comfort-window" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c68a3e" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#f2e9da" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <rect x="20" y="20" width="320" height="280" rx="26" fill="#faf5ec" opacity="0.07" />
            <rect x="52" y="52" width="150" height="118" rx="12" fill="url(#comfort-window)" />
            <path d="M52 140l38-30 30 24 34-30 48 36v30H52z" fill="#0f4c4f" opacity="0.55" />
            <circle cx="168" cy="82" r="14" fill="#faf5ec" opacity="0.8" />
            <rect x="232" y="80" width="76" height="150" rx="16" fill="#f2e9da" opacity="0.2" />
            <path
              d="M60 254c26-30 62-30 88 0 26-30 62-30 88 0"
              fill="none"
              stroke="#c68a3e"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />
            <path
              d="M92 196h150"
              stroke="#faf5ec"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.35"
            />
          </svg>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c68a3e]">
            If you have been putting it off
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Nobody here is going to make you feel bad about it
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#f2e9da]/80">
            About one in four of our new patients has not been to a dentist in over five
            years, and almost all of them say the same thing at the door: they were
            dreading the telling-off. There is no telling-off. We work out what is going
            on, we sort the painful thing first, and we go at whatever pace you can take.
          </p>

          <dl className="mt-10 space-y-6">
            {OPTIONS.map((option) => (
              <div
                key={option.title}
                data-testid="comfort-option"
                className="rounded-2xl border border-[#faf5ec]/15 bg-[#faf5ec]/5 p-6"
              >
                <dt className="font-serif text-lg font-semibold text-[#f2e9da]">
                  {option.title}
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-[#f2e9da]/75">
                  {option.detail}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#book"
            data-testid="comfort-cta"
            className="mt-9 inline-block rounded-full bg-[#c68a3e] px-7 py-3.5 text-base font-semibold text-[#0d2b2e] transition-transform hover:-translate-y-0.5"
          >
            Book a talk-only visit
          </a>
        </div>
      </div>
    </section>
  )
}
