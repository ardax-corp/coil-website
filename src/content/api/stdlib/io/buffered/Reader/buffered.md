---
slug: "stdlib/io/buffered/Reader/buffered"
package: "stdlib"
title: "Reader::buffered"
description: "Number of bytes buffered and not yet returned."
module: "io::buffered"
kind: "method"
name: "buffered"
parent: "Reader"
signature: "pub fn buffered() -> int"
import: "use io::buffered::{Reader};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/io/buffered.coil#L115"
order: 4
---

Number of bytes buffered and not yet returned.

Called on a `Reader` value as `value.buffered(…)`.

## Returns

`int`

## See also

- [`Reader`](/packages/stdlib/reference/io/buffered/Reader): A buffered reader over any `Stream`: lines, delimited frames, exact counts, and the leftover bytes for a protocol switch.
- [`Reader::new`](/packages/stdlib/reference/io/buffered/Reader/new): A reader over `s` that asks for 8 KiB at a time.
- [`Reader::with_capacity`](/packages/stdlib/reference/io/buffered/Reader/with_capacity): A reader over `s` that asks for up to `n` bytes at a time (at least 1).
- [`Reader::set_timeout`](/packages/stdlib/reference/io/buffered/Reader/set_timeout): Gives up a wait for data after `ms` milliseconds with `Err(IoError::TimedOut)`; `0` waits for ever (the default).
- [`Reader::stream`](/packages/stdlib/reference/io/buffered/Reader/stream): The stream being read.
- [`Reader::read_line`](/packages/stdlib/reference/io/buffered/Reader/read_line): Reads the next line, without its `\n` or `\r\n`.
- [`Reader::read_until`](/packages/stdlib/reference/io/buffered/Reader/read_until): Reads up to and including the next `delim` byte.
- [`Reader::read_exact`](/packages/stdlib/reference/io/buffered/Reader/read_exact): Reads exactly `n` bytes.
