use io::sync::{println};

gen fn fibonacci() {
    let a = 0;
    let b = 1;
    while true {
        yield a;
        let next = a + b;
        a = b;
        b = next;
    }
}

fn main() {
    for f in fibonacci() {
        if f >= 1000 {
            break;
        }
        println(show(f))?;
    }
}
