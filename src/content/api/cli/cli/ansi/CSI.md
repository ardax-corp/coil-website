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
source: "https://github.com/ardax-corp/coil-cli/blob/05669fce32782c1a5cb55fb2ecff2e1215cd0bfc/src/cli/ansi.coil#L9"
order: 2
---

Control Sequence Introducer, `ESC [`.

## See also

- [`ESC`](/packages/cli/reference/cli/ansi/ESC): The escape character that starts every sequence.
- [`OSC`](/packages/cli/reference/cli/ansi/OSC): Operating System Command introducer, `ESC ]`.
- [`ST`](/packages/cli/reference/cli/ansi/ST): String Terminator, `ESC \`, which ends an OSC sequence.
