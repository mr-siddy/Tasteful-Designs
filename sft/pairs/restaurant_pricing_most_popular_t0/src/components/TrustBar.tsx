const STATS = [
  { value: '4.8', label: 'Average from 1,240 diner reviews' },
  { value: '14', label: 'Farms and boats we buy from directly' },
  { value: '312', label: 'Private dinners hosted in the back room' },
  { value: '0', label: 'Gas burners anywhere in the kitchen' },
]

const AWARDS = [
  { name: 'Dunmore Dispatch', note: 'Restaurant of the Year, 2024' },
  { name: 'Providence Culinary Guild', note: 'Hearth Cooking Honour, 2023' },
  { name: 'Northeast Fire & Smoke', note: 'Finalist, whole-animal service' },
  { name: 'Halstead Row Merchants', note: 'Neighbour of the Year, 2022' },
]

function LaurelMark() {
  return (
    <svg viewBox="0 0 40 40" className="h-8 w-8 shrink-0" aria-hidden="true">
      <path
        d="M20 34c-7-2-11-7-11-14 0-6 3-11 11-16 8 5 11 10 11 16 0 7-4 12-11 14Z"
        fill="none"
        stroke="#b8431a"
        strokeWidth="1.6"
      />
      <path d="M20 27v-13M20 18l4-4M20 22l-4-4" stroke="#e2622a" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default function TrustBar() {
  return (
    <section className="border-y border-[#171310]/10 bg-[#efe6d8]" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2
          id="trust-heading"
          className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6f645b]"
        >
          Nine years of cooking over wood on Halstead Row
        </h2>

        <dl className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} data-testid="trust-stat" className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-serif text-4xl font-semibold text-[#b8431a]">{stat.value}</span>
                <span className="mt-2 block text-sm leading-snug text-[#6f645b]">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-12 grid gap-5 border-t border-[#171310]/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {AWARDS.map((award) => (
            <li key={award.name} data-testid="award" className="flex items-start gap-3">
              <LaurelMark />
              <span>
                <span className="block text-sm font-semibold text-[#171310]">{award.name}</span>
                <span className="block text-sm text-[#6f645b]">{award.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
