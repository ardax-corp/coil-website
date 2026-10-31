---
slug: "stdlib/io/buffered/Reader/read_line"
package: "stdlib"
title: "Reader::read_line"
description: "Reads the next line, without its \\n or \\r\\n. A last line with no newline is returned as it is; None at the end of the stream."
module: "io::buffered"
kind: "method"
name: "read_line"
parent: "Reader"
signature: "pub fn read_line() -> Result<Option<string>, IoError>"
import: "use io::buffered::{Reader};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/io/buffered.hy#L126"
order: 5
---

Reads the next line, without its `\n` or `\r\n`. A last line with no newline is returned as it is; `None` at the end of the stream.

Called on a `Reader` value as `value.read_line(…)`.

## Returns

`Result<Option<string>, IoError>`

## Errors

`InvalidInput` when the line is not UTF-8 (its bytes are consumed),
`TimedOut` after [`set_timeout`](/packages/stdlib/reference/io/buffered/Reader/set_timeout), or the stream's error.

## See also

- [`Reader::set_timeout`](/packages/stdlib/reference/io/buffered/Reader/set_timeout)
- [`Reader`](/packages/stdlib/reference/io/buffered/Reader): A buffered reader over any `Stream`: lines, delimited frames, exact counts, and the leftover bytes for a protocol switch.
- [`Reader::new`](/packages/stdlib/reference/io/buffered/Reader/new): A reader over `s` that asks for 8 KiB at a time.
- [`Reader::with_capacity`](/packages/stdlib/reference/io/buffered/Reader/with_capacity): A reader over `s` that asks for up to `n` bytes at a time (at least 1).
- [`Reader::stream`](/packages/stdlib/reference/io/buffered/Reader/stream): The stream being read.
- [`Reader::buffered`](/packages/stdlib/reference/io/buffered/Reader/buffered): Number of bytes buffered and not yet returned.
- [`Reader::read_until`](/packages/stdlib/reference/io/buffered/Reader/read_until): Reads up to and including the next `delim` byte.
- [`Reader::read_exact`](/packages/stdlib/reference/io/buffered/Reader/read_exact): Reads exactly `n` bytes.
