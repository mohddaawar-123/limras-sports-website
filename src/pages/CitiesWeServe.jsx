import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import { useInquiry } from "../context/InquiryContext.jsx";
import { cities } from "../data/company.js";

export default function CitiesWeServe() {
  const [active, setActive] = useState(null);
  const { openInquiry } = useInquiry();

  return (
    <motion.div
      className="page cities-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO
        title="Cities We Serve — Pan-India Delivery"
        description="Limras Sports delivers premium trophies, shields and corporate awards across Delhi, Hyderabad, Bengaluru, Chennai, Kochi, Coimbatore, Moradabad and other major Indian cities."
        path="/cities-we-serve"
      />

      <section className="cities-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Pan-India Reach</span>
            <h1 className="display-1" style={{ marginTop: 16, maxWidth: 700 }}>
              Wherever the achievement, we deliver the recognition.
            </h1>
            <p className="lede" style={{ marginTop: 20, maxWidth: 560 }}>
              From our Moradabad workshop, Limras Sports dispatches trophies, shields and
              corporate awards to schools, sports bodies and corporates across India.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="cities-map-section section-pad">
        <div className="container cities-grid">
          <Reveal className="map-wrap">
            <div className="india-map">
              <svg viewBox="0 0 100 100" className="map-bg" aria-hidden="true">
                <path
                  d="M48 4 L58 8 L62 16 L70 18 L74 26 L72 34 L78 38 L80 48 L76 56 L78 64 L72 70 L70 78 L62 84 L58 92 L52 96 L48 90 L44 94 L40 86 L42 78 L36 72 L34 64 L30 58 L32 50 L26 44 L28 36 L24 28 L30 22 L32 14 L40 10 Z"
                  fill="rgba(201,162,75,0.04)"
                  stroke="rgba(201,162,75,0.25)"
                  strokeWidth="0.4"
                />
              </svg>
              {cities.map((c, i) => (
                <button
                  key={c.name}
                  className={`map-pin ${active === c.name ? "active" : ""}`}
                  style={{ left: `${c.x}%`, top: `${c.y}%`, "--delay": `${i * 0.05}s` }}
                  onMouseEnter={() => setActive(c.name)}
                  onFocus={() => setActive(c.name)}
                  onMouseLeave={() => setActive(null)}
                  onBlur={() => setActive(null)}
                  aria-label={c.name}
                >
                  <span className="map-pin-dot" />
                  <span className="map-pin-ring" />
                  {active === c.name && (
                    <span className="map-pin-tooltip">
                      <strong>{c.name}</strong>
                      <em>{c.note}</em>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="cities-list-wrap">
            <span className="eyebrow">Service Locations</span>
            <h2 className="display-3" style={{ margin: "14px 0 28px" }}>
              Major cities we deliver to
            </h2>
            <div className="cities-list">
              {cities.map((c) => (
                <div
                  key={c.name}
                  className={`city-chip ${active === c.name ? "active" : ""}`}
                  onMouseEnter={() => setActive(c.name)}
                  onMouseLeave={() => setActive(null)}
                >
                  <MapPin size={15} />
                  <div>
                    <strong>{c.name}</strong>
                    <span>{c.note}</span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 26, fontSize: "0.86rem" }}>
              Don't see your city listed? We deliver across India — reach out and we'll confirm
              dispatch timelines for your location.
            </p>
            <button className="btn btn-gold" style={{ marginTop: 20 }} onClick={() => openInquiry()}>
              Check Delivery to My City <ArrowUpRight size={16} />
            </button>
          </Reveal>
        </div>
      </section>

      <style>{`
        .cities-hero { padding: 160px 0 60px; border-bottom: 1px solid var(--line); }
        .cities-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .cities-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .india-map {
          position: relative;
          aspect-ratio: 1/1.05;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 8px;
          overflow: hidden;
        }
        .map-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .map-pin {
          position: absolute;
          width: 14px;
          height: 14px;
          transform: translate(-50%, -50%);
          animation: pin-appear 0.6s var(--delay, 0s) backwards;
        }
        @keyframes pin-appear {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .map-pin-dot {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gold);
          box-shadow: 0 0 12px rgba(201,162,75,0.8);
        }
        .map-pin-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid var(--gold);
          opacity: 0.5;
          animation: pin-pulse 2.4s infinite;
        }
        @keyframes pin-pulse {
          0% { transform: scale(0.7); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .map-pin.active .map-pin-dot {
          background: var(--gold-bright);
          width: 11px; height: 11px;
        }
        .map-pin-tooltip {
          position: absolute;
          bottom: 130%;
          left: 50%;
          transform: translateX(-50%);
          background: var(--black);
          border: 1px solid var(--line-bright);
          border-radius: 4px;
          padding: 8px 12px;
          white-space: nowrap;
          display: flex;
          flex-direction: column;
          z-index: 10;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .map-pin-tooltip strong { font-size: 0.78rem; color: var(--gold); }
        .map-pin-tooltip em { font-style: normal; font-size: 0.68rem; color: var(--bronze); }
        .cities-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        @media (max-width: 480px) { .cities-list { grid-template-columns: 1fr; } }
        .city-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 4px;
          transition: all 0.3s;
        }
        .city-chip.active {
          border-color: var(--gold);
          background: rgba(201,162,75,0.06);
        }
        .city-chip svg { color: var(--gold); flex-shrink: 0; }
        .city-chip div { display: flex; flex-direction: column; }
        .city-chip strong { font-size: 0.84rem; color: var(--ivory); }
        .city-chip span { font-size: 0.7rem; color: var(--bronze); }
      `}</style>
    </motion.div>
  );
}
