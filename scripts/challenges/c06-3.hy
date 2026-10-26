use io::sync::{println, eprintln};
use string::{format};

fn parse_point(string s) -> Result<(int, int), string> {
    raise "expected two numbers separated by a comma";
}

fn main() {
    match parse_point("3;4") {
        Ok(p) => {
            println(format("%v", p))?;
        },
        Err(e) => {
            eprintln("error: " + e)?;
        },
    }
}
