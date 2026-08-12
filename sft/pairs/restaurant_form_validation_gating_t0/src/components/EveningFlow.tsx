const STEPS = [
  {
    number: '01',
    title: 'You send the date',
    detail:
      'Party size, which seating, and anything that would change the menu — a vegetarian, a shellfish allergy, a table of teenagers who will eat twice as much bread as you think.',
  },
  {
    number: '02',
    title: 'Odalys writes back inside a business day',
    detail:
      'With a draft menu costed per head, the two or three dates nearest the one you asked for, and a hold on whichever you take. No deposit yet, no card on file.',
  },
  {
    number: '03',
    title: 'Inés calls if the fire changes things',
    detail:
      'If the boats have a bad week or the beef is not ready, you hear it two days out and we swap the course rather than serve you something we bought in a hurry.',
  },
  {
    number: '04',
    title: 'The bakehouse starts your bread at four',
    detail:
      'Rye, country loaf and however much talo your party is going to get through, all baked the morning of. The butter is cultured across the street at Sycamore Creamery.',
  },
  {
    number: '05',
    title: 'You sit, and the food comes off the fire in front of you',
    detail:
      'Family style, four to six courses depending on the menu, paced by the grill rather than by a clock. Nothing is plated in a back kitchen — there is no back kitchen.',
  },
  {
    number: '06',
    title: 'One bill, itemised, at the end',
    detail:
      'Twenty percent gratuity is included and split across the whole staff including the bakehouse. Deposits come off the top. We do not add a kitchen fee or a wellness fee.',
  },
]

export default function EveningFlow() {
  return (
    <section id="evening" aria-labelledby="evening-heading" className="bg-[#faf5ec]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b8451f]">Start to finish</p>
          <h2 id="evening-heading" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            What actually happens between your email and your bill
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5d4c3d]">
            Private dining is usually opaque on purpose. Here is the whole of it, in the order it happens,
            so you can decide whether we are worth the email before you send one.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="relative rounded-3xl border border-[#1b1512]/10 bg-[#f5ecdd] p-7 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="text-4xl font-black leading-none text-[#b8451f]/25"
              >
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-black leading-snug tracking-tight">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5d4c3d]">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
