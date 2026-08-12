# Brief — Ember & Oak (restaurant landing page)

Build a single-page marketing site for **Ember & Oak**, a thirty-eight seat
wood-fire grill on Foundry Lane in the Ironside district — a converted brass
foundry where every plate crosses a nine-foot oak-and-almond-wood hearth and
nothing on the line is cooked with gas. It is run by chef **Nadia Okonkwo**
(ex-Corvina, ex-Half Note) and her partner **Theo Braddock**, who keeps the
cellar. The personality is warm, confident and unfussy: the kind of room where
the bread is free, the wine list is short and opinionated, and the fire is
visible from every table. It should feel like smoke, brass and low light —
never like a startup landing page. Dinner Tuesday through Sunday, 5:30 to
11:00, with a Sunday hearth lunch at noon.

**Visual direction.** Commit to a real identity: a deep espresso/charcoal base
(`stone-900`/`stone-950`), ember accents in amber and orange, warm stone
neutrals for the light sections, and a muted moss accent for secondary detail.
Alternate light and dark section backgrounds so the page has rhythm as you
scroll. Large display headings with real weight contrast, generous vertical
padding, a consistent 2xl radius and a soft warm shadow language. All artwork
must be **inline SVG** (a flame/hearth brand mark, an icon set for the sourcing
and awards rows, a substantial hearth-room spot illustration, a neighbourhood
map sketch, section dividers) plus CSS gradients — no network is available, so
no `http(s)` image URLs anywhere.

**Sections, in order.** A sticky header with the brand mark, five destinations
and a "Reserve a table" action. A hero with the name, a real subhead, two CTAs
and a hearth illustration over an ember gradient. A social-proof band with four
counted stats and three named press credentials. A "From the hearth" menu of six
dishes with real prices and a sentence of description each. **A guest-stories
carousel** — the page's one stateful component: four testimonials from named,
plausible regulars, with previous/next controls, a dot indicator per story and a
visible "n / 4" position counter. Three alternating deep-dive blocks (the fire,
the sourcing, the cellar). A numbered five-step walk-through of how an evening
runs. Three private-room cards. A visit block with hours, address, transit and
parking. A five-question FAQ with real answers. A closing reservation CTA with a
small labelled enquiry form. A four-column footer with nav, contact, hours and
legal.

**Copy must be specific.** Real dish names and prices, a real street and cross
street, named guests with roles in their attributions, answers in the FAQ that
actually answer the question. No lorem ipsum, no "Feature One", no placeholder
addresses or stand-in names.

**Behaviour the page must get right.** The guest-stories carousel shows exactly
one story at a time. Previous and next move through the four stories and stay
**within bounds** — pressing next on the last story and previous on the first
must both land on a real story rather than running off the end of the list. The
position counter and the active dot always agree with the story on screen. No
autoplay, no timers, no randomness: the page must render identically every time.

**Stack.** React 18 + TypeScript + Vite + Tailwind, one component file per
section under `src/components/`, a flat tree assembled by `src/App.tsx`.
Semantic landmarks and honest ARIA throughout: a single `<h1>`, `<section>` per
block, a `contentinfo` footer, `aria-label` on every icon-only control, `alt` on
every image, a real `<label>` for every input.
