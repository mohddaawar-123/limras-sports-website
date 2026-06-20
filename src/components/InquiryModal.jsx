import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, Loader2 } from "lucide-react";
import { useInquiry } from "../context/InquiryContext.jsx";
import { submitInquiry } from "../utils/inquiry.js";

const PRODUCT_OPTIONS = [
  "School Trophies",
  "Sports Trophies",
  "Corporate Awards",
  "Wooden Shields",
  "Medals",
  "Custom Award Design",
  "Other / Not Sure",
];

export default function InquiryModal() {
  const { isOpen, prefill, closeInquiry } = useInquiry();
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    city: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  useEffect(() => {
    if (isOpen) {
      setForm((prev) => ({ ...prev, ...prefill }));
      setStatus("idle");
    }
  }, [isOpen, prefill]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeInquiry();
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeInquiry]);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.city) return;
    setStatus("submitting");
    try {
      await submitInquiry(form);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  function handleClose() {
    closeInquiry();
    setTimeout(() => {
      setForm({ name: "", companyName: "", city: "", product: "", quantity: "", message: "" });
      setStatus("idle");
    }, 300);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
        >
          <motion.div
            className="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-title"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={handleClose} aria-label="Close inquiry form">
              <X size={20} />
            </button>

            {status === "success" ? (
              <div className="modal-success">
                <CheckCircle2 size={52} color="var(--gold)" strokeWidth={1.4} />
                <h3>Inquiry Sent</h3>
                <p>
                  Thank you, {form.name.split(" ")[0]}. We've opened WhatsApp with your message
                  pre-filled — please hit send there to reach our team instantly. We typically
                  respond within a few business hours.
                </p>
                <button className="btn btn-gold" onClick={handleClose}>
                  Done
                </button>
              </div>
            ) : (
              <>
                <span className="eyebrow">Get In Touch</span>
                <h3 id="inquiry-title" className="display-3" style={{ marginTop: 12 }}>
                  Request a Quote
                </h3>
                <p style={{ marginTop: 10, marginBottom: 28 }}>
                  Tell us what you need — we'll respond with pricing, lead time, and customization
                  options on WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-row">
                    <label>
                      <span>Full Name *</span>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Your name"
                      />
                    </label>
                    <label>
                      <span>Company / Institution</span>
                      <input
                        type="text"
                        value={form.companyName}
                        onChange={update("companyName")}
                        placeholder="Optional"
                      />
                    </label>
                  </div>

                  <div className="form-row">
                    <label>
                      <span>City *</span>
                      <input
                        type="text"
                        required
                        value={form.city}
                        onChange={update("city")}
                        placeholder="Your city"
                      />
                    </label>
                    <label>
                      <span>Product Required</span>
                      <select value={form.product} onChange={update("product")}>
                        <option value="">Select a category</option>
                        {PRODUCT_OPTIONS.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label>
                    <span>Estimated Quantity</span>
                    <input
                      type="text"
                      value={form.quantity}
                      onChange={update("quantity")}
                      placeholder="e.g. 50 pieces"
                    />
                  </label>

                  <label>
                    <span>Message</span>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us about your event, sizes, branding, or deadline..."
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn btn-gold"
                    style={{ width: "100%", marginTop: 8 }}
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry via WhatsApp <Send size={15} />
                      </>
                    )}
                  </button>
                  <p className="form-note">
                    * Required fields. Submitting opens WhatsApp with your message ready to send,
                    and forwards a copy to our team.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 5, 7, 0.82);
          backdrop-filter: blur(6px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .modal-panel {
          position: relative;
          width: 100%;
          max-width: 560px;
          max-height: 90vh;
          overflow-y: auto;
          background: linear-gradient(180deg, var(--panel-raised), var(--panel));
          border: 1px solid var(--line-bright);
          border-radius: 6px;
          padding: 44px 40px;
          box-shadow: 0 30px 90px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,162,75,0.06);
        }
        @media (max-width: 600px) {
          .modal-panel { padding: 34px 22px; }
        }
        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          color: var(--ivory-dim);
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.25s;
        }
        .modal-close:hover {
          color: var(--gold);
          background: rgba(201,162,75,0.1);
        }
        .inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        @media (max-width: 520px) {
          .form-row { grid-template-columns: 1fr; }
        }
        .inquiry-form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .inquiry-form label span {
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--bronze);
          font-weight: 600;
        }
        .inquiry-form input,
        .inquiry-form select,
        .inquiry-form textarea {
          background: rgba(255,255,255,0.025);
          border: 1px solid var(--line);
          border-radius: 3px;
          padding: 13px 14px;
          font-size: 0.92rem;
          color: var(--ivory);
          transition: border-color 0.25s, background 0.25s;
        }
        .inquiry-form input::placeholder,
        .inquiry-form textarea::placeholder {
          color: rgba(184, 178, 161, 0.5);
        }
        .inquiry-form input:focus,
        .inquiry-form select:focus,
        .inquiry-form textarea:focus {
          border-color: var(--gold);
          background: rgba(201,162,75,0.04);
          outline: none;
        }
        .inquiry-form select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A24B' stroke-width='1.5'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
        }
        .inquiry-form textarea {
          resize: vertical;
          font-family: var(--font-body);
        }
        .form-note {
          font-size: 0.74rem;
          color: var(--bronze);
          text-align: center;
          line-height: 1.5;
        }
        .modal-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
          padding: 20px 0 4px;
        }
        .modal-success h3 {
          font-size: 1.6rem;
        }
        .modal-success .btn {
          margin-top: 14px;
          min-width: 160px;
        }
        .spin {
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </AnimatePresence>
  );
}
