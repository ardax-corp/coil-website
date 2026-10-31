---
slug: "cli/cli/args/REST"
package: "cli"
title: "REST"
description: "Arg.kind of the positional that takes every remaining argument."
module: "cli::args"
kind: "const"
name: "REST"
signature: "const REST = 4;"
import: "use cli::args::{REST};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.coil#L22"
order: 9
---

`Arg.kind` of the positional that takes every remaining argument.

## See also

- [`FLAG`](/packages/cli/reference/cli/args/FLAG): `Arg.kind` of a flag: no value, counted when repeated.
- [`OPTION`](/packages/cli/reference/cli/args/OPTION): `Arg.kind` of an option taking one value (the last one given wins).
- [`MULTI`](/packages/cli/reference/cli/args/MULTI): `Arg.kind` of a repeatable option keeping every value.
- [`POSITIONAL`](/packages/cli/reference/cli/args/POSITIONAL): `Arg.kind` of a positional argument.
