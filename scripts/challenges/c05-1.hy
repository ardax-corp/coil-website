enum Shape {
    Circle(float),
    Rectangle { w: float, h: float },
    Triangle { base: float, height: float },
    Point,
}

fn area(Shape s) -> float {
    return match s {
        Shape::Circle(r) => 3.14159 * r * r,
        Shape::Rectangle { w, h } => w * h,
        Shape::Triangle { base, height } => base * height / 2.0,
        Shape::Point => 0.0,
    };
}
