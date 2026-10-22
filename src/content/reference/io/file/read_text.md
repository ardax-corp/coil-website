---
slug: "io/file/read_text"
title: "read_text"
description: "Reads the whole file at path as UTF-8 text."
module: "io::file"
kind: "fn"
name: "read_text"
signature: "fn read_text(string path) -> Result<string, IoError>"
import: "use io::file::{read_text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/io/file.hy#L69"
order: 2
---

Reads the whole file at `path` as UTF-8 text.

Needs `--allow-read`.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<string, IoError>`

## Errors

`IoError::NotFound` when the file does not exist and `IoError::InvalidInput`
when it is not valid UTF-8.

## Examples

```coil
use io::file::{read_text};
use io::sync::{println};

fn main() {
    let config = read_text("config.toml")?;
    println(config)?;
}
```

## See also

- [`read_bytes`](/docs/reference/io/file/read_bytes): Reads the whole file at path.
- [`write_bytes`](/docs/reference/io/file/write_bytes): Replaces the contents of the file at path with buf, creating it if needed, and returns the number of bytes written.
- [`write_text`](/docs/reference/io/file/write_text): Replaces the contents of the file at path with text, creating it if needed, and returns the number of bytes written.
- [`append_bytes`](/docs/reference/io/file/append_bytes): Appends buf to the file at path, creating it if needed.
- [`append_text`](/docs/reference/io/file/append_text): Appends text to the file at path, creating it if needed.
