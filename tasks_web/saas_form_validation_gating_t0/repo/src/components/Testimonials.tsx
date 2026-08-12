const QUOTES = [
  {
    quote:
      'We were running twenty-two trucks off a whiteboard and a group text, and I was the bottleneck for all of it. The first week on the board I left at five instead of seven, and the callbacks stopped landing on me at nine at night.',
    name: 'Marisol Vega',
    role: 'Service manager, Kestrel Mechanical — Grand Rapids, MI',
    stat: '22 trucks',
  },
  {
    quote:
      'My guys hated the last mobile app so much they filled out paper and typed it in at the yard. Nobody has touched a paper ticket in four months. That is the whole review.',
    name: 'Dwight Bowden',
    role: 'Owner, Bowden & Sons Plumbing — Tulsa, OK',
    stat: '0 paper tickets',
  },
  {
    quote:
      'Our average days-to-invoice went from nineteen to six. The bookkeeper stopped chasing technicians for readings because the work order will not close without them, and Intacct gets clean job costing every night.',
    name: 'Priya Raghunathan',
    role: 'Controller, Northline Refrigeration — Fresno, CA',
    stat: '19 → 6 days',
  },
]

export default function Testimonials() {
  return (
    <section id="customers" data-testid="testimonials" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F4FD8]">
            Customers
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A1220] sm:text-4xl">
            Shop owners are not sentimental about software
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5B6577]">
            So we asked three of them what changed, and printed the answer without
            polishing it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-[#E4E8F2] bg-[#FBFCFE] p-7 shadow-[0_1px_2px_rgba(10,18,32,0.04)]"
            >
              <svg
                viewBox="0 0 32 24"
                className="h-6 w-8 text-[#FF9F1C]"
                role="img"
                aria-label="Quotation mark"
              >
                <path
                  d="M4 24V13.6C4 6.9 7.6 2.4 14 1l1.2 3.5C11.4 5.8 9.4 8 9.2 11.2H14V24zm16 0V13.6C20 6.9 23.6 2.4 30 1l1.2 3.5C27.4 5.8 25.4 8 25.2 11.2H30V24z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-[#22304F]">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[#EEF1F8] pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A1220] text-sm font-black text-white">
                  {item.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
                <span>
                  <span className="block text-sm font-black text-[#0A1220]">{item.name}</span>
                  <span className="block text-xs font-medium text-[#5B6577]">{item.role}</span>
                </span>
                <span className="ml-auto rounded-full bg-[#EDF1FD] px-3 py-1 text-[11px] font-black text-[#1F4FD8]">
                  {item.stat}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
