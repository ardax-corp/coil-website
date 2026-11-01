use io::sync::{println};
use io::{IoError};
use conv::{parse_int};

fn run() -> Result<int, string> {
    let n = parse_int("5")?;
    println("got it").map_err(fn (IoError e) => show(e))?;
    return Ok(n);
}

fn main() {
    let _ = run();
}
