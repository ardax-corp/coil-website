---
slug: "tui/tui/layout/Constraint"
package: "tui"
title: "Constraint"
description: "How a row or column sizes a child on its main axis."
module: "tui::layout"
kind: "enum"
name: "Constraint"
signature: "enum Constraint"
import: "use tui::layout::{Constraint};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/layout.coil#L5"
order: 0
---

How a row or column sizes a child on its main axis.

## Variants

### `Fixed(int)` {#variant-fixed}

Exactly `n` cells.

### `Percent(int)` {#variant-percent}

`p` percent of the space (after gaps).

### `Auto` {#variant-auto}

The child's own measured size.

### `Fill(int)` {#variant-fill}

A share of what is left over, by weight.

### `Min(int)` {#variant-min}

At least `n` cells, then grows like `Fill(1)`.

### `Max(int)` {#variant-max}

Grows like `Fill(1)`, up to `n` cells.
