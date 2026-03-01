export function whatsappLink(message) {
  const phone = "919895832323"; // client number
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}