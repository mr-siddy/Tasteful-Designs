import { BookingForm } from './components/BookingForm'
import { ClinicHeader } from './components/ClinicHeader'
import { TeamGallery } from './components/TeamGallery'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-teal-900">
      <ClinicHeader />

      <main>
        <section id="hero" className="mx-auto max-w-5xl px-4 pb-6 pt-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-widest text-teal-600">
              Family &amp; cosmetic dentistry · Kingsmead Row
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Alder &amp; Vine Dental
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-teal-700">
              Dentistry that runs on time. Evening and Saturday appointments, the same three
              clinicians every visit, and a price on the table before anything starts.
            </p>
            <a
              href="#book"
              data-testid="hero-cta"
              className="mt-8 inline-block rounded-full bg-teal-900 px-7 py-3 text-sm font-medium text-white hover:bg-teal-800"
            >
              Book an appointment
            </a>
          </div>

          <img
            src="/photos/reception.svg"
            alt="The Alder &amp; Vine reception room, with pale wood chairs and a window onto the courtyard"
            data-testid="hero-photo"
            width={640}
            height={420}
            className="mt-12 w-full rounded-3xl border border-teal-100 object-cover"
          />
        </section>

        <TeamGallery />
        <BookingForm />
      </main>

      <footer className="border-t border-teal-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-teal-700">
          <p className="font-semibold text-teal-900">Alder &amp; Vine Dental</p>
          <p className="mt-2">14 Kingsmead Row, Marlow SL7 2BQ · 01865 555 0142</p>
          <p className="mt-1">
            Weekdays 8am to 6pm · Thursday until 8pm · Saturday mornings 9am to 1pm
          </p>
          <p className="mt-4 text-teal-500">
            © 2026 Alder &amp; Vine Dental. Registered in England.
          </p>
        </div>
      </footer>
    </div>
  )
}
