import { Wordmark } from './icons'

const COLUMNS = [
  {
    title: 'Platform',
    links: ['Dispatch board', 'Routing', 'Field app', 'Invoicing', 'Truck inventory', 'Reporting'],
  },
  {
    title: 'Trades we fit',
    links: ['Heating and cooling', 'Plumbing', 'Electrical', 'Solar install', 'Roofing', 'Appliance repair'],
  },
  {
    title: 'Company',
    links: ['About Taskflow', 'Careers', 'Onboarding team', 'Status page', 'Security', 'Changelog'],
  },
]

export default function SiteFooter() {
  return (
    <footer data-testid="site-footer" className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <span className="flex items-center gap-2.5">
              <Wordmark />
              <span className="text-lg font-bold tracking-tight text-white">Taskflow</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Dispatch, routing and billing for field-service contractors running five to eighty
              trucks. Made in Pittsburgh by people who used to work the radio.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-slate-400">
              <p>4120 Butler Street, Suite 3</p>
              <p>Pittsburgh, PA 15201</p>
              <p>
                <a href="tel:+14125550148" className="font-medium text-slate-200">
                  (412) 555-0148
                </a>
              </p>
              <p>
                <a href="mailto:hello@taskflow.io" className="font-medium text-slate-200">
                  hello@taskflow.io
                </a>
              </p>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title} data-testid="footer-column">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#platform" className="text-sm text-slate-400 transition hover:text-amber-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Taskflow, Inc. Support desk open 7am to 8pm Eastern, Monday through Saturday.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#faq" className="transition hover:text-slate-300">
              Terms of service
            </a>
            <a href="#faq" className="transition hover:text-slate-300">
              Privacy
            </a>
            <a href="#faq" className="transition hover:text-slate-300">
              Data processing
            </a>
            <a href="#faq" className="transition hover:text-slate-300">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
