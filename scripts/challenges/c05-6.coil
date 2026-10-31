use io::sync::{println};

enum Direction {
    North,
    East,
    South,
    West,
}

fn turn_right(Direction d) -> Direction {
    return match d {
        Direction::North => Direction::East,
        Direction::East => Direction::South,
        Direction::South => Direction::West,
        Direction::West => Direction::North,
    };
}

fn degrees(Direction d) -> int {
    return match d {
        Direction::North => 0,
        Direction::East => 90,
        Direction::South => 180,
        Direction::West => 270,
    };
}

fn main() {
    let d = Direction::North;
    for i in 0..4 {
        d = turn_right(d);
        println(show(degrees(d)))?;
    }
}
