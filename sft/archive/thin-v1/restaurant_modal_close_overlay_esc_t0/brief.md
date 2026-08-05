# Brief — Copper Vine landing page

Build a single-page landing site for **Copper Vine**, a small wood-fired neighbourhood
restaurant at 12 Bellwether Lane in Ardmore that serves dinner Wednesday through Sunday.
The mood is warm and unfussy — stone and amber, generous whitespace, a short menu that
changes with the market and a forty-bottle natural wine list poured by the glass. The page
needs a slim header with the restaurant's name and two anchor links, a centred hero that
leads with the name and a "Book a table" call to action, a "From the fire" section showing
three signature plates with their prices and a one-line description each, a "Visit" band
carrying the address, service hours and phone number, and a footer. Booking happens in a
modal dialog rather than a separate page: the hero button opens a small reservation-request
form asking for a full name, a date and a party size, with a "Send request" submit button, a
labelled × close button in the corner, and a dimmed overlay behind it. The dialog must be
properly modal — `role="dialog"`, `aria-modal`, a title the dialog is labelled by — and a
guest must be able to get out of it the three ways people expect: the × button, clicking the
dimmed overlay behind the card, and pressing Escape. Nothing on the page may fetch, poll or
depend on the current time; the whole thing is static React with local state.
