use io::sync::{println};
use io::fs::{create_dir_all, list_dir, copy};
use text::{Searchable};
use collections::{sort};

fn main() {
    let dir = "notes";
    create_dir_all(dir + "/backup")?;
    for name in list_dir(dir)? {
        if name.ends_with(".txt") {
            copy(dir + "/" + name, dir + "/backup/" + name)?;
        }
    }

    for name in sort(list_dir(dir + "/backup")?) {
        println(name)?;
    }
}
