---
slug: "tui/tui/geom/Align"
package: "tui"
title: "Align"
description: "Alignment on one axis."
module: "tui::geom"
kind: "enum"
name: "Align"
signature: "enum Align"
import: "use tui::geom::{Align};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/geom.coil#L45"
order: 1
---

Alignment on one axis.

## Variants

### `Start` {#variant-start}

At the start: left or top.

### `Center` {#variant-center}

Centred (an odd leftover cell goes after).

### `End` {#variant-end}

At the end: right or bottom.

### `Stretch` {#variant-stretch}

Take the whole axis.
