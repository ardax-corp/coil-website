---
title: "coil-stdlib docs"
description: "Userland .hy library for Coil. Language builtins and virtual modules stay in the coil-lang references."
source: "https://github.com/ardax-corp/coil-stdlib/blob/09f2720e1efbd80a69b50a4d41487d7542cf52b0/docs/README.md"
---
# coil-stdlib docs

Userland `.hy` library for [Coil](https://github.com/ardax-corp/coil-lang).
Language builtins and virtual modules stay in the
[coil-lang references](/docs/references).

| Page | Contents |
|------|----------|
| [Consume](/packages/stdlib/consume) | `spool` / path / language-repo submodule |
| [Modules](/packages/stdlib/modules) | Catalog of `use` paths |
| [IO adapters](/packages/stdlib/io) | `io::sync` and `io::file` |
| [JSON](/packages/stdlib/codec) | [coil-json](https://github.com/ardax-corp/coil-json) — not in-tree `codec::json` |

HTTP is [coil-http](https://github.com/ardax-corp/coil-http) — install via spool.
JSON is [coil-json](https://github.com/ardax-corp/coil-json) — sibling roots or `{ git }` plus `coil.lock`; see [JSON](/packages/stdlib/codec).

Language tutorials that *use* these modules (virtual `io` + adapters):
[IO streams](/docs/manual/tutorial/10-io-streams).
