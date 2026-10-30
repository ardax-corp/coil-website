---
slug: "cli/cli/keys/Key"
package: "cli"
title: "Key"
description: "Enum Key."
module: "cli::keys"
kind: "enum"
name: "Key"
signature: "enum Key"
import: "use cli::keys::{Key};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L7"
order: 17
---

## Variants

### `Char(int)` {#variant-char}

A typed character (code point). Ctrl+letter arrives as the
lower-case letter with `CTRL`.

### `Enter` {#variant-enter}

### `Tab` {#variant-tab}

### `BackTab` {#variant-backtab}

### `Backspace` {#variant-backspace}

### `Esc` {#variant-esc}

### `Up` {#variant-up}

### `Down` {#variant-down}

### `Left` {#variant-left}

### `Right` {#variant-right}

### `Home` {#variant-home}

### `End` {#variant-end}

### `PageUp` {#variant-pageup}

### `PageDown` {#variant-pagedown}

### `Insert` {#variant-insert}

### `Delete` {#variant-delete}

### `F(int)` {#variant-f}

Function key F1-F24.

## See also

- [`MouseButton`](/packages/cli/reference/cli/keys/MouseButton)
- [`MouseKind`](/packages/cli/reference/cli/keys/MouseKind)
- [`Event`](/packages/cli/reference/cli/keys/Event)
