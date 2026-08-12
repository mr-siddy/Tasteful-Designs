export default function ClosingCta() {
  return (
    <section
      id="book"
      aria-labelledby="book-heading"
      className="relative overflow-hidden bg-[#2C5C4F] text-[#F6F2EC]"
    >
      <svg
        viewBox="0 0 800 220"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-20"
      >
        <path
          d="M0 150c90-40 150 30 240-10s150 30 240-10 150 30 240-10v100H0z"
          fill="#E6DCCD"
        />
        <path
          d="M0 180c90-40 150 30 240-10s150 30 240-10 150 30 240-10v70H0z"
          fill="#C1552F"
          opacity="0.5"
        />
      </svg>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div>
          <h2
            id="book-heading"
            className="text-3xl font-black tracking-tight sm:text-4xl"
          >
            Book a floor walk. We will come and watch one real run.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#D6E2DB]">
            A day and a half on your floor, following a live ticket from the
            fabric room to the packing table. You get the write-up either way —
            every place a number is being copied by hand — whether or not you ever
            buy anything from us.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-[#D6E2DB]">
            <li>No slide deck, no sales engineer, no third call.</li>
            <li>Setup week is included on Cut Floor and Mill.</li>
            <li>Month to month, thirty days notice, data exports whole.</li>
          </ul>
        </div>

        <form
          className="rounded-3xl border border-[#3F7365] bg-[#255043] p-7"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-lg font-bold tracking-tight">
            Tell us about your floor
          </h3>
          <div className="mt-5">
            <label htmlFor="cta-name" className="block text-sm font-medium">
              Your name
            </label>
            <input
              id="cta-name"
              name="name"
              type="text"
              className="mt-2 w-full rounded-xl border border-[#4C8272] bg-[#1F4438] px-4 py-3 text-sm text-[#F6F2EC]"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="cta-email" className="block text-sm font-medium">
              Work email
            </label>
            <input
              id="cta-email"
              name="email"
              type="email"
              className="mt-2 w-full rounded-xl border border-[#4C8272] bg-[#1F4438] px-4 py-3 text-sm text-[#F6F2EC]"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="cta-machines" className="block text-sm font-medium">
              Machines on the floor
            </label>
            <select
              id="cta-machines"
              name="machines"
              className="mt-2 w-full rounded-xl border border-[#4C8272] bg-[#1F4438] px-4 py-3 text-sm text-[#F6F2EC]"
            >
              <option>Under 12</option>
              <option>12 to 30</option>
              <option>30 to 60</option>
              <option>More than 60</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-[#C1552F] px-6 py-3.5 text-sm font-semibold text-[#FFF8F0] hover:bg-[#A8482A]"
          >
            Request a floor walk
          </button>
          <p className="mt-4 text-xs text-[#B9CEC5]">
            We reply within one business day, from Fall River, in a normal
            sentence written by a person.
          </p>
        </form>
      </div>
    </section>
  )
}
