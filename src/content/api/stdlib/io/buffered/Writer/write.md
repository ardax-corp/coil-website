---
slug: "stdlib/io/buffered/Writer/write"
package: "stdlib"
title: "Writer::write"
description: "Adds bytes, writing out what is held once it reaches the capacity."
module: "io::buffered"
kind: "method"
name: "write"
parent: "Writer"
signature: "pub fn write(Vec<byte> bytes) -> Result<unit, IoError>"
import: "use io::buffered::{Writer};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/io/buffered.coil#L382"
order: 5
---

Adds `bytes`, writing out what is held once it reaches the capacity.

Called on a `Writer` value as `value.write(…)`.

## Parameters

| Name | Type |
|------|------|
| `bytes` | `Vec<byte>` |

## Returns

`Result<unit, IoError>`

## Errors

`TimedOut` after [`set_timeout`](/packages/stdlib/reference/io/buffered/Writer/set_timeout), or the stream's error.

## See also

- [`Writer::set_timeout`](/packages/stdlib/reference/io/buffered/Writer/set_timeout)
- [`Writer`](/packages/stdlib/reference/io/buffered/Writer): A buffered writer over any `Stream`: small writes collect in memory and go out in one call once 8 KiB are held, or on `flush`.
- [`Writer::new`](/packages/stdlib/reference/io/buffered/Writer/new): A writer over `s` that holds up to 8 KiB before it writes.
- [`Writer::with_capacity`](/packages/stdlib/reference/io/buffered/Writer/with_capacity): A writer over `s` that holds up to `n` bytes before it writes.
- [`Writer::stream`](/packages/stdlib/reference/io/buffered/Writer/stream): The stream being written.
- [`Writer::buffered`](/packages/stdlib/reference/io/buffered/Writer/buffered): Number of bytes held and not yet written.
- [`Writer::write_str`](/packages/stdlib/reference/io/buffered/Writer/write_str): Adds the UTF-8 bytes of `s`, like `write`.
- [`Writer::flush`](/packages/stdlib/reference/io/buffered/Writer/flush): Writes out everything held, waiting while the stream is not ready.
