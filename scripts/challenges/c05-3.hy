use io::sync::{println};
use string::{format};

enum Expr {
    Num(int),
    Add(Expr, Expr),
    Sub(Expr, Expr),
    Mul(Expr, Expr),
    Neg(Expr),
}

fn eval(Expr e) -> int {
    return match e {
        Expr::Num(n) => n,
        Expr::Add(a, b) => eval(a) + eval(b),
        Expr::Sub(a, b) => eval(a) - eval(b),
        Expr::Mul(a, b) => eval(a) * eval(b),
        Expr::Neg(a) => -eval(a),
    };
}

fn render(Expr e) -> string {
    return match e {
        Expr::Num(n) => show(n),
        Expr::Add(a, b) => format("(%s + %s)", render(a), render(b)),
        Expr::Sub(a, b) => format("(%s - %s)", render(a), render(b)),
        Expr::Mul(a, b) => format("(%s * %s)", render(a), render(b)),
        Expr::Neg(a) => "-" + render(a),
    };
}

fn main() {
    let e = Expr::Add(Expr::Num(2), Expr::Mul(Expr::Num(3), Expr::Num(4)));
    println(render(e))?;
}
