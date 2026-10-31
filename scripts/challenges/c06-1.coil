use conv::{parse_int};
use text::{Searchable, Text};

fn parse_point(string s) -> Result<(int, int), string> {
    let parts = s.split(",");
    if parts.len() != 2 {
        raise "expected two numbers separated by a comma";
    }
    let x = parse_int(parts[0].trim())?;
    let y = parse_int(parts[1].trim())?;
    return Ok((x, y));
}
