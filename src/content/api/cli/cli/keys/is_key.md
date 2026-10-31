---
slug: "cli/cli/keys/is_key"
package: "cli"
title: "is_key"
description: "Whether e is the key spec (as describe_key writes it)."
module: "cli::keys"
kind: "fn"
name: "is_key"
signature: "fn is_key(Event e, string spec) -> bool"
import: "use cli::keys::{is_key};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/keys.coil#L794"
order: 17
---

Whether `e` is the key `spec` (as [`describe_key`](/packages/cli/reference/cli/keys/describe_key) writes it).

## Parameters

| Name | Type |
|------|------|
| `e` | `Event` |
| `spec` | `string` |

## Returns

`bool`

## Examples

```coil
use cli::keys::{Key, CTRL, is_key, key};
use tests::assert;
assert!(is_key(key(Key::Char(99), CTRL), "ctrl+c"));
assert!(is_key(key(Key::Enter, 0), "enter"));
assert!(!is_key(key(Key::Enter, 0), "tab"));
```

## See also

- [`cli::keys::describe_key`](/packages/cli/reference/cli/keys/describe_key)
- [`key`](/packages/cli/reference/cli/keys/fn.key): A key event for `k` with modifier bits `mods` (for tests and scripted input).
- [`decoder`](/packages/cli/reference/cli/keys/fn.decoder): An empty decoder.
- [`decode_all`](/packages/cli/reference/cli/keys/decode_all): Decode a whole buffer at once (tests, scripted input): `feed`, `drain` and `flush`.
- [`cp_string`](/packages/cli/reference/cli/keys/cp_string): UTF-8 text of code point `cp` (for `Key::Char`).
- [`describe`](/packages/cli/reference/cli/keys/describe): Short text for any event, for logs and tests: keys as `describe_key` writes them, `mouse(press left 3,4)`, `paste(text)`, `focus-in`, `cursor(row,col)`, `resize(80x24)`, `unknown(n bytes)`.
