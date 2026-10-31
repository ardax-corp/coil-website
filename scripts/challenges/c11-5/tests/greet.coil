use io::{capture_begin, capture_end};
use greet::{greet};
use tests::assert;

test("greet prints Hello, Ada") {
    capture_begin();
    greet("Ada");
    let (out, _) = capture_end();
    assert!(out == "Hello, Ada\n");
}
