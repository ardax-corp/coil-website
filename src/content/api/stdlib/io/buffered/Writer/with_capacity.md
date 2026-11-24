---
slug: "stdlib/io/buffered/Writer/with_capacity"
package: "stdlib"
title: "Writer::with_capacity"
description: "A writer over s that holds up to n bytes before it writes."
module: "io::buffered"
kind: "static method"
name: "with_capacity"
parent: "Writer"
signature: "pub static fn with_capacity(Write s, int n) -> Writer"
import: "use io::buffered::{Writer};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/88dc9dc329c75d41081b17f35d2886415a2b7cd1/src/io/buffered.coil#L357"
order: 1
---

A writer over `s` that holds up to `n` bytes before it writes.

## Parameters

| Name | Type |
|------|------|
| `s` | `Write` |
| `n` | `int` |

## Returns

`Writer`

## See also

- [`Writer`](/packages/stdlib/reference/io/buffered/Writer): A buffered writer over any `Write` (a `Stream`, a TLS stream): small writes collect in memory and go out in one call once 8 KiB are held, or on `flush`.
- [`Writer::new`](/packages/stdlib/reference/io/buffered/Writer/new): A writer over `s` that holds up to 8 KiB before it writes.
- [`Writer::set_timeout`](/packages/stdlib/reference/io/buffered/Writer/set_timeout): Gives up a wait for the stream to take more bytes after `ms` milliseconds with `Err(IoError::TimedOut)`; `0` waits for ever.
- [`Writer::stream`](/packages/stdlib/reference/io/buffered/Writer/stream): The stream being written.
- [`Writer::buffered`](/packages/stdlib/reference/io/buffered/Writer/buffered): Number of bytes held and not yet written.
- [`Writer::write`](/packages/stdlib/reference/io/buffered/Writer/write): Adds `bytes`, writing out what is held once it reaches the capacity.
- [`Writer::write_str`](/packages/stdlib/reference/io/buffered/Writer/write_str): Adds the UTF-8 bytes of `s`, like `write`.
- [`Writer::flush`](/packages/stdlib/reference/io/buffered/Writer/flush): Writes out everything held, waiting while the stream is not ready.
