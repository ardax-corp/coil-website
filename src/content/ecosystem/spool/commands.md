---
title: "Commands"
description: "Every spool command and flag, with the environment variables it reads."
order: 1
---

# Commands

```text
spool install [--with-natives] [--enable-scripts] [--ignore-scripts]
spool add <name> --git <url> [--version <req>] [--enable-scripts] [--ignore-scripts]
spool add <name> --path <path> [--enable-scripts] [--ignore-scripts]
spool update [name] [--enable-scripts] [--ignore-scripts]
spool download [packaged-exe]
spool allow-include <name>
spool help
```

## Getting spool

spool is written in Coil and driven by a small bash script. Clone it next to [coil-stdlib](/packages/stdlib) and [coil-toml](/packages/toml), which it uses, and run `./spool` from the checkout:

```bash
git clone https://github.com/ardax-corp/spool.git
git clone https://github.com/ardax-corp/coil-stdlib.git
git clone https://github.com/ardax-corp/coil-toml.git
./spool/spool help
```

It needs `coil` on `PATH` (or `COIL` set), plus host `git`, `sh`, `curl` and `sha256sum`.

---

## `spool add`

Declare a dependency in `coil.toml`, resolve it, update `coil.lock`, and link it.

```bash
spool add http --git https://github.com/ardax-corp/coil-http.git --version '^0.1'
spool add mylib --path ../mylib
```

`--version` takes a [version requirement](/packages/spool/manifest#version-requirements) and defaults to `*`. A name that is already declared is an error. Runs the `pre_install` / `post_install` [scripts](/packages/spool/manifest#scripts) when enabled.

## `spool install`

Materialize the dependencies already pinned in `coil.lock`: check engine ranges, fetch into the shared cache, verify each checkout's `content_hash`, link `.spool/deps`, and add `./.spool/deps` to `[module].roots`. Every git dependency must already be in the lockfile; use `add` or `update` to resolve new ones. See [Install order](/packages/spool#install-order) for the exact sequence.

`--with-natives` also runs [`spool download`](#spool-download) afterwards. Plain `install` never downloads native libraries.

## `spool update`

Re-resolve requirements against the remotes' tags and rewrite `coil.lock`, then link. With a `name`, only that dependency is updated; it must be a git dependency. Runs `pre_update` / `post_update` when scripts are enabled.

## `spool download`

Fetch direct native libraries into `~/.coil/natives/cache/<package>/<version>/<sha256_16>/`.

- With no argument, reads the project's `[[ffi.native]]` entries (via `coil natives dump --tsv`). Local libraries must exist so their hashes can be pinned.
- With a path, reads the native lock embedded in an executable built by `coil package`.

Only libraries loaded directly with `dload` are fetched; their own shared-library dependencies must come from the OS. A lock built for another OS or architecture is refused.

## `spool allow-include <name>`

Allow dependency `<name>`'s [include hook](/packages/spool#include-hooks) to run. The allowlist is stored in `coil.lock` under `[hooks]`. Hooks still only run with `--enable-scripts`.

---

## Flags

| Flag | Effect |
|------|--------|
| `--enable-scripts` | Opt in to running project `[scripts]` and allowed include hooks |
| `--ignore-scripts` | Never run scripts or hooks. Wins over `--enable-scripts`; use it in CI |
| `--with-natives` | `install` only: also download native libraries |

## Environment

| Variable | Effect |
|----------|--------|
| `COIL` | The `coil` binary to use (default: `coil` on `PATH`). Its `--version` is the engine version. |
| `SPOOL_IGNORE_SCRIPTS` | `0` opts in to scripts like `--enable-scripts`; default `1` (off) |
| `COIL_CACHE_DIR` | Git cache root. Otherwise `[cache] dir` in `~/.config/coil/config.toml`, then `$XDG_CACHE_HOME/coil` or `~/.cache/coil` |
| `COIL_NATIVES_DIR` | Native library cache root (default `~/.coil/natives`) |
| `GIT_SSH_COMMAND`, `GIT_ASKPASS`, `SSH_ASKPASS` | Passed through to `git` for [private repositories](/packages/spool#private-git) |

---

## Related

- [Manifest and lockfile](/packages/spool/manifest)
- [spool overview](/packages/spool)
