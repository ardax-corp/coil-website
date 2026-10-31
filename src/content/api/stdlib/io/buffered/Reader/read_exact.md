---
slug: "stdlib/io/buffered/Reader/read_exact"
package: "stdlib"
title: "Reader::read_exact"
description: "Reads exactly n bytes."
module: "io::buffered"
kind: "method"
name: "read_exact"
parent: "Reader"
signature: "pub fn read_exact(int n) -> Result<Vec<byte>, IoError>"
import: "use io::buffered::{Reader};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/io/buffered.coil#L191"
order: 7
---

Reads exactly `n` bytes.

Called on a `Reader` value as `value.read_exact(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`Result<Vec<byte>, IoError>`

## Errors

`Truncated` when the stream ends first (the bytes read so far stay
buffered), `TimedOut` after [`set_timeout`](/packages/stdlib/reference/io/buffered/Reader/set_timeout), or the stream's error.

## See also

- [`Reader::set_timeout`](/packages/stdlib/reference/io/buffered/Reader/set_timeout)
- [`Reader`](/packages/stdlib/reference/io/buffered/Reader): A buffered reader over any `Stream`: lines, delimited frames, exact counts, and the leftover bytes for a protocol switch.
- [`Reader::new`](/packages/stdlib/reference/io/buffered/Reader/new): A reader over `s` that asks for 8 KiB at a time.
- [`Reader::with_capacity`](/packages/stdlib/reference/io/buffered/Reader/with_capacity): A reader over `s` that asks for up to `n` bytes at a time (at least 1).
- [`Reader::stream`](/packages/stdlib/reference/io/buffered/Reader/stream): The stream being read.
- [`Reader::buffered`](/packages/stdlib/reference/io/buffered/Reader/buffered): Number of bytes buffered and not yet returned.
- [`Reader::read_line`](/packages/stdlib/reference/io/buffered/Reader/read_line): Reads the next line, without its `\n` or `\r\n`.
- [`Reader::read_until`](/packages/stdlib/reference/io/buffered/Reader/read_until): Reads up to and including the next `delim` byte.
