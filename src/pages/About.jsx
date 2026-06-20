import { motion } from "framer-motion";
import { Factory, Award, Users, Truck, ArrowUpRight, Hammer, Gem, PackageCheck } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import { useInquiry } from "../context/InquiryContext.jsx";
import { company } from "../data/company.js";

const capabilities = [
  { icon: Hammer, title: "Metal Casting & Forming", desc: "Precision metal trophy bodies cast and shaped in-house." },
  { icon: Gem, title: "UV Plate Printing", desc: "Sharp, fade-resistant printed plates for logos and citations." },
  { icon: Factory, title: "MDF Wood Finishing", desc: "Rosewood and mahogany-finish shields, hand-polished." },
  { icon: PackageCheck, title: "Bulk Packing & Dispatch", desc: "Reinforced packaging built for pan-India freight." },
];

const milestones = [
  { year: "Origin", text: "Founded in Moradabad — India's historic centre of metal craftsmanship — as a manufacturer of sports goods and trophies." },
  { year: "Growth", text: "Expanded into a full catalog of 85+ designs spanning trophies, shields and corporate awards." },
  { year: "Today", text: "Trusted by schools, sports academies and corporates across 14+ Indian cities for bulk and custom orders." },
];

export default function About() {
  const { openInquiry } = useInquiry();

  return (
    <motion.div
      className="page about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO
        title="About Us"
        description="Limras Sports is a Moradabad-based manufacturer of premium trophies, shields and corporate awards, combining traditional metal craftsmanship with modern finishing for schools, sports bodies and corporates across India."
        path="/about"
      />

      <section className="about-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h1 className="display-1" style={{ marginTop: 16, maxWidth: 760 }}>
              Crafted in Moradabad. <span className="text-gold-italic">Trusted nationwide.</span>
            </h1>
            <p className="lede" style={{ marginTop: 22, maxWidth: 600 }}>
              Limras Sports manufactures and supplies trophies, shields and award mementos from
              our workshop in Moradabad, Uttar Pradesh — a city whose metalworking heritage
              spans generations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-story section-pad">
        <div className="container about-story-grid">
          <Reveal>
            <div className="about-story-media">
              <img src="/images/products/eclipse-disc-1127.jpeg" alt="Limras Sports premium award craftsmanship" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Manufacturing Expertise</span>
            <h2 className="display-2" style={{ marginTop: 16 }}>
              Every trophy starts as raw metal and wood.
            </h2>
            <p style={{ marginTop: 20 }}>
              Moradabad has been India's centre of brass and metal craftsmanship for centuries.
              Limras Sports draws on that tradition — casting, shaping, polishing and finishing
              every trophy and shield in-house, rather than assembling from generic imported
              parts.
            </p>
            <p style={{ marginTop: 16 }}>
              Our catalog spans {company.stats.trophies} trophy variants and {company.stats.shields}{" "}
              shield designs, from compact 6-inch desk awards to towering 70-inch championship
              cups — each available with free logo and name engraving, regardless of order size.
            </p>
            <div className="about-cta-row">
              <button className="btn btn-gold" onClick={() => openInquiry()}>
                Discuss Your Order <ArrowUpRight size={16} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-quality section-pad">
        <div className="container">
          <div className="section-head center">
            <Reveal>
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                Quality Commitment
              </span>
              <h2 className="display-2">Production capabilities</h2>
              <p style={{ maxWidth: 540, margin: "16px auto 0" }}>
                Four core disciplines, refined under one roof, so every piece leaves Moradabad
                display-ready.
              </p>
            </Reveal>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="capability-card">
                  <c.icon size={24} strokeWidth={1.4} />
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-timeline section-pad">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <span className="eyebrow">Our Journey</span>
              <h2 className="display-2">Years of dedicated craftsmanship</h2>
            </Reveal>
          </div>

          <div className="timeline">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.1}>
                <div className="timeline-item">
                  <span className="timeline-year">{m.year}</span>
                  <p>{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-bulk section-pad">
        <div className="container about-bulk-grid">
          <Reveal>
            <div className="bulk-stat">
              <Users size={28} />
              <h3>Bulk Order Support</h3>
              <p>
                Dedicated production scheduling for schools, sports leagues, and corporates
                ordering 50, 500, or 5,000 pieces — with consistent quality across every batch
                and centralized logo printing.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bulk-stat">
              <Truck size={28} />
              <h3>Pan-India Delivery</h3>
              <p>
                Reliable freight dispatch from Moradabad to Delhi, Bengaluru, Hyderabad, Chennai,
                Kochi, Coimbatore and other major Indian cities, with reinforced packaging
                built for trophies and shields.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .about-hero { padding: 160px 0 70px; border-bottom: 1px solid var(--line); }
        .text-gold-italic {
          font-style: italic;
          font-family: var(--font-deco);
          color: var(--gold);
          font-weight: 600;
        }
        .about-story-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .about-story-grid { grid-template-columns: 1fr; gap: 36px; }
        }
        .about-story-media {
          aspect-ratio: 4/5;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid var(--line);
          background: linear-gradient(160deg, #16181f, #0a0b0e);
        }
        .about-story-media img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 30px;
        }
        .about-cta-row { margin-top: 30px; }
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        @media (max-width: 900px) { .capabilities-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px) { .capabilities-grid { grid-template-columns: 1fr; } }
        .capability-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 30px 24px;
          color: var(--gold);
          transition: border-color 0.3s, transform 0.3s;
        }
        .capability-card:hover { border-color: var(--line-bright); transform: translateY(-4px); }
        .capability-card h3 { color: var(--ivory); font-size: 1.02rem; margin: 16px 0 8px; }
        .capability-card p { font-size: 0.85rem; }
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-left: 1px solid var(--line-bright);
        }
        .timeline-item {
          padding: 0 0 40px 32px;
          position: relative;
        }
        .timeline-item::before {
          content: "";
          position: absolute;
          left: -6px;
          top: 4px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--gold);
          box-shadow: 0 0 0 4px var(--black), 0 0 0 5px var(--line-bright);
        }
        .timeline-year {
          font-family: var(--font-display);
          font-size: 1.3rem;
          color: var(--gold);
          font-weight: 700;
          display: block;
          margin-bottom: 8px;
        }
        .timeline-item p { max-width: 560px; }
        .about-bulk-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
        }
        @media (max-width: 760px) { .about-bulk-grid { grid-template-columns: 1fr; } }
        .bulk-stat {
          background: linear-gradient(155deg, var(--panel-raised), var(--panel));
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 42px;
          color: var(--gold);
        }
        .bulk-stat h3 { color: var(--ivory); margin: 18px 0 10px; font-size: 1.25rem; }
      `}</style>
    </motion.div>
  );
}
