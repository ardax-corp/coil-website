use io::sync::{println};
use string::{format};

trait Shape<T> {
    fn area(T shape) -> float;
}
class Square {
    pub side: float,
}
class Triangle {
    pub base: float,
    pub height: float,
}
impl Shape for Square {
    fn area(Square s) -> float {
        return s.side * s.side;
    }
}
impl Shape for Triangle {
    fn area(Triangle t) -> float {
        return t.base * t.height / 2.0;
    }
}
fn main() {
    let plan: Vec<Shape> = Vec::new();
    plan.push(new Square(2.0));
    plan.push(new Triangle(3.0, 4.0));
    let total = 0.0;
    for room in plan {
        total += room.area();
    }
    println(format("%f", total))?;
}
