---
slug: "cli/cli/keys/KeyEvent/ctrl"
package: "cli"
title: "KeyEvent::ctrl"
description: "Whether Control was held."
module: "cli::keys"
kind: "method"
name: "ctrl"
parent: "KeyEvent"
signature: "pub fn ctrl() -> bool"
import: "use cli::keys::{KeyEvent};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/keys.hy#L80"
order: 2
---

Whether Control was held.

Called on a `KeyEvent` value as `value.ctrl(…)`.

## Returns

`bool`

## See also

- [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent): A key press: the key and the modifier bits held with it.
- [`KeyEvent::shift`](/packages/cli/reference/cli/keys/KeyEvent/shift): Whether Shift was held.
- [`KeyEvent::alt`](/packages/cli/reference/cli/keys/KeyEvent/alt): Whether Alt was held.
- [`KeyEvent::char`](/packages/cli/reference/cli/keys/KeyEvent/char): The character, when this is a plain or shifted character key.
