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
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/geom.coil#L45"
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
