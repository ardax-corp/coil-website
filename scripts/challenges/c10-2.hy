use io::{stdin};
use io::sync::{println, eprintln, read_line};
use conv::{parse_int};
use text::{Text};
use string::{format};

fn main() {
    let input = stdin();
    let total = 0;
    let skipped = 0;
    while let Some(line) = read_line(input)? {
        match parse_int(line.trim()) {
            Ok(n) => {
                total += n;
            },
            Err(_) => {
                skipped++;
            },
        }
    }
    println(format("%i", total))?;
    if skipped > 0 {
        eprintln(format("skipped %i lines", skipped))?;
    }
}
