import Reveal from "./Reveal.jsx";
import { company } from "../data/company.js";

const highlights = [
  { value: `${company.stats.products}+`, label: "Curated Designs" },
  { value: `${company.stats.trophies}`, label: "Trophy Collections" },
  { value: `${company.stats.shields}`, label: "Shield Variants" },
  { value: "14+", label: "Cities Served" },
  { value: "100%", label: "Custom Engraving" },
];

export default function HighlightsStrip() {
  return (
    <section className="highlights-strip">
      <div className="container">
        <Reveal>
          <div className="highlights-row">
            {highlights.map((h, i) => (
              <div className="highlight-item" key={h.label}>
                <span className="highlight-value">{h.value}</span>
                <span className="highlight-label">{h.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .highlights-strip {
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 46px 0;
          background: var(--black-soft);
        }
        .highlights-row {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 28px;
        }
        .highlight-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex: 1;
          min-width: 120px;
        }
        .highlight-value {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 2.4vw, 2.2rem);
          font-weight: 700;
          background: linear-gradient(135deg, var(--gold-bright), var(--gold-deep));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .highlight-label {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--bronze);
          text-align: center;
        }
      `}</style>
    </section>
  );
}
