const STEPS = [
  {
    id: 'arrive',
    time: '5:30',
    title: 'You arrive and nobody rushes you',
    body:
      'Coats go under the stairs, and you are handed a glass of Wend Valley keeved cider whether you asked for one or not. If you are early, the bar seats six and the fire is already going.',
  },
  {
    id: 'snacks',
    time: '5:45',
    title: 'Three things off the coals to start',
    body:
      'Flatbread with cod roe, a plate of the cured mackerel, and whatever Ezra pickled last week. They come out within ten minutes of sitting down because the hearth has been hot since morning.',
  },
  {
    id: 'ash',
    time: '6:15',
    title: 'The ash course is carved at the table',
    body:
      'Priya brings the salt-dough root over on a board and cracks it open in front of you. It smells like the whole room for about thirty seconds, which is the best part of the evening.',
  },
  {
    id: 'coals',
    time: '6:45',
    title: 'The big plate lands in the middle',
    body:
      'Turbot in its basket or the rib on the bone — either way it is served whole, filleted or carved beside you, and passed around. Nobody eats their own dinner here in a straight line.',
  },
  {
    id: 'sweet',
    time: '7:45',
    title: 'Something sweet and something bitter',
    body:
      'Pears in the embers with brown butter ice cream, then a small glass of the barrel-aged apple brandy from Wend Bridge if you are walking home. We do not push the digestif; we just leave the bottle where you can see it.',
  },
]

export function EveningFlow() {
  return (
    <section aria-labelledby="flow-heading" className="border-y border-[#E4DACB] bg-[#F3EADC]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#8B8073]">How a night runs</p>
          <h2 id="flow-heading" className="mt-3 text-4xl font-semibold tracking-tight text-[#123C43]">
            An evening here, from the door to the last glass
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B6155]">
            Two sittings a night and two and a half hours at the table. This is roughly how the first
            one goes; the eight o'clock runs the same shape, ninety minutes later, with a quieter room
            and a lower fire.
          </p>
        </div>

        <ol className="mt-14 space-y-8">
          {STEPS.map((step, index) => (
            <li key={step.id} data-testid="flow-step" className="flex gap-6">
              <div className="flex flex-none flex-col items-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#123C43] text-base font-semibold text-[#E9C79A]">
                  {index + 1}
                </span>
                {index < STEPS.length - 1 && (
                  <span aria-hidden="true" className="mt-2 w-px flex-1 bg-[#D8CBB6]" />
                )}
              </div>
              <div className="pb-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C4472A]">
                  {step.time} pm
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#171310]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#6B6155]">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
