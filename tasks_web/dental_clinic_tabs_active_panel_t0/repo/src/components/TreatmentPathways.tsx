import { useState } from 'react'
import { FirstAidIcon, LeafIcon, SparkleTooth, ChairIcon } from './Icons'

type Pathway = {
  id: string
  label: string
  headline: string
  summary: string
  cadence: string
  icon: JSX.Element
  items: { name: string; price: string; note: string }[]
  footnote: string
}

const PATHWAYS: Pathway[] = [
  {
    id: 'preventive',
    label: 'Preventive',
    headline: 'Keep the teeth you already have',
    summary:
      'The cheapest dentistry is the appointment you keep every six months. This pathway is the quiet one — checks, cleans and the small guards that stop a crack turning into a crown.',
    cadence: 'Two visits a year, forty minutes each',
    icon: <LeafIcon className="h-6 w-6" />,
    items: [
      {
        name: 'Six-month checkup',
        price: '£58',
        note: 'Gum measurements, screening of the tongue and cheeks, and a photo record so we can compare next time.',
      },
      {
        name: 'Hygienist deep clean',
        price: '£110',
        note: 'Ninety minutes with Marta for gums that bleed, split across two sittings if you would rather.',
      },
      {
        name: 'Fluoride varnish',
        price: '£24',
        note: 'Painted on in under a minute for anyone with early white-spot damage. Free for registered children.',
      },
      {
        name: 'Night guard for grinding',
        price: '£220',
        note: 'Scanned in the chair, milled upstairs, collected a week later. Worn flat guards get replaced at cost.',
      },
    ],
    footnote: 'Registered patients get a text reminder ten days ahead and a second one the morning of the visit.',
  },
  {
    id: 'cosmetic',
    label: 'Cosmetic',
    headline: 'Changes you can see, planned before we start',
    summary:
      'Nothing in this pathway begins without a mock-up you can look at in a mirror first. If you decide against it at that point you pay for the consultation and nothing more.',
    cadence: 'Two to five visits, spread over six weeks',
    icon: <SparkleTooth className="h-6 w-6" />,
    items: [
      {
        name: 'Enlighten whitening',
        price: '£395',
        note: 'Two weeks of trays at home, then a single hour in the chair to finish. Shade guarantee in writing.',
      },
      {
        name: 'Composite bonding',
        price: '£180 a tooth',
        note: 'Chips, worn edges and small gaps rebuilt freehand in one sitting. No drilling of healthy enamel.',
      },
      {
        name: 'Porcelain veneers',
        price: '£620 a tooth',
        note: 'Designed on a wax model you approve, then milled from a single block so the grain runs the right way.',
      },
      {
        name: 'Clear aligners',
        price: '£2,150',
        note: 'Nine to fourteen months of gentle movement, with the retainers and two refinements included.',
      },
    ],
    footnote: 'Whitening and bonding are quoted together when both are planned, because the shades have to be matched.',
  },
  {
    id: 'restorative',
    label: 'Restorative',
    headline: 'Rebuilding what is already broken',
    summary:
      'Our ceramic mill is in the room behind reception, which is why a crown here is one appointment instead of three and why nobody leaves wearing a temporary that falls off at dinner.',
    cadence: 'Usually one long visit, occasionally two',
    icon: <ChairIcon className="h-6 w-6" />,
    items: [
      {
        name: 'Same-day ceramic crown',
        price: '£690',
        note: 'Scanned at half past nine, milled by eleven, polished and cemented before you go back to work.',
      },
      {
        name: 'Root canal treatment',
        price: '£480',
        note: 'Done under magnification with rubber dam. Molars take two hours and we book the whole two hours.',
      },
      {
        name: 'Single implant',
        price: '£1,950',
        note: 'Placed by Dr Okafor, restored here, and reviewed at three months without another consultation fee.',
      },
      {
        name: 'Denture reline',
        price: '£160',
        note: 'Turned around in forty-eight hours so you are never without them over a weekend.',
      },
    ],
    footnote: 'Every restoration carries a five-year guarantee provided you keep your six-month checks with us.',
  },
  {
    id: 'emergency',
    label: 'Emergency',
    headline: 'Pain today, not next Tuesday',
    summary:
      'Four slots sit empty every weekday morning waiting for whoever needs them. Phone the practice before nine and you will be seen the same day, registered with us or not.',
    cadence: 'Same day, thirty minutes to start with',
    icon: <FirstAidIcon className="h-6 w-6" />,
    items: [
      {
        name: 'Toothache triage',
        price: '£95',
        note: 'Diagnosis, an x-ray if we need one, and enough treatment to get you comfortable before you leave.',
      },
      {
        name: 'Re-cementing a crown',
        price: '£70',
        note: 'Bring the crown with you in a tissue, not in vinegar. Most go straight back on the same morning.',
      },
      {
        name: 'Broken front tooth',
        price: 'from £150',
        note: 'Rebuilt in composite the same day so you are not photographed at a wedding with a gap.',
      },
      {
        name: 'Abscess drainage',
        price: '£120',
        note: 'Drained and dressed straight away, with the root canal or extraction booked for later that week.',
      },
    ],
    footnote: 'Out of hours the answerphone gives you the Fernbank weekend rota number, and it is answered by a dentist.',
  },
]

export function TreatmentPathways() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="pathways" className="bg-[#EFF4EE] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B98B22]">Care pathways</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#123B36] sm:text-4xl">
            Four ways through the practice
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4A5A53]">
            Most people arrive on one of four routes. Pick the one that sounds like you and the panel below shows
            what that route actually involves — the appointments, how long each takes and what it costs.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Care pathways">
          {PATHWAYS.map((pathway, index) => {
            const selected = index === activeIndex
            return (
              <button
                key={pathway.id}
                type="button"
                role="tab"
                id={`pathway-tab-${pathway.id}`}
                data-testid="pathway-tab"
                aria-selected
                aria-controls={`pathway-panel-${pathway.id}`}
                onClick={() => setActiveIndex(index)}
                className={
                  selected
                    ? 'flex items-center gap-2 rounded-full bg-[#123B36] px-6 py-3 text-sm font-semibold text-[#FBF7F0] shadow-md'
                    : 'flex items-center gap-2 rounded-full border border-[#123B36]/20 bg-white/70 px-6 py-3 text-sm font-semibold text-[#123B36]/70 transition hover:border-[#123B36]/50 hover:text-[#123B36]'
                }
              >
                <span className={selected ? 'text-[#F5C458]' : 'text-[#1B5049]'}>{pathway.icon}</span>
                {pathway.label}
              </button>
            )
          })}
        </div>

        <div className="mt-8 space-y-8">
          {PATHWAYS.map((pathway) => (
            <PathwayPanel key={pathway.id} pathway={pathway} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PathwayPanel({ pathway }: { pathway: Pathway }) {
  return (
    <div
      role="tabpanel"
      id={`pathway-panel-${pathway.id}`}
      aria-labelledby={`pathway-tab-${pathway.id}`}
      data-testid="pathway-panel"
      tabIndex={0}
      className="rounded-3xl border border-[#123B36]/10 bg-white p-8 shadow-sm lg:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="text-2xl font-semibold leading-snug text-[#123B36]">{pathway.headline}</h3>
          <p className="mt-4 leading-relaxed text-[#4A5A53]">{pathway.summary}</p>
          <p className="mt-6 inline-flex rounded-full bg-[#EFF4EE] px-4 py-2 text-sm font-semibold text-[#1B5049]">
            {pathway.cadence}
          </p>
        </div>

        <ul className="divide-y divide-[#123B36]/10">
          {pathway.items.map((item) => (
            <li key={item.name} data-testid="pathway-treatment" className="flex gap-4 py-4 first:pt-0 last:pb-0">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#E8A020]" />
              <div>
                <p className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-semibold text-[#123B36]">{item.name}</span>
                  <span className="text-sm font-bold text-[#B98B22]">{item.price}</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#4A5A53]">{item.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 border-t border-[#123B36]/10 pt-6 text-sm italic leading-relaxed text-[#6B7A73]">
        {pathway.footnote}
      </p>
    </div>
  )
}
