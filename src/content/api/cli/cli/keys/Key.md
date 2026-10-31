---
slug: "cli/cli/keys/Key"
package: "cli"
title: "Key"
description: "A key on the keyboard, without modifiers (those are in KeyEvent.mods)."
module: "cli::keys"
kind: "enum"
name: "Key"
signature: "enum Key"
import: "use cli::keys::{Key};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/keys.hy#L9"
order: 0
---

A key on the keyboard, without modifiers (those are in `KeyEvent.mods`).

## Variants

### `Char(int)` {#variant-char}

A typed character (code point). Ctrl+letter arrives as the
lower-case letter with [`CTRL`](/packages/cli/reference/cli/keys/CTRL).

### `Enter` {#variant-enter}

Enter / Return (also Ctrl-J and Ctrl-M).

### `Tab` {#variant-tab}

Tab (also Ctrl-I).

### `BackTab` {#variant-backtab}

Shift-Tab, as terminals send it (`CSI Z`).

### `Backspace` {#variant-backspace}

Backspace (DEL or Ctrl-H).

### `Esc` {#variant-esc}

A lone Escape.

### `Up` {#variant-up}

Arrow up.

### `Down` {#variant-down}

Arrow down.

### `Left` {#variant-left}

Arrow left.

### `Right` {#variant-right}

Arrow right.

### `Home` {#variant-home}

Home.

### `End` {#variant-end}

End.

### `PageUp` {#variant-pageup}

Page Up.

### `PageDown` {#variant-pagedown}

Page Down.

### `Insert` {#variant-insert}

Insert.

### `Delete` {#variant-delete}

Delete (forward delete).

### `F(int)` {#variant-f}

Function key F1-F24.

## See also

- [`cli::keys::CTRL`](/packages/cli/reference/cli/keys/CTRL)
- [`MouseButton`](/packages/cli/reference/cli/keys/MouseButton): Which button a mouse report is about.
- [`MouseKind`](/packages/cli/reference/cli/keys/MouseKind): What happened in a mouse report.
- [`Event`](/packages/cli/reference/cli/keys/Event): One decoded input event.
