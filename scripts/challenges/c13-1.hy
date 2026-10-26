use io::sync::{println};
use task::{scope, Scope, sleep};

fn main() {
    let r = scope(fn (Scope s) {
        for i in 0..10 {
            s.spawn(fn () use (i) {
                sleep((10 - i) * 10);
                let _ = println(show(i));
            });
        }
        return 0;
    });
}
