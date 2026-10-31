use io::sync::{println};
use string::{format};

class Temperature {
    celsius: float,
}

impl Temperature {
    pub static fn from_fahrenheit(float f) -> Temperature {
        return new Temperature((f - 32.0) * 5.0 / 9.0);
    }

    pub fn celsius() -> float {
        return self.celsius;
    }

    pub fn fahrenheit() -> float {
        return self.celsius * 9.0 / 5.0 + 32.0;
    }
}

fn main() {
    let t = new Temperature(100.0);
    let u = Temperature::from_fahrenheit(212.0);
    println(format("%f %f", t.fahrenheit(), u.celsius()))?;
}
