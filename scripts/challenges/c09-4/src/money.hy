const CURRENCY = "EUR";

fn format_cents(int cents) -> string {
    if cents < 0 {
        return "-" + format_cents(-cents);
    }
    return show(cents / 100) + "." + show(cents % 100 / 10) + show(cents % 10) + " " + CURRENCY;
}
