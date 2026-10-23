#!/usr/bin/env node
// Derives the scholar variants of Henry, who presents the tutorial challenges,
// from the neutral sticker: a mortarboard (and, for hints, a light bulb) is
// added to the drawing and to the white sticker border and its shadow.
//
//   node scripts/henry-scholar.mjs
//
// Writes public/brand/henry/henry-scholar.svg and henry-scholar-hint.svg.

import { readFileSync, writeFileSync } from "node:fs";

const DIR = new URL("../public/brand/henry/", import.meta.url).pathname;
const INK = "#3a2418";
const BOARD = "#2e3440";
const BOARD_LIT = "#4c566a";
const GOLD = "#ffcf4d";

// The hat in its own frame: origin at the bottom middle of the skullcap, then
// set on Henry's hood and tipped forward over his eye.
const HAT = "translate(-66 62) rotate(-9)";
const cap = "M-42 4L-36 -20L36 -20L42 4Q0 16 -42 4Z";
const board = "M-72 -22L0 -46L72 -22L0 2Z";
const lip = "M-72 -22L0 2L72 -22L72 -15L0 9L-72 -15Z";
const cord = "M0 -22Q-36 -24 -60 -17L-60 14";
const tassel = "M-66 12L-54 12L-52 38L-68 38Z";

// The bulb sits where the other stickers keep their props, above and in
// front of Henry.
const bulb = "M-154 -14C-176 -14 -190 2 -188 22C-186 36 -176 42 -172 52L-136 52C-132 42 -122 36 -120 22C-118 2 -132 -14 -154 -14Z";
const base = "M-170 52L-138 52L-140 68L-168 68Z";
const rays = "M-154 -36L-154 -26M-196 -12L-188 -6M-112 -12L-120 -6M-206 26L-196 26M-102 26L-112 26";

/** Shapes for the sticker border: filled outlines with a wide stroke. */
function border(hint) {
  const hat = `<g transform="${HAT}"><path d="${cap}" stroke-width="24"/><path d="${board}" stroke-width="24"/><path d="${lip}" stroke-width="24"/><path d="${cord}" fill="none" stroke-width="30" stroke-linecap="round"/><path d="${tassel}" stroke-width="24"/></g>`;
  const extra = hint
    ? `<path d="${bulb}" stroke-width="24"/><path d="${base}" stroke-width="24"/><path d="${rays}" fill="none" stroke-width="30" stroke-linecap="round"/>`
    : "";
  return hat + extra;
}

function drawing(hint) {
  const hat =
    `<g transform="${HAT}" stroke="${INK}" stroke-linejoin="round">` +
    `<path d="${cap}" fill="${BOARD}" stroke-width="5"/>` +
    `<path d="${lip}" fill="#1f242d" stroke-width="5"/>` +
    `<path d="${board}" fill="${BOARD}" stroke-width="5"/>` +
    `<path d="M-50 -24L0 -40L24 -32" fill="none" stroke="${BOARD_LIT}" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="${cord}" fill="none" stroke-width="9" stroke-linecap="round"/>` +
    `<path d="${cord}" fill="none" stroke="${GOLD}" stroke-width="4" stroke-linecap="round"/>` +
    `<path d="${tassel}" fill="${GOLD}" stroke-width="3.5"/>` +
    `<path d="M-63 20L-63.5 35M-60 20L-60 35M-57 20L-56.5 35" fill="none" stroke-width="2" stroke-linecap="round" stroke-opacity=".55"/>` +
    `<circle cx="0" cy="-22" r="6" fill="${GOLD}" stroke-width="3.5"/>` +
    `</g>`;
  const extra = hint
    ? `<path d="${rays}" fill="none" stroke="${INK}" stroke-width="12" stroke-linecap="round"/>` +
      `<path d="${rays}" fill="none" stroke="${GOLD}" stroke-width="6" stroke-linecap="round"/>` +
      `<path d="${bulb}" fill="${GOLD}" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>` +
      `<path d="M-166 18Q-166 2 -152 -2" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-opacity=".8"/>` +
      `<path d="M-162 52L-162 36Q-162 26 -154 26Q-146 26 -146 36L-146 52" fill="none" stroke="${INK}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>` +
      `<path d="${base}" fill="#9aa3b0" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>` +
      `<path d="M-168 60L-140 60" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`
    : "";
  return hat + extra;
}

const neutral = readFileSync(`${DIR}henry-neutral.svg`, "utf8");

function variant(hint) {
  const label = hint ? "scholar, with a hint" : "scholar";
  let svg = neutral.replace(/aria-label="[^"]*"/, `aria-label="Henry the nautilus sticker, ${label}"`);
  // The first two groups are the shadow and the white border; each gets the
  // new shapes at its end.
  let n = 0;
  svg = svg.replace(/<\/g>/g, (m) => (n++ < 2 ? border(hint) + m : m));
  if (n < 2) throw new Error("henry-neutral.svg no longer starts with its shadow and border groups");
  return svg.replace(/<\/svg>\s*$/, drawing(hint) + "</svg>");
}

writeFileSync(`${DIR}henry-scholar.svg`, variant(false));
writeFileSync(`${DIR}henry-scholar-hint.svg`, variant(true));
