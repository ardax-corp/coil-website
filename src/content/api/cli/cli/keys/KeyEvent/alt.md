---
slug: "cli/cli/keys/KeyEvent/alt"
package: "cli"
title: "KeyEvent::alt"
description: "Whether Alt was held."
module: "cli::keys"
kind: "method"
name: "alt"
parent: "KeyEvent"
signature: "pub fn alt() -> bool"
import: "use cli::keys::{KeyEvent};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/keys.hy#L75"
order: 1
---

Whether Alt was held.

Called on a `KeyEvent` value as `value.alt(…)`.

## Returns

`bool`

## See also

- [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent): A key press: the key and the modifier bits held with it.
- [`KeyEvent::shift`](/packages/cli/reference/cli/keys/KeyEvent/shift): Whether Shift was held.
- [`KeyEvent::ctrl`](/packages/cli/reference/cli/keys/KeyEvent/ctrl): Whether Control was held.
- [`KeyEvent::char`](/packages/cli/reference/cli/keys/KeyEvent/char): The character, when this is a plain or shifted character key.
