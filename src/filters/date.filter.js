export default function dateFilter(value, format = "date") {
  const options = {};

  if (format.includes("time")) {
    options.hour = "2-digit";
    options.minute = "2-digit";
  }

  if (format.includes("date")) {
    options.day = "2-digit";
    options.month = "long";
    options.year = "numeric";
  }
  const locale = "uk-Ua";
  return new Intl.DateTimeFormat(locale, options).format(new Date(value));
}
