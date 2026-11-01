---
slug: "stdlib/io/buffered/Writer/buffered"
package: "stdlib"
title: "Writer::buffered"
description: "Number of bytes held and not yet written."
module: "io::buffered"
kind: "method"
name: "buffered"
parent: "Writer"
signature: "pub fn buffered() -> int"
import: "use io::buffered::{Writer};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/io/buffered.coil#L373"
order: 4
---

Number of bytes held and not yet written.

Called on a `Writer` value as `value.buffered(…)`.

## Returns

`int`

## See also

- [`Writer`](/packages/stdlib/reference/io/buffered/Writer): A buffered writer over any `Stream`: small writes collect in memory and go out in one call once 8 KiB are held, or on `flush`.
- [`Writer::new`](/packages/stdlib/reference/io/buffered/Writer/new): A writer over `s` that holds up to 8 KiB before it writes.
- [`Writer::with_capacity`](/packages/stdlib/reference/io/buffered/Writer/with_capacity): A writer over `s` that holds up to `n` bytes before it writes.
- [`Writer::set_timeout`](/packages/stdlib/reference/io/buffered/Writer/set_timeout): Gives up a wait for the stream to take more bytes after `ms` milliseconds with `Err(IoError::TimedOut)`; `0` waits for ever.
- [`Writer::stream`](/packages/stdlib/reference/io/buffered/Writer/stream): The stream being written.
- [`Writer::write`](/packages/stdlib/reference/io/buffered/Writer/write): Adds `bytes`, writing out what is held once it reaches the capacity.
- [`Writer::write_str`](/packages/stdlib/reference/io/buffered/Writer/write_str): Adds the UTF-8 bytes of `s`, like `write`.
- [`Writer::flush`](/packages/stdlib/reference/io/buffered/Writer/flush): Writes out everything held, waiting while the stream is not ready.
