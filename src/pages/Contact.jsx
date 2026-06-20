import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import { company } from "../data/company.js";
import { submitInquiry, whatsappLink } from "../utils/inquiry.js";

const PRODUCT_OPTIONS = [
  "School Trophies",
  "Sports Trophies",
  "Corporate Awards",
  "Wooden Shields",
  "Medals",
  "Custom Award Design",
  "Other / Not Sure",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    city: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.city) return;
    setStatus("submitting");
    await submitInquiry(form);
    setStatus("success");
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Limras Sports",
    url: "https://www.limrassports.com/contact",
  };

  return (
    <motion.div
      className="page contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO
        title="Contact Us"
        description="Get in touch with Limras Sports for trophy, shield and corporate award inquiries. Call, WhatsApp, email, or fill our inquiry form for a fast quote."
        path="/contact"
        structuredData={structuredData}
      />

      <section className="contact-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Get In Touch</span>
            <h1 className="display-1" style={{ marginTop: 16, maxWidth: 640 }}>
              Let's bring your awards to life.
            </h1>
            <p className="lede" style={{ marginTop: 20, maxWidth: 520 }}>
              Whether it's a single trophy or a thousand-piece order, our team responds with
              pricing and lead time within hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="contact-main section-pad">
        <div className="container contact-grid">
          <Reveal className="contact-info-col">
            <div className="contact-info-card">
              <Phone size={20} />
              <div>
                <h4>Call Us</h4>
                <a href={`tel:+${company.phoneRaw}`}>{company.phone}</a>
              </div>
            </div>
            <div className="contact-info-card">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.005c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2z" />
              </svg>
              <div>
                <h4>WhatsApp</h4>
                <a
                  href={whatsappLink("Hello Limras Sports, I'd like to enquire about your products.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company.whatsapp}
                </a>
              </div>
            </div>
            <div className="contact-info-card">
              <Mail size={20} />
              <div>
                <h4>Email</h4>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
            </div>
            <div className="contact-info-card">
              <MapPin size={20} />
              <div>
                <h4>Workshop Address</h4>
                <p>
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                </p>
              </div>
            </div>
            <div className="contact-info-card">
              <Clock size={20} />
              <div>
                <h4>Business Hours</h4>
                <p>{company.hours}</p>
              </div>
            </div>

            <div className="contact-map-frame">
              <iframe
                title="Limras Sports location — Moradabad"
                src="https://maps.google.com/maps?q=Ashok%20Nagar%2C%20Moradabad%2C%20Uttar%20Pradesh%20244001&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="contact-form-col">
            {status === "success" ? (
              <div className="contact-success">
                <CheckCircle2 size={48} color="var(--gold)" strokeWidth={1.4} />
                <h3>Inquiry Sent</h3>
                <p>
                  Thank you, {form.name.split(" ")[0]}. We've opened WhatsApp with your message
                  ready — please send it there for the fastest response. Our team typically
                  replies within a few business hours.
                </p>
                <button
                  className="btn btn-ghost"
                  onClick={() => {
                    setForm({ name: "", companyName: "", city: "", product: "", quantity: "", message: "" });
                    setStatus("idle");
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form glass-panel">
                <h3 className="display-3">Send an Inquiry</h3>
                <div className="form-row">
                  <label>
                    <span>Full Name *</span>
                    <input type="text" required value={form.name} onChange={update("name")} placeholder="Your name" />
                  </label>
                  <label>
                    <span>Company / Institution</span>
                    <input type="text" value={form.companyName} onChange={update("companyName")} placeholder="Optional" />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    <span>City *</span>
                    <input type="text" required value={form.city} onChange={update("city")} placeholder="Your city" />
                  </label>
                  <label>
                    <span>Product Required</span>
                    <select value={form.product} onChange={update("product")}>
                      <option value="">Select a category</option>
                      {PRODUCT_OPTIONS.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label>
                  <span>Estimated Quantity</span>
                  <input type="text" value={form.quantity} onChange={update("quantity")} placeholder="e.g. 50 pieces" />
                </label>
                <label>
                  <span>Message</span>
                  <textarea rows={5} value={form.message} onChange={update("message")} placeholder="Tell us about your event, sizes, branding, or deadline..." />
                </label>
                <button type="submit" className="btn btn-gold" style={{ width: "100%" }} disabled={status === "submitting"}>
                  {status === "submitting" ? (
                    <><Loader2 size={16} className="spin" /> Sending...</>
                  ) : (
                    <>Send Inquiry <Send size={15} /></>
                  )}
                </button>
                <p className="form-note">
                  * Required fields. Submitting opens WhatsApp with your message ready to send.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <style>{`
        .contact-hero { padding: 160px 0 60px; border-bottom: 1px solid var(--line); }
        .contact-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 56px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .contact-info-col { display: flex; flex-direction: column; gap: 18px; }
        .contact-info-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 4px;
          color: var(--gold);
        }
        .contact-info-card h4 {
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--bronze);
          margin-bottom: 6px;
          font-weight: 600;
        }
        .contact-info-card a, .contact-info-card p {
          color: var(--ivory);
          font-size: 0.92rem;
        }
        .contact-map-frame {
          aspect-ratio: 16/11;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid var(--line);
          filter: grayscale(0.4) invert(0.92) contrast(0.9);
        }
        .contact-map-frame iframe { width: 100%; height: 100%; border: none; }
        .contact-form {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .contact-form h3 { margin-bottom: 6px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        @media (max-width: 520px) { .form-row { grid-template-columns: 1fr; } }
        .contact-form label { display: flex; flex-direction: column; gap: 8px; }
        .contact-form label span {
          font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--bronze); font-weight: 600;
        }
        .contact-form input, .contact-form select, .contact-form textarea {
          background: rgba(255,255,255,0.025);
          border: 1px solid var(--line);
          border-radius: 3px;
          padding: 13px 14px;
          font-size: 0.92rem;
          color: var(--ivory);
        }
        .contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus {
          border-color: var(--gold);
          outline: none;
        }
        .contact-form select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A24B' stroke-width='1.5'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
        }
        .contact-form textarea { resize: vertical; font-family: var(--font-body); }
        .form-note { font-size: 0.74rem; color: var(--bronze); text-align: center; }
        .contact-success {
          display: flex; flex-direction: column; align-items: center; text-align: center;
          gap: 14px; padding: 60px 40px; background: var(--panel); border: 1px solid var(--line); border-radius: 6px;
        }
        .contact-success h3 { font-size: 1.5rem; }
        .contact-success .btn { margin-top: 10px; }
        .spin { animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </motion.div>
  );
}
