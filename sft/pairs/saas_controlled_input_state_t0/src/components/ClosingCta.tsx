import { IconArrowRight } from './icons'

export function ClosingCta() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-[#0B1220] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Your next incident is already scheduled. You just don’t know when.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-slate-300">
          Set the workspace up on a quiet Tuesday, not at 02:14 on a Saturday. It takes one OAuth grant, and the
          first review you run with it will be the fastest one your team has ever finished.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#setup"
            data-testid="closing-cta"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-[#0B1220] shadow-lg shadow-orange-500/25 transition hover:bg-orange-400"
          >
            Reserve your workspace
            <IconArrowRight />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Compare the plans
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Free for five reviewers, forever. No card, no sales call, no eight-week onboarding.
        </p>
      </div>
    </section>
  )
}
