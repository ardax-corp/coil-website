use io::sync::{println};
use task::{scope, Scope, channel, Channel};

fn main() {
    let numbers: Channel<int> = channel(2);
    let squares: Channel<int> = channel(2);
    let r = scope(fn (Scope s) use (numbers, squares) {
        s.spawn(fn () use (numbers) {
            for n in 1..=5 {
                let _ = numbers.send(n);
            }
            numbers.close();
        });
        s.spawn(fn () use (numbers, squares) {
            while let Ok(n) = numbers.recv() {
                let _ = squares.send(n * n);
            }
            squares.close();
        });
        s.spawn(fn () use (squares) {
            while let Ok(sq) = squares.recv() {
                let _ = println(show(sq));
            }
        });
        return 0;
    });
}
