const COMFORT_MENU = [
  {
    title: 'A stop signal that actually stops things',
    body: 'Raise your left hand and the drill comes off the tooth immediately, every time, no matter where we are in the procedure. Nobody has ever been told to hang on for a second.',
  },
  {
    title: 'Numbing before the numbing',
    body: 'Topical gel sits for a full two minutes before the injection, and the anaesthetic is warmed to body temperature. The sting people remember is cold liquid going in fast.',
  },
  {
    title: 'Nothing happens in the first visit',
    body: 'The new patient exam is talking, looking and photographing. No instruments beyond a mirror unless you ask for something to be dealt with there and then.',
  },
  {
    title: 'Headphones, a blanket, and the blinds down',
    body: 'Wireless headphones with your own audio, a weighted blanket if you want one, and we will drop the skylight blinds so you are not staring into daylight for an hour.',
  },
  {
    title: 'Sedation when that is not enough',
    body: 'Nitrous oxide is $80 on top of the treatment and wears off before you leave the building. For longer work Dr. Ovalle offers oral sedation with a chaperone requirement.',
  },
  {
    title: 'A running total on the screen',
    body: 'The estimate stays up on the monitor through the appointment. If something changes mid-treatment we stop, tell you the new number, and wait for you to say yes.',
  },
]

function CalmIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of a treatment room with a skylight, a reclined chair and a plant"
    >
      <defs>
        <linearGradient id="calm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdf3e7" />
          <stop offset="100%" stopColor="#f3e9dd" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" rx="22" fill="url(#calm)" />
      <path d="M40 20h150l30 70H70z" fill="#fff8ee" opacity="0.9" />
      <path d="M40 20h150l30 70H70z" fill="none" stroke="#d9682f" strokeWidth="2" />
      <path d="M88 20l30 70M136 20l30 70" stroke="#d9682f" strokeWidth="1.4" opacity="0.6" />
      <rect x="52" y="196" width="252" height="20" rx="10" fill="#14312c" />
      <path
        d="M70 196c0-34 22-56 60-56h74c30 0 48 18 48 42v14z"
        fill="#20524a"
      />
      <path d="M198 140c14-26 40-34 66-24l14 6-10 24z" fill="#14312c" />
      <circle cx="292" cy="120" r="16" fill="#d9682f" />
      <rect x="286" y="130" width="12" height="40" rx="5" fill="#14312c" />
      <rect x="60" y="216" width="60" height="60" rx="8" fill="#14312c" />
      <path
        d="M90 216c-16-8-22-24-18-40 16 2 26 14 26 30M90 216c14-10 18-28 12-42-14 4-22 16-20 30"
        fill="#4c8f6b"
      />
      <g stroke="#14312c" strokeWidth="2" opacity="0.25">
        <path d="M320 200v76M340 214v62M360 226v50" />
      </g>
    </svg>
  )
}

export function CalmChairside() {
  return (
    <section id="comfort" className="bg-[#fbf6f0]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-2 rounded-[26px] border border-[#14312c]/10 bg-white/70 p-4 shadow-lg shadow-[#14312c]/10 lg:order-1">
            <CalmIllustration />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9682f]">
              If you have been putting this off
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#14312c] sm:text-4xl">
              About a third of our patients are frightened of dentists
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#3f524b]">
              We know because we ask on the intake form, and because people tell us at the door
              that it has been eleven years. Nobody here is going to raise an eyebrow at that. What
              we do instead is take away the specific things that make it unbearable, one at a
              time, and let you set the pace.
            </p>
          </div>
        </div>

        <h3 className="mt-16 font-serif text-2xl font-semibold text-[#14312c]">
          The comfort menu, in plain terms
        </h3>
        <ul className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COMFORT_MENU.map((item) => (
            <li
              key={item.title}
              data-testid="comfort-card"
              className="rounded-2xl border border-[#14312c]/10 bg-white p-6 shadow-sm"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M12 20.5S3.5 15.4 3.5 9.6A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8.5 2.6c0 5.8-8.5 10.9-8.5 10.9z"
                  fill="none"
                  stroke="#d9682f"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="mt-4 font-serif text-lg font-semibold text-[#14312c]">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#3f524b]">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
