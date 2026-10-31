---
slug: "cli/cli/keys/KeyEvent/shift"
package: "cli"
title: "KeyEvent::shift"
description: "Whether Shift was held."
module: "cli::keys"
kind: "method"
name: "shift"
parent: "KeyEvent"
signature: "pub fn shift() -> bool"
import: "use cli::keys::{KeyEvent};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/keys.hy#L70"
order: 0
---

Whether Shift was held.

Called on a `KeyEvent` value as `value.shift(…)`.

## Returns

`bool`

## See also

- [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent): A key press: the key and the modifier bits held with it.
- [`KeyEvent::alt`](/packages/cli/reference/cli/keys/KeyEvent/alt): Whether Alt was held.
- [`KeyEvent::ctrl`](/packages/cli/reference/cli/keys/KeyEvent/ctrl): Whether Control was held.
- [`KeyEvent::char`](/packages/cli/reference/cli/keys/KeyEvent/char): The character, when this is a plain or shifted character key.
