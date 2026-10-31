---
slug: "cli/cli/args/OPTION"
package: "cli"
title: "OPTION"
description: "Arg.kind of an option taking one value (the last one given wins)."
module: "cli::args"
kind: "const"
name: "OPTION"
signature: "const OPTION = 1;"
import: "use cli::args::{OPTION};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.hy#L13"
order: 6
---

`Arg.kind` of an option taking one value (the last one given wins).

## See also

- [`FLAG`](/packages/cli/reference/cli/args/FLAG): `Arg.kind` of a flag: no value, counted when repeated.
- [`MULTI`](/packages/cli/reference/cli/args/MULTI): `Arg.kind` of a repeatable option keeping every value.
- [`POSITIONAL`](/packages/cli/reference/cli/args/POSITIONAL): `Arg.kind` of a positional argument.
- [`REST`](/packages/cli/reference/cli/args/REST): `Arg.kind` of the positional that takes every remaining argument.
