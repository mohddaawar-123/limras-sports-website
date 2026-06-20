import { company } from "../data/company";

// Formspree endpoint placeholder — replace YOUR_FORM_ID after connecting
// an email at https://formspree.io (free tier, 2-minute setup, no code changes needed
// beyond pasting the ID below).
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export function buildWhatsAppMessage({ name, companyName, city, product, quantity, message }) {
  const lines = [
    `*New Inquiry — Limras Sports Website*`,
    ``,
    `*Name:* ${name || "-"}`,
    companyName ? `*Company:* ${companyName}` : null,
    city ? `*City:* ${city}` : null,
    product ? `*Product Required:* ${product}` : null,
    quantity ? `*Quantity:* ${quantity}` : null,
    message ? `*Message:* ${message}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}

export function whatsappLink(text) {
  return `https://wa.me/${company.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

export function quickProductWhatsAppLink(productName, productCode) {
  const text = `Hello Limras Sports, I'd like to enquire about *${productName}* (${productCode}). Please share pricing and bulk order details.`;
  return whatsappLink(text);
}

/**
 * Submits an inquiry to both WhatsApp (opens chat) and Formspree (email backend).
 * Returns { whatsappOpened, emailSubmitted, error }
 */
export async function submitInquiry(formData) {
  const result = { whatsappOpened: false, emailSubmitted: false, error: null };

  const text = buildWhatsAppMessage(formData);
  const link = whatsappLink(text);

  try {
    window.open(link, "_blank", "noopener,noreferrer");
    result.whatsappOpened = true;
  } catch (e) {
    result.error = "whatsapp-failed";
  }

  // Attempt email backend submission (silently no-ops gracefully if not yet configured)
  try {
    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      result.emailSubmitted = false;
    } else {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      result.emailSubmitted = res.ok;
    }
  } catch (e) {
    result.emailSubmitted = false;
  }

  return result;
}
