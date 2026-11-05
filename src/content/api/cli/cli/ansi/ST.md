---
slug: "cli/cli/ansi/ST"
package: "cli"
title: "ST"
description: "String Terminator, ESC \\, which ends an OSC sequence."
module: "cli::ansi"
kind: "const"
name: "ST"
signature: "const ST = \"\\e\\\\\";"
import: "use cli::ansi::{ST};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/05669fce32782c1a5cb55fb2ecff2e1215cd0bfc/src/cli/ansi.coil#L15"
order: 4
---

String Terminator, `ESC \`, which ends an OSC sequence.

## See also

- [`ESC`](/packages/cli/reference/cli/ansi/ESC): The escape character that starts every sequence.
- [`CSI`](/packages/cli/reference/cli/ansi/CSI): Control Sequence Introducer, `ESC [`.
- [`OSC`](/packages/cli/reference/cli/ansi/OSC): Operating System Command introducer, `ESC ]`.
