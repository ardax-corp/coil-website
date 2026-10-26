use io::sync::{println};
use string::{format};
use cell::{Ref};

fn make_counter() -> fn() -> int {
    let n = Ref::new(0);
    return fn () use (n) {
        n.set(n.get() + 1);
        return n.get();
    };
}

fn main() {
    let next = make_counter();
    let a = next();
    let b = next();
    let c = next();
    println(format("%i %i %i", a, b, c))?;
}
