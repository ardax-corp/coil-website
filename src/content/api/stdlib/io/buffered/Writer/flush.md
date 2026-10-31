---
slug: "stdlib/io/buffered/Writer/flush"
package: "stdlib"
title: "Writer::flush"
description: "Writes out everything held, waiting while the stream is not ready."
module: "io::buffered"
kind: "method"
name: "flush"
parent: "Writer"
signature: "pub fn flush() -> Result<unit, IoError>"
import: "use io::buffered::{Writer};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/io/buffered.hy#L407"
order: 7
---

Writes out everything held, waiting while the stream is not ready.

Called on a `Writer` value as `value.flush(…)`.

## Returns

`Result<unit, IoError>`

## Errors

`TimedOut` after [`set_timeout`](/packages/stdlib/reference/io/buffered/Writer/set_timeout), or the stream's error. The bytes not
yet written stay held.

## See also

- [`Writer::set_timeout`](/packages/stdlib/reference/io/buffered/Writer/set_timeout)
- [`Writer`](/packages/stdlib/reference/io/buffered/Writer): A buffered writer over any `Stream`: small writes collect in memory and go out in one call once 8 KiB are held, or on `flush`.
- [`Writer::new`](/packages/stdlib/reference/io/buffered/Writer/new): A writer over `s` that holds up to 8 KiB before it writes.
- [`Writer::with_capacity`](/packages/stdlib/reference/io/buffered/Writer/with_capacity): A writer over `s` that holds up to `n` bytes before it writes.
- [`Writer::stream`](/packages/stdlib/reference/io/buffered/Writer/stream): The stream being written.
- [`Writer::buffered`](/packages/stdlib/reference/io/buffered/Writer/buffered): Number of bytes held and not yet written.
- [`Writer::write`](/packages/stdlib/reference/io/buffered/Writer/write): Adds `bytes`, writing out what is held once it reaches the capacity.
- [`Writer::write_str`](/packages/stdlib/reference/io/buffered/Writer/write_str): Adds the UTF-8 bytes of `s`, like `write`.
