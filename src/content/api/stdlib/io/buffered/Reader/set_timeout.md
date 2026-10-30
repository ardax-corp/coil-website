---
slug: "stdlib/io/buffered/Reader/set_timeout"
package: "stdlib"
title: "Reader::set_timeout"
description: "Gives up a wait for data after ms milliseconds with Err(IoError::TimedOut); 0 waits for ever (the default). The timer only runs while a read actually waits."
module: "io::buffered"
kind: "method"
name: "set_timeout"
parent: "Reader"
signature: "pub fn set_timeout(int ms)"
import: "use io::buffered::{Reader};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/io/buffered.hy#L105"
order: 2
---

Gives up a wait for data after `ms` milliseconds with `Err(IoError::TimedOut)`; `0` waits for ever (the default). The timer only runs while a read actually waits.

Called on a `Reader` value as `value.set_timeout(…)`.

## Parameters

| Name | Type |
|------|------|
| `ms` | `int` |

## See also

- [`Reader`](/packages/stdlib/reference/io/buffered/Reader): A buffered reader over any `Stream`: lines, delimited frames, exact counts, and the leftover bytes for a protocol switch.
- [`Reader::new`](/packages/stdlib/reference/io/buffered/Reader/new): A reader over `s` that asks for 8 KiB at a time.
- [`Reader::with_capacity`](/packages/stdlib/reference/io/buffered/Reader/with_capacity): A reader over `s` that asks for up to `n` bytes at a time (at least 1).
- [`Reader::stream`](/packages/stdlib/reference/io/buffered/Reader/stream): The stream being read.
- [`Reader::buffered`](/packages/stdlib/reference/io/buffered/Reader/buffered): Number of bytes buffered and not yet returned.
- [`Reader::read_line`](/packages/stdlib/reference/io/buffered/Reader/read_line): Reads the next line, without its `\n` or `\r\n`.
- [`Reader::read_until`](/packages/stdlib/reference/io/buffered/Reader/read_until): Reads up to and including the next `delim` byte.
- [`Reader::read_exact`](/packages/stdlib/reference/io/buffered/Reader/read_exact): Reads exactly `n` bytes.
