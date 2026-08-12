import { CheckIcon } from './Icons'

const TREATMENTS = [
  {
    name: 'New-patient exam & cleaning',
    price: '$149',
    meta: '75 minutes · includes digital X-rays',
    body: 'A full charting, low-dose digital films, an oral cancer screening and a proper cleaning with Priya. You leave with a written plan and a printed price for anything we found.',
  },
  {
    name: 'Same-day CEREC crown',
    price: '$1,480',
    meta: 'One appointment · no temporary',
    body: 'Scanned, designed and milled here in the studio while you read or nap. No goopy impression, no second visit, no plastic temporary that pops off over the weekend.',
  },
  {
    name: 'Studio whitening',
    price: '$595',
    meta: '90 minutes · trays included',
    body: 'In-chair whitening with desensitising varnish, plus custom take-home trays and two top-up syringes so the result lasts past the wedding you booked it for.',
  },
  {
    name: 'Composite bonding',
    price: '$340',
    meta: 'Per tooth · shade matched',
    body: 'Hand-sculpted composite for chipped edges, worn corners and the gap you have been covering with your hand in photographs since high school.',
  },
  {
    name: 'Clear aligners',
    price: 'from $3,900',
    meta: 'Both arches · retainers included',
    body: 'A full aligner course planned by Dr. Marchetti, with refinements and the first set of retainers built into the price rather than added at the end.',
  },
  {
    name: 'Implant & crown',
    price: '$4,250',
    meta: 'Placement, abutment and crown',
    body: 'Guided placement using a printed surgical stent, then the final crown milled here. One price for the whole thing, quoted before anything starts.',
  },
]

export function TreatmentMenu() {
  return (
    <section id="treatments" aria-labelledby="treatments-heading" className="bg-[#FAF6F1]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2703D]">Posted prices</p>
          <h2 id="treatments-heading" className="mt-3 text-3xl font-semibold tracking-tight text-[#0B2540] sm:text-4xl">
            What things cost, before you sit down
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#42566A]">
            Dentistry is one of the last trades where you are expected to agree to work without knowing
            the bill. We publish ours. These are the cash prices at Alder &amp; Bay; if you carry one of
            the plans we file, your share will be lower, and we will tell you the number before we pick
            anything up.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((item) => (
            <article
              key={item.name}
              data-testid="treatment-card"
              className="flex flex-col rounded-3xl border border-[#E4D8C8] bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-[#0B2540]">{item.name}</h3>
                <span className="shrink-0 rounded-full bg-[#0B2540]/5 px-3 py-1 text-sm font-semibold text-[#0B2540]">
                  {item.price}
                </span>
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#9A8973]">{item.meta}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#42566A]">{item.body}</p>
              <p className="mt-6 flex items-center gap-2 text-sm font-medium text-[#4E7C6A]">
                <CheckIcon className="h-5 w-5" />
                Quoted in writing first
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-[#7A6A58]">
          Emergency visits are $95 and always include an exam and a film. Root canals run $780 to
          $1,120 depending on the tooth. Nightguards for grinding are $420. Nothing on this list has
          changed price since January, and we will honour a written quote for ninety days.
        </p>
      </div>
    </section>
  )
}
