import { ArrowIcon, StarIcon, StrokeArc } from './icons'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#062b30] text-[#f1e7d7]"
      style={{
        backgroundImage:
          'radial-gradient(1100px 480px at 12% -10%, rgba(18,98,108,0.55), transparent 60%), radial-gradient(700px 420px at 92% 20%, rgba(224,129,61,0.28), transparent 62%)',
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-[1.15fr_1fr] md:items-center md:py-28">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8fc0c5]">
            Indoor rowing · Strength · Recovery
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.03] tracking-tight text-[#faf6ef] md:text-6xl">
            Rowing is a skill.
            <span className="block text-[#f3b27a]">We coach it like one.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#cfe0e0]">
            Tidemark is eighteen water-resistance ergs on a sprung floor above the old chandlery
            at 47 Cordage Lane. Every member is split-tested on day one, trains an eight-week
            written block, and is re-tested at the end of it — so you leave with a number that
            moved, not a vague sense that you worked hard. Three coaches on the floor, eighteen
            people in the room, never more.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              data-testid="hero-cta"
              className="inline-flex items-center gap-2 rounded-full bg-[#e0813d] px-7 py-3.5 text-sm font-semibold text-[#20120a] shadow-lg shadow-black/20 transition hover:bg-[#f3b27a]"
            >
              Book a landing session
              <ArrowIcon />
            </a>
            <a
              href="#tracks"
              className="inline-flex items-center gap-2 rounded-full border border-[#8fc0c5]/45 px-7 py-3.5 text-sm font-semibold text-[#e9f2f1] transition hover:border-[#f3b27a] hover:text-[#f3b27a]"
            >
              See the three tracks
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#a9c8cb]">
            <span className="flex items-center gap-1.5 text-[#f3b27a]">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <span className="ml-1 font-semibold text-[#e9f2f1]">4.9</span>
            </span>
            <span>412 reviews across the last four years</span>
            <span className="hidden md:inline">First session is free, and it always will be</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[#12626c]/20 blur-2xl" aria-hidden="true" />
          <div className="relative rounded-[2rem] border border-[#8fc0c5]/25 bg-[#0b3a41]/60 p-7">
            <StrokeArc className="h-64 w-full" />
            <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-[#8fc0c5]/20 pt-6 text-center">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.18em] text-[#8fc0c5]">Ergs</dt>
                <dd className="mt-1 text-2xl font-semibold text-[#faf6ef]">18</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.18em] text-[#8fc0c5]">Cap</dt>
                <dd className="mt-1 text-2xl font-semibold text-[#faf6ef]">18</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.18em] text-[#8fc0c5]">Coaches</dt>
                <dd className="mt-1 text-2xl font-semibold text-[#faf6ef]">3</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
