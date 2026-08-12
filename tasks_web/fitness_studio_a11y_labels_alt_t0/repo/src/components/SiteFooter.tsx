import { BarbellMark } from './Icons'

const COLUMNS = [
  {
    heading: 'Train here',
    links: [
      { label: 'Barbell Foundations', href: '#programmes' },
      { label: 'Coalhouse Conditioning', href: '#programmes' },
      { label: 'Rebuild', href: '#programmes' },
      { label: 'Masters Strength', href: '#programmes' },
      { label: 'Barbell Club', href: '#programmes' },
      { label: 'Open Gym', href: '#programmes' },
    ],
  },
  {
    heading: 'The club',
    links: [
      { label: 'The five rooms', href: '#rooms' },
      { label: 'Our coaches', href: '#coaches' },
      { label: 'How we programme', href: '#method' },
      { label: 'Membership and pricing', href: '#membership' },
      { label: 'Common questions', href: '#questions' },
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#0E1116] text-[#F7F3EC]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <BarbellMark />
              <span className="flex flex-col leading-none">
                <span className="text-lg font-black tracking-tight">Coalhouse</span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#E1552B]">
                  Athletic Club
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#F7F3EC]/60">
              A coached barbell room in the old Frankford Avenue coal depot. Open since 2014, still run by
              the person who signed the lease.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F3EC]/45">
                {column.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-[#F7F3EC]/75">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-[#E1552B]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F3EC]/45">
              Find the depot
            </h3>
            <address className="mt-4 not-italic text-sm leading-relaxed text-[#F7F3EC]/75">
              1140 Frankford Avenue
              <br />
              Fishtown, Philadelphia, PA 19125
            </address>
            <p className="mt-4 text-sm text-[#F7F3EC]/75">
              <a href="tel:+12155550142" className="font-bold text-[#E1552B]">
                (215) 555 0142
              </a>
              <br />
              frontdesk@coalhouse.club
            </p>
            <dl className="mt-5 text-sm leading-relaxed text-[#F7F3EC]/60">
              <dt className="font-bold text-[#F7F3EC]/80">Staffed hours</dt>
              <dd>Monday to Friday, 5:30am – 9:30pm</dd>
              <dd>Saturday and Sunday, 7:00am – 4:00pm</dd>
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-[#F7F3EC]/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Coalhouse Athletic Club LLC. Built in Fishtown.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#membership" className="hover:text-[#E1552B]">
                Membership terms
              </a>
            </li>
            <li>
              <a href="#questions" className="hover:text-[#E1552B]">
                Injury and liability policy
              </a>
            </li>
            <li>
              <a href="#book" className="hover:text-[#E1552B]">
                Accessibility at the depot
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
