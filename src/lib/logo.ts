/**
 * The Coil mark and the home-page circuit-trace background.
 *
 * The mark ("Bus") is two nested Cs routed like circuit-board traces, with
 * 45° corners and a pad at each end. Classes: mark-tile (graphite tile),
 * mark-ink (copper), mark-ink2 (patina), mark-pad (pad ring); Logo.astro
 * colours them, and public/favicon.svg repeats the same shapes inline.
 */

/** An angular C: square bounds [m, 32-m] with 45° corners of size c, open to the right at x = right. */
function traceC(m: number, c: number, right: number): string {
  const [t, b] = [m, 32 - m];
  return `M${right} ${t}L${m + c} ${t}L${m} ${t + c}L${m} ${b - c}L${m + c} ${b}L${right} ${b}`;
}

const pad = (x: number, y: number, r: number) => `<circle cx="${x}" cy="${y}" r="${r}" class="mark-pad"/>`;

/** Inner SVG of the mark on a 32×32 viewBox. */
export const MARK_SVG =
  `<rect width="32" height="32" rx="8" class="mark-tile"/>` +
  [
    [6, 5, 22],
    [11.5, 3, 19],
  ]
    .map(
      ([m, c, r], i) =>
        `<path d="${traceC(m, c, r)}" fill="none" class="${i === 1 ? "mark-ink2" : "mark-ink"}" stroke-width="2.2" stroke-linejoin="round"/>` +
        pad(r + 1.6, m, 1.9) +
        pad(r + 1.6, 32 - m, 1.9),
    )
    .join("");

// ------------------------------------------------------------- background

/** Deterministic pseudo-random numbers, so builds are reproducible. */
function rng(seed: number) {
  return () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
}
/** Orthogonal runs with 45° bends, ending in pads. */
function traces(): string {
  const r = rng(7);
  const g = 24;
  let paths = "";
  let pads = "";
  for (let i = 0; i < 26; i++) {
    let x = Math.round(r() * 60) * g;
    let y = Math.round(r() * 26) * g;
    let d = `M${x} ${y}`;
    pads += `<circle cx="${x}" cy="${y}" r="3.2"/>`;
    const segs = 2 + Math.floor(r() * 3);
    let dir = r() < 0.5 ? 0 : 1;
    for (let s = 0; s < segs; s++) {
      const len = (2 + Math.floor(r() * 6)) * g;
      if (dir === 0) x += r() < 0.5 ? len : -len;
      else y += r() < 0.5 ? len : -len;
      d += `L${x} ${y}`;
      if (s < segs - 1) {
        const b = g * (r() < 0.5 ? 1 : -1);
        x += b;
        y += b;
        d += `L${x} ${y}`;
      }
      dir = 1 - dir;
    }
    pads += `<circle cx="${x}" cy="${y}" r="3.2"/>`;
    paths += `<path d="${d}"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">${paths}</g><g fill="currentColor">${pads}</g></svg>`;
}

/** Circuit traces for the home-page hero, generated once at build time. */
export const TRACES_SVG = traces();
