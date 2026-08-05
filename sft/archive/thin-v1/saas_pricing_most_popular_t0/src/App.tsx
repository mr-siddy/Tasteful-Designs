import { PricingTiers } from './components/PricingTiers'
import { ValueProps } from './components/ValueProps'

const CUSTOMERS = ['Northwind Tools', 'Vellum Books', 'Harbourline', 'Pane & Post', 'Kite Robotics']

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5"
        >
          <span className="font-semibold tracking-tight">Slatepine</span>
          <a href="#pricing" className="text-sm text-slate-600 hover:text-slate-900">
            Pricing
          </a>
        </nav>
      </header>

      <main>
        <section id="hero" className="mx-auto max-w-3xl px-4 py-24 text-center">
          <p className="text-sm uppercase tracking-widest text-teal-700">
            Shared inbox for support teams
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight">Slatepine</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            One calm inbox for every customer conversation. Slatepine gathers email, chat and form
            replies into a single thread, routes it to the right teammate, then gets out of the way.
          </p>
          <div className="mt-10 flex justify-center gap-3">
            <a
              href="#pricing"
              data-testid="hero-cta"
              className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white"
            >
              Start free for 14 days
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900"
            >
              See how it works
            </a>
          </div>
        </section>

        <section aria-label="Customers" className="border-y border-slate-200 bg-slate-50 py-8">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">Answering with us</p>
            {CUSTOMERS.map((name) => (
              <span key={name} className="text-sm font-medium text-slate-500">
                {name}
              </span>
            ))}
          </div>
        </section>

        <ValueProps />
        <PricingTiers />
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-slate-500">
          © 2026 Slatepine Software · 88 Marley Way, Portland OR · hello@slatepine.com
        </div>
      </footer>
    </div>
  )
}
