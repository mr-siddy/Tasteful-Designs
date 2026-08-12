const PRESS = [
  { source: 'The News & Observer', line: 'Restaurant of the Year, 2024' },
  { source: 'Indy Week', line: 'Best New Kitchen in the Triangle' },
  { source: 'Southern Kitchen Guild', line: 'Whole-Animal Cookery Award' },
  { source: 'Carolina Bread Society', line: 'Bakehouse of Merit, two years running' },
]

function LaurelIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#b8451f]" aria-hidden="true">
      <path
        d="M12 3c-3.4 1.3-5.6 4.4-5.6 8 0 3.9 2.4 7.2 5.6 9 3.2-1.8 5.6-5.1 5.6-9 0-3.6-2.2-6.7-5.6-8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M12 8.5v7M9.4 11.2 12 12.8l2.6-1.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default function TrustBar() {
  return (
    <section aria-labelledby="press-heading" className="border-b border-[#1b1512]/10 bg-[#f1e7d6]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 id="press-heading" className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-[#8a6a4a]">
          Written up, argued over, and booked out since 2019
        </h2>
        <ul className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRESS.map((item) => (
            <li
              key={item.source}
              className="rounded-2xl border border-[#1b1512]/10 bg-[#faf5ec] p-5 shadow-sm"
            >
              <LaurelIcon />
              <p className="mt-3 text-sm font-black uppercase tracking-wide text-[#1b1512]">
                {item.source}
              </p>
              <p className="mt-1 text-sm leading-snug text-[#5d4c3d]">{item.line}</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-9 max-w-3xl text-center text-base leading-relaxed text-[#5d4c3d]">
          Eleven thousand covers a year out of a fifty-two seat room, a bakehouse that sells out of rye
          by nine most mornings, and a staff whose average tenure is now past three years. We are open
          Wednesday through Sunday and we answer the phone ourselves.
        </p>
      </div>
    </section>
  )
}
