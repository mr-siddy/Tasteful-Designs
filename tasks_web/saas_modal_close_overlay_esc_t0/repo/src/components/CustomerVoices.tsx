const QUOTES = [
  {
    quote:
      'We took a $12,400 penalty on a late ISF in 2023 and I still think about it. Since March we have not filed a single one inside the window — the drafts are sitting there four days early and my writers spend their morning on the four shipments that actually need them.',
    name: 'Renata Halverson',
    role: 'Director of operations, Halverson Freight Group',
    place: 'Tacoma, Washington',
    tint: '#0D6E8C',
  },
  {
    quote:
      'My worry was that it would classify things confidently and wrongly and my brokers would rubber-stamp it. It does the opposite. Every code shows its ruling, and the two times we disagreed the override stuck for every shipment from that shipper afterwards.',
    name: 'Marcus Whitfield',
    role: 'Licensed customs broker, Kolstad & Reyes',
    place: 'Newark, New Jersey',
    tint: '#F2A03D',
  },
  {
    quote:
      'The shadow fortnight sold it internally better than any demo could have. My most skeptical entry writer compared it against her own work for two weeks, found eleven disagreements out of four hundred, and won all eleven. She runs the desk on it now.',
    name: 'Priya Raman',
    role: 'Compliance manager, Bay Point Logistics',
    place: 'Long Beach, California',
    tint: '#5AC8D8',
  },
]

export function CustomerVoices() {
  return (
    <section id="customers" className="bg-[#EDF2F6]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0D6E8C]">
            Customers
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            People who write entries for a living
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#42566B]">
            Every one of these people will take a call from you before you sign anything. Ask us on
            the walkthrough and we will make the introduction.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((item) => (
            <figure
              key={item.name}
              data-testid="customer-quote"
              className="flex flex-col rounded-3xl border border-[#0B1F33]/10 bg-white p-8 shadow-sm shadow-[#0B1F33]/5"
            >
              <svg viewBox="0 0 32 24" aria-hidden="true" className="h-6 w-8">
                <path
                  d="M13 3C7 5 4 9 4 15v6h9v-9H9c0-3 1.5-5 4.6-6.2zM31 3c-6 2-9 6-9 12v6h9v-9h-4c0-3 1.5-5 4.6-6.2z"
                  fill={item.tint}
                  opacity="0.85"
                />
              </svg>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-[#42566B]">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-[#0B1F33]/10 pt-5">
                <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 shrink-0">
                  <circle cx="24" cy="24" r="24" fill={item.tint} opacity="0.14" />
                  <circle cx="24" cy="19" r="7.5" fill={item.tint} opacity="0.55" />
                  <path d="M9 44c2.8-8.4 9-12.6 15-12.6S36.2 35.6 39 44z" fill={item.tint} opacity="0.55" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-[#0B1F33]">{item.name}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#42566B]">{item.role}</p>
                  <p className="mt-0.5 text-xs text-[#7C8FA2]">{item.place}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
