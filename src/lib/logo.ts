/**
 * The Coil mark and the home-page circuit-trace background.
 *
 * The mark is the schematic symbol for an inductor (a coil): a lead, three
 * windings, a lead, in copper on a graphite tile. Classes: mark-tile
 * (graphite tile), mark-ink (copper); Logo.astro colours them. The same
 * shape is exported as files in public/brand/ and public/favicon.svg.
 */

/** The inductor symbol on a 32-unit grid. */
export const COIL_PATH = "M2.5 18.5H4A4 4 0 0 1 12 18.5A4 4 0 0 1 20 18.5A4 4 0 0 1 28 18.5H29.5";

/** Inner SVG of the mark on a 32×32 viewBox. */
export const MARK_SVG =
  `<rect width="32" height="32" rx="8" class="mark-tile"/>` +
  `<path d="${COIL_PATH}" fill="none" class="mark-ink" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>`;

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
