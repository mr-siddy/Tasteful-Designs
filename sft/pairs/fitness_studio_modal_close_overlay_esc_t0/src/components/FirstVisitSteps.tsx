const STEPS = [
  {
    n: '01',
    title: 'You send the request',
    body: 'Pick a session from the intro list, or ask for the full timetable if none of the four suit you. Marta reads them at the desk between classes and answers by text the same day.',
    aside: 'Takes about a minute',
  },
  {
    n: '02',
    title: 'You get here twelve minutes early',
    body: 'A coach meets you at the desk, walks you to your bike, and sets saddle height, fore-aft and bar height with you standing next to it. That set-up gets written on your card so it takes ten seconds next time.',
    aside: 'Bring nothing but a bottle',
  },
  {
    n: '03',
    title: 'You ride the actual class',
    body: 'Same forty-five minutes as everyone else, with the targets called in watts. You are told, out loud, that easing off during interval three is a normal thing to do on a first ride.',
    aside: '45 minutes, £9',
  },
  {
    n: '04',
    title: 'You decide afterwards, not in the room',
    body: 'Your numbers land in your inbox by lunchtime. Nobody follows you to the showers with a membership form; if you want to come back, book online or say so at the desk.',
    aside: 'No contract, no sales call',
  },
]

export function FirstVisitSteps() {
  return (
    <section id="first-visit" className="bg-[#faf5ee]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d94a2b]">
            Four steps, no surprises
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#101826] sm:text-5xl">
            How a first visit actually goes
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#40485a]">
            Written out in full, because the reason most people never try an indoor cycling class
            is not the effort — it is not knowing what happens in the first ten minutes.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="relative rounded-3xl border border-[#101826]/10 bg-white p-7 shadow-[0_24px_60px_-48px_rgba(16,24,38,0.8)]"
            >
              <span className="font-mono text-3xl font-black text-[#d94a2b]/25">{step.n}</span>
              <h3 className="mt-3 text-xl font-black leading-tight tracking-tight text-[#101826]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#40485a]">{step.body}</p>
              <p className="mt-5 inline-block rounded-full bg-[#f2e9db] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#101826]">
                {step.aside}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
