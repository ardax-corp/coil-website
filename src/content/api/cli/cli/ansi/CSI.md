---
slug: "cli/cli/ansi/CSI"
package: "cli"
title: "CSI"
description: "Control Sequence Introducer, ESC [."
module: "cli::ansi"
kind: "const"
name: "CSI"
signature: "const CSI = \"\\e[\";"
import: "use cli::ansi::{CSI};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/ansi.hy#L9"
order: 2
---

Control Sequence Introducer, `ESC [`.

## See also

- [`ESC`](/packages/cli/reference/cli/ansi/ESC): The escape character that starts every sequence.
- [`OSC`](/packages/cli/reference/cli/ansi/OSC): Operating System Command introducer, `ESC ]`.
- [`ST`](/packages/cli/reference/cli/ansi/ST): String Terminator, `ESC \`, which ends an OSC sequence.
