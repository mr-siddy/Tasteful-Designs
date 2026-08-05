const QUESTIONS = [
  {
    q: 'I have never lifted a barbell. Am I going to be the worst one there?',
    a: 'Roughly two thirds of our members had never touched a barbell before Foundations, and the six-week block exists precisely so nobody learns to squat in front of an audience. You will spend your first fortnight with a dowel and an empty bar, and no coach will let you load past your technique.',
  },
  {
    q: 'What does a membership actually cost?',
    a: 'Small-Group Strength is $58 a week for two coached sessions, Strength + Engine is $76 a week for unlimited access, and Saturday Barbell Club on its own is $34 a week. Billing is fortnightly, there is no joining fee, and there is no lock-in contract to escape from.',
  },
  {
    q: 'I am coming back from an injury. Will you take me?',
    a: 'Usually yes, and often with your physiotherapist copied in. Ines leads our Return to Lifting hours and works directly with Merri Creek Physiotherapy and Brunswick Sports Medicine, so your programme is written around the notes rather than around a guess. Bring whatever your clinician has given you.',
  },
  {
    q: 'How early do I need to book a class?',
    a: 'Sessions open eight days out and the 6:30am Barbell Strength slots tend to fill by the weekend. Nine spots is a hard cap, so we run a waitlist that texts you the moment a place opens, and there is no penalty for cancelling before 8pm the night before.',
  },
  {
    q: 'Is there parking, and can I get there without a car?',
    a: 'There are four off-street bays in the lane behind the building and unrestricted street parking on Bakers Road after 9am. The 96 tram stops a four-minute walk away on Nicholson Street, and there is a bike rack and a shower with clean towels inside the roller door.',
  },
  {
    q: 'Can I pause my membership?',
    a: 'Up to eight weeks a year, for any reason at all, with a week of notice. Travel, a newborn, a bad shoulder or a heavy work quarter — we would much rather hold your spot than lose you to the guilt of an unused membership.',
  },
]

export function FaqList() {
  return (
    <section id="faq" className="bg-stone-50">
      <div className="mx-auto max-w-4xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-600">
            Before you ask
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            The six questions we get every week
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-stone-200 border-y border-stone-200">
          {QUESTIONS.map((item, i) => (
            <div key={item.q} data-testid="faq-item" className="grid gap-3 py-7 sm:grid-cols-[auto_1fr] sm:gap-6">
              <span className="text-sm font-black tracking-widest text-amber-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <dt className="text-base font-bold tracking-tight text-stone-900">{item.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-stone-600">{item.a}</dd>
              </div>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-sm text-stone-500">
          Still unsure? Ring the studio on{' '}
          <a href="tel:+61390428817" className="font-semibold text-stone-900 underline">
            (03) 9042 8817
          </a>{' '}
          between 6am and 7pm on a weekday and you will get a coach, not a call centre.
        </p>
      </div>
    </section>
  )
}
