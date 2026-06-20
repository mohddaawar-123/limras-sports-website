import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { company } from "../data/company.js";
import { whatsappLink } from "../utils/inquiry.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
              <path
                d="M22 16h20v8c0 6-4.5 10.5-10 10.5S22 30 22 24v-8z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M22 18h-6a4 4 0 0 0 4 8" stroke="currentColor" strokeWidth="2" />
              <path d="M42 18h6a4 4 0 0 1-4 8" stroke="currentColor" strokeWidth="2" />
              <rect x="30" y="34" width="4" height="8" fill="currentColor" />
              <rect x="24" y="42" width="16" height="3" rx="1" fill="currentColor" />
              <rect x="27" y="46" width="10" height="3" rx="1" fill="currentColor" />
            </svg>
            <span>
              <strong>LIMRAS</strong>
              <em>SPORTS</em>
            </span>
          </Link>
          <p className="footer-tagline">{company.tagline}</p>
          <p className="footer-desc">
            Manufacturers &amp; suppliers of premium trophies, shields and corporate awards,
            handcrafted in Moradabad — India's capital of metal craftsmanship — and trusted by
            schools, sports bodies and corporates nationwide.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cities-we-serve">Cities We Serve</Link>
          <Link to="/catalog">Digital Catalog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Collections</h4>
          <Link to="/products?category=School+Trophies">School Trophies</Link>
          <Link to="/products?category=Sports+Trophies">Sports Trophies</Link>
          <Link to="/products?category=Corporate+Awards">Corporate Awards</Link>
          <Link to="/products?category=Wooden+Shields">Wooden Shields</Link>
        </div>

        <div className="footer-col footer-contact">
          <h4>Reach Us</h4>
          <a href={`tel:+${company.phoneRaw}`} className="footer-contact-line">
            <Phone size={15} /> {company.phone}
          </a>
          <a href={whatsappLink("Hello Limras Sports, I'd like to enquire about your products.")} target="_blank" rel="noopener noreferrer" className="footer-contact-line">
            <ArrowUpRight size={15} /> WhatsApp: {company.whatsapp}
          </a>
          <a href={`mailto:${company.email}`} className="footer-contact-line">
            <Mail size={15} /> {company.email}
          </a>
          <span className="footer-contact-line">
            <MapPin size={15} /> {company.address.line1}, {company.address.line2}
          </span>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="gold-rule" style={{ marginBottom: 24 }} />
        <div className="footer-bottom-row">
          <p>
            © {year} Limras Sports. All rights reserved. GSTIN: {company.gstin}
          </p>
          <p className="footer-credit">Crafted with precision in Moradabad, Uttar Pradesh.</p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: var(--black-soft);
          border-top: 1px solid var(--line);
          padding-top: 100px;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap: 48px;
          padding-bottom: 70px;
        }
        @media (max-width: 980px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--gold);
          margin-bottom: 20px;
        }
        .footer-logo span {
          display: flex;
          flex-direction: column;
          color: var(--ivory);
          line-height: 1;
        }
        .footer-logo strong {
          font-family: var(--font-display);
          font-size: 1.1rem;
          letter-spacing: 0.08em;
        }
        .footer-logo em {
          font-style: normal;
          font-size: 0.6rem;
          letter-spacing: 0.4em;
          color: var(--gold);
          margin-top: 4px;
        }
        .footer-tagline {
          font-family: var(--font-deco);
          font-style: italic;
          color: var(--gold);
          font-size: 1.05rem;
          margin-bottom: 14px;
        }
        .footer-desc {
          max-width: 380px;
          font-size: 0.9rem;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-col h4 {
          font-family: var(--font-body);
          font-size: 0.74rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--bronze);
          margin-bottom: 6px;
          font-weight: 600;
        }
        .footer-col a {
          font-size: 0.92rem;
          color: var(--ivory-dim);
          transition: color 0.25s;
          width: fit-content;
        }
        .footer-col a:hover {
          color: var(--gold);
        }
        .footer-contact-line {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 0.88rem;
          color: var(--ivory-dim);
          line-height: 1.4;
        }
        .footer-contact-line svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--gold);
        }
        .footer-bottom {
          padding-bottom: 36px;
        }
        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 0.78rem;
          color: var(--bronze);
        }
      `}</style>
    </footer>
  );
}
