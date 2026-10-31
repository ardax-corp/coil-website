---
slug: "time/time/index"
package: "time"
title: "time"
description: "UTC timestamps, calendar periods, format and parse (RFC 3339, ISO 8601, RFC 2822, HTTP date) and monotonic Instant."
module: "time"
kind: "module"
name: "time"
origin: "package"
auto: false
order: 0
---

Part of the [time](/packages/time) package ([coil-time](https://github.com/ardax-corp/coil-time)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/time)).

Import what you use (`use path::*` is not allowed):

```coil
use time::{TimeError, Timestamp};
```

## Types

| Name | Description |
|------|-------------|
| [`TimeError`](/packages/time/reference/time/TimeError) | Error returned by every fallible function in `time`. |
| [`Timestamp`](/packages/time/reference/time/Timestamp) | A point in time, measured from the Unix epoch (1970-01-01T00:00:00Z, UTC). |
| [`Period`](/packages/time/reference/time/Period) | An amount of time as nine independent fields, from `years` down to `nanos`. |
| [`Instant`](/packages/time/reference/time/Instant) | A reading of the process's monotonic clock, for measuring elapsed time. |

## Constants

| Name | Description |
|------|-------------|
| [`ISO8601_DATE`](/packages/time/reference/time/ISO8601_DATE) | [`format`](/packages/time/reference/time/format) / [`parse`](/packages/time/reference/time/parse) pattern for a calendar date, `YYYY-MM-DD` (no time, no zone). |
| [`ISO8601`](/packages/time/reference/time/ISO8601) | [`format`](/packages/time/reference/time/format) / [`parse`](/packages/time/reference/time/parse) pattern for an ISO 8601 date-time body, `YYYY-MM-DDTHH:MM:SS`. |

## Functions

| Name | Description |
|------|-------------|
| [`timestamp`](/packages/time/reference/time/fn.timestamp) | The current wall-clock time (UTC) as a [`Timestamp`](/packages/time/reference/time/Timestamp). |
| [`sleep_ms`](/packages/time/reference/time/sleep_ms) | Block the current task for at least `millis` milliseconds. |
| [`instant_now`](/packages/time/reference/time/instant_now) | Take a monotonic clock reading now. |
| [`elapsed_nanos`](/packages/time/reference/time/elapsed_nanos) | Nanoseconds since `inst` was taken. |
| [`elapsed_millis`](/packages/time/reference/time/elapsed_millis) | Whole milliseconds since `inst` was taken. |
| [`period`](/packages/time/reference/time/fn.period) | Build a [`Period`](/packages/time/reference/time/Period) from its nine fields, largest first. |
| [`add`](/packages/time/reference/time/add) | `ts` moved forward by `p`. |
| [`sub`](/packages/time/reference/time/sub) | `ts` moved back by `p`: [`add`](/packages/time/reference/time/add) with every field of `p` negated. |
| [`period_add`](/packages/time/reference/time/period_add) | Field-by-field sum of two periods (no normalization). |
| [`period_sub`](/packages/time/reference/time/period_sub) | Field-by-field difference `a - b` (no normalization). |
| [`date`](/packages/time/reference/time/date) | Today's date: the current wall-clock time truncated to midnight UTC. |
| [`date_from_period`](/packages/time/reference/time/date_from_period) | Midnight UTC of the calendar date `p.years()`-`p.months()`-`p.days()`. |
| [`date_from_epoch_period`](/packages/time/reference/time/date_from_epoch_period) | The Unix epoch moved forward by `p`; same as `add(epoch, p)`. |
| [`epoch`](/packages/time/reference/time/epoch) | The Unix epoch, 1970-01-01T00:00:00Z: a [`Timestamp`](/packages/time/reference/time/Timestamp) with every scale at zero. |
| [`format`](/packages/time/reference/time/format) | Format `ts` (in UTC) with a `strftime`-style pattern. |
| [`parse`](/packages/time/reference/time/parse) | Parse `text` as a UTC time laid out by the pattern `fmt`. |
| [`format_rfc3339`](/packages/time/reference/time/format_rfc3339) | Format `ts` as RFC 3339 in UTC, such as `2024-01-01T00:00:00Z`. |
| [`parse_rfc3339`](/packages/time/reference/time/parse_rfc3339) | Parse an RFC 3339 date-time, such as `2024-01-01T00:00:00Z`. |
| [`format_iso8601`](/packages/time/reference/time/format_iso8601) | Format `ts` as an ISO 8601 date-time in UTC; the output is the same as [`format_rfc3339`](/packages/time/reference/time/format_rfc3339). |
| [`parse_iso8601`](/packages/time/reference/time/parse_iso8601) | Parse an ISO 8601 date-time, such as `2024-06-08T09:10:11`. |
| [`format_iso8601_date`](/packages/time/reference/time/format_iso8601_date) | Format the UTC calendar date of `ts` as `YYYY-MM-DD`; the time of day is dropped. |
| [`parse_iso8601_date`](/packages/time/reference/time/parse_iso8601_date) | Parse a `YYYY-MM-DD` date as midnight UTC of that day. |
| [`format_rfc2822`](/packages/time/reference/time/format_rfc2822) | Format `ts` as an RFC 2822 date in GMT, such as `Mon, 01 Jan 2024 00:00:00 GMT`. |
| [`format_http_date`](/packages/time/reference/time/format_http_date) | Format `ts` as an HTTP date (IMF-fixdate), such as `Sun, 06 Nov 1994 08:49:37 GMT`. |
| [`parse_rfc2822`](/packages/time/reference/time/parse_rfc2822) | Parse an RFC 2822 date, such as `Mon, 15 Jan 2024 12:30:00 -0500`. |
| [`parse_http_date`](/packages/time/reference/time/parse_http_date) | Parse an HTTP date (IMF-fixdate), such as `Sun, 06 Nov 1994 08:49:37 GMT`. |
