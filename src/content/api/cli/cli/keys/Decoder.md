---
slug: "cli/cli/keys/Decoder"
package: "cli"
title: "Decoder"
description: "Incremental decoder. feed bytes, then call next until it returns None; after a quiet time with bytes still pending call flush. Understands CSI, SS3, SGR and X10 mouse, bracketed paste, focus reports, xterm modifiers and kitty-style CSI u keys; UTF-8 text becomes Key::Char events. cli::events::Events drives one over a terminal."
module: "cli::keys"
kind: "class"
name: "Decoder"
signature: "class Decoder"
import: "use cli::keys::{Decoder};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/keys.coil#L475"
order: 6
---

Incremental decoder. [`feed`](/packages/cli/reference/cli/keys/Decoder/feed) bytes, then call [`next`](/packages/cli/reference/cli/keys/Decoder/next) until it returns `None`; after a quiet time with bytes still pending call [`flush`](/packages/cli/reference/cli/keys/Decoder/flush). Understands CSI, SS3, SGR and X10 mouse, bracketed paste, focus reports, xterm modifiers and kitty-style `CSI u` keys; UTF-8 text becomes [`Key::Char`](/packages/cli/reference/cli/keys/Key#variant-char) events. [`cli::events::Events`](/packages/cli/reference/cli/events/Events) drives one over a terminal.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `expect_cursor` | `bool` | Treat `CSI row ; col R` as a cursor report instead of F3. Set it while a `query_cursor()` answer is pending. |

## Methods

| Name | Description |
|------|-------------|
| [`feed`](/packages/cli/reference/cli/keys/Decoder/feed) | Append bytes read from the terminal; decode them with [`next`](/packages/cli/reference/cli/keys/Decoder/next) or [`drain`](/packages/cli/reference/cli/keys/Decoder/drain). |
| [`pending`](/packages/cli/reference/cli/keys/Decoder/pending) | Bytes fed but not decoded yet. |
| [`next`](/packages/cli/reference/cli/keys/Decoder/next) | The next complete event, or `None` when more bytes are needed. |
| [`flush`](/packages/cli/reference/cli/keys/Decoder/flush) | After a quiet time: whatever is pending as events. |
| [`drain`](/packages/cli/reference/cli/keys/Decoder/drain) | Every complete event decoded so far. |

## Examples

```coil
use cli::keys::{decoder, describe};
use string::to_bytes;
use tests::assert;
let d = decoder();
d.feed(to_bytes("\e"));
assert!(d.next().is_none());
d.feed(to_bytes("[1;5C"));
let e = d.next() ?? panic("no event");
assert!(describe(e) == "ctrl+right");
d.feed(to_bytes("\e"));
assert!(describe(d.flush()[0]) == "esc");
```

## See also

- [`Decoder::feed`](/packages/cli/reference/cli/keys/Decoder/feed)
- [`Decoder::next`](/packages/cli/reference/cli/keys/Decoder/next)
- [`Decoder::flush`](/packages/cli/reference/cli/keys/Decoder/flush)
- [`cli::keys::Key`](/packages/cli/reference/cli/keys/Key)
- [`cli::events::Events`](/packages/cli/reference/cli/events/Events)
- [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent): A key press: the key and the modifier bits held with it.
- [`MouseEvent`](/packages/cli/reference/cli/keys/MouseEvent): A mouse report; `col` and `row` are 1-based.
