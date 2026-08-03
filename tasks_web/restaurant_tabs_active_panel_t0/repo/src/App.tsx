import { MenuTabs } from './components/MenuTabs'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <section id="hero" className="mx-auto max-w-3xl px-4 py-20 text-center">
          <p className="text-sm uppercase tracking-widest text-slate-500">Mediterranean kitchen</p>
          <h1 className="mt-3 text-4xl font-bold">Saffron Row</h1>
          <p className="mt-3 text-slate-600">
            Charcoal, citrus and a long table. Open Tuesday to Sunday on Wharf Street.
          </p>
          <a
            href="#menu"
            data-testid="hero-cta"
            className="mt-8 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white"
          >
            See the menu
          </a>
        </section>
        <MenuTabs />
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-3xl px-4 py-8 text-sm text-slate-500">
          © 2026 Saffron Row · 41 Wharf Street · Reservations 555 0148
        </div>
      </footer>
    </div>
  )
}
