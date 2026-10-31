---
slug: "cli/cli/keys/MouseKind"
package: "cli"
title: "MouseKind"
description: "What happened in a mouse report."
module: "cli::keys"
kind: "enum"
name: "MouseKind"
signature: "enum MouseKind"
import: "use cli::keys::{MouseKind};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/keys.coil#L119"
order: 3
---

What happened in a mouse report.

## Variants

### `Press` {#variant-press}

A button went down (wheel steps are presses).

### `Release` {#variant-release}

A button came up.

### `Drag` {#variant-drag}

Motion with a button held.

### `Move` {#variant-move}

Motion with no button held (only with `enable_mouse_motion`).

## See also

- [`Key`](/packages/cli/reference/cli/keys/Key): A key on the keyboard, without modifiers (those are in `KeyEvent.mods`).
- [`MouseButton`](/packages/cli/reference/cli/keys/MouseButton): Which button a mouse report is about.
- [`Event`](/packages/cli/reference/cli/keys/Event): One decoded input event.
