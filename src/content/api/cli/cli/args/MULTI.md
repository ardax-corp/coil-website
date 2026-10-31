---
slug: "cli/cli/args/MULTI"
package: "cli"
title: "MULTI"
description: "Arg.kind of a repeatable option keeping every value."
module: "cli::args"
kind: "const"
name: "MULTI"
signature: "const MULTI = 2;"
import: "use cli::args::{MULTI};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/args.hy#L16"
order: 7
---

`Arg.kind` of a repeatable option keeping every value.

## See also

- [`FLAG`](/packages/cli/reference/cli/args/FLAG): `Arg.kind` of a flag: no value, counted when repeated.
- [`OPTION`](/packages/cli/reference/cli/args/OPTION): `Arg.kind` of an option taking one value (the last one given wins).
- [`POSITIONAL`](/packages/cli/reference/cli/args/POSITIONAL): `Arg.kind` of a positional argument.
- [`REST`](/packages/cli/reference/cli/args/REST): `Arg.kind` of the positional that takes every remaining argument.
