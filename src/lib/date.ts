import { format, parseISO } from "date-fns";

export const formatDate = (date: string, pattern: string = "dd/MM/yyyy") => {
  try {
    return format(parseISO(date), pattern);
  } catch {
    return date;
  }
};

export const countYears = (
  from: string,
  to?: string,
  locale: "pt-br" | "en" = "pt-br"
) => {
  const fromDate = parseISO(from);
  const toDate = to ? parseISO(to) : new Date();

  let years = toDate.getFullYear() - fromDate.getFullYear();
  let months = toDate.getMonth() - fromDate.getMonth() + 1;

  if (months < 0) {
    years -= 1;
    months += 12;
  }
  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  if (locale === "en") {
    const yearsPart =
      years > 0 ? `${years} ${years === 1 ? "year" : "years"}` : "";
    const monthsPart =
      months > 0 ? `${months} ${months === 1 ? "month" : "months"}` : "";

    if (yearsPart && monthsPart) {
      return `${yearsPart} and ${monthsPart}`;
    }
    return yearsPart || monthsPart || "1 month";
  }

  const yearsPart =
    years > 0 ? `${years} ${years === 1 ? "ano" : "anos"}` : "";
  const monthsPart =
    months > 0 ? `${months} ${months === 1 ? "mês" : "meses"}` : "";

  if (yearsPart && monthsPart) {
    return `${yearsPart} e ${monthsPart}`;
  }
  return yearsPart || monthsPart || "1 mês";
};