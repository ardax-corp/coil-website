---
title: "Manifest and lockfile"
description: "The coil.toml sections spool reads, the dependency and version-requirement syntax, and the coil.lock format it writes."
order: 2
---

# Manifest and lockfile

spool reads your project's **`coil.toml`** and writes **`coil.lock`** next to it. `coil` reads neither: spool turns them into flags (`--root`, `--allow-*`, `--dload-pin`, …) on every `coil` command it runs (see [Project configuration](/docs/references/project-config)). This page covers the parts spool uses and how it interprets them.

```toml
[package]
name = "my-app"
coil = ">=0.1.0"                  # optional engine range

[dependencies]
http  = { git = "https://github.com/ardax-corp/coil-http.git", version = "^0.1" }
local = { path = "../my-lib" }

[module]
roots = ["./src"]                 # spool also passes .spool/deps and the stdlib

[scripts]                         # optional, off unless --enable-scripts
post_install = "./scripts/post-install.sh"
```

---

## `[package]`

| Key | Used by spool for |
|-----|-------------------|
| `name` | The package's name. Diagnostics for the current project use it (`app` when empty). |
| `coil` | Optional [engine range](#engine-range): the Coil toolchain versions this package supports. |
| `include` | Optional [include hook](/packages/spool#include-hooks), relative to the package's own checkout. Runs in projects that depend on it. |

spool does not read `version`.

### Engine range

`coil` is a [version requirement](#version-requirements) checked against `coil --version` of the toolchain on `COIL` / `PATH`. Missing means any version. `install`, `add` and `update` check the current project and every dependency, and stop **before fetching** when the running toolchain is out of range:

```text
package http requires coil >=0.2.0, running 0.1.0
```

---

## `[dependencies]`

Each entry is an inline table keyed by the name you `use` it under. Values must be strings.

| Form | Keys | Notes |
|------|------|-------|
| Git | `git` + `version` or `rev` | `git` is any URL host `git` can clone (HTTPS, SSH, private remotes via your credentials). `version` is a [version requirement](#version-requirements) matched against the repository's tags. `rev` pins a branch, tag or commit instead; `update` moves a branch pin. |
| Path | `path` | A local checkout, relative to the project root. No `version` or `rev`. Not written to the lockfile. |

Either form may add `trusted = true` (a bool): that dependency's `dload` stems skip the sha256 pin (spool passes `--dload-trusted STEM`). The stem still needs `[ffi] allow`.

spool rejects a dependency that:

- combines `git` and `path` — `git and path cannot be combined`
- is a git dependency without `version` or `rev` — `git dependency <name> needs version or rev`
- sets `version` or `rev` on a path dependency — `path dependency cannot set version or rev`
- uses any other key — `unknown dependency key <key>`
- sets `trusted` to a non-bool — `dependency <name> key trusted must be a bool`
- repeats a name — `duplicate dependency <name>`

`spool add` edits this table for you and keeps the file's comments:

```bash
spool add http --git https://github.com/ardax-corp/coil-http.git --version '^0.1'
spool add local --path ../my-lib
```

Without `--version` or `--rev`, `add` records `*`. `spool remove <name>` drops the entry again.

### Version requirements

A requirement is a comparator, or several joined by commas (`">=1.2, <2"`). Tags may carry a leading `v` (`v0.1.0`). Prerelease tags are never picked by a range.

| Requirement | Matches |
|-------------|---------|
| `*` | Any version |
| `^1.2.3` | `>=1.2.3` with the same major (`1.x.y`) |
| `^0.2.3` | `>=0.2.3` with the same minor (`0.2.x`) |
| `^0.0.3` | Exactly `0.0.3` |
| `~1.2.3` | `>=1.2.3` with the same major and minor (`1.2.x`) |
| `>=1.2.0`, `>1.2.0`, `<=1.2.0`, `<1.2.0` | The comparison |
| `=1.2.0` or `1.2.0` | Exactly that version — a bare version is **not** a caret range |

The highest matching tag wins; with none, spool reports `no tag matches requirement <req>`. When several dependencies need the same package, spool picks the highest tag that satisfies all of their requirements; if there is none it stops with the requesters named:

```text
diamond conflict for base: hello requires @dev, mid requires ^1
```

---

## `[module].roots`

spool passes each `[module].roots` entry (default `./src`) to `coil` as `--root`. It links every dependency under `.spool/deps/<name>` (to the package's `src/`) plus `.spool/deps/<name>.hy` when that file exists, and passes `--root .spool/deps` once dependencies are linked, plus the stdlib unless a root already is one. `use greet::hello` resolves through the directory link; `use toml::{Toml}` through the file link. spool never edits `coil.toml`.

---

## `[scripts]`

Lifecycle scripts for the **current project only**; a dependency's `[scripts]` never run during your install.

| Key | Runs |
|-----|------|
| `pre_install` / `post_install` | Around `spool install` and `spool add` |
| `pre_update` / `post_update` | Around `spool update` |

Paths must be relative to the project root, without `..` segments. Unknown keys are an error. Scripts run with host `sh` **only** with `--enable-scripts`; `--ignore-scripts` always wins. See [Hook trust](/packages/spool#hook-trust) and [Project scripts](/packages/spool#project-scripts).

---

## `[permissions]`

What the project's programs and tests may do on the host. spool passes each
key that is `true` to `coil` as a flag (`read = true` becomes `--allow-read`)
on every `coil` command it runs (`build`, `run`, `check`, `test`, `debug`, `lsp`, …). Keys: `read`, `write`, `net`, `env`,
`exec`, `exit`, `attach`, and `all` for everything. Left out means denied.

```toml
[permissions]
read = true
write = true
```

See [Permissions](/docs/references/permissions).

---

## `[[ffi.native]]`

Native libraries a project loads with `dload`. `spool download` (or `spool install --with-natives`) reads them through `coil natives dump` and fetches each direct library with a `url` into `~/.coil/natives` (override with `COIL_NATIVES_DIR`). spool passes each row to `coil package` and `coil natives dump` as `--ffi-native name=…,version=…,path=…`. Keys: `name`, `version`, `path` (required), `package`, `url`, `requires`, `requires_hint`.

---

## `coil.lock`

spool writes `coil.lock` on `install`, `add` and `update`. Commit it: it pins every git dependency to an exact commit and content hash. Edit it only through spool.

```toml
# spool lockfile v1
# This file is generated by spool. Do not edit packages by hand.

[hooks]
allow_include = ['http']

[scripts]
post_install = './scripts/post-install.sh'
post_install_hash = 'def456…'

[[package]]
name = 'http'
git = 'https://github.com/ardax-corp/coil-http.git'
tag = 'v0.1.0'
rev = '0a973db…'
content_hash = '…'
hook_path = './hooks/include.sh'
hook_hash = 'abc123…'
```

### `[[package]]`

One row per git dependency, direct or transitive, sorted by name. Path dependencies have no row.

| Key | Required | Meaning |
|-----|----------|---------|
| `name` | yes | Dependency name |
| `git` | yes | Remote URL |
| `tag` | no | The tag the requirement resolved to |
| `rev` | yes | Commit checked out |
| `content_hash` | yes | Hash of the checkout's tree; `install` verifies it after fetching |
| `ref` | no | The manifest `rev` (branch, tag or commit) a rev-pinned dependency asked for |
| `hook_path`, `hook_hash` | no | Pinned [include hook](/packages/spool#include-hooks) path and `git hash-object` hash, recorded on the first opted-in run |

A `[[package.native]]` block under a package may pin its native library: `sha256` (with `stem` / `lib`) becomes `--dload-pin STEM=SHA256`. spool keeps these blocks when it rewrites the lock.

### `[hooks]`

`allow_include` lists the dependencies whose include hooks you allow, managed with `spool allow-include <name>`. It lives in the lockfile, not in `coil.toml`.

### `[scripts]`

Path and `git hash-object` hash for each current-project lifecycle script (`<slot>` and `<slot>_hash`), recorded on the first opted-in run. A script whose hash no longer matches does not run.

Any other key or line is rejected as `corrupt coil.lock`.

---

## Related

- [spool commands](/packages/spool/commands)
- [spool overview](/packages/spool) — hooks, scripts, cache, private git
- [Project configuration (`coil.toml`)](/docs/references/project-config) — the flags each key becomes
