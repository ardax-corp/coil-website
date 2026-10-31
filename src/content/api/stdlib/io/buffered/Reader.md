---
slug: "stdlib/io/buffered/Reader"
package: "stdlib"
title: "Reader"
description: "A buffered reader over any Stream: lines, delimited frames, exact counts, and the leftover bytes for a protocol switch."
module: "io::buffered"
kind: "class"
name: "Reader"
signature: "shared class Reader"
import: "use io::buffered::{Reader};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/io/buffered.hy#L76"
order: 0
---

A buffered reader over any `Stream`: lines, delimited frames, exact counts, and the leftover bytes for a protocol switch.

It asks the stream for up to 8 KiB at a time, so reading a line costs one
host call per chunk rather than one per byte ([`io::sync::read_line`](/packages/stdlib/reference/io/sync/read_line)).
Bytes it has buffered belong to the reader: once a `Reader` is in use,
read the stream only through it (or take them back with [`take_buffered`](/packages/stdlib/reference/io/buffered/Reader/take_buffered)).

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/stdlib/reference/io/buffered/Reader/new) | A reader over `s` that asks for 8 KiB at a time. |
| [`with_capacity`](/packages/stdlib/reference/io/buffered/Reader/with_capacity) | A reader over `s` that asks for up to `n` bytes at a time (at least 1). |

## Methods

| Name | Description |
|------|-------------|
| [`set_timeout`](/packages/stdlib/reference/io/buffered/Reader/set_timeout) | Gives up a wait for data after `ms` milliseconds with `Err(IoError::TimedOut)`; `0` waits for ever (the default). |
| [`stream`](/packages/stdlib/reference/io/buffered/Reader/stream) | The stream being read. |
| [`buffered`](/packages/stdlib/reference/io/buffered/Reader/buffered) | Number of bytes buffered and not yet returned. |
| [`read_line`](/packages/stdlib/reference/io/buffered/Reader/read_line) | Reads the next line, without its `\n` or `\r\n`. |
| [`read_until`](/packages/stdlib/reference/io/buffered/Reader/read_until) | Reads up to and including the next `delim` byte. |
| [`read_exact`](/packages/stdlib/reference/io/buffered/Reader/read_exact) | Reads exactly `n` bytes. |
| [`peek`](/packages/stdlib/reference/io/buffered/Reader/peek) | Returns up to `n` bytes without consuming them, waiting until `n` are buffered or the stream ends. |
| [`read_some`](/packages/stdlib/reference/io/buffered/Reader/read_some) | Returns the bytes that are ready: what is buffered, or else one chunk from the stream (waiting for it). |
| [`read_to_end`](/packages/stdlib/reference/io/buffered/Reader/read_to_end) | Reads everything up to the end of the stream. |
| [`take_buffered`](/packages/stdlib/reference/io/buffered/Reader/take_buffered) | Removes and returns the buffered bytes, for a protocol switch that reads the stream directly from here on (an HTTP upgrade). |

## Examples

```coil
use io::buffered::{Reader};
use io::file::{write_text};
use io::{open};
use tests::assert;
let _ = write_text("/tmp/coil_stdlib_reader_doc.txt", "one\ntwo\n");
let f = match open("/tmp/coil_stdlib_reader_doc.txt", "r") {
    Result::Ok(s) => s,
    Result::Err(_) => panic "open",
};
let r = Reader::new(f);
assert!(r.read_line() == Result::Ok(Option::Some("one")));
assert!(r.read_line() == Result::Ok(Option::Some("two")));
assert!(r.read_line() == Result::Ok(Option::None));
```

## See also

- [`io::sync::read_line`](/packages/stdlib/reference/io/sync/read_line)
- [`Reader::take_buffered`](/packages/stdlib/reference/io/buffered/Reader/take_buffered)
- [`Writer`](/packages/stdlib/reference/io/buffered/Writer): A buffered writer over any `Stream`: small writes collect in memory and go out in one call once 8 KiB are held, or on `flush`.
