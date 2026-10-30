---
slug: "stdlib/io/buffered/Reader/stream"
package: "stdlib"
title: "Reader::stream"
description: "The stream being read."
module: "io::buffered"
kind: "method"
name: "stream"
parent: "Reader"
signature: "pub fn stream() -> Stream"
import: "use io::buffered::{Reader};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/io/buffered.hy#L110"
order: 3
---

The stream being read.

Called on a `Reader` value as `value.stream(…)`.

## Returns

`Stream`

## See also

- [`Reader`](/packages/stdlib/reference/io/buffered/Reader): A buffered reader over any `Stream`: lines, delimited frames, exact counts, and the leftover bytes for a protocol switch.
- [`Reader::new`](/packages/stdlib/reference/io/buffered/Reader/new): A reader over `s` that asks for 8 KiB at a time.
- [`Reader::with_capacity`](/packages/stdlib/reference/io/buffered/Reader/with_capacity): A reader over `s` that asks for up to `n` bytes at a time (at least 1).
- [`Reader::set_timeout`](/packages/stdlib/reference/io/buffered/Reader/set_timeout): Gives up a wait for data after `ms` milliseconds with `Err(IoError::TimedOut)`; `0` waits for ever (the default).
- [`Reader::buffered`](/packages/stdlib/reference/io/buffered/Reader/buffered): Number of bytes buffered and not yet returned.
- [`Reader::read_line`](/packages/stdlib/reference/io/buffered/Reader/read_line): Reads the next line, without its `\n` or `\r\n`.
- [`Reader::read_until`](/packages/stdlib/reference/io/buffered/Reader/read_until): Reads up to and including the next `delim` byte.
- [`Reader::read_exact`](/packages/stdlib/reference/io/buffered/Reader/read_exact): Reads exactly `n` bytes.
