const EXPLORE = [
  { href: '#menus', label: 'Menus' },
  { href: '#plates', label: 'Signature plates' },
  { href: '#hearth', label: 'The hearth' },
  { href: '#sourcing', label: 'Sourcing' },
  { href: '#loft', label: 'Private dining' },
  { href: '#faq', label: 'Questions' },
]

const HOURS = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday – Thursday', time: '5:00 – 10:00' },
  { day: 'Friday – Saturday', time: '12:00 – 3:00, 5:00 – 11:00' },
  { day: 'Sunday', time: '12:00 – 7:00' },
]

export function SiteFooter() {
  return (
    <footer data-testid="site-footer" className="bg-stone-900 py-16 text-stone-300">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" aria-hidden="true" className="h-9 w-9">
                <circle cx="20" cy="20" r="19" fill="#1c1917" stroke="#f59e0b" strokeWidth="1.5" />
                <path
                  d="M20 8c4.6 4.2 7 7.9 7 11.6 0 4-3.1 7.2-7 7.2s-7-3.2-7-7.2c0-2.1.9-4 2.6-5.9.4 2.3 1.5 3.6 3.2 3.9-.6-3.4.2-6.5 1.2-9.6z"
                  fill="#f59e0b"
                />
              </svg>
              <span className="font-serif text-lg font-semibold text-stone-100">Casa Marisol</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-stone-400">
              Catalan live-fire cooking on the Larkspur waterfront since 2019. Chef and owner, Núria
              Vidal-Reyes. Named for her grandmother, who did all of this on a beach with a grate.
            </p>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-6 flex gap-2"
              aria-label="Subscribe to the Casa Marisol letter"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address for the monthly letter
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                className="w-full rounded-full border border-stone-700 bg-stone-950 px-4 py-2.5 text-sm text-stone-100 outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
              >
                Join
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-100">
              Visit
            </h3>
            <address className="mt-5 space-y-2 text-sm not-italic text-stone-400">
              <p>118 Rope Walk</p>
              <p>Larkspur District</p>
              <p>Providence, Rhode Island 02903</p>
              <p className="pt-2">
                <a href="tel:+14015550164" className="hover:text-amber-400">
                  (401) 555-0164
                </a>
              </p>
              <p>
                <a href="mailto:hola@casamarisol.com" className="hover:text-amber-400">
                  hola@casamarisol.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-100">
              Hours
            </h3>
            <dl className="mt-5 space-y-3 text-sm text-stone-400">
              {HOURS.map((row) => (
                <div key={row.day} className="flex justify-between gap-4">
                  <dt>{row.day}</dt>
                  <dd className="text-right text-stone-300">{row.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-100">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-stone-400 transition hover:text-amber-400">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-stone-800 pt-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Casa Marisol. All rights reserved. Fire lit daily at twenty to six.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#faq" className="hover:text-stone-300">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-stone-300">
                Allergen policy
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-stone-300">
                Gift vouchers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
