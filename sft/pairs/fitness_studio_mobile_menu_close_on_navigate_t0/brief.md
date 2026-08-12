# Brief — Sundial Movement Studio (fitness_studio · landing)

Build the marketing landing page for **Sundial Movement Studio**, a ten-reformer
Pilates, barre-strength and mobility studio at 17 Almond Court in the Cobbler's
Hill district of Providence, Rhode Island, opened in 2016 by Imogen Castellanos
after eleven years as a modern dancer and six more as a movement-rehab
specialist at a hospital outpatient clinic. Sundial is not a boutique burn-class
franchise and it is not a physio office: it is a bright ground-floor room with
ten reformers, two towers and a 900-square-foot mobility loft upstairs, capped
at eight people a class, where every member starts with a paid $25 intro session
and a written movement plan they keep. It sells to people whose bodies have a
history — a shoulder that was rebuilt, a lumbar fusion, twenty years behind a
desk, a second pregnancy, sixty-one years of standing on a ferry deck — so the
voice has to be warm, specific and technically credible in the same sentence,
quoting real numbers (8 per class, 10 reformers, $32 drop-in, a 6-week
post-operative 1:2 block run alongside a referring physical therapist) instead
of transformation slogans. It never promises results in thirty days and never
uses the word "shred". Contact details are (401) 555 0173 and
hello@sundialmovement.com; the room is open Monday–Thursday 6:00am–8:30pm,
Friday 6:00am–7:00pm, Saturday 7:30am–2:00pm and Sunday 8:00am–1:00pm.
Instructors to name throughout: Imogen Castellanos (founder and lead
instructor), Dara Whitlock (reformer and post-operative), Kwame Adjei
(barre-strength), Yuki Sorensen (mobility and breath). Members to quote by name:
Marguerite Sowande, a charge nurse at Blackstone General; Colin Tsukamoto, a
retired Narragansett Bay ferry captain; and Hattie Brannigan, a ceramicist who
works with her hands overhead all day.

Commit to a warm paper identity — an oat ground (`#F7F1E6`), espresso ink
(`#1E1B16`), a clay-orange primary (`#C2571F`), a deep pine secondary
(`#24493B`), a chalk-blue accent (`#8FB8C9`) used only inside illustrations, and
two near-black pine sections (`#152A22`) that break the page up as you scroll.
Big tracking-tight display headings over small uppercase clay eyebrows, generous
`py-20` section padding, `rounded-3xl` cards with hairline sand borders and soft
shadows. Every visual is inline SVG or a CSS gradient because no network is
available: the sundial wordmark, the section icons, the drawn reformer
illustration in the hero, the loft floorplan, the method diagrams and the
instructor portrait medallions.

Ship it as a flat React tree, one component per section: a sticky site header
with the sundial mark, five destinations (Classes, Timetable, Method,
Instructors, Memberships), the phone number and an intro CTA; a hero with the
studio name, a thirty-word promise, two calls to action, three headline numbers
and the drawn reformer; a trust bar of four hard numbers plus four credentials;
a six-class catalogue with durations, caps and real prices; the week's timetable
with instructors and spots left; three alternating deep-dive blocks on the
method (assess before you load, train the pattern not the mirror, breathe on
purpose); the two rooms with an SVG floorplan and an amenity list; a numbered
four-step first-month path; three membership tiers; four instructors with
credentials and drawn portraits; three member stories with names, ages and
outcomes; a seven-question FAQ answered properly; a closing call-to-action with
a real intro-booking form; and a four-column footer with hours, address, class
links and legal.

**The site header is the interactive centrepiece.** Above the `md` breakpoint
the five destinations sit in a horizontal bar. Below it they collapse behind a
hamburger toggle that opens a full-width drawer over the page — the drawer
carries the same five destinations, the studio phone number and the intro CTA,
and it has its own close button. Because the drawer covers the page on a phone,
**tapping any destination inside it must both take the visitor to that section
and dismiss the drawer**; the toggle must fall back to `aria-expanded="false"`
and the drawer must be reopenable afterwards. A drawer that stays open on top of
the section the visitor just chose makes the whole phone experience unusable.
