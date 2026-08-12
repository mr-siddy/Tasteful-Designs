import { useState } from 'react'
import type { ComponentType } from 'react'
import { ClockIcon, CrownIcon, GridIcon, ShieldCheckIcon, SirenIcon, SparkleIcon } from './Icons'

type CategoryId = 'all' | 'preventive' | 'cosmetic' | 'restorative' | 'emergency'

type Category = {
  id: CategoryId
  label: string
  icon: ComponentType<{ className?: string }>
}

type Treatment = {
  name: string
  category: Exclude<CategoryId, 'all'>
  price: string
  chairTime: string
  blurb: string
}

const CATEGORIES: Category[] = [
  { id: 'all', label: 'All', icon: GridIcon },
  { id: 'preventive', label: 'Preventive', icon: ShieldCheckIcon },
  { id: 'cosmetic', label: 'Cosmetic', icon: SparkleIcon },
  { id: 'restorative', label: 'Restorative', icon: CrownIcon },
  { id: 'emergency', label: 'Emergency', icon: SirenIcon },
]

const CATEGORY_LABELS: Record<Exclude<CategoryId, 'all'>, string> = {
  preventive: 'Preventive',
  cosmetic: 'Cosmetic',
  restorative: 'Restorative',
  emergency: 'Emergency',
}

const TREATMENTS: Treatment[] = [
  {
    name: 'Exam and hygiene visit',
    category: 'preventive',
    price: '$130',
    chairTime: '45 minutes',
    blurb:
      'A full decay and soft-tissue check, a scale and polish, and a written plan you take home with the prices already on it.',
  },
  {
    name: "Children's first checkup",
    category: 'preventive',
    price: '$60',
    chairTime: '30 minutes',
    blurb:
      'For under-sevens: a ride in the chair, a count of the teeth, a fluoride varnish if they are up for it, and nothing they did not agree to.',
  },
  {
    name: 'Night guard for grinding',
    category: 'preventive',
    price: '$290',
    chairTime: 'Two short visits',
    blurb:
      'A scan on the first visit, a milled guard fitted on the second, and a follow-up at six weeks to grind in the bite.',
  },
  {
    name: 'Take-home whitening kit',
    category: 'cosmetic',
    price: '$340',
    chairTime: 'Two short visits',
    blurb:
      'Custom trays milled from your own scan, two strengths of gel, and a shade check at the end so you can stop when you like the result.',
  },
  {
    name: 'Composite bonding',
    category: 'cosmetic',
    price: '$210 per tooth',
    chairTime: '60 minutes',
    blurb:
      'Chips, gaps and worn edges rebuilt in tooth-coloured composite, shaped and polished in the chair with no drilling of healthy enamel.',
  },
  {
    name: 'Porcelain veneer',
    category: 'cosmetic',
    price: '$890 per tooth',
    chairTime: 'Two visits',
    blurb:
      'Designed on screen with you looking at it, milled in our own lab, and bonded at the second visit once you have approved the shape.',
  },
  {
    name: 'Gum reshaping',
    category: 'cosmetic',
    price: '$420',
    chairTime: '45 minutes',
    blurb:
      'A soft-tissue laser evens out a gummy or uneven smile line. No stitches, no scalpel, and most people are back at work the same afternoon.',
  },
  {
    name: 'White filling',
    category: 'restorative',
    price: '$180',
    chairTime: '40 minutes',
    blurb:
      'Decay removed and the tooth rebuilt in layered composite matched to the shade beside it. Old grey amalgam swapped out at the same price.',
  },
  {
    name: 'Same-day ceramic crown',
    category: 'restorative',
    price: '$980',
    chairTime: 'One visit, about two hours',
    blurb:
      'Scanned, designed, milled on the bench behind reception and cemented before you leave. No temporary crown and no second appointment.',
  },
  {
    name: 'Root canal treatment',
    category: 'restorative',
    price: '$760',
    chairTime: '90 minutes',
    blurb:
      'Done under a rubber dam with a surgical microscope, in one appointment for most teeth, with the crown quoted separately and up front.',
  },
  {
    name: 'Toothache triage appointment',
    category: 'emergency',
    price: '$85',
    chairTime: '20 minutes, same day',
    blurb:
      'Two of these are held open every weekday morning. We find the cause, get you out of pain, and price the actual repair before you agree to it.',
  },
  {
    name: 'Chipped or knocked-out tooth',
    category: 'emergency',
    price: '$240',
    chairTime: '45 minutes, same day',
    blurb:
      'Bring the fragment in milk if you have it. We re-seat, splint or rebuild on the spot and review the tooth free of charge at four weeks.',
  },
]

export function TreatmentIndex() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all')

  const catalogue = TREATMENTS.filter(
    (treatment) => activeCategory === 'all' || treatment.category === activeCategory,
  )

  return (
    <section id="treatments" data-testid="treatment-index" className="bg-[#F1F5F7]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2AA79B]">
            The published price list
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12263F] sm:text-4xl">
            The treatment index
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5B7089]">
            Everything Tidewater does, with the price we will actually charge and the time you will
            actually spend in the chair. Narrow it to the kind of appointment you are thinking about,
            or read the lot. Prices include the exam, the x-rays and the follow-up review.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter treatments by category"
          className="mt-10 flex flex-wrap gap-3"
        >
          {CATEGORIES.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id
            return (
              <button
                key={category.id}
                type="button"
                data-testid="treatment-filter"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? 'border-[#12263F] bg-[#12263F] text-white shadow-sm'
                    : 'border-[#12263F]/15 bg-white text-[#12263F]/75 hover:border-[#2AA79B] hover:text-[#12263F]'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </button>
            )
          })}
        </div>

        <p data-testid="treatment-count" className="mt-6 text-sm font-medium text-[#5B7089]">
          Showing {catalogue.length} of {TREATMENTS.length} treatments
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {catalogue.map((treatment) => (
            <article
              key={treatment.name}
              data-testid="treatment-card"
              data-category={treatment.category}
              className="flex flex-col rounded-2xl border border-[#12263F]/8 bg-white p-6 shadow-sm shadow-[#12263F]/5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="w-fit rounded-full bg-[#2AA79B]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#1c7f76]">
                {CATEGORY_LABELS[treatment.category]}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-[#12263F]">
                {treatment.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5B7089]">{treatment.blurb}</p>
              <div className="mt-5 flex items-center justify-between border-t border-[#12263F]/8 pt-4">
                <span className="text-xl font-semibold tracking-tight text-[#12263F]">
                  {treatment.price}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5B7089]">
                  <ClockIcon />
                  {treatment.chairTime}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-[#5B7089]">
          Not sure which line you are looking at? Ring the desk on (555) 014-2200 and Marta will talk
          it through with you before you book anything. Payment plans over three, six or twelve months
          are available on any treatment over $300, interest free.
        </p>
      </div>
    </section>
  )
}
