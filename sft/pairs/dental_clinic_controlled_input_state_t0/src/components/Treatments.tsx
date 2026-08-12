import type { ComponentType } from 'react'
import {
  AlignerIcon,
  CrownIcon,
  FillingIcon,
  ImplantIcon,
  SparkleIcon,
  ToothIcon,
} from './Icons'

type Treatment = {
  name: string
  price: string
  duration: string
  blurb: string
  Icon: ComponentType<{ className?: string }>
}

const TREATMENTS: Treatment[] = [
  {
    name: 'Checkup and clean',
    price: 'from $155',
    duration: '40 minutes',
    Icon: ToothIcon,
    blurb:
      'A full look at every surface, gum measurements written down so we can compare them next year, and a scale and polish. You leave with a one-page summary, not a lecture.',
  },
  {
    name: 'Hygienist appointment',
    price: 'from $130',
    duration: '45 minutes',
    Icon: SparkleIcon,
    blurb:
      'Deeper cleaning for anyone whose gums bleed when they brush, plus twenty honest minutes on technique. Most patients come twice a year; some do better at three.',
  },
  {
    name: 'White fillings',
    price: 'from $245',
    duration: '50 minutes',
    Icon: FillingIcon,
    blurb:
      'Tooth-coloured composite, matched to the shade beside it and shaped so floss actually passes. We keep as much of the original tooth as the decay allows.',
  },
  {
    name: 'Same-day crown',
    price: 'from $1,690',
    duration: 'one visit',
    Icon: CrownIcon,
    blurb:
      'Scanned, designed and milled in the room next door while you read. No temporary crown, no second appointment, no three-week wait with a plastic cap on a molar.',
  },
  {
    name: 'Clear aligners',
    price: 'from $4,300',
    duration: '6 to 14 months',
    Icon: AlignerIcon,
    blurb:
      'For crowding, gaps and the lower front teeth that have drifted since your twenties. We will tell you plainly if a case is better sent to an orthodontist.',
  },
  {
    name: 'Single-tooth implant',
    price: 'from $4,950',
    duration: '3 to 5 months',
    Icon: ImplantIcon,
    blurb:
      'Planned from a low-dose 3D scan, placed here, restored here. The quote covers the post, the abutment and the crown — there is no fourth number arriving later.',
  },
]

export default function Treatments() {
  return (
    <section id="treatments" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f2704a]">
            Treatments
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#152046] sm:text-4xl">
            Prices we are willing to print
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#1f2a4d]/75">
            Every figure below is the real starting price, not a teaser rate that grows once
            you are in the chair. If your case needs more than the standard appointment, you
            will hear the new number before we begin and you are free to walk away from it.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map(({ name, price, duration, blurb, Icon }) => (
            <li
              key={name}
              className="group flex flex-col rounded-3xl border border-[#152046]/10 bg-[#faf6f0] p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#152046] text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#152046]">{name}</h3>
              <p className="mt-2 flex items-baseline gap-3">
                <span className="text-base font-semibold text-[#f2704a]">{price}</span>
                <span className="text-xs uppercase tracking-[0.14em] text-[#2b3a7a]/60">
                  {duration}
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#1f2a4d]/75">{blurb}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 rounded-2xl border border-dashed border-[#2b3a7a]/25 bg-[#f6eee4] px-6 py-5 text-sm leading-relaxed text-[#1f2a4d]/80">
          Toothache today? Keep an emergency slot free by calling before 9.30am — the
          assessment is <strong className="font-semibold text-[#152046]">$95</strong> and it
          comes off the cost of whatever treatment follows.
        </p>
      </div>
    </section>
  )
}
