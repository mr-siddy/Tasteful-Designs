import { ClassSchedule } from './components/ClassSchedule'

const PROOF = [
  { value: 'Ten', label: 'people to a class, never eleven' },
  { value: 'Four', label: 'coaches, all of them on the floor' },
  { value: 'Eight', label: 'classes a week, morning and evening' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <main>
        <section id="hero" className="mx-auto max-w-3xl px-4 py-24 text-center">
          <p className="text-sm uppercase tracking-widest text-stone-500">
            Strength &amp; conditioning · Alder Street
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">Ridgeline Studio</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-stone-600">
            Small-group coaching for people who would rather train than queue for a machine. You
            get a coach, a plan and nine other regulars who notice when you skip.
          </p>
          <a
            href="#schedule"
            data-testid="hero-cta"
            className="mt-9 inline-block rounded-full bg-stone-900 px-7 py-3 text-sm font-semibold text-white"
          >
            Book a free intro week
          </a>
        </section>

        <section className="border-y border-stone-200 bg-white">
          <div className="mx-auto grid max-w-4xl gap-8 px-4 py-10 text-center sm:grid-cols-3">
            {PROOF.map((p) => (
              <div key={p.value}>
                <p className="text-2xl font-bold text-lime-700">{p.value}</p>
                <p className="mt-1 text-sm text-stone-600">{p.label}</p>
              </div>
            ))}
          </div>
        </section>

        <ClassSchedule />
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 text-sm text-stone-500">
          <p className="font-semibold text-stone-700">Ridgeline Studio</p>
          <p className="mt-2">218 Alder Street · Staffed 5:30 AM – 8:00 PM, Monday to Sunday</p>
          <p className="mt-1">555 0192 · hello@ridgelinestudio.com</p>
          <p className="mt-4">© 2026 Ridgeline Studio</p>
        </div>
      </footer>
    </div>
  )
}
