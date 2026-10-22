/**
 * Brand exploration: logo marks and home-page hero backgrounds to choose
 * from. `/brand` shows them side by side; `?logo=ID&bg=ID` on any page
 * previews a pick across the site (remembered in localStorage, `?logo=&bg=`
 * resets). Once one of each is chosen, the rest and this switch go away.
 */
import { COIL_PATH } from "./logo";

const TILE = `<rect width="32" height="32" rx="8" class="mark-tile"/>`;

/** A circular arc around (cx, cy) from angle a0 to a1 (degrees, y up, counterclockwise). */
function arc(cx: number, cy: number, r: number, a0: number, a1: number): string {
  const p = (a: number) => {
    const t = (a * Math.PI) / 180;
    return `${(cx + r * Math.cos(t)).toFixed(2)} ${(cy - r * Math.sin(t)).toFixed(2)}`;
  };
  const large = (((a1 - a0) % 360) + 360) % 360 > 180 ? 1 : 0;
  return `M${p(a0)}A${r} ${r} 0 ${large} 0 ${p(a1)}`;
}

function toroidTicks(): string {
  let d = "";
  for (let i = 0; i < 12; i++) {
    const t = ((i * 30 + 15) * Math.PI) / 180;
    const [c, s] = [Math.cos(t), Math.sin(t)];
    d += `M${(16 + 9.6 * c).toFixed(2)} ${(16 - 9.6 * s).toFixed(2)}L${(16 + 13 * c).toFixed(2)} ${(16 - 13 * s).toFixed(2)}`;
  }
  return d;
}

/** An angular C, as a circuit trace: square bounds [m, 32-m] with 45° corners of size c, open to the right at x = right. */
function traceC(m: number, c: number, right: number): string {
  const [t, b] = [m, 32 - m];
  return `M${right} ${t}L${m + c} ${t}L${m} ${t + c}L${m} ${b - c}L${m + c} ${b}L${right} ${b}`;
}

const pad = (x: number, y: number, r = 2.3) => `<circle cx="${x}" cy="${y}" r="${r}" class="mark-pad"/>`;

function chipPins(): string {
  let d = "";
  for (const y of [11, 16, 21]) d += `M4.5 ${y}H9M23 ${y}H27.5`;
  for (const x of [11, 16, 21]) d += `M${x} 4.5V9M${x} 23V27.5`;
  return d;
}

export type Mark = { id: string; name: string; note: string; svg: string };

export const LOGOS: Mark[] = [
  {
    id: "current",
    name: "Current",
    note: "The spring line, for comparison.",
    svg: `${TILE}<path d="${COIL_PATH}" fill="none" class="mark-ink" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    id: "rings",
    name: "Rings",
    note: "A coil seen end-on: three nested open rings that also read as a C.",
    svg:
      TILE +
      [11, 7.4, 3.8]
        .map((r, i) => `<path d="${arc(16, 16, r, 38, 322)}" fill="none" class="${i === 1 ? "mark-ink2" : "mark-ink"}" stroke-width="2.2" stroke-linecap="round"/>`)
        .join(""),
  },
  {
    id: "prompt",
    name: "Prompt",
    note: "A bold C followed by a block cursor: a language you type into.",
    svg: `${TILE}<path d="${arc(14.5, 16, 7.6, 52, 308)}" fill="none" class="mark-ink" stroke-width="3.4" stroke-linecap="round"/><rect x="20.4" y="18.6" width="5" height="3.4" rx="0.6" class="mark-fill2"/>`,
  },
  {
    id: "solenoid",
    name: "Solenoid",
    note: "A core with windings across it, side on: an inductor drawn as a symbol.",
    svg:
      TILE +
      `<rect x="13" y="5" width="6" height="22" rx="3" class="mark-fill2" opacity="0.9"/>` +
      [9, 13.5, 18, 22.5]
        .map((y) => `<path d="M8.5 ${y + 2.4}L23.5 ${y - 2.4}" class="mark-ink" stroke-width="2.4" stroke-linecap="round"/>`)
        .join(""),
  },
  {
    id: "toroid",
    name: "Toroid",
    note: "A ring wound with wire, as on a toroidal inductor.",
    svg: `${TILE}<circle cx="16" cy="16" r="6.6" fill="none" class="mark-ink2" stroke-width="3"/><path d="${toroidTicks()}" class="mark-ink" stroke-width="2" stroke-linecap="round"/>`,
  },
  {
    id: "trace",
    name: "Trace C",
    note: "A C routed like a board trace, 45° corners, ending in two pads. Matches the circuit background.",
    svg: `${TILE}<path d="${traceC(7, 5, 22)}" fill="none" class="mark-ink" stroke-width="2.6" stroke-linejoin="round"/>${pad(23, 7)}${pad(23, 25)}`,
  },
  {
    id: "bus",
    name: "Bus",
    note: "Two nested trace Cs, like a bus of parallel lines; the angular cousin of Rings.",
    svg:
      TILE +
      [
        [6, 5, 22],
        [11.5, 3, 19],
      ]
        .map(([m, c, r], i) => `<path d="${traceC(m, c, r)}" fill="none" class="${i === 1 ? "mark-ink2" : "mark-ink"}" stroke-width="2.2" stroke-linejoin="round"/>${pad(r + 1.6, m, 1.9)}${pad(r + 1.6, 32 - m, 1.9)}`)
        .join(""),
  },
  {
    id: "chip",
    name: "Chip",
    note: "A small IC package with a trace C on its die: the language as a component.",
    svg: `${TILE}<path d="${chipPins()}" class="mark-ink2" stroke-width="1.8" stroke-linecap="round"/><rect x="9" y="9" width="14" height="14" rx="2.5" class="mark-ink" fill="none" stroke-width="2.2"/><path d="${traceC(12.5, 2.2, 19.5)}" fill="none" class="mark-ink" stroke-width="2" stroke-linejoin="round"/>`,
  },
];

// ------------------------------------------------------------- backgrounds

/** Deterministic pseudo-random numbers, so builds are reproducible. */
function rng(seed: number) {
  return () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
}

/** Circuit traces: orthogonal runs with 45° bends ending in pads. */
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

export type Backdrop = { id: string; name: string; note: string; svg?: string };

export const BACKGROUNDS: Backdrop[] = [
  { id: "current", name: "Current", note: "The stretched spring line, for comparison." },
  { id: "dots", name: "Dot grid", note: "A fine dot grid that fades out toward the text. Quiet and technical." },
  { id: "field", name: "Field rings", note: "Concentric rings spreading from the top right, like a coil's magnetic field." },
  { id: "traces", name: "Circuit traces", note: "Copper traces with pads, as on a circuit board.", svg: traces() },
  { id: "blueprint", name: "Blueprint", note: "A drafting grid with minor and major lines." },
  { id: "sheen", name: "Copper sheen", note: "No lines at all: soft copper and patina light." },
];

export const DEFAULT_LOGO = "current";
export const DEFAULT_BG = "traces";
