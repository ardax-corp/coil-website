use macro::{Expr, Code, lit, raw};

/// `check!(cond)`: panics with the condition as written when it is false.
macro check(Expr cond) -> Code {
    return quote stmts {
        if !${cond} {
            panic "check failed: " + ${lit(cond.str())};
        }
    };
}

/// `check_eq!(a, b)`: panics with both sides and their values when they differ.
macro check_eq(Expr a, Expr b) -> Code {
    return quote stmts {
        let left = ${a};
        let right = ${b};
        if left != right {
            panic "check failed: " + ${lit(a.str() + " == " + b.str())} + " (" + show(left) + " vs " + show(right) + ")";
        }
    };
}
