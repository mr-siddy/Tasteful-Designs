import { FoundryMark } from './Icons'

const COLUMNS = [
  {
    title: 'Train',
    links: [
      { label: 'Barbell Club', href: '#programs' },
      { label: 'Conditioning', href: '#programs' },
      { label: 'Foundations', href: '#programs' },
      { label: 'Masters 50+', href: '#programs' },
      { label: 'Open Training', href: '#programs' },
    ],
  },
  {
    title: 'The gym',
    links: [
      { label: 'How we coach', href: '#method' },
      { label: 'The room', href: '#facility' },
      { label: 'Coaches', href: '#coaches' },
      { label: 'Member stories', href: '#stories' },
      { label: 'Questions', href: '#faq' },
    ],
  },
]

const HOURS = [
  { days: 'Monday – Thursday', time: '5:00am – 8:00pm' },
  { days: 'Friday', time: '5:00am – 7:00pm' },
  { days: 'Saturday', time: '7:00am – 1:00pm' },
  { days: 'Sunday', time: 'Open training 9:00am – noon' },
]

export default function SiteFooter() {
  return (
    <footer data-testid="site-footer" className="bg-slate-900 py-16 text-slate-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 text-slate-50">
              <FoundryMark />
              <span className="leading-tight">
                <span className="block text-base font-black tracking-tight">Foundry Hill</span>
                <span className="block text-[11px] uppercase tracking-[0.22em] text-lime-300">Strength Co.</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              A coached barbell gym in Hollins Market, Baltimore. Capped at 240 members so the floor
              is never crowded and your coach always knows your name.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-lime-300">{column.title}</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-lime-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-lime-300">Visit</h2>
            <address className="mt-5 space-y-1 text-sm not-italic text-slate-400">
              <span className="block">1140 Ellicott Street</span>
              <span className="block">Baltimore, MD 21223</span>
              <span className="block pt-2">
                <a href="tel:+14105550188" className="hover:text-lime-300">
                  (410) 555-0188
                </a>
              </span>
              <span className="block">
                <a href="mailto:desk@foundryhillstrength.co" className="hover:text-lime-300">
                  desk@foundryhillstrength.co
                </a>
              </span>
            </address>
            <dl className="mt-6 space-y-1.5 text-xs text-slate-400">
              {HOURS.map((row) => (
                <div key={row.days} className="flex justify-between gap-4">
                  <dt>{row.days}</dt>
                  <dd className="text-right text-slate-300">{row.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Foundry Hill Strength Co. Baltimore, Maryland.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#membership" className="hover:text-lime-300">
                Membership terms
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-lime-300">
                Cancellation policy
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-lime-300">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
