---
slug: "stdlib/io/buffered/Reader/read_until"
package: "stdlib"
title: "Reader::read_until"
description: "Reads up to and including the next delim byte. Returns what is left, without delim, when the stream ends first; None when it ends with nothing left."
module: "io::buffered"
kind: "method"
name: "read_until"
parent: "Reader"
signature: "pub fn read_until(byte delim) -> Result<Option<Vec<byte>>, IoError>"
import: "use io::buffered::{Reader};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/io/buffered.coil#L161"
order: 6
---

Reads up to and including the next `delim` byte. Returns what is left, without `delim`, when the stream ends first; `None` when it ends with nothing left.

Called on a `Reader` value as `value.read_until(…)`.

## Parameters

| Name | Type |
|------|------|
| `delim` | `byte` |

## Returns

`Result<Option<Vec<byte>>, IoError>`

## Errors

`TimedOut` after [`set_timeout`](/packages/stdlib/reference/io/buffered/Reader/set_timeout), or the stream's error.

## See also

- [`Reader::set_timeout`](/packages/stdlib/reference/io/buffered/Reader/set_timeout)
- [`Reader`](/packages/stdlib/reference/io/buffered/Reader): A buffered reader over any `Stream`: lines, delimited frames, exact counts, and the leftover bytes for a protocol switch.
- [`Reader::new`](/packages/stdlib/reference/io/buffered/Reader/new): A reader over `s` that asks for 8 KiB at a time.
- [`Reader::with_capacity`](/packages/stdlib/reference/io/buffered/Reader/with_capacity): A reader over `s` that asks for up to `n` bytes at a time (at least 1).
- [`Reader::stream`](/packages/stdlib/reference/io/buffered/Reader/stream): The stream being read.
- [`Reader::buffered`](/packages/stdlib/reference/io/buffered/Reader/buffered): Number of bytes buffered and not yet returned.
- [`Reader::read_line`](/packages/stdlib/reference/io/buffered/Reader/read_line): Reads the next line, without its `\n` or `\r\n`.
- [`Reader::read_exact`](/packages/stdlib/reference/io/buffered/Reader/read_exact): Reads exactly `n` bytes.
