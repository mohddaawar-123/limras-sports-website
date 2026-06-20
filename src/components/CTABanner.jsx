import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { useInquiry } from "../context/InquiryContext.jsx";

export default function CTABanner() {
  const { openInquiry } = useInquiry();
  return (
    <section className="cta-banner">
      <div className="cta-glow" aria-hidden="true" />
      <div className="container cta-inner">
        <Reveal>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Bulk &amp; Custom Orders
          </span>
          <h2 className="display-2" style={{ marginTop: 14 }}>
            Have an event, a team, or an entire <em>academic year</em> to honour?
          </h2>
          <p style={{ maxWidth: 520, margin: "18px auto 0" }}>
            Tell us your quantity, sizes and branding needs — we'll respond with pricing and
            lead time within hours.
          </p>
          <div className="cta-actions">
            <button className="btn btn-gold" onClick={() => openInquiry()}>
              Request a Quote <ArrowUpRight size={16} />
            </button>
            <Link to="/catalog" className="btn btn-ghost">
              Download Catalog
            </Link>
          </div>
        </Reveal>
      </div>

      <style>{`
        .cta-banner {
          position: relative;
          padding: 120px 0;
          text-align: center;
          overflow: hidden;
          border-top: 1px solid var(--line);
        }
        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(201,162,75,0.12), transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .cta-inner { position: relative; z-index: 1; }
        .cta-inner h2 em {
          font-style: italic;
          font-family: var(--font-deco);
          color: var(--gold);
        }
        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 36px;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
}
