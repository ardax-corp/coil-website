use macro::{TypeDecl, Code, lit, raw};

/// `T::columns()`: the field names; `#[column(name = "…")]` renames one and
/// `#[column(skip = true)]` leaves it out.
derive Columns(TypeDecl t) -> Code attrs(column) {
    let names: Vec<Code> = Vec::new();
    for f in t.fields() {
        if f.attr_str("column", "skip", "false") == "true" {
            continue;
        }
        names.push(lit(f.attr_str("column", "name", f.name.str())));
    }
    return quote items {
        impl ${t.name} {
            pub static fn columns() -> Vec<string> {
                let out: Vec<string> = Vec::from([$(names),*]);
                return out;
            }
        }
    };
}
