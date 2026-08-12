# Brief — Foundry Hill Strength Co. (fitness_studio · landing)

Build the marketing landing page for **Foundry Hill Strength Co.**, a 4,200 sq ft
coached strength gym on Ellicott Street in the Hollins Market neighbourhood of
Baltimore. It is not a big-box gym and not a boutique HIIT studio: it is a barbell
room with real platforms, a conditioning floor, and coaches who write your program
and watch you lift it. Membership is capped at 240 people so the floor is never
more than fourteen deep at 6am. The voice is plain, warm and confident — a coach
talking, not a brand shouting. Nobody says "crush it", "shred", "beast mode" or
"transformation journey"; they say sets, reps, tempo, sleep, and "come back Thursday".

The palette is a forged-steel one: an ink-slate base (`slate-950` → `slate-800`)
with a signature **electric lime** accent (`lime-300`/`lime-400`) for anything the
eye should land on, warmed by a **stone** neutral ramp for the light sections so the
page breathes as you scroll from dark to light and back. Type is heavy and tight at
the top of the scale (`font-black`, tracking-tight display headings, an uppercase
lime eyebrow above each one) and quiet at body size. Radius is generous
(`rounded-3xl` on cards, `rounded-full` on controls), shadows are soft and low.
Every visual is inline SVG or a CSS gradient — a plate-loaded barbell mark for the
brand, a duotone hero illustration of a loaded bar on a platform with a chalk-dust
gradient behind it, an eight-icon set (barbell, stopwatch, heart, calendar, shield,
spark, chart, lock), a floorplan diagram of the room, and a strength-progression
line chart drawn as a `<polyline>`. No `http(s)` images anywhere.

Sections, top to bottom: a **sticky header** with the barbell mark, five
destinations and a "Book a free session" button; a **hero** with the headline
"Strength you can still use at sixty", a real subhead, two CTAs and the platform
illustration; a **proof band** of four numbers plus a coaching-credentials line;
**five programs** (Barbell Club, Conditioning, Foundations, Masters 50+, Open
Training) each with a schedule, a cap and a monthly price; the **Member Stories**
carousel — five named members with a photo-free duotone portrait card, a real quote,
how long they have trained here, and one concrete number they moved — with previous
/ next controls, five position dots and an "n / 5" readout; a **coaching method**
deep-dive of three alternating copy/visual blocks (assessment, the written program,
the retest) including the progression chart; a **facility tour** with the floorplan
and an equipment list; a numbered **first eight weeks** timeline; three
**membership plans**; a **coach roster** of four coaches with credentials; a
**seven-question FAQ**; a closing **CTA** for the free session; and a four-column
**footer** with hours, address, nav and legal.

The interaction the page is anchored on is the Member Stories carousel: previous and
next must move through the five stories and stay inside the set — past the last story
the reader should land somewhere real (wrap to the first, or hold on the last), never
on a blank card, and the "n / 5" readout and the highlighted dot must always agree
with what is on screen. Keep the whole page deterministic: no timers, no autoplay, no
network, no randomness.
