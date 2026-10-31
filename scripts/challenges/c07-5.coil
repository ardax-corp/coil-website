use io::sync::{println};
use string::{format};

class Vec2 {
    pub x: float,
    pub y: float,
}

impl Sub for Vec2 {
    fn sub(Vec2 a, Vec2 b) -> Vec2 {
        return new Vec2(a.x - b.x, a.y - b.y);
    }
}

impl Eq for Vec2 {
    fn eq(Vec2 a, Vec2 b) -> bool {
        return a.x == b.x && a.y == b.y;
    }
    fn ne(Vec2 a, Vec2 b) -> bool {
        return !(a == b);
    }
}

impl Show for Vec2 {
    fn show(Vec2 v) -> string {
        return format("⟨%f, %f⟩", v.x, v.y);
    }
}

fn main() {
    let d = new Vec2(3.0, 1.0) - new Vec2(1.0, 1.0);
    println(format("%v %z", d, d == new Vec2(2.0, 0.0)))?;
}
