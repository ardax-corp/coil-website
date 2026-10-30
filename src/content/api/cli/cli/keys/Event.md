---
slug: "cli/cli/keys/Event"
package: "cli"
title: "Event"
description: "Enum Event."
module: "cli::keys"
kind: "enum"
name: "Event"
signature: "enum Event"
import: "use cli::keys::{Event};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L99"
order: 20
---

## Variants

### `Key(KeyEvent)` {#variant-key}

### `Mouse(MouseEvent)` {#variant-mouse}

### `Paste(string)` {#variant-paste}

Bracketed paste contents.

### `FocusIn` {#variant-focusin}

### `FocusOut` {#variant-focusout}

### `CursorPos(int, int)` {#variant-cursorpos}

A cursor position report (`row`, `col`), the answer to
[`cli::ansi::query_cursor()`](/packages/cli/reference/cli/ansi/query_cursor).

### `Resize(int, int)` {#variant-resize}

A terminal resize (`cols`, `rows`). Not decoded from bytes; event
loops produce it.

### `Unknown(Vec<byte>)` {#variant-unknown}

A sequence this decoder does not know, kept as bytes.

## See also

- [`cli::ansi::query_cursor`](/packages/cli/reference/cli/ansi/query_cursor)
- [`Key`](/packages/cli/reference/cli/keys/Key)
- [`MouseButton`](/packages/cli/reference/cli/keys/MouseButton)
- [`MouseKind`](/packages/cli/reference/cli/keys/MouseKind)
