export function formatDate(dateString: string): string {
  const parsedDate = Date.parse(dateString);
  if (isNaN(parsedDate)) {
    return "Invalid Date";
  }

  const date = new Date(parsedDate);
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();
  const hours = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${day} ${month}, ${year} | ${hours}`;
}
