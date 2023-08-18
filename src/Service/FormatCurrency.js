export function formatCurrency(value, currencyCode = "USD") {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  });
  if (value) {
    return formatter.format(value);
  } else {
    return formatter.format(0);
  }
}
