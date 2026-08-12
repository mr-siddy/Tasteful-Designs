import { ClubMark } from './Icons'
import { Shell } from './PageKit'

const COLUMNS = [
  {
    heading: 'Train here',
    links: ['Barbell Foundations', 'Engine Room', 'Hybrid Athlete', 'Masters 50+', 'Return to Strength', 'Open Floor'],
  },
  {
    heading: 'The club',
    links: ['Membership and pricing', 'How coaching works', 'Meet the coaches', 'The studio', 'Member handbook'],
  },
  {
    heading: 'Practical',
    links: ['Book a free intro', 'Timetable', 'Pause or cancel', 'Guest passes', 'Corporate memberships'],
  },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#0E1216] py-16 text-[#E2D6C6]">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <ClubMark className="h-10 w-10" />
              <span className="leading-tight">
                <span className="block text-base font-black tracking-tight text-[#FBF7F1]">Foundry Row</span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A6E60]">
                  Strength Club
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#A79C8D]">
              A coached barbell and conditioning club in the old brass foundry on the canal. Assess, program,
              retest — since 2019.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-[#A79C8D]">
              <p>129 Foundry Row, Ironside</p>
              <p>
                <a href="tel:+13125550184" data-testid="footer-link" className="hover:text-[#F0803F]">
                  (312) 555-0184
                </a>
              </p>
              <p>
                <a href="mailto:desk@foundryrow.club" data-testid="footer-link" className="hover:text-[#F0803F]">
                  desk@foundryrow.club
                </a>
              </p>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#FBF7F1]">{column.heading}</h3>
              <ul className="mt-5 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      data-testid="footer-link"
                      className="text-sm text-[#A79C8D] transition-colors hover:text-[#F0803F]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-[#7A6E60] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Foundry Row Strength Club. Staffed 5:30am – 8:30pm weekdays.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#top" data-testid="footer-link" className="hover:text-[#F0803F]">Terms of membership</a>
            <a href="#top" data-testid="footer-link" className="hover:text-[#F0803F]">Privacy</a>
            <a href="#top" data-testid="footer-link" className="hover:text-[#F0803F]">Accessibility</a>
            <a href="#top" data-testid="footer-link" className="hover:text-[#F0803F]">Cookie choices</a>
          </div>
        </div>
      </Shell>
    </footer>
  )
}
