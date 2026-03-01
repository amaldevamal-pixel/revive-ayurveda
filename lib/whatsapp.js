export function whatsappLink(message) {
  const phone = "919567838244"; // your number
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}