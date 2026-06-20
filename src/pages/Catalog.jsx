import { motion } from "framer-motion";
import { Download, FileText, BadgeCheck, Building2 } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import { company } from "../data/company.js";

const CATALOG_PATH = "/catalog/Limras-Sports-Catalog.pdf";

export default function Catalog() {
  return (
    <motion.div
      className="page catalog-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO
        title="Digital Catalog — Download Our Full Product Range"
        description="Download the complete Limras Sports product catalog — 85+ trophy, shield and corporate award designs with sizes, materials and customization options."
        path="/catalog"
      />

      <section className="catalog-hero">
        <div className="container catalog-hero-grid">
          <Reveal>
            <span className="eyebrow">Digital Catalog</span>
            <h1 className="display-1" style={{ marginTop: 16 }}>
              The complete <span className="text-gold-italic">Limras</span> range, in one
              document.
            </h1>
            <p className="lede" style={{ marginTop: 20, maxWidth: 520 }}>
              {company.stats.products}+ designs across trophies, shields and corporate awards —
              with sizes, materials and finishes documented for easy procurement planning.
            </p>
            <a
              href={CATALOG_PATH}
              download="Limras-Sports-Catalog.pdf"
              className="btn btn-gold"
              style={{ marginTop: 32 }}
            >
              <Download size={16} /> Download Full Catalog (PDF)
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="catalog-cover">
              <FileText size={40} strokeWidth={1.2} />
              <h3>Limras Sports</h3>
              <p>Product Catalog · {company.stats.products} Designs</p>
              <span className="catalog-cover-badge">PDF · Updated 2026</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="catalog-viewer section-pad">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Preview</span>
            <h2 className="display-3" style={{ margin: "14px 0 30px" }}>
              Browse the catalog inline
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pdf-frame">
              <iframe
                src={`${CATALOG_PATH}#toolbar=1`}
                title="Limras Sports Product Catalog"
                loading="lazy"
              />
            </div>
            <p className="pdf-fallback-note">
              If the preview doesn't load on your device, use the download button above to view
              the full catalog.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="catalog-info section-pad">
        <div className="container catalog-info-grid">
          <Reveal>
            <div className="info-card">
              <BadgeCheck size={26} />
              <h3>GST &amp; Tax Details</h3>
              <dl>
                <dt>GSTIN</dt>
                <dd>{company.gstin}</dd>
                <dt>State Code</dt>
                <dd>{company.stateCode} (Uttar Pradesh)</dd>
                <dt>Entity Type</dt>
                <dd>Manufacturer &amp; Supplier</dd>
              </dl>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="info-card">
              <Building2 size={26} />
              <h3>Company Information</h3>
              <dl>
                <dt>Registered Name</dt>
                <dd>{company.name}</dd>
                <dt>Address</dt>
                <dd>
                  {company.address.line1}, {company.address.line2}
                </dd>
                <dt>Business Hours</dt>
                <dd>{company.hours}</dd>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .catalog-hero { padding: 160px 0 0; }
        .catalog-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
          padding-bottom: 80px;
          border-bottom: 1px solid var(--line);
        }
        @media (max-width: 900px) {
          .catalog-hero-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .text-gold-italic {
          font-style: italic;
          font-family: var(--font-deco);
          color: var(--gold);
        }
        .catalog-cover {
          aspect-ratio: 3/4;
          max-width: 320px;
          margin: 0 auto;
          background: linear-gradient(155deg, var(--panel-raised), var(--panel));
          border: 1px solid var(--line-bright);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: var(--gold);
          padding: 30px;
          text-align: center;
          position: relative;
          box-shadow: 0 30px 70px rgba(0,0,0,0.5);
        }
        .catalog-cover h3 {
          font-family: var(--font-display);
          color: var(--ivory);
          font-size: 1.4rem;
        }
        .catalog-cover p { font-size: 0.82rem; }
        .catalog-cover-badge {
          position: absolute;
          bottom: 18px;
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--bronze);
          border-top: 1px solid var(--line);
          padding-top: 12px;
          width: 80%;
        }
        .pdf-frame {
          width: 100%;
          height: 78vh;
          min-height: 500px;
          border: 1px solid var(--line);
          border-radius: 6px;
          overflow: hidden;
          background: var(--panel);
        }
        .pdf-frame iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        .pdf-fallback-note {
          font-size: 0.78rem;
          color: var(--bronze);
          margin-top: 14px;
          text-align: center;
        }
        .catalog-info { border-top: 1px solid var(--line); }
        .catalog-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
        }
        @media (max-width: 760px) { .catalog-info-grid { grid-template-columns: 1fr; } }
        .info-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 38px;
          color: var(--gold);
        }
        .info-card h3 { color: var(--ivory); margin: 16px 0 20px; font-size: 1.15rem; }
        .info-card dl {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 12px 16px;
        }
        .info-card dt {
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--bronze);
        }
        .info-card dd {
          font-size: 0.86rem;
          color: var(--ivory-dim);
        }
      `}</style>
    </motion.div>
  );
}
