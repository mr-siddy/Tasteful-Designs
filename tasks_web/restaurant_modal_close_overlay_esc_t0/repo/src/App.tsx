import { useState } from 'react'
import { FromTheFire } from './components/FromTheFire'
import { ReservationModal } from './components/ReservationModal'

export default function App() {
  const [reserving, setReserving] = useState(false)

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-5">
          <span className="text-lg font-semibold tracking-tight">Copper Vine</span>
          <nav aria-label="Primary" className="hidden gap-6 text-sm text-stone-600 sm:flex">
            <a href="#fire">From the fire</a>
            <a href="#visit">Visit</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="mx-auto max-w-3xl px-4 py-24 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-700">
            Wood fire &amp; natural wine
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">Copper Vine</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-stone-600">
            One oak-fired hearth, a short board that changes when the market does, and forty
            bottles poured by the glass. Eight tables and a counter, on Bellwether Lane.
          </p>
          <button
            type="button"
            data-testid="reserve-cta"
            onClick={() => setReserving(true)}
            className="mt-9 rounded-full bg-amber-700 px-7 py-3 text-sm font-medium text-white hover:bg-amber-800"
          >
            Book a table
          </button>
          <p className="mt-4 text-sm text-stone-500">
            Walk-ins always welcome at the hearth counter.
          </p>
        </section>

        <FromTheFire />

        <section id="visit" className="mx-auto max-w-4xl px-4 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Visit</h2>
          <dl className="mt-8 grid gap-8 text-sm sm:grid-cols-3">
            <div>
              <dt className="font-medium text-stone-900">Where</dt>
              <dd className="mt-1 text-stone-600">12 Bellwether Lane, Ardmore</dd>
            </div>
            <div>
              <dt className="font-medium text-stone-900">Dinner</dt>
              <dd className="mt-1 text-stone-600">Wednesday to Sunday, 5.30pm until late</dd>
            </div>
            <div>
              <dt className="font-medium text-stone-900">Kitchen line</dt>
              <dd className="mt-1 text-stone-600">555 0192</dd>
            </div>
          </dl>
        </section>
      </main>

      <footer className="border-t border-stone-200">
        <div className="mx-auto max-w-4xl px-4 py-10 text-sm text-stone-500">
          © 2026 Copper Vine · 12 Bellwether Lane, Ardmore · Closed Monday and Tuesday
        </div>
      </footer>

      <ReservationModal open={reserving} onClose={() => setReserving(false)} />
    </div>
  )
}
