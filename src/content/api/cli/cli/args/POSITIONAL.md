---
slug: "cli/cli/args/POSITIONAL"
package: "cli"
title: "POSITIONAL"
description: "Arg.kind of a positional argument."
module: "cli::args"
kind: "const"
name: "POSITIONAL"
signature: "const POSITIONAL = 3;"
import: "use cli::args::{POSITIONAL};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.hy#L19"
order: 8
---

`Arg.kind` of a positional argument.

## See also

- [`FLAG`](/packages/cli/reference/cli/args/FLAG): `Arg.kind` of a flag: no value, counted when repeated.
- [`OPTION`](/packages/cli/reference/cli/args/OPTION): `Arg.kind` of an option taking one value (the last one given wins).
- [`MULTI`](/packages/cli/reference/cli/args/MULTI): `Arg.kind` of a repeatable option keeping every value.
- [`REST`](/packages/cli/reference/cli/args/REST): `Arg.kind` of the positional that takes every remaining argument.
