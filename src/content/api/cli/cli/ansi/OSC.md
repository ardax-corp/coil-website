---
slug: "cli/cli/ansi/OSC"
package: "cli"
title: "OSC"
description: "Operating System Command introducer, ESC ]."
module: "cli::ansi"
kind: "const"
name: "OSC"
signature: "const OSC = \"\\e]\";"
import: "use cli::ansi::{OSC};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/ansi.hy#L12"
order: 3
---

Operating System Command introducer, `ESC ]`.

## See also

- [`ESC`](/packages/cli/reference/cli/ansi/ESC): The escape character that starts every sequence.
- [`CSI`](/packages/cli/reference/cli/ansi/CSI): Control Sequence Introducer, `ESC [`.
- [`ST`](/packages/cli/reference/cli/ansi/ST): String Terminator, `ESC \`, which ends an OSC sequence.
