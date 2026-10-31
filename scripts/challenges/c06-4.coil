use conv::{parse_int};
use text::{Searchable, Text};

fn sum_csv(string line) -> Result<int, string> {
    let total = 0;
    for field in line.split(",") {
        let f = field.trim();
        if f.len() == 0 {
            continue;
        }
        total += parse_int(f)?;
    }
    return Ok(total);
}
