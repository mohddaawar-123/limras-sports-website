import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Check, Ruler, Layers, Sparkles } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { useInquiry } from "../context/InquiryContext.jsx";
import { allProducts } from "../data/products.js";
import { quickProductWhatsAppLink } from "../utils/inquiry.js";

export default function ProductDetail() {
  const { slug } = useParams();
  const { openInquiry } = useInquiry();
  const [selectedSize, setSelectedSize] = useState(0);

  const product = allProducts.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  const related = allProducts
    .filter((p) => p.slug !== slug && p.displayCategory === product.displayCategory)
    .slice(0, 4);

  const code = product.code.startsWith("LS") ? product.code : `#${product.code}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://www.limrassports.com${product.image}`,
    brand: { "@type": "Brand", name: "Limras Sports" },
    category: product.displayCategory,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: `https://www.limrassports.com/products/${product.slug}`,
    },
  };

  return (
    <motion.div
      className="page product-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO
        title={`${product.name} — ${product.displayCategory}`}
        description={product.description}
        path={`/products/${product.slug}`}
        image={product.image}
        structuredData={structuredData}
      />

      <div className="container pd-breadcrumb">
        <Link to="/products">
          <ArrowLeft size={14} /> Back to Products
        </Link>
      </div>

      <section className="pd-main container">
        <Reveal className="pd-media">
          <div className="pd-media-frame">
            <img src={product.image} alt={`${product.name} — ${product.displayCategory}`} />
            <span className="pd-media-tag">{product.displayCategory}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="pd-info">
          <span className="plate-code">{code}</span>
          <h1 className="display-2" style={{ marginTop: 10 }}>
            {product.name}
          </h1>
          <p className="lede" style={{ marginTop: 14 }}>
            {product.description}
          </p>

          <div className="pd-spec-grid">
            <div className="pd-spec">
              <Layers size={16} />
              <div>
                <span>Material</span>
                <strong>{product.material}</strong>
              </div>
            </div>
            <div className="pd-spec">
              <Sparkles size={16} />
              <div>
                <span>Finish</span>
                <strong>{product.finish || "Premium Polish"}</strong>
              </div>
            </div>
            <div className="pd-spec">
              <Ruler size={16} />
              <div>
                <span>Customization</span>
                <strong>Logo & Name Printing</strong>
              </div>
            </div>
          </div>

          {product.sizes?.length > 0 && (
            <div className="pd-sizes">
              <span className="pd-sizes-label">Available Sizes</span>
              <div className="pd-size-options">
                {product.sizes.map((s, i) => (
                  <button
                    key={s}
                    className={`pd-size-pill ${selectedSize === i ? "active" : ""}`}
                    onClick={() => setSelectedSize(i)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.usage && (
            <ul className="pd-usage">
              {product.usage.map((u) => (
                <li key={u}>
                  <Check size={14} /> {u}
                </li>
              ))}
            </ul>
          )}

          <div className="pd-actions">
            <button
              className="btn btn-gold"
              onClick={() =>
                openInquiry({
                  product: `${product.name} (${code}) — Size: ${product.sizes?.[selectedSize] || "N/A"}`,
                })
              }
            >
              Request a Quote <ArrowUpRight size={16} />
            </button>
            <a
              href={quickProductWhatsAppLink(product.name, code)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="pd-note">
            Pricing depends on quantity, size and customization. Share your requirement for an
            accurate quote within hours.
          </p>
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="pd-related section-pad">
          <div className="container">
            <Reveal>
              <span className="eyebrow">You May Also Like</span>
              <h2 className="display-3" style={{ marginTop: 12, marginBottom: 40 }}>
                More from {product.displayCategory}
              </h2>
            </Reveal>
            <div className="pd-related-grid">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <ProductCard product={p} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .pd-breadcrumb {
          padding: 130px 0 20px;
        }
        .pd-breadcrumb a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--bronze);
          transition: color 0.3s;
        }
        .pd-breadcrumb a:hover { color: var(--gold); }
        .pd-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          padding-bottom: 100px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .pd-main { grid-template-columns: 1fr; gap: 36px; }
        }
        .pd-media-frame {
          position: relative;
          aspect-ratio: 4/5;
          background: linear-gradient(160deg, #16181f, #0a0b0e);
          border: 1px solid var(--line);
          border-radius: 6px;
          overflow: hidden;
        }
        .pd-media-frame img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 40px;
          filter: drop-shadow(0 30px 40px rgba(0,0,0,0.5));
        }
        .pd-media-tag {
          position: absolute;
          top: 18px;
          left: 18px;
          font-size: 0.66rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 7px 13px;
          background: rgba(8,9,12,0.7);
          backdrop-filter: blur(6px);
          border: 1px solid var(--line-bright);
          color: var(--gold);
          border-radius: 2px;
          font-weight: 600;
        }
        .pd-info .plate-code {
          font-size: 0.74rem;
          letter-spacing: 0.14em;
          color: var(--bronze);
          font-weight: 600;
        }
        .pd-spec-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin: 32px 0;
        }
        @media (max-width: 520px) {
          .pd-spec-grid { grid-template-columns: 1fr; }
        }
        .pd-spec {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 4px;
          color: var(--gold);
        }
        .pd-spec div { display: flex; flex-direction: column; gap: 3px; }
        .pd-spec span {
          font-size: 0.68rem;
          color: var(--bronze);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .pd-spec strong {
          font-size: 0.86rem;
          color: var(--ivory);
          font-weight: 600;
        }
        .pd-sizes-label {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--bronze);
          font-weight: 600;
        }
        .pd-size-options {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          flex-wrap: wrap;
        }
        .pd-size-pill {
          padding: 10px 20px;
          border: 1px solid var(--line-bright);
          border-radius: 30px;
          font-size: 0.84rem;
          color: var(--ivory-dim);
          transition: all 0.3s;
        }
        .pd-size-pill.active {
          background: var(--gold);
          color: var(--black);
          border-color: var(--gold);
          font-weight: 600;
        }
        .pd-usage {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 28px 0;
        }
        .pd-usage li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--ivory-dim);
        }
        .pd-usage li svg { color: var(--gold); flex-shrink: 0; }
        .pd-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 8px;
        }
        .pd-note {
          font-size: 0.78rem;
          color: var(--bronze);
          margin-top: 16px;
        }
        .pd-related {
          border-top: 1px solid var(--line);
        }
        .pd-related-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        }
        @media (max-width: 980px) {
          .pd-related-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .pd-related-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </motion.div>
  );
}
