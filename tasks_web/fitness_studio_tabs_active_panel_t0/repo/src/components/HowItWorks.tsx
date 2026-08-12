const STEPS = [
  {
    number: '01',
    title: 'Book a landing session',
    time: '75 minutes · free · no sales pitch',
    body:
      'You come in on a quiet slot, we walk the room, and you row for twenty minutes while a coach films you from two angles. Then we sit down with the video and talk about what you want out of the next year. Nobody is asked for a card at the end of it.',
  },
  {
    number: '02',
    title: 'Get your split tested',
    time: 'Week one · 2k on the board',
    body:
      'A full 2k, coached start to finish, with a warm-up we run for you so the number is honest. We also take a hinge screen and a simple strength baseline, because a rowing number without a back that tolerates loading is a number with a short life.',
  },
  {
    number: '03',
    title: 'Train your eight-week block',
    time: 'Weeks one to eight · written for you',
    body:
      'Your block lands in the app the Sunday before it starts: which sessions, which loads, which splits. Most members row three times, lift twice and take one Restore session a week. If a week goes sideways, your coach rewrites the next one rather than pretending it did not happen.',
  },
  {
    number: '04',
    title: 'Re-test, then do it again',
    time: 'Week nine · the number moves',
    body:
      'Same 2k, same warm-up, same coach calling the splits. Members average an 11.4 second improvement across their first two blocks. Then we sit down for fifteen minutes and write the next eight weeks off what actually happened, not off what was supposed to.',
  },
]

export function HowItWorks() {
  return (
    <section id="method" className="bg-[#0b3a41] text-[#e9f2f1]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#8fc0c5]">How it works</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#faf6ef] md:text-5xl">
            Four steps, and none of them are a free t-shirt
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#cfe0e0]">
            Everyone who joins Tidemark goes through the same four steps, whether they rowed at
            university or have never sat on an erg. The whole point is that by week nine you are
            arguing with a number instead of guessing.
          </p>
        </div>

        <ol className="mt-16 grid gap-8 md:grid-cols-2">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="rounded-3xl border border-[#8fc0c5]/20 bg-[#062b30]/50 p-8"
            >
              <span className="text-4xl font-semibold tracking-tight text-[#f3b27a]">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#faf6ef]">
                {step.title}
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#8fc0c5]">{step.time}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#cfe0e0]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
