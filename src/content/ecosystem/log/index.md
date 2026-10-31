---
title: "coil-log"
description: "Leveled line logger for coil. Package name is log, so use log::{Logger, Level} resolves here."
source: "https://github.com/ardax-corp/coil-log/blob/17dadae959e85e1d3bf7d7b1904b7e67f50ba247/README.md"
---
# coil-log

Leveled line logger for [coil](https://github.com/ardax-corp/coil-lang). Package name is `log`, so `use log::{Logger, Level}` resolves here.

## Example

```coil
use log::{Logger, Level};

fn main() {
    let log = Logger::new(Level::Info);
    log.info("server started");
    log.debug("not written: below the minimum");
    log.warn("cache miss\nretrying");
    log.error("disk full");
}
```

```bash
coil --root ../coil-log/src --root ../coil-stdlib/src --root ../coil-time/src main.hy
```

stderr:

```text
1793479414 INFO server started
1793479414 WARN cache miss retrying
1793479414 ERROR disk full
```

`Logger::new` writes one line per event to stderr (`io::sync::write_all`). Inject a `Stream` with `Logger::to` (a log file, or a file in tests). Events below the min level are a no-op. Each line is the Unix time in seconds (`time::timestamp`), a tag (`ERROR`/`WARN`/`INFO`/`DEBUG`, not scalar `Show`) and the message with newlines turned into spaces. Every public item in `src/log.hy` has `///` docs with runnable examples (`coil test src` runs them).

## Layout

| Path | Role |
|------|------|
| `src/log.hy` | `Level`, `Logger`, `format_line`, `level_tag` |
| `coil.toml` | spool manifest (`[package] name = "log"`, depends on `time`); coil does not read it |

## Consume

```bash
spool add log --git https://github.com/ardax-corp/coil-log.git --rev <commit SHA>
```

There are no tags yet, so pin a commit with `--rev`. spool also fetches the `time` dependency ([coil-time](https://github.com/ardax-corp/coil-time)). Without spool, clone this repo, [coil-stdlib](https://github.com/ardax-corp/coil-stdlib) and coil-time next to your project and pass each `src` as `--root`. See [docs/consume.md](/packages/log/consume).

## License

MIT. See [LICENSE](https://github.com/ardax-corp/coil-log/tree/17dadae959e85e1d3bf7d7b1904b7e67f50ba247/LICENSE).
