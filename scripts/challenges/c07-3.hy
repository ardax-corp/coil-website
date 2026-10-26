use io::sync::{println};
use string::{format};

class Version {
    pub major: int,
    pub minor: int,
    pub label: string,
}

impl Eq for Version {
    fn eq(Version a, Version b) -> bool {
        return a.major == b.major && a.minor == b.minor;
    }
    fn ne(Version a, Version b) -> bool {
        return !(a == b);
    }
}

fn main() {
    let a = new Version(1, 2, "beta");
    let b = new Version(1, 2, "final");
    let c = new Version(1, 3, "beta");
    println(format("%z %z %z", a == b, a != c, a == c))?;
}
