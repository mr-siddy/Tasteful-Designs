export function ClosingCta() {
  return (
    <section id="book" className="relative overflow-hidden bg-[#0F3B36]" aria-labelledby="closing-heading">
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#1B6B60] to-transparent opacity-70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-0 h-[380px] w-[380px] rounded-full bg-gradient-to-tl from-[#C2557E] to-transparent opacity-50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-24 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
        <div>
          <h2
            id="closing-heading"
            className="font-serif text-3xl font-semibold leading-tight tracking-tight text-[#FBF8F3] sm:text-4xl lg:text-5xl"
          >
            It has been eleven years. Nobody here is going to say a word about it.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#FBF8F3]/75">
            Book the first visit as a conversation if that is easier. We will talk through what you
            are worried about, take the x-rays only if you want them that day, and you will leave
            with a written plan and no appointment on the books unless you asked for one.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="tel:5550172"
              data-testid="closing-primary-cta"
              className="rounded-full bg-[#C2557E] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#A9436A]"
            >
              Call (555) 0172
            </a>
            <a
              href="#membership"
              data-testid="closing-secondary-cta"
              className="rounded-full border border-[#FBF8F3]/30 px-7 py-3.5 text-sm font-semibold text-[#FBF8F3] transition-colors hover:border-[#FBF8F3]/80"
            >
              Compare membership plans
            </a>
          </div>

          <p className="mt-7 text-sm text-[#FBF8F3]/55">
            New patient visits are running nine to fourteen days out. Emergencies are same-day.
          </p>
        </div>

        <div className="rounded-3xl border border-[#FBF8F3]/15 bg-[#0B2E2A]/70 p-8">
          <h3 className="font-serif text-xl font-semibold text-[#FBF8F3]">What the first visit costs</h3>
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-[#FBF8F3]/70">Exam, photographs and full x-rays</dt>
              <dd className="font-semibold text-[#FBF8F3]">$186</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[#FBF8F3]/70">Cleaning, if your gums are healthy</dt>
              <dd className="font-semibold text-[#FBF8F3]">$148</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[#FBF8F3]/70">Written treatment plan</dt>
              <dd className="font-semibold text-[#E8A6BF]">Included</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[#FBF8F3]/70">Nitrous, if you want it</dt>
              <dd className="font-semibold text-[#E8A6BF]">Included</dd>
            </div>
          </dl>
          <p className="mt-6 border-t border-[#FBF8F3]/15 pt-5 text-xs leading-relaxed text-[#FBF8F3]/55">
            Members pay nothing for either of the first two lines. Children under three are seen at
            no charge for their first check.
          </p>
        </div>
      </div>
    </section>
  )
}
