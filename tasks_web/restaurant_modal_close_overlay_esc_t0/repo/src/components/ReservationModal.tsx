type Props = {
  open: boolean
  onClose: () => void
}

const PARTY_SIZES = ['2 guests', '3 guests', '4 guests', '5 guests', '6 guests', 'Larger party']

export function ReservationModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        aria-hidden="true"
        data-testid="reservation-overlay"
        className="absolute inset-0 bg-stone-900/70"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reservation-title"
        data-testid="reservation-modal"
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="reservation-title" className="text-2xl font-semibold tracking-tight">
              Request a table
            </h2>
            <p className="mt-1 text-sm text-stone-600">
              The hearth counter is kept for walk-ins, so the eight tables go early.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close reservation form"
            data-testid="reservation-close"
            onClick={onClose}
            className="-mr-1 -mt-1 rounded-full p-2 text-2xl leading-none text-stone-400 hover:bg-stone-100 hover:text-stone-700"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label htmlFor="reservation-name" className="block text-sm font-medium text-stone-800">
              Full name
            </label>
            <input
              id="reservation-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Rosa Herrera"
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="reservation-date" className="block text-sm font-medium text-stone-800">
              Date
            </label>
            <input
              id="reservation-date"
              name="date"
              type="date"
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="reservation-party" className="block text-sm font-medium text-stone-800">
              Party size
            </label>
            <select
              id="reservation-party"
              name="party"
              defaultValue="2 guests"
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
            >
              {PARTY_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            data-testid="reservation-submit"
            className="w-full rounded-full bg-amber-700 px-6 py-3 text-sm font-medium text-white hover:bg-amber-800"
          >
            Send request
          </button>
        </form>

        <p className="mt-4 text-xs text-stone-500">
          We answer every request by text within the hour. Parties over six, call the kitchen.
        </p>
      </div>
    </div>
  )
}
