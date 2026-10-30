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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/keys.hy#L58"
order: 3
---

The character, when this is a plain or shifted character key.

Called on a `KeyEvent` value as `value.char(…)`.

## Returns

`Option<int>`

## See also

- [`KeyEvent`](/packages/cli/reference/cli/keys/KeyEvent)
- [`KeyEvent::shift`](/packages/cli/reference/cli/keys/KeyEvent/shift)
- [`KeyEvent::alt`](/packages/cli/reference/cli/keys/KeyEvent/alt)
- [`KeyEvent::ctrl`](/packages/cli/reference/cli/keys/KeyEvent/ctrl)
