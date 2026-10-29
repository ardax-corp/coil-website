---
slug: "io/file/write_text"
title: "write_text"
description: "Replaces the contents of the file at path with text, creating it if needed, and returns the number of bytes written."
module: "io::file"
kind: "fn"
name: "write_text"
signature: "fn write_text(string path, string text) -> Result<int, IoError>"
import: "use io::file::{write_text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/io/file.hy#L91"
order: 3
---

Replaces the contents of the file at `path` with `text`, creating it if needed, and returns the number of bytes written.

Needs `--allow-write`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |
| `text` | `string` |

## Returns

`Result<int, IoError>`

## Examples

```coil
use io::file::{write_text, read_text};

fn main() {
    write_text("greeting.txt", "hello\n")?;
    let back = read_text("greeting.txt")?;
}
```

## See also

- [`read_bytes`](/docs/reference/io/file/read_bytes): Reads the whole file at `path`.
- [`write_bytes`](/docs/reference/io/file/write_bytes): Replaces the contents of the file at `path` with `buf`, creating it if needed, and returns the number of bytes written.
- [`read_text`](/docs/reference/io/file/read_text): Reads the whole file at `path` as UTF-8 text.
- [`append_bytes`](/docs/reference/io/file/append_bytes): Appends `buf` to the file at `path`, creating it if needed.
- [`append_text`](/docs/reference/io/file/append_text): Appends `text` to the file at `path`, creating it if needed.
