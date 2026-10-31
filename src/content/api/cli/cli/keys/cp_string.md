---
slug: "cli/cli/keys/cp_string"
package: "cli"
title: "cp_string"
description: "UTF-8 text of code point cp (for Key::Char)."
module: "cli::keys"
kind: "fn"
name: "cp_string"
signature: "fn cp_string(int cp) -> string"
import: "use cli::keys::{cp_string};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/keys.hy#L676"
order: 14
---

UTF-8 text of code point `cp` (for [`Key::Char`](/packages/cli/reference/cli/keys/Key#variant-char)).

## Parameters

| Name | Type |
|------|------|
| `cp` | `int` |

## Returns

`string`

## See also

- [`cli::keys::Key`](/packages/cli/reference/cli/keys/Key)
- [`key`](/packages/cli/reference/cli/keys/fn.key): A key event for `k` with modifier bits `mods` (for tests and scripted input).
- [`decoder`](/packages/cli/reference/cli/keys/fn.decoder): An empty decoder.
- [`decode_all`](/packages/cli/reference/cli/keys/decode_all): Decode a whole buffer at once (tests, scripted input): `feed`, `drain` and `flush`.
- [`describe_key`](/packages/cli/reference/cli/keys/describe_key): `ctrl+alt+shift+name`, the form `KeyEvent` bindings use: `"ctrl+c"`, `"alt+enter"`, `"shift+f5"`, `"up"`, `"a"`, `"space"`.
- [`describe`](/packages/cli/reference/cli/keys/describe): Short text for any event, for logs and tests: keys as `describe_key` writes them, `mouse(press left 3,4)`, `paste(text)`, `focus-in`, `cursor(row,col)`, `resize(80x24)`, `unknown(n bytes)`.
- [`is_key`](/packages/cli/reference/cli/keys/is_key): Whether `e` is the key `spec` (as `describe_key` writes it).
