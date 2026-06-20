import { Factory, Gem, Truck, ShieldCheck, PenTool, Clock } from "lucide-react";
import Reveal from "./Reveal.jsx";

const features = [
  {
    icon: Factory,
    title: "In-House Manufacturing",
    desc: "Every piece is forged, cast and finished at our own Moradabad facility — no outsourced production, no compromise on quality control.",
  },
  {
    icon: PenTool,
    title: "Free Custom Engraving",
    desc: "Logo and name printing included on every order, from a single trophy to a 500-piece corporate batch.",
  },
  {
    icon: Gem,
    title: "85+ Curated Designs",
    desc: "From 6-inch desk awards to 70-inch championship cups — a catalog spanning every recognition occasion.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    desc: "Reliable dispatch to Delhi, Bengaluru, Hyderabad, Chennai, Kochi and 14+ major cities across India.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last",
    desc: "Premium polish, UV-printed plates and reinforced bases engineered to stay display-ready for decades.",
  },
  {
    icon: Clock,
    title: "Bulk Order Ready",
    desc: "Dedicated production lines for schools, sports leagues and corporates with fast turnaround on large quantities.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why section-pad">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              The Limras Standard
            </span>
            <h2 className="display-2">Why institutions trust Limras Sports</h2>
          </Reveal>
        </div>

        <div className="why-grid">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="why-card">
                <div className="why-icon">
                  <f.icon size={22} strokeWidth={1.5} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }
        @media (max-width: 860px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .why-grid { grid-template-columns: 1fr; }
        }
        .why-card {
          background: var(--black);
          padding: 44px 36px;
          transition: background 0.4s var(--ease-out);
        }
        .why-card:hover {
          background: var(--panel);
        }
        .why-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid var(--line-bright);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          margin-bottom: 22px;
        }
        .why-card h3 {
          font-size: 1.15rem;
          margin-bottom: 10px;
        }
        .why-card p {
          font-size: 0.9rem;
        }
      `}</style>
    </section>
  );
}
