---
slug: "cli/cli/keys/KeyEvent/char"
package: "cli"
title: "KeyEvent::char"
description: "The character, when this is a plain or shifted character key."
module: "cli::keys"
kind: "method"
name: "char"
parent: "KeyEvent"
signature: "pub fn char() -> Option<int>"
import: "use cli::keys::{KeyEvent};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/keys.coil#L85"
order: 3
---

The character, when this is a plain or shifted character key.

Called on a `KeyEvent` value as `value.char(…)`.

## Returns

`Option<int>`

## See also

- [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent): A key press: the key and the modifier bits held with it.
- [`KeyEvent::shift`](/packages/cli/reference/cli/keys/KeyEvent/shift): Whether Shift was held.
- [`KeyEvent::alt`](/packages/cli/reference/cli/keys/KeyEvent/alt): Whether Alt was held.
- [`KeyEvent::ctrl`](/packages/cli/reference/cli/keys/KeyEvent/ctrl): Whether Control was held.
