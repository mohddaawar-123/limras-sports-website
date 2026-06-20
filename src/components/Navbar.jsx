import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useInquiry } from "../context/InquiryContext.jsx";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/cities-we-serve", label: "Cities We Serve" },
  { to: "/catalog", label: "Catalog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openInquiry } = useInquiry();
  const location = useLocation();
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > lastScrollY.current && y > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? "is-scrolled" : ""}`}
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-inner container">
          <Link to="/" className="brand" aria-label="Limras Sports — Home">
            <svg width="34" height="34" viewBox="0 0 64 64" fill="none">
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
            <span className="brand-text">
              <strong>LIMRAS</strong>
              <em>SPORTS</em>
            </span>
          </Link>

          <nav className="navbar-links" aria-label="Primary">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">
            <button className="btn btn-gold btn-sm" onClick={() => openInquiry()}>
              Request a Quote <ArrowUpRight size={14} />
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="mobile-menu-links" aria-label="Mobile">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.button
                className="btn btn-gold"
                style={{ marginTop: 24, width: "100%" }}
                onClick={() => openInquiry()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Request a Quote
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 22px 0;
          transition: padding 0.4s var(--ease-out), background 0.4s var(--ease-out), border-color 0.4s var(--ease-out);
          border-bottom: 1px solid transparent;
        }
        .navbar.is-scrolled {
          padding: 14px 0;
          background: rgba(8, 9, 12, 0.78);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--line);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--gold);
          flex-shrink: 0;
        }
        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          color: var(--ivory);
        }
        .brand-text strong {
          font-family: var(--font-display);
          font-size: 1.05rem;
          letter-spacing: 0.08em;
          font-weight: 700;
        }
        .brand-text em {
          font-style: normal;
          font-size: 0.6rem;
          letter-spacing: 0.4em;
          color: var(--gold);
          margin-top: 4px;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .nav-link {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: var(--ivory-dim);
          text-transform: uppercase;
          position: relative;
          padding: 4px 0;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.35s var(--ease-out);
        }
        .nav-link:hover {
          color: var(--ivory);
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .nav-link.active {
          color: var(--gold);
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .mobile-toggle {
          display: none;
          color: var(--ivory);
        }
        @media (max-width: 980px) {
          .navbar-links {
            display: none;
          }
          .navbar-actions .btn {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(8, 9, 12, 0.98);
          backdrop-filter: blur(20px);
          padding: 110px 32px 40px;
          display: flex;
          flex-direction: column;
        }
        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .mobile-nav-link {
          font-family: var(--font-display);
          font-size: 1.7rem;
          padding: 14px 0;
          border-bottom: 1px solid var(--line);
          color: var(--ivory-dim);
        }
        .mobile-nav-link.active {
          color: var(--gold);
        }
      `}</style>
    </>
  );
}
