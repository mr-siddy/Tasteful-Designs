const HOURS = [
  { day: 'Wednesday — Thursday', time: '5:00pm – 10:00pm' },
  { day: 'Friday — Saturday', time: '5:00pm – 11:00pm' },
  { day: 'Sunday supper', time: '12:00pm – 3:00pm' },
  { day: 'Monday — Tuesday', time: 'The fire is out' },
]

export function ClosingCta() {
  return (
    <section
      id="book"
      aria-labelledby="book-heading"
      className="border-b border-[#241C17]/10 bg-[linear-gradient(150deg,#C4552B_0%,#A8451F_55%,#7A2E12_100%)] text-[#FBF6EE]"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F8DC9A]">
            Tables open on the first of the month
          </p>
          <h2 id="book-heading" className="mt-4 text-4xl font-black leading-tight tracking-tight">
            Come and sit near the fire
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#FAE7D6]">
            Tell us when you would like to eat and how many of you there are, and Tomás will write
            back the same afternoon. If you would rather just speak to somebody, the phone is
            answered from two o&rsquo;clock.
          </p>

          <form
            className="mt-9 grid max-w-xl gap-4 sm:grid-cols-2"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="sm:col-span-2">
              <label htmlFor="booking-name" className="block text-sm font-bold text-[#FAE7D6]">
                Your name
              </label>
              <input
                id="booking-name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-[#FBF6EE]/30 bg-[#7A2E12]/40 px-4 py-3 text-sm text-[#FBF6EE] placeholder:text-[#F0CDB4]"
                placeholder="Delia Mwangi"
              />
            </div>
            <div>
              <label htmlFor="booking-date" className="block text-sm font-bold text-[#FAE7D6]">
                Evening
              </label>
              <input
                id="booking-date"
                name="date"
                type="text"
                className="mt-2 w-full rounded-xl border border-[#FBF6EE]/30 bg-[#7A2E12]/40 px-4 py-3 text-sm text-[#FBF6EE] placeholder:text-[#F0CDB4]"
                placeholder="Friday 14 March"
              />
            </div>
            <div>
              <label htmlFor="booking-size" className="block text-sm font-bold text-[#FAE7D6]">
                How many
              </label>
              <select
                id="booking-size"
                name="size"
                defaultValue="2"
                className="mt-2 w-full rounded-xl border border-[#FBF6EE]/30 bg-[#7A2E12]/40 px-4 py-3 text-sm text-[#FBF6EE]"
              >
                <option value="1">One of us</option>
                <option value="2">Two of us</option>
                <option value="4">Three or four</option>
                <option value="6">Five or six</option>
                <option value="24">The Loft, upstairs</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="booking-note" className="block text-sm font-bold text-[#FAE7D6]">
                Anything we should know
              </label>
              <textarea
                id="booking-note"
                name="note"
                rows={3}
                className="mt-2 w-full rounded-xl border border-[#FBF6EE]/30 bg-[#7A2E12]/40 px-4 py-3 text-sm text-[#FBF6EE] placeholder:text-[#F0CDB4]"
                placeholder="Allergies, a birthday, or a seat you have your eye on"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-[#241C17] px-7 py-3.5 text-sm font-bold text-[#FBF6EE] hover:bg-[#3F352E] sm:col-span-2 sm:w-fit"
            >
              Send the request
            </button>
          </form>
        </div>

        <div id="visit" className="rounded-3xl border border-[#FBF6EE]/25 bg-[#241C17]/25 p-8">
          <h3 className="text-xl font-black tracking-tight">Visiting</h3>
          <p className="mt-4 leading-relaxed text-[#FAE7D6]">
            214 Monroe Street, Germantown, Nashville, Tennessee 37208. The green door beside the
            bakery — there is no sign, only the persimmon painted on the glass.
          </p>

          <dl className="mt-7 space-y-3 border-t border-[#FBF6EE]/20 pt-6">
            {HOURS.map((row) => (
              <div key={row.day} className="flex items-baseline justify-between gap-4">
                <dt className="text-sm font-bold text-[#FAE7D6]">{row.day}</dt>
                <dd className="whitespace-nowrap text-sm text-[#F8DC9A]">{row.time}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7 space-y-2 border-t border-[#FBF6EE]/20 pt-6 text-sm">
            <p>
              <a href="tel:16155550192" className="font-bold underline">
                (615) 555 0192
              </a>{' '}
              — answered from 2pm
            </p>
            <p>
              <a href="mailto:hello@persimmonandrye.restaurant" className="font-bold underline">
                hello@persimmonandrye.restaurant
              </a>
            </p>
            <p className="text-[#FAE7D6]">Two steps at the door, level once inside, accessible WC.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
