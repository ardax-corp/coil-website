---
slug: "cli/cli/keys/MouseButton"
package: "cli"
title: "MouseButton"
description: "Which button a mouse report is about."
module: "cli::keys"
kind: "enum"
name: "MouseButton"
signature: "enum MouseButton"
import: "use cli::keys::{MouseButton};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/keys.coil#L99"
order: 2
---

Which button a mouse report is about.

## Variants

### `Left` {#variant-left}

The left (primary) button.

### `Middle` {#variant-middle}

The middle button or wheel click.

### `Right` {#variant-right}

The right button.

### `WheelUp` {#variant-wheelup}

Wheel scrolled up.

### `WheelDown` {#variant-wheeldown}

Wheel scrolled down.

### `WheelLeft` {#variant-wheelleft}

Wheel tilted (or scrolled) left.

### `WheelRight` {#variant-wheelright}

Wheel tilted (or scrolled) right.

### `NoButton` {#variant-nobutton}

Motion with no button held.

## See also

- [`Key`](/packages/cli/reference/cli/keys/Key): A key on the keyboard, without modifiers (those are in `KeyEvent.mods`).
- [`MouseKind`](/packages/cli/reference/cli/keys/MouseKind): What happened in a mouse report.
- [`Event`](/packages/cli/reference/cli/keys/Event): One decoded input event.
