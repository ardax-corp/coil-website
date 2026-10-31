use io::sync::{println, eprintln};
use env::{args, var, exit};

fn main() {
    let argv = args().unwrap_or(Vec::new());
    if argv.len() < 2 {
        eprintln("usage: greet NAME...")?;
        exit(2);
    }
    let greeting = var("GREETING").unwrap_or("Hello");
    for i in 1..argv.len() {
        println(greeting + ", " + argv[i])?;
    }
}
