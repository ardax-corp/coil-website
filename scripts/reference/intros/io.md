---
description: "Files, standard streams, TCP and UDP as non-blocking streams of bytes."
---
Everything in `io` is a `Stream`: a handle to a file, a standard stream or a
socket. The functions here are the low-level, non-blocking layer. `read` and
`write` move as many bytes as are ready and never spin; buffers are
`Vec<byte>`. Errors are `IoError` values in a `Result`.

Most programs use the blocking helpers on top of this layer from coil-stdlib:
[`io::sync`](/docs/reference/io/sync) (`println`, `write_all`,
`read_to_end`, `read_line`) and [`io::file`](/docs/reference/io/file)
(`read_text`, `write_text`):

```coil no_run
use io::sync::{println};
use io::file::{read_text};

fn main() {
    let text = read_text("notes.txt")?;
    println(text)?;
}
```

To do several IO operations at once, run them as tasks: inside a
[`task::scope`](/docs/manual/tutorial/12-tasks) a task that waits for IO lets
the others run. Text conversion is in [`string`](/docs/reference/string)
(`to_bytes`, `from_bytes`). File and network access needs a grant when the
program runs (`--allow-read`, `--allow-write`, `--allow-net`); see
[Permissions](/docs/language/permissions). TLS is the
[coil-tls](/packages/tls) package.
