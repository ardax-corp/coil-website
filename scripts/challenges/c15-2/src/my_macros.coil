use macro::{TypeDecl, Code, lit, lit_int, raw};

/// `T::field_count()`: how many fields the class has.
derive FieldCount(TypeDecl t) -> Code {
    return quote items {
        impl ${t.name} {
            pub static fn field_count() -> int {
                return ${lit_int(t.fields().len())};
            }
        }
    };
}
