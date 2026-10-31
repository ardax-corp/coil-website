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
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/geom.hy#L45"
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
