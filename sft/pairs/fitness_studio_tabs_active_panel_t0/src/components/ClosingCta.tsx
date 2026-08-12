import { ArrowIcon, StopwatchIcon, TideDivider } from './icons'

export function ClosingCta() {
  return (
    <section
      id="book"
      className="relative overflow-hidden bg-[#12626c] text-[#f1e7d7]"
      style={{
        backgroundImage:
          'radial-gradient(760px 340px at 20% 0%, rgba(224,129,61,0.35), transparent 62%), radial-gradient(620px 380px at 88% 90%, rgba(6,43,48,0.65), transparent 60%)',
      }}
    >
      <TideDivider className="h-10 w-full text-[#faf6ef]" />
      <div className="mx-auto grid max-w-5xl gap-10 px-5 pb-24 pt-14 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#cfe8e8]">
            The first one is on us
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#faf6ef] md:text-5xl">
            Come and pull for twenty minutes
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#e2f0ef]">
            Seventy-five minutes, no cost and no card. You will row, we will film it, and you will
            leave knowing your split and what the next eight weeks would look like — whether or not
            you ever come back. Landing sessions run Tuesday and Thursday evenings and Saturday
            lunchtimes.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#book"
              data-testid="closing-cta"
              className="inline-flex items-center gap-2 rounded-full bg-[#062b30] px-7 py-3.5 text-sm font-semibold text-[#faf6ef] transition hover:bg-[#0b3a41]"
            >
              Book a landing session
              <ArrowIcon />
            </a>
            <a
              href="#timetable"
              className="inline-flex items-center gap-2 rounded-full border border-[#faf6ef]/45 px-7 py-3.5 text-sm font-semibold text-[#faf6ef] transition hover:border-[#f3b27a] hover:text-[#f3b27a]"
            >
              Look at the week first
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-[#faf6ef]/25 bg-[#062b30]/45 p-8">
          <StopwatchIcon className="h-8 w-8 text-[#f3b27a]" />
          <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#faf6ef]">
            What to bring
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-[#e2f0ef]">
            <li>Trainers you can push through, not running shoes with a soft heel</li>
            <li>Shorts or leggings that will not catch the seat rail</li>
            <li>A water bottle — the tap is by the annexe door</li>
            <li>Anything a physio has ever written down about your back</li>
          </ul>
          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-[#a9d3d3]">
            47 Cordage Lane · Bellhaven Locks
          </p>
        </div>
      </div>
    </section>
  )
}
