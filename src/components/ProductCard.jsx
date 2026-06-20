import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useInquiry } from "../context/InquiryContext.jsx";
import { quickProductWhatsAppLink } from "../utils/inquiry.js";

export default function ProductCard({ product, index = 0 }) {
  const { openInquiry } = useInquiry();
  const code = product.code.startsWith("LS") ? product.code : `#${product.code}`;

  return (
    <div className="product-card" style={{ "--i": Math.min(index, 11) }}>
      <Link to={`/products/${product.slug}`} className="product-card-media">
        <img src={product.image} alt={`${product.name} — ${product.displayCategory}`} loading="lazy" />
        <div className="product-card-shine" aria-hidden="true" />
        <span className="product-card-tag">{product.displayCategory}</span>
      </Link>

      <div className="product-card-plate">
        <div className="plate-corner tl" />
        <div className="plate-corner tr" />
        <div className="plate-corner bl" />
        <div className="plate-corner br" />

        <span className="plate-code">{code}</span>
        <Link to={`/products/${product.slug}`}>
          <h3 className="plate-title">{product.name}</h3>
        </Link>
        <p className="plate-meta">
          {product.material} · {product.sizes?.[0] || product.sizes}
          {product.sizes?.length > 1 ? ` +${product.sizes.length - 1}` : ""}
        </p>

        <div className="plate-actions">
          <button
            className="btn btn-gold btn-sm"
            onClick={() =>
              openInquiry({ product: product.name })
            }
          >
            Inquire <ArrowUpRight size={13} />
          </button>
          <a
            href={quickProductWhatsAppLink(product.name, code)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        .product-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.5s var(--ease-out), border-color 0.5s var(--ease-out), box-shadow 0.5s var(--ease-out);
          animation: card-fade-in 0.6s var(--ease-out) backwards;
          animation-delay: calc(var(--i, 0) * 0.04s);
        }
        @keyframes card-fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .product-card:hover {
          transform: translateY(-6px);
          border-color: var(--line-bright);
          box-shadow: 0 24px 60px rgba(0,0,0,0.45);
        }
        .product-card-media {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: linear-gradient(160deg, #16181f, #0a0b0e);
          display: block;
        }
        .product-card-media img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 22px;
          transition: transform 0.7s var(--ease-out);
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5));
        }
        .product-card:hover .product-card-media img {
          transform: scale(1.06);
        }
        .product-card-shine {
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255,255,255,0.07), transparent);
          transform: skewX(-18deg);
          transition: left 0.9s var(--ease-out);
          pointer-events: none;
        }
        .product-card:hover .product-card-shine {
          left: 130%;
        }
        .product-card-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 11px;
          background: rgba(8,9,12,0.7);
          backdrop-filter: blur(6px);
          border: 1px solid var(--line-bright);
          color: var(--gold);
          border-radius: 2px;
          font-weight: 600;
        }
        .product-card-plate {
          position: relative;
          padding: 22px 22px 24px;
          background: linear-gradient(155deg, #14161c, #0e0f13);
          border-top: 1px solid var(--line);
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .plate-corner {
          position: absolute;
          width: 10px;
          height: 10px;
          border: 1px solid var(--gold-deep);
          opacity: 0.6;
        }
        .plate-corner.tl { top: 8px; left: 8px; border-right: none; border-bottom: none; }
        .plate-corner.tr { top: 8px; right: 8px; border-left: none; border-bottom: none; }
        .plate-corner.bl { bottom: 8px; left: 8px; border-right: none; border-top: none; }
        .plate-corner.br { bottom: 8px; right: 8px; border-left: none; border-top: none; }
        .plate-code {
          font-size: 0.66rem;
          letter-spacing: 0.14em;
          color: var(--bronze);
          font-weight: 600;
        }
        .plate-title {
          font-size: 1.08rem;
          margin: 8px 0 6px;
          color: var(--ivory);
          transition: color 0.3s;
        }
        .product-card:hover .plate-title {
          color: var(--gold-bright);
        }
        .plate-meta {
          font-size: 0.78rem;
          color: var(--bronze);
          margin-bottom: 18px;
        }
        .plate-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
          flex-wrap: wrap;
        }
        .plate-actions .btn {
          flex: 1;
          padding: 10px 14px;
        }
      `}</style>
    </div>
  );
}
