use io::sync::{println};
use io::file::{read_text};
use text::{Searchable, Text};
use string::{format};

fn main() {
    let body = read_text("poem.txt")?;
    let all = body.lines();
    let words = 0;
    for line in all {
        for w in line.split(" ") {
            if w != "" {
                words++;
            }
        }
    }
    println(format("%i lines, %i words, %i bytes", all.len(), words, body.len()))?;
}
