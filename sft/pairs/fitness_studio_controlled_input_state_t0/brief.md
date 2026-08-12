# Brief — Ashgrove Barbell Club (fitness_studio · landing)

Build the marketing landing page for **Ashgrove Barbell Club**, a 2,400 sq ft coached
strength hall wedged under the Kemp Street viaduct at 14 Kemp Street, Ashgrove, opened in
2016 by two ex-physio-clinic coaches, Priya Raman and Tobias Lund. The club is deliberately
small — twelve platforms, a capped roster of 240 members, never more than eight people in a
session — and its whole pitch is that every member trains on a written program a named coach
revises every four weeks, instead of turning up to whatever class the timetable spat out. The
tone is warm, plain-spoken and unembarrassed about barbells: it should read like a place that
takes beginners and forty-year-old backs seriously, not like a boutique HIIT franchise. Ship a
sticky header with the club mark and five destinations, a hero that leads on "a program with
your name written at the top of it" with two calls to action and a real illustration, a proof
strip with member numbers and coaching credentials, a grid of six coached programs with prices
and a sentence each, a weekly timetable, two alternating deep-dive blocks explaining the
four-week review cycle and describing the room itself (the platforms, the sled track, the old
tram-shed ceiling), a numbered four-step onboarding path, three membership tiers, a roster of
four named coaches with their backgrounds, three member stories with names and jobs, a six
question FAQ, a closing call to action and a four-column footer with hours, address and legal
links. The centrepiece — the thing the whole page funnels into — is a **two-week trial pass
form**: name, email, mobile and a short free-text "what do you want out of the next eight
weeks" field, sitting beside a live pass-preview card that fills itself in as the visitor
types, a countdown of characters left in the goal field, and a submit button that stays locked
until a name and an email are present and then confirms the booking back to the visitor by
name. Every field must be a controlled React input backed by component state, because the
preview, the counter and the lock all read from that same draft. Commit to a real identity:
ink-black (#10161C) and warm paper (#F4F1EA) with an electric lime (#C7F04A) and clay-orange
(#D9622B) accent, heavy tracking-tight display type, generous section padding, and all
visuals as inline SVG plus CSS gradients — no network is available, so no remote image URLs.
No placeholder copy anywhere: real prices, real class names, real people.
