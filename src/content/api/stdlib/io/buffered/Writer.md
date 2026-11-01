---
slug: "stdlib/io/buffered/Writer"
package: "stdlib"
title: "Writer"
description: "A buffered writer over any Stream: small writes collect in memory and go out in one call once 8 KiB are held, or on flush."
module: "io::buffered"
kind: "class"
name: "Writer"
signature: "shared class Writer"
import: "use io::buffered::{Writer};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/io/buffered.coil#L342"
order: 1
---

A buffered writer over any `Stream`: small writes collect in memory and go out in one call once 8 KiB are held, or on [`flush`](/packages/stdlib/reference/io/buffered/Writer/flush).

Call [`flush`](/packages/stdlib/reference/io/buffered/Writer/flush) before closing the stream or waiting for a reply: bytes
still held are not sent.

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/stdlib/reference/io/buffered/Writer/new) | A writer over `s` that holds up to 8 KiB before it writes. |
| [`with_capacity`](/packages/stdlib/reference/io/buffered/Writer/with_capacity) | A writer over `s` that holds up to `n` bytes before it writes. |

## Methods

| Name | Description |
|------|-------------|
| [`set_timeout`](/packages/stdlib/reference/io/buffered/Writer/set_timeout) | Gives up a wait for the stream to take more bytes after `ms` milliseconds with `Err(IoError::TimedOut)`; `0` waits for ever. |
| [`stream`](/packages/stdlib/reference/io/buffered/Writer/stream) | The stream being written. |
| [`buffered`](/packages/stdlib/reference/io/buffered/Writer/buffered) | Number of bytes held and not yet written. |
| [`write`](/packages/stdlib/reference/io/buffered/Writer/write) | Adds `bytes`, writing out what is held once it reaches the capacity. |
| [`write_str`](/packages/stdlib/reference/io/buffered/Writer/write_str) | Adds the UTF-8 bytes of `s`, like [`write`](/packages/stdlib/reference/io/buffered/Writer/write). |
| [`flush`](/packages/stdlib/reference/io/buffered/Writer/flush) | Writes out everything held, waiting while the stream is not ready. |

## Examples

```coil
use io::buffered::{Writer};
use io::file::{read_text};
use io::{open, close};
use tests::assert;
let f = match open("/tmp/coil_stdlib_writer_doc.txt", "w") {
    Result::Ok(s) => s,
    Result::Err(_) => panic "open",
};
let w = Writer::new(f);
let _ = w.write_str("hello ");
let _ = w.write_str("world");
let _ = w.flush();
let _ = close(f);
assert!(read_text("/tmp/coil_stdlib_writer_doc.txt") == Result::Ok("hello world"));
```

## See also

- [`Writer::flush`](/packages/stdlib/reference/io/buffered/Writer/flush)
- [`Reader`](/packages/stdlib/reference/io/buffered/Reader): A buffered reader over any `Stream`: lines, delimited frames, exact counts, and the leftover bytes for a protocol switch.
