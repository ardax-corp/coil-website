---
slug: "cli/cli/args/FLAG"
package: "cli"
title: "FLAG"
description: "Arg.kind of a flag: no value, counted when repeated."
module: "cli::args"
kind: "const"
name: "FLAG"
signature: "const FLAG = 0;"
import: "use cli::args::{FLAG};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.coil#L10"
order: 5
---

`Arg.kind` of a flag: no value, counted when repeated.

## See also

- [`OPTION`](/packages/cli/reference/cli/args/OPTION): `Arg.kind` of an option taking one value (the last one given wins).
- [`MULTI`](/packages/cli/reference/cli/args/MULTI): `Arg.kind` of a repeatable option keeping every value.
- [`POSITIONAL`](/packages/cli/reference/cli/args/POSITIONAL): `Arg.kind` of a positional argument.
- [`REST`](/packages/cli/reference/cli/args/REST): `Arg.kind` of the positional that takes every remaining argument.
