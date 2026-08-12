import { BraceIcon, ChairIcon, ChildIcon, ClockLeaf, FirstAidIcon, SparkleTooth } from './Icons'

type Treatment = {
  name: string
  price: string
  duration: string
  blurb: string
  icon: JSX.Element
}

const TREATMENTS: Treatment[] = [
  {
    name: 'New patient exam',
    price: '£68',
    duration: '40 min',
    blurb:
      'A full soft-tissue and gum check, low-dose scans of anything we cannot see by eye, and a written plan you take home with the prices already on it.',
    icon: <ClockLeaf className="h-6 w-6" />,
  },
  {
    name: 'Hygienist visit',
    price: '£74',
    duration: '45 min',
    blurb:
      'Airflow polishing and hand scaling with Marta, who will show you on a screen exactly which two teeth your brushing keeps missing.',
    icon: <SparkleTooth className="h-6 w-6" />,
  },
  {
    name: 'White filling',
    price: 'from £145',
    duration: '50 min',
    blurb:
      'Composite matched to the shade of the tooth beside it, placed under a rubber dam so nothing tastes of the material afterwards.',
    icon: <ChairIcon className="h-6 w-6" />,
  },
  {
    name: 'Same-day ceramic crown',
    price: '£690',
    duration: 'one visit',
    blurb:
      'Scanned, milled in our own workshop and fitted before lunch. No temporary crown, no second appointment, no impression putty.',
    icon: <BraceIcon className="h-6 w-6" />,
  },
  {
    name: 'Emergency appointment',
    price: '£95',
    duration: '30 min',
    blurb:
      'Four slots held every weekday morning for pain, a lost crown or a broken front tooth. Phone before 9am and you will be seen that day.',
    icon: <FirstAidIcon className="h-6 w-6" />,
  },
  {
    name: 'Children under twelve',
    price: 'Free',
    duration: '25 min',
    blurb:
      'Checkups, fluoride varnish and fissure sealants at no charge when a parent is registered with us. First visits are a ride in the chair and nothing else.',
    icon: <ChildIcon className="h-6 w-6" />,
  },
]

export function TreatmentPricing() {
  return (
    <section id="treatments" className="bg-[#FBF7F0] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B98B22]">The price list</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#123B36] sm:text-4xl">
            What things cost, printed before you sit down
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4A5A53]">
            The six appointments below cover about nine in ten visits to Pennant Street. Nothing gets added to your
            bill on the day without you agreeing to it first, and if a plan changes mid-treatment we stop and
            re-quote you rather than carry on.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((treatment) => (
            <article
              key={treatment.name}
              data-testid="treatment-card"
              className="group rounded-2xl border border-[#123B36]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF4EE] text-[#1B5049]">
                {treatment.icon}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#123B36]">{treatment.name}</h3>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#B98B22]">{treatment.price}</span>
                <span className="text-sm text-[#8A7A5C]">· {treatment.duration}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4A5A53]">{treatment.blurb}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-2xl border border-dashed border-[#123B36]/20 bg-white/60 px-6 py-5 text-sm leading-relaxed text-[#4A5A53]">
          Payment plans over three, six or ten months carry no interest on anything above £400. Ask Dilan at the
          front desk and it is set up while you put your coat on.
        </p>
      </div>
    </section>
  )
}
