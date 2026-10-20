---
title: "Commands"
description: "Every spool command and flag, with the environment variables it reads."
order: 1
---

# Commands

```text
Project:
  spool new <name> [--lib] [--no-git]
  spool init [--name N] [--lib] [--no-git]
  spool build [-o PATH] [-O LEVEL]
  spool run [-O LEVEL] [-- ARGS...]
  spool check
  spool clean [--all]

Language tools (flags go to coil unchanged):
  spool test [PATH] [FLAGS...]
  spool coverage [PATH] [FLAGS...]
  spool infect [PATH] [FLAGS...]
  spool fmt [--check] [PATHS...]
  spool debug [FILE] [FLAGS...]
  spool dissect [FILE] [FLAGS...]
  spool lsp
  spool coil [ARGS...]

Dependencies:
  spool install [--locked] [--with-natives]
  spool add <name> --git <url> [--version <req> | --rev <rev>]
  spool add <name> --path <dir>
  spool remove <name>
  spool update [name]
  spool tree
  spool outdated
  spool download [packaged-exe]
  spool allow-include <name>

Tooling:
  spool doctor
  spool cache dir | spool cache clean
  spool version
  spool help
```

## Getting spool

spool is written in Coil and shipped as one executable built with `coil package`. Build it from a checkout:

```bash
git clone https://github.com/ardax-corp/spool.git
cd spool
./bootstrap.sh              # → target/spool
./bootstrap.sh --install    # also ~/.local/bin/spool and ~/.coil/stdlib
```

`bootstrap.sh` finds a usable `coil` (`COIL`, `PATH`, `~/.coil/bin/coil`), else downloads a release or builds coil-lang from source, and fetches coil-stdlib, coil-toml and coil-json. At run time spool needs host `git` and `sh`, plus `curl` for `download`.

---

## Project commands

`spool new <name>` scaffolds `coil.toml`, `src/`, `tests/` and `.gitignore` (and runs `git init` unless `--no-git`); `init` does the same in the current directory. `--lib` makes a library whose entry module is `src/<name>.hy`.

`build` runs `coil package` on `[entry].file` (default `src/main.hy`) into `target/<name>`, with an `--ffi-native` row for each native library the project or a dependency declares, then copies the libraries the executable pins into the natives cache so it runs from any directory (see [Dependency natives](/packages/spool/manifest#dependency-natives)). `run` builds, then runs `target/<name>` with the arguments after `--` and returns its exit code. `check` compiles without packaging. `clean` removes `target/` (`--all`: also `.spool/`).

`test`, `coverage`, `infect`, `fmt`, `debug`, `dissect` and `lsp` wrap the matching `coil` subcommands and forward every flag unchanged. `spool coil ARGS` runs plain `coil ARGS` from the project root with no flags added.

Commands that compile run `install` first when dependencies are declared but `.spool/deps` does not exist yet. Each `coil` invocation gets `--root` for every `[module].roots` entry, `.spool/deps`, the stdlib and each dependency's `src/`, plus the grants and `dload` pins from the manifest and lockfile; see [Compile flags](/packages/spool#compile-flags).

## `spool add`

Declare a dependency in `coil.toml`, resolve it, update `coil.lock`, and link it.

```bash
spool add http --git https://github.com/ardax-corp/coil-http.git --version '^0.1'
spool add toml --git https://github.com/ardax-corp/coil-toml.git --rev main
spool add msgpack --git https://github.com/ardax-corp/coil-msgpack.git --version latest
spool add mylib --path ../mylib
```

`--version` takes a [version requirement](/packages/spool/manifest#version-requirements) or [`latest`](/packages/spool/manifest#latest) (the tip of the default branch). It defaults to `*`, or to `latest` when the repository has no version tags; spool then prints a one-line note saying so. `--rev` pins a branch, tag or commit instead. A name that is already declared is an error. `add` and `remove` restore `coil.toml` and `coil.lock` if the install fails. Runs the `pre_install` / `post_install` [scripts](/packages/spool/manifest#scripts) when enabled.

## `spool remove`

Drop the dependency from `coil.toml`, prune `coil.lock` and remove stale links.

## `spool install`

Fetch, resolve, prune and link: check engine ranges, check out every locked package into the shared cache and verify its `content_hash`, resolve anything new, write `coil.lock` if it changed, and link `.spool/deps`. `coil.toml` is never edited. `--locked` fails instead of changing the lock (for CI). See [Install order](/packages/spool#install-order) for the exact sequence.

`--with-natives` also runs [`spool download`](#spool-download) afterwards. Plain `install` never downloads native libraries.

## `spool update`

Re-resolve requirements to the newest allowed versions and rewrite `coil.lock`, then link. A `rev` that names a branch moves to the branch head, and `version = "latest"` moves to the tip of the default branch. With a `name`, only that dependency is updated; it must be a git dependency. Runs `pre_update` / `post_update` when scripts are enabled.

## `spool tree` / `spool outdated`

`tree` prints the dependency graph. `outdated` compares the locked version with the newest compatible and the newest tag; for a `latest` dependency it compares the locked commit with the current tip.

## `spool download`

Fetch direct native libraries into `~/.coil/natives/cache/<package>/<version>/<sha256_16>/`.

- With no argument, reads the project's `[[ffi.native]]` entries (via `coil natives dump --tsv`). Local libraries must exist so their hashes can be pinned. Only rows with an https `url` are fetched.
- With a path, reads the native lock embedded in an executable built by `coil package`.

Only libraries loaded directly with `dload` are fetched; their own shared-library dependencies must come from the OS. A lock built for another OS or architecture is refused.

## `spool doctor` / `spool cache`

`doctor` checks coil, the stdlib, `git`, `sh`, `curl`, the cache and the project roots. `cache dir` prints the shared git cache root; `cache clean` clears it.

## `spool allow-include <name>`

Allow dependency `<name>`'s [include hook](/packages/spool#include-hooks) to run. The allowlist is stored in `coil.lock` under `[hooks]`. Hooks still only run with `--enable-scripts`.

---

## Flags

| Flag | Effect |
|------|--------|
| `--enable-scripts` | Opt in to running project `[scripts]` and allowed include hooks |
| `--ignore-scripts` | Never run scripts or hooks. Wins over `--enable-scripts`; use it in CI |
| `--with-natives` | `install` only: also download native libraries |
| `--locked` | `install` only: fail instead of changing `coil.lock` |

## Environment

| Variable | Effect |
|----------|--------|
| `COIL` | The `coil` binary to use (then `coil` on `PATH`, then `~/.coil/bin/coil`). Its `--version` is the engine version. |
| `COIL_STDLIB_DIR`, `COIL_STDLIB` | The stdlib root passed as `--root`. Otherwise `[stdlib] dir` in `~/.config/coil/config.toml`, then `~/.coil/stdlib` |
| `SPOOL_PROJECT` | The project root. Otherwise the nearest directory upward holding `coil.toml`. Scripts and include hooks see it set to the consumer |
| `SPOOL_IGNORE_SCRIPTS` | `0` opts in to scripts like `--enable-scripts`; default `1` (off) |
| `COIL_CACHE_DIR` | Git cache root. Otherwise `[cache] dir` in `~/.config/coil/config.toml`, then `$XDG_CACHE_HOME/coil` or `~/.cache/coil` |
| `COIL_NATIVES_DIR` | Native library cache root (default `~/.coil/natives`) |
| `GIT_SSH_COMMAND`, `GIT_ASKPASS`, `SSH_ASKPASS` | Passed through to `git` for [private repositories](/packages/spool#private-git) |

---

## Related

- [Manifest and lockfile](/packages/spool/manifest)
- [spool overview](/packages/spool)
