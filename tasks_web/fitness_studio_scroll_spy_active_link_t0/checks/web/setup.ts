import '@testing-library/jest-dom/vitest'
import { vi, beforeEach } from 'vitest'

// Deterministic + offline: no real network, fixed clock and RNG. The Python
// network guard does not reach node's subprocess, so this is mandatory here.
beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => new Response('{}', { status: 200 })),
  )
  vi.spyOn(Date, 'now').mockReturnValue(new Date('2026-01-01T00:00:00Z').valueOf())
  vi.spyOn(Math, 'random').mockReturnValue(0.42)
})

// ---------------------------------------------------------------------------
// IntersectionObserver
//
// jsdom implements no IntersectionObserver at all and has no layout engine, so
// a scroll-spy nav is untestable — and unrenderable — without a stub. This one
// is inert: it records what a page observes and NEVER delivers an entry on its
// own. Callbacks fire only when a test explicitly calls
// `intersectionDriver.scrollTo(element)`, which keeps the page deterministic.
// ---------------------------------------------------------------------------

type EntryLike = {
  target: Element
  isIntersecting: boolean
  intersectionRatio: number
  boundingClientRect: DOMRectReadOnly
  intersectionRect: DOMRectReadOnly
  rootBounds: DOMRectReadOnly | null
  time: number
}

type ObserverCallback = (entries: EntryLike[], observer: unknown) => void

const liveObservers = new Set<TestIntersectionObserver>()

class TestIntersectionObserver {
  readonly root: Element | Document | null = null
  readonly rootMargin: string
  readonly thresholds: number[]
  readonly targets = new Set<Element>()
  private readonly callback: ObserverCallback

  constructor(callback: ObserverCallback, options: IntersectionObserverInit = {}) {
    this.callback = callback
    this.root = (options.root as Element | Document | null) ?? null
    this.rootMargin = options.rootMargin ?? '0px'
    this.thresholds = Array.isArray(options.threshold)
      ? options.threshold
      : [options.threshold ?? 0]
    liveObservers.add(this)
  }

  observe(target: Element) {
    this.targets.add(target)
  }

  unobserve(target: Element) {
    this.targets.delete(target)
  }

  disconnect() {
    this.targets.clear()
    liveObservers.delete(this)
  }

  takeRecords(): EntryLike[] {
    return []
  }

  /** Test-only: hand a batch of entries to the page's callback. */
  deliver(entries: EntryLike[]) {
    this.callback(entries, this)
  }
}

const rect = (top: number, height: number): DOMRectReadOnly =>
  ({
    x: 0,
    y: top,
    top,
    left: 0,
    right: 1024,
    bottom: top + height,
    width: 1024,
    height,
    toJSON: () => ({}),
  }) as DOMRectReadOnly

const inDocumentOrder = (a: Element, b: Element) =>
  a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1

export const intersectionDriver = {
  /** Everything the page has asked to be told about, in document order. */
  observedElements(): Element[] {
    const seen = new Set<Element>()
    liveObservers.forEach((observer) => observer.targets.forEach((target) => seen.add(target)))
    return [...seen].sort(inDocumentOrder)
  },

  /**
   * Scroll `element` to the top of the viewport: every observer is told about
   * all of its targets at once, with `element` the only intersecting one. That
   * batch shape is what a real IntersectionObserver delivers, so it works for
   * any correct reading of the entries — first intersecting, highest ratio,
   * topmost rect, or one-entry-at-a-time.
   */
  scrollTo(element: Element | null) {
    if (!element) throw new Error('intersectionDriver.scrollTo: no element to scroll to')
    liveObservers.forEach((observer) => {
      const targets = [...observer.targets].sort(inDocumentOrder)
      if (targets.length === 0) return
      const anchor = targets.indexOf(element)
      const entries: EntryLike[] = targets.map((target, index) => {
        const isIntersecting = target === element
        const top = anchor === -1 ? (index + 1) * 720 : (index - anchor) * 720
        return {
          target,
          isIntersecting,
          intersectionRatio: isIntersecting ? 1 : 0,
          boundingClientRect: rect(top, 640),
          intersectionRect: isIntersecting ? rect(top, 640) : rect(0, 0),
          rootBounds: rect(0, 900),
          time: 0,
        }
      })
      observer.deliver(entries)
    })
  },
}

vi.stubGlobal('IntersectionObserver', TestIntersectionObserver)
vi.stubGlobal('intersectionDriver', intersectionDriver)

// A fresh registry per test: observers from a torn-down render never linger.
beforeEach(() => {
  liveObservers.clear()
})
