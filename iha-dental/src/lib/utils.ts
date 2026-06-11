export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPhone(phone: string) {
  return phone.replace(/\s+/g, "");
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}