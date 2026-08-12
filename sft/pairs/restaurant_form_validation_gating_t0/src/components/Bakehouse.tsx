const LOAVES = [
  {
    name: 'Dark rye, 90% whole',
    price: '$9',
    detail: 'Four-day sour, milled in-house on Tuesdays from Piedmont-grown Danko rye. Sixty loaves a day, gone by nine most mornings.',
  },
  {
    name: 'Ember-crust country loaf',
    price: '$8',
    detail: 'Baked on the deck oven floor with a shovel of last night’s oak ash under it. Thin crackling crust, custard crumb, keeps three days.',
  },
  {
    name: 'Talo, pressed to order',
    price: '$5',
    detail: 'A flat corn cake off the plancha, folded around chorizo or spring onion. This is the thing to eat standing up while you wait for a table.',
  },
  {
    name: 'Butter-laminated txitxardin bun',
    price: '$6',
    detail: 'Emmett’s Friday project: a laminated milk bun brushed with brown butter and salted at the door. Forty a week, never more.',
  },
]

function WheatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#8a6a4a]" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 21V8" />
        <path d="M12 8c0-2.2 1.6-4 3.6-4 0 2.2-1.6 4-3.6 4zM12 8C12 5.8 10.4 4 8.4 4c0 2.2 1.6 4 3.6 4z" />
        <path d="M12 13c0-2.2 1.6-4 3.6-4 0 2.2-1.6 4-3.6 4zM12 13c0-2.2-1.6-4-3.6-4 0 2.2 1.6 4 3.6 4z" />
        <path d="M12 18c0-2.2 1.6-4 3.6-4 0 2.2-1.6 4-3.6 4zM12 18c0-2.2-1.6-4-3.6-4 0 2.2 1.6 4 3.6 4z" />
      </g>
    </svg>
  )
}

export default function Bakehouse() {
  return (
    <section id="bakehouse" aria-labelledby="bakehouse-heading" className="bg-[#1b1512] text-[#faf5ec]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#e0912f]">The 4am side</p>
            <h2 id="bakehouse-heading" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              The bakehouse pays the rent before the kitchen wakes up
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#d6c7b1]">
              Emmett Sandoval lights the deck oven at four and has the first rye out by six-thirty. From
              seven until we sell out, the Ferris Street door is a bakery with a coffee machine and eight
              stools; at five it becomes the front of the restaurant again. Same oven, same flour, two
              completely different rooms.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#d6c7b1]">
              Anything unsold at eleven goes to the Durham Community Fridge on Chapel Hill Street, which is
              a policy and not a gesture — it comes to roughly nine hundred loaves a year.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[#faf5ec]/15 px-5 py-4">
              <WheatIcon />
              <span className="text-sm leading-snug text-[#c9baa5]">
                Counter open 7:00&ndash;11:00 am, Wednesday to Sunday. No pre-orders under six loaves.
              </span>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {LOAVES.map((loaf) => (
              <li
                key={loaf.name}
                className="rounded-2xl border border-[#faf5ec]/12 bg-[#241a14] p-6 shadow-lg shadow-black/25"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-black leading-tight">{loaf.name}</h3>
                  <span className="shrink-0 text-lg font-black text-[#e0912f]">{loaf.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#bfae97]">{loaf.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
