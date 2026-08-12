type ClassFormat = {
  name: string
  duration: string
  intensity: string
  credits: string
  blurb: string
  bestFor: string
}

const CLASS_FORMATS: ClassFormat[] = [
  {
    name: 'Barbell Foundations',
    duration: '75 min',
    intensity: 'Teaching pace',
    credits: '1 credit · $28',
    blurb:
      'The four lifts taught from the empty bar up, one cue at a time. You leave with a squat, a press, a deadlift and a clean that a coach has actually watched and corrected.',
    bestFor: 'First eight weeks of training with us',
  },
  {
    name: 'Strength Block',
    duration: '90 min',
    intensity: 'Heavy',
    credits: '1 credit · $28',
    blurb:
      'Our main session. You work through the percentages written on your card while a coach circulates, adjusts loading on the day, and calls the sets that need to come down.',
    bestFor: 'Anyone past Foundations',
  },
  {
    name: 'Engine Room',
    duration: '45 min',
    intensity: 'Hard',
    credits: '1 credit · $28',
    blurb:
      'Rower, bike and sled intervals built off your tested pace, not a whiteboard number. Short, honest, and the reason our lifters can still climb the Alder Way hill afterwards.',
    bestFor: 'Conditioning days between strength sessions',
  },
  {
    name: 'Olympic Technique',
    duration: '60 min',
    intensity: 'Moderate',
    credits: '1 credit · $28',
    blurb:
      'Snatch and clean-and-jerk drilled at loads light enough to fix, coached by Ruben on the competition platforms. Video review on the wall screen at the end of every session.',
    bestFor: 'Lifters chasing a technical ceiling',
  },
  {
    name: 'Masters Strength',
    duration: '60 min',
    intensity: 'Steady',
    credits: '1 credit · $28',
    blurb:
      'Same programme, longer warm-up, trap-bar variations and a joint-friendly pressing order. Written for members over fifty-five and for anyone coming back from a long lay-off.',
    bestFor: 'Members 55+ and post-rehab returns',
  },
  {
    name: 'Open Platform',
    duration: '2 hours',
    intensity: 'Your call',
    credits: 'Free with membership',
    blurb:
      'Unstructured floor time with a coach on hand. Come in, run your own card, borrow a platform, and ask for eyes on a set whenever you want them. No sign-up needed.',
    bestFor: 'Members training on their own schedule',
  },
]

function IntensityGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true" fill="none">
      <path d="M3 14.5l4-5 3.5 3L17 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 5H17v4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ClockGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true" fill="none">
      <circle cx="10" cy="10" r="7.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 5.8V10l2.8 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function ClassesSection() {
  return (
    <section id="classes" data-testid="classes-section" className="border-b border-white/10 bg-stone-950">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-300">What we run</p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-stone-50">
            Six classes, one programme
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-300">
            Every class on this list is a different way to spend a session inside the same
            twelve-week block. Nothing is randomly generated, nothing is a surprise workout, and a
            coach can tell you on any given Tuesday why you are doing what you are doing.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CLASS_FORMATS.map((format) => (
            <li
              key={format.name}
              data-testid="class-card"
              className="flex flex-col rounded-2xl bg-stone-900 p-7 ring-1 ring-white/10 transition-colors hover:ring-lime-300/40"
            >
              <h3 className="text-xl font-bold text-stone-50">{format.name}</h3>
              <p className="mt-3 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wide text-stone-400">
                <span className="flex items-center gap-1.5">
                  <ClockGlyph />
                  {format.duration}
                </span>
                <span className="flex items-center gap-1.5 text-amber-400">
                  <IntensityGlyph />
                  {format.intensity}
                </span>
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-300">{format.blurb}</p>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs text-stone-400">
                Best for: {format.bestFor}
              </p>
              <p data-testid="class-price" className="mt-2 text-sm font-bold text-lime-300">
                {format.credits}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-stone-400">
          Class credits never expire, and members on the Platform plan get every one of these
          included. Drop-ins are welcome once you have been through an intro session.
        </p>
      </div>
    </section>
  )
}
