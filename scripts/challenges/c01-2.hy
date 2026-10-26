use io::sync::{println};

fn main() {
    let a = 0;
    let b = 1;
    let count = 0;
    while count < 10 {
        println(show(a))?;
        let next = a + b;
        a = b;
        b = next;
        count++;
    }
}
