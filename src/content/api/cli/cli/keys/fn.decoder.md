---
slug: "cli/cli/keys/fn.decoder"
package: "cli"
title: "decoder"
description: "An empty decoder."
module: "cli::keys"
kind: "fn"
name: "decoder"
signature: "fn decoder() -> Decoder"
import: "use cli::keys::{decoder};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/keys.hy#L484"
order: 12
---

An empty decoder.

## Returns

`Decoder`

## See also

- [`key`](/packages/cli/reference/cli/keys/fn.key): A key event for `k` with modifier bits `mods` (for tests and scripted input).
- [`decode_all`](/packages/cli/reference/cli/keys/decode_all): Decode a whole buffer at once (tests, scripted input): `feed`, `drain` and `flush`.
- [`cp_string`](/packages/cli/reference/cli/keys/cp_string): UTF-8 text of code point `cp` (for `Key::Char`).
- [`describe_key`](/packages/cli/reference/cli/keys/describe_key): `ctrl+alt+shift+name`, the form `KeyEvent` bindings use: `"ctrl+c"`, `"alt+enter"`, `"shift+f5"`, `"up"`, `"a"`, `"space"`.
- [`describe`](/packages/cli/reference/cli/keys/describe): Short text for any event, for logs and tests: keys as `describe_key` writes them, `mouse(press left 3,4)`, `paste(text)`, `focus-in`, `cursor(row,col)`, `resize(80x24)`, `unknown(n bytes)`.
- [`is_key`](/packages/cli/reference/cli/keys/is_key): Whether `e` is the key `spec` (as `describe_key` writes it).
