---
slug: "cli/cli/keys/SHIFT"
package: "cli"
title: "SHIFT"
description: "Shift, a bit of KeyEvent.mods and MouseEvent.mods. The bits follow xterm's 1 + mods parameter."
module: "cli::keys"
kind: "const"
name: "SHIFT"
signature: "const SHIFT = 1;"
import: "use cli::keys::{SHIFT};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/keys.hy#L49"
order: 7
---

Shift, a bit of `KeyEvent.mods` and `MouseEvent.mods`. The bits follow xterm's `1 + mods` parameter.

## See also

- [`ALT`](/packages/cli/reference/cli/keys/ALT): Alt (or Option, or a key sent with an Esc prefix).
- [`CTRL`](/packages/cli/reference/cli/keys/CTRL): Control.
- [`META`](/packages/cli/reference/cli/keys/META): Meta / Super, where the terminal reports it.
