import { ToothLeafMark } from './Icons'

const COLUMNS = [
  {
    title: 'Treatments',
    links: ['New patient exam', 'Hygienist visits', 'Same-day crowns', 'Whitening & bonding', 'Implants'],
  },
  {
    title: 'The practice',
    links: ['Our dentists', 'Care pathways', 'Membership plans', 'Patient stories', 'Careers at Marigold'],
  },
  {
    title: 'Practical',
    links: ['Fees in full', 'Payment plans', 'Accessibility', 'Complaints procedure', 'Privacy notice'],
  },
]

const HOURS = [
  { day: 'Monday – Thursday', time: '6:45am – 7:30pm' },
  { day: 'Friday', time: '8:00am – 4:00pm' },
  { day: 'Saturday', time: '9:00am – 1:00pm, emergencies' },
  { day: 'Sunday', time: 'Closed — rota line open' },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0C2B27] py-16 text-[#C8D8CD]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div>
            <div className="flex items-center gap-3">
              <ToothLeafMark />
              <span className="text-lg font-semibold text-[#FBF7F0]">Marigold Dental Co.</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              12 Pennant Street, Fernbank FK4 2QR. Six parking spaces off Kestrel Lane, step-free from the front
              door, and the 14 and 27 buses stop at the corner.
            </p>
            <p className="mt-5 text-sm">
              <a href="tel:5550172" className="font-semibold text-[#FBF7F0] hover:text-[#F5C458]">
                555 0172
              </a>
              <span className="mx-2 text-[#3C6B60]">·</span>
              <a href="mailto:hello@marigolddental.co" className="hover:text-[#F5C458]">
                hello@marigolddental.co
              </a>
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F5C458]">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top" data-testid="footer-link" className="transition hover:text-[#FBF7F0]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {HOURS.map((slot) => (
            <div key={slot.day} data-testid="hours-row">
              <p className="text-sm font-semibold text-[#FBF7F0]">{slot.day}</p>
              <p className="mt-1 text-sm">{slot.time}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-xs leading-relaxed text-[#7FA08C]">
          © 2026 Marigold Dental Co. Registered in England 07741220. All clinicians are registered with the General
          Dental Council; our complaints procedure is available at reception and on request by email.
        </p>
      </div>
    </footer>
  )
}
