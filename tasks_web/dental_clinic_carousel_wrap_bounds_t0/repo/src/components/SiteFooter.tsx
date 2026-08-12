import { HarbourMark } from './Icons'

const COLUMNS = [
  {
    heading: 'The practice',
    links: [
      { label: 'Price list', href: '#treatments' },
      { label: 'Implants', href: '#implants' },
      { label: 'Nervous patients', href: '#nervous' },
      { label: 'Your first visit', href: '#first-visit' },
      { label: 'Membership plans', href: '#membership' },
    ],
  },
  {
    heading: 'Patients',
    links: [
      { label: 'Patient stories', href: '#stories' },
      { label: 'Meet the team', href: '#team' },
      { label: 'Common questions', href: '#faq' },
      { label: 'Opening hours', href: '#visit' },
      { label: 'Register with us', href: '#register' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0A2237] py-16 text-[#B7CFD9]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#top" className="flex items-center gap-3">
              <HarbourMark className="h-11 w-11" />
              <span className="text-lg font-bold tracking-tight text-white">Harbourline Dental</span>
            </a>
            <p className="mt-5 text-sm leading-relaxed">
              A nine-person family and implant practice on Saltmere quay. Independent since 2016, and staying that
              way — we have turned down three offers from groups and intend to turn down the next one.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{column.heading}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <a href={link.href} className="text-sm transition hover:text-[#F2683C]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Get in touch</h3>
            <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed">
              <span className="block">
                4 Quay Parade
                <br />
                Saltmere SM7 2QD
              </span>
              <span className="block">
                <a href="tel:01998442610" className="transition hover:text-[#F2683C]">
                  01998 442 610
                </a>
              </span>
              <span className="block">
                <a href="mailto:reception@harbourlinedental.co.uk" className="transition hover:text-[#F2683C]">
                  reception@harbourlinedental.co.uk
                </a>
              </span>
            </address>
            <p className="mt-5 text-sm">
              Emergencies: ring before 10am on any weekday.
              <br />
              Out of hours, the answerphone gives you the urgent care line.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Harbourline Dental Ltd. Registered in England, company 09912447.</p>
          <p>
            Regulated by the General Dental Council · Principal: Dr. Neve Ashworth, GDC 84213 · CQC provider
            1-8842097315
          </p>
        </div>
      </div>
    </footer>
  )
}
