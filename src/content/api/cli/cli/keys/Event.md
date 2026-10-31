---
slug: "cli/cli/keys/Event"
package: "cli"
title: "Event"
description: "One decoded input event. describe gives a short text form."
module: "cli::keys"
kind: "enum"
name: "Event"
signature: "enum Event"
import: "use cli::keys::{Event};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/keys.hy#L162"
order: 5
---

One decoded input event. [`describe`](/packages/cli/reference/cli/keys/describe) gives a short text form.

## Variants

### `Key(KeyEvent)` {#variant-key}

A key press.

### `Mouse(MouseEvent)` {#variant-mouse}

A mouse press, release, drag, move or wheel step.

### `Paste(string)` {#variant-paste}

Bracketed paste contents.

### `FocusIn` {#variant-focusin}

The terminal window gained focus (with `enable_focus`).

### `FocusOut` {#variant-focusout}

The terminal window lost focus.

### `CursorPos(int, int)` {#variant-cursorpos}

A cursor position report (`row`, `col`), the answer to
[`cli::ansi::query_cursor()`](/packages/cli/reference/cli/ansi/query_cursor).

### `Resize(int, int)` {#variant-resize}

A terminal resize (`cols`, `rows`). Not decoded from bytes; event
loops produce it.

### `Unknown(Vec<byte>)` {#variant-unknown}

A sequence this decoder does not know, kept as bytes.

## Examples

```coil
use cli::keys::{Event, Key, decode_all, describe};
use string::to_bytes;
use tests::assert;
let evs = decode_all(to_bytes("q\e[A\x03"));
assert!(evs.len() == 3);
assert!(describe(evs[1]) == "up");
assert!(describe(evs[2]) == "ctrl+c");
let is_q = match evs[0] {
    Event::Key(k) => k.char() == Option::Some(113),
    default => false,
};
assert!(is_q);
```

## See also

- [`cli::keys::describe`](/packages/cli/reference/cli/keys/describe)
- [`cli::ansi::query_cursor`](/packages/cli/reference/cli/ansi/query_cursor)
- [`Key`](/packages/cli/reference/cli/keys/Key): A key on the keyboard, without modifiers (those are in `KeyEvent.mods`).
- [`MouseButton`](/packages/cli/reference/cli/keys/MouseButton): Which button a mouse report is about.
- [`MouseKind`](/packages/cli/reference/cli/keys/MouseKind): What happened in a mouse report.
