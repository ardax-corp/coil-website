---
slug: "cli/cli/ansi/ESC"
package: "cli"
title: "ESC"
description: "The escape character that starts every sequence."
module: "cli::ansi"
kind: "const"
name: "ESC"
signature: "const ESC = \"\\e\";"
import: "use cli::ansi::{ESC};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/ansi.coil#L6"
order: 1
---

The escape character that starts every sequence.

## See also

- [`CSI`](/packages/cli/reference/cli/ansi/CSI): Control Sequence Introducer, `ESC [`.
- [`OSC`](/packages/cli/reference/cli/ansi/OSC): Operating System Command introducer, `ESC ]`.
- [`ST`](/packages/cli/reference/cli/ansi/ST): String Terminator, `ESC \`, which ends an OSC sequence.
