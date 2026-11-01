---
title: "Install"
description: "Install spool on Linux (glibc or musl), macOS or Windows, fetch coil with it, keep everything up to date, and uninstall."
order: 0
---

# Installing spool

spool is one executable. It needs a coil toolchain at run time, and it can fetch
it for you with `spool setup`. A full install puts two things on your
machine:

| What | Where | Comes from |
|------|-------|------------|
| `spool` | `~/.local/bin` (any directory on `PATH`) | a [spool release](https://github.com/ardax-corp/spool/releases) |
| `coil` and its helpers (`coil-fmt`, `coil-test`, `coil-lsp`, `coil-debug`, `coil-dissect`, `coil-embed`) | `~/.coil/bin` | a [coil-lang release](https://github.com/ardax-corp/coil-lang/releases), via `spool setup` |

There is no global standard library. Each project declares coil-stdlib as a
dependency (`spool new` adds it), and spool fetches the version that project
locks into its shared cache. See [The stdlib](/packages/spool/manifest#the-stdlib).

## Releases: edge and tagged

Both spool and coil-lang publish two kinds of release:

- **`edge`**: a rolling pre-release, rebuilt from `main` after every green CI
  run. The tag moves and the archives are replaced on every build, so it is a
  snapshot, not a stable release. Download URLs look like
  `https://github.com/ardax-corp/spool/releases/download/edge/<archive>`.
- **Tagged releases** (`v0.3.0`, …): pushing a `v*` tag builds the same
  archives, with the same names, into a release of its own that never changes.
  URLs look like `…/releases/download/v0.3.0/<archive>`, and
  `…/releases/latest/download/<archive>` always points at the newest one.

**Neither spool nor coil-lang has a tagged release yet**, so today every
install comes from `edge`. `spool setup` defaults to the `stable` channel
(the newest tagged coil-lang release); while there is none, it says so and
uses `edge` instead. The steps below pass `--channel edge` explicitly.

Every release also carries a `SHA256SUMS` file listing the checksum of each
archive. Check your download against it; `spool setup` refuses a coil archive
that does not match.

## Platforms

| Platform | spool archive | coil archive | `spool setup` |
|----------|---------------|--------------|---------------|
| Linux x86-64, glibc | `spool-x86_64-unknown-linux-gnu.tar.gz` | `coil-x86_64-unknown-linux-gnu.tar.gz` | yes |
| Linux ARM64, glibc | `spool-aarch64-unknown-linux-gnu.tar.gz` | `coil-aarch64-unknown-linux-gnu.tar.gz` | yes |
| Linux x86-64, musl (Alpine) | `spool-x86_64-unknown-linux-musl.tar.gz` | `coil-x86_64-unknown-linux-musl.tar.gz` | yes |
| macOS, Apple silicon | `spool-aarch64-apple-darwin.tar.gz` | `coil-aarch64-apple-darwin.tar.gz` | yes |
| macOS, Intel | none | none | build [from source](#from-source) |
| Windows x86-64 | none, use [WSL](#windows) | `coil-x86_64-pc-windows-gnu.zip` | no |

Each spool archive holds the `spool` executable. Each coil archive holds one directory,
`coil-<triple>/`, with `coil` and its helpers.

Not sure which Linux you have? `ldd --version 2>&1 | head -n 1` mentions
`musl` on a musl system; anything else is glibc.

## Linux and macOS

You need `curl`, `tar` and `git` (spool clones the stdlib and your git
dependencies with it).

**1. Download and check spool.** Set `TRIPLE` to your row of the table:

```bash
TRIPLE=x86_64-unknown-linux-gnu   # or aarch64-unknown-linux-gnu, x86_64-unknown-linux-musl, aarch64-apple-darwin
BASE=https://github.com/ardax-corp/spool/releases/download/edge
cd "$(mktemp -d)"
curl -fLO "$BASE/spool-$TRIPLE.tar.gz" -O "$BASE/SHA256SUMS"
grep " spool-$TRIPLE.tar.gz\$" SHA256SUMS | sha256sum -c -
```

On macOS, use `shasum -a 256 -c -` in place of `sha256sum -c -`. On Alpine,
install the tools first with `apk add curl tar git`. The check
prints `spool-<triple>.tar.gz: OK`; stop if it does not.

**2. Unpack it onto your `PATH`:**

```bash
mkdir -p ~/.local/bin
tar xzf "spool-$TRIPLE.tar.gz" -C ~/.local/bin
```

**3. Fetch coil:**

```bash
~/.local/bin/spool setup --channel edge
```

`spool setup` picks the coil archive for your machine (the musl one on a
musl system) from the coil-lang
release of that channel, checks it against the release's `SHA256SUMS`,
unpacks it into `~/.coil/bin`, and runs `coil --version` on it before
swapping it in. The new toolkit replaces the old one only once it is
complete, so a failed download leaves your previous install working.

| Option | Effect |
|--------|--------|
| `--channel edge` | the rolling coil-lang `edge` release |
| `--channel stable` (default) | the newest tagged coil-lang release; with no `--channel` or `COIL_CHANNEL` it falls back to `edge` while none exists |
| `--channel v0.3.0` | that tagged release |
| `COIL_CHANNEL=edge` | the channel, when `--channel` is not given |
| `COIL_HOME=DIR` | install into `DIR` instead of `~/.coil` (see [Custom locations](#custom-locations)) |

**4. Put it on your `PATH`** and [verify](#verify) the install.

## Windows

spool does not run natively on Windows yet: it drives `git` and other tools
through a POSIX `sh`. Use [WSL](https://learn.microsoft.com/windows/wsl/install)
and follow the [Linux](#linux-and-macos) steps inside it; that
gives you the full toolchain.

The coil toolkit itself does have a Windows build,
`coil-x86_64-pc-windows-gnu.zip`, if you want plain `coil` without spool. In
PowerShell:

```powershell
$base = "https://github.com/ardax-corp/coil-lang/releases/download/edge"
mkdir "$HOME\.coil" -Force; cd "$HOME\.coil"
curl.exe -fLO "$base/coil-x86_64-pc-windows-gnu.zip" -O "$base/SHA256SUMS"
(Get-FileHash coil-x86_64-pc-windows-gnu.zip -Algorithm SHA256).Hash.ToLower()
Select-String coil-x86_64-pc-windows-gnu.zip SHA256SUMS   # the two hashes must match
tar -xf coil-x86_64-pc-windows-gnu.zip
Rename-Item coil-x86_64-pc-windows-gnu bin
git clone --depth 1 https://github.com/ardax-corp/coil-stdlib.git stdlib
```

Add `%USERPROFILE%\.coil\bin` to your user `PATH` (Settings → System → About
→ Advanced system settings → Environment Variables). Without spool, pass the
stdlib yourself: `coil --root $HOME\.coil\stdlib\src hello.coil`.
`tar -xf` is Windows' built-in `tar`; use it rather than Explorer's
"Extract all", since edge archives built before coil-lang#2051 are a tar
under the `.zip` name.

## From source

On a platform without a prebuilt spool (macOS on Intel, other Unix systems),
build it with spool's bootstrap script. It needs `git`, `sh` and `curl`:

```bash
git clone https://github.com/ardax-corp/spool.git
cd spool
./bootstrap.sh --channel edge --install
```

That builds spool, downloads coil from the coil-lang `edge`
release when there is an archive for your machine, and installs `spool`
to `~/.local/bin` and coil to `~/.coil/bin`. Where there is no coil archive (or with `--from-source`),
it builds coil from source, which needs a Rust toolchain plus libffi and
PCRE2 development files (`libffi-dev libpcre2-dev` on Debian and Ubuntu,
`brew install libffi pcre2 pkg-config` on macOS). `./bootstrap.sh` without
`--install` only builds `target/spool`.

## PATH

spool finds coil in `~/.coil/bin` even when it is not on your `PATH`, but you
need `~/.local/bin` there to type `spool`, and `~/.coil/bin` to use `coil`
directly. Add both to your shell's startup file:

```bash
# bash: ~/.bashrc    zsh: ~/.zshrc
export PATH="$HOME/.coil/bin:$HOME/.local/bin:$PATH"
```

```fish
# fish
fish_add_path ~/.coil/bin ~/.local/bin
```

Open a new terminal (or `source` the file) for it to take effect.

## Verify

```bash
spool --version      # spool 0.2.0
coil --version       # coil 0.1.0
spool doctor
```

`spool doctor` reports which coil it found and whether `git`,
`sh`, `curl` and `tar` are there, plus the features of your coil that spool
uses (`coil mutate`, `coil test --json`). Every line should say `ok`:

```text
  [ok     ] coil /home/you/.coil/bin/coil (coil 0.1.0)
  [ok     ] coil mutate (spool infect)
  [ok     ] coil test --json (rendered spool test / coverage)
  [ok     ] git /usr/bin/git
  …
```

Then build something:

```bash
spool new hello && cd hello
spool run            # hello from hello
```

## Updating

spool has **no self-update command**. Updating is three separate steps,
depending on what you want newer:

| To update | Run |
|-----------|-----|
| coil | `spool setup --channel edge` again |
| spool itself | repeat [steps 1 and 2](#linux-and-macos): download the new archive and unpack it over the old one |
| a project's dependencies, the stdlib included | `spool update` (or `spool update stdlib`) inside the project; see [Commands](/packages/spool/commands) |

`spool setup` always downloads again, so re-running it moves you to the
current `edge` snapshot (or to whichever tag you name). `spool outdated` shows which dependencies
have newer versions; it does not check spool or coil.

## Custom locations

`COIL_HOME=DIR spool setup` installs into `DIR` instead of `~/.coil`. spool
itself only looks in `~/.coil`, so point it at the result:

```bash
export COIL="$DIR/bin/coil"
```

The lookup order is: coil from `$COIL`, then `coil` on `PATH`, then
`~/.coil/bin/coil`. `COIL_LANG_URL` makes `spool setup` download from another
repository (a fork or a mirror), and `COIL_STDLIB_REPO` changes the stdlib URL
`spool new` writes into new projects.

## Uninstalling

Remove the binaries, the toolchain and the caches:

```bash
rm -f ~/.local/bin/spool
rm -rf ~/.coil                # coil and the natives cache
rm -rf ~/.cache/coil          # spool's shared git cache (or $XDG_CACHE_HOME/coil)
rm -rf ~/.config/coil         # spool's config file, if you created one
```

If you moved any of these with `COIL_HOME` or `XDG_CACHE_HOME`, remove
those directories instead, and drop the `PATH`
lines from your shell's startup file. Inside projects, `spool clean --all`
removes `target/` and `.spool/`.
