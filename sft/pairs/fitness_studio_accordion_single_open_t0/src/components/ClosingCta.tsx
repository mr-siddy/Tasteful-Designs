export function ClosingCta() {
  return (
    <section className="bg-gradient-to-br from-[#123B31] via-[#0B241E] to-[#2F6B57] text-[#FBF7F1]">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#E8A33D]">Come and see</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Book the free intro. Bring flat shoes and a water bottle.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#DCE7E1]">
            Forty minutes with a coach, a movement screen and two sessions on the floor, all of it
            free and none of it requiring a card number. Fill this in and Dev or Anneke will call you
            within a working day to find an hour that suits.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-[#BFD2C9]">
            <li>214 Kestrel Street, Fairmount Hill</li>
            <li>Desk staffed 6:00 am – 8:00 pm on weekdays</li>
            <li>hello@redpinestrength.co · (555) 0172</li>
          </ul>
        </div>

        <form
          data-testid="intro-form"
          onSubmit={(event) => event.preventDefault()}
          className="rounded-3xl border border-[#FBF7F1]/20 bg-[#0B241E]/70 p-8 shadow-2xl shadow-black/30"
        >
          <h3 className="text-xl font-semibold tracking-tight">Claim your intro session</h3>
          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="intro-name" className="block text-xs uppercase tracking-[0.2em] text-[#8FB3A4]">
                Your name
              </label>
              <input
                id="intro-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Priya Nandakumar"
                className="mt-2 w-full rounded-xl border border-[#2F6B57] bg-[#123B31] px-4 py-3 text-sm text-[#FBF7F1]"
              />
            </div>
            <div>
              <label htmlFor="intro-email" className="block text-xs uppercase tracking-[0.2em] text-[#8FB3A4]">
                Email
              </label>
              <input
                id="intro-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@yourmail.co"
                className="mt-2 w-full rounded-xl border border-[#2F6B57] bg-[#123B31] px-4 py-3 text-sm text-[#FBF7F1]"
              />
            </div>
            <div>
              <label htmlFor="intro-goal" className="block text-xs uppercase tracking-[0.2em] text-[#8FB3A4]">
                What brings you in
              </label>
              <select
                id="intro-goal"
                name="goal"
                defaultValue="foundations"
                className="mt-2 w-full rounded-xl border border-[#2F6B57] bg-[#123B31] px-4 py-3 text-sm text-[#FBF7F1]"
              >
                <option value="foundations">I have never lifted before</option>
                <option value="strength">I want to get properly strong</option>
                <option value="return">I am coming back from an injury</option>
                <option value="conditioning">I want conditioning, not barbells</option>
                <option value="masters">I am over fifty-five</option>
              </select>
            </div>
            <div>
              <label htmlFor="intro-note" className="block text-xs uppercase tracking-[0.2em] text-[#8FB3A4]">
                Anything we should know
              </label>
              <textarea
                id="intro-note"
                name="note"
                rows={3}
                placeholder="Mornings work best for me, and my left shoulder is grumpy."
                className="mt-2 w-full rounded-xl border border-[#2F6B57] bg-[#123B31] px-4 py-3 text-sm text-[#FBF7F1]"
              />
            </div>
          </div>
          <button
            type="submit"
            data-testid="intro-submit"
            className="mt-7 w-full rounded-full bg-[#E8A33D] px-6 py-3.5 text-sm font-semibold text-[#1B1A17] transition hover:bg-[#F2B441]"
          >
            Book my free intro
          </button>
          <p className="mt-4 text-center text-xs text-[#8FB3A4]">
            We reply by phone, never by mailing list. No card details, ever.
          </p>
        </form>
      </div>
    </section>
  )
}
