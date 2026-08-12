# Brief — Coalhouse Athletic Club (fitness_studio · landing)

Build the marketing landing page for **Coalhouse Athletic Club**, a
strength-and-conditioning gym in a converted 1908 coal depot at 1140 Frankford
Avenue, Fishtown, Philadelphia, PA 19125. It is not a boutique class studio and
not a big-box gym: it is a barbell room with coaches on the floor at every
session, and it sells one promise — that an adult who has never touched a bar can
be squatting, pressing and pulling with confidence in eight weeks, and still be
doing it at eighty. Members are nurses, SEPTA operators, ceramicists and
contractors from the surrounding blocks, not athletes; the average member is
forty-one and about a third of them arrive with something already hurt. The front
desk runs (215) 555 0142 from 5:30am to 9:30pm and the club has 612 members. The
flagship line is **"Strong in eight weeks. Still lifting at eighty."** The voice
is plain, warm and unimpressed by hype — no transformation language, no
before-and-afters, no "crush it": name the actual mechanics (a movement
assessment, a five-week wave, a deload, a coach who has read your MRI report)
because the people reading it have been sold gym memberships before.

Ship a long-form landing page in ink (`#12141A`) and ember (`#E1552B`) on a bone
(`#F7F3EC`) ground with a steel-blue (`#2F6C7A`) signal, generous section
padding, and a heavy display-weight type scale against light body copy. It needs:
a site header with the brand mark, six destinations, a row of **icon-only utility
controls** (this week's timetable, call the front desk, directions and parking,
your membership) that each open a small panel, and a booking CTA; a hero with the
flagship line, a subhead of at least twenty-five words, two calls to action and a
drawn illustration of the coal-chute skylights; a proof bar with the member
count, the retention number, the coach credentials and six neighbourhood partner
wordmarks; a six-programme grid (Barbell Foundations, Coalhouse Conditioning,
Rebuild, Masters Strength, Barbell Club, Open Gym) with days, times, monthly
price and a real sentence each; a **studio gallery** — the anchor section — with
one large featured photograph of the room currently on display, previous/next
icon controls, and five selectable room shots (the Platform Room, the Rack Wall,
the Engine Room, the Rebuild Studio, the Boiler Room lounge) as captioned
figures; a **coach roster** with four named coaches, their portraits, their
credentials and what each is actually good at; three alternating deep-dive blocks
explaining the intake assessment, the five-week wave the programming runs on, and
what the club does with an injury; a four-step on-ramp; three memberships
(Foundations $180, Full Club $240, Open Gym $120) with the middle one carried as
the one most members pick; three testimonials attributed to named members with
their ages, jobs and how long they have trained; a six-question FAQ answering
what an anxious forty-year-old actually wants to know; a closing conversion block
built around a **free-intro booking form** with seven labelled controls (name,
email, mobile, what you want out of the first eight weeks, days a week you can
train, anything a coach should know, and a Sunday-night timetable text opt-in)
that confirms in place; and a four-column footer with the address, the hours, the
phone line and the legal row.

Every photograph on the page must be a real `<img>` rendered from an inline
`data:image/svg+xml` URI, and every icon must be inline SVG — no network is
available at any point, so an `http(s)` image URL is never allowed. The page must
be fully announceable to assistive technology: every image carries alt text
naming the room or the coach it shows (including the large featured one, which
must announce whichever room is currently on display), every icon-only control
carries an accessible name saying what it does, and every control in the booking
form is tied to the wording printed beside it so that landing in a box announces
the right thing.
