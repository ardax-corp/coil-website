---
title: "coil-stdlib docs"
description: "Userland .hy library for Coil. Language builtins and virtual modules stay in the Coil references."
source: "https://github.com/ardax-corp/coil-stdlib/blob/025245d29473d7d259d47c02dbc05ccea1109bb1/docs/README.md"
---
# coil-stdlib docs

Userland `.hy` library for [Coil](https://github.com/ardax-corp/coil-lang).
Language builtins and virtual modules stay in the
[Coil references](https://github.com/ardax-corp/coil-website/tree/main/src/content/docs/reference).

| Page | Contents |
|------|----------|
| [Consume](/packages/stdlib/consume) | `spool` / path / language-repo submodule |
| [Modules](/packages/stdlib/modules) | Catalog of `use` paths |
| [IO adapters](/packages/stdlib/io) | `io::sync` and `io::file` |
| [JSON](/packages/stdlib/codec) | [coil-json](https://github.com/ardax-corp/coil-json) — not in-tree `codec::json` |

HTTP is [coil-http](https://github.com/ardax-corp/coil-http) — install via spool.
JSON is [coil-json](https://github.com/ardax-corp/coil-json) — `spool add json --git … --rev …` or a sibling `--root`; see [JSON](/packages/stdlib/codec).

Language tutorials that *use* these modules (virtual `io` + adapters):
[IO streams](/docs/manual/tutorial/10-io-streams).
