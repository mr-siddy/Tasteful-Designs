import { NAV_LINKS } from './PrimaryNav'
import { ArrowIcon, CloseIcon, Wordmark } from './icons'

type MobileMenuProps = {
  /** Put the sheet away and hand the page back to the visitor. */
  onDismiss: () => void
}

/** Full-screen navigation sheet shown on phone-sized viewports. */
export default function MobileMenu({ onDismiss }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <div
        data-testid="mobile-menu-overlay"
        onClick={onDismiss}
        className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm"
      />
      <div
        id="mobile-menu"
        data-testid="mobile-menu"
        className="fixed inset-x-0 top-0 z-50 max-h-screen overflow-y-auto border-b border-slate-800 bg-slate-950 px-5 pb-8 pt-4 shadow-2xl shadow-slate-950/60"
      >
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2.5 text-base font-bold tracking-tight text-white">
            <Wordmark className="h-7 w-7" />
            Taskflow
          </span>
          <button
            type="button"
            data-testid="mobile-menu-close"
            aria-label="Close menu"
            onClick={onDismiss}
            className="rounded-xl border border-slate-800 p-2 text-slate-300"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-6 flex flex-col divide-y divide-slate-800/80 border-y border-slate-800/80">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid="mobile-menu-link"
              onClick={onDismiss}
              className="group flex items-start justify-between gap-4 py-4 text-left"
            >
              <span>
                <span className="block text-lg font-semibold text-white">{link.label}</span>
                <span className="mt-0.5 block text-sm text-slate-400">{link.blurb}</span>
              </span>
              <ArrowIcon className="mt-2 h-4 w-4 shrink-0 text-amber-400" />
            </a>
          ))}
        </nav>

        <a
          href="#demo"
          data-testid="mobile-menu-cta"
          onClick={onDismiss}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3.5 text-base font-semibold text-slate-950"
        >
          Book a 20-minute demo
          <ArrowIcon />
        </a>

        <p className="mt-5 text-sm text-slate-400">
          Dispatch is short-handed today? Call the onboarding desk at{' '}
          <a href="tel:+14125550148" className="font-semibold text-amber-300">
            (412) 555-0148
          </a>{' '}
          — a real dispatcher picks up, Monday to Saturday, 6am to 8pm Eastern.
        </p>
      </div>
    </div>
  )
}
