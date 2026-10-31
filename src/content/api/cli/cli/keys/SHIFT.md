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
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/keys.hy#L49"
order: 7
---

Shift, a bit of `KeyEvent.mods` and `MouseEvent.mods`. The bits follow xterm's `1 + mods` parameter.

## See also

- [`ALT`](/packages/cli/reference/cli/keys/ALT): Alt (or Option, or a key sent with an Esc prefix).
- [`CTRL`](/packages/cli/reference/cli/keys/CTRL): Control.
- [`META`](/packages/cli/reference/cli/keys/META): Meta / Super, where the terminal reports it.
