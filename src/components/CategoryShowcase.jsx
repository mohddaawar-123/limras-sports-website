import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal.jsx";

const cats = [
  {
    name: "School Trophies",
    desc: "Academic & sports day recognition",
    image: "/images/catalog-clean/ls-145.jpg",
    query: "School Trophies",
  },
  {
    name: "Sports Trophies",
    desc: "Cricket, badminton & tournament cups",
    image: "/images/products/sports-icons-1113.jpeg",
    query: "Sports Trophies",
  },
  {
    name: "Corporate Awards",
    desc: "Leadership & milestone recognition",
    image: "/images/products/corporate-star-1125.jpeg",
    query: "Corporate Awards",
  },
  {
    name: "Wooden Shields",
    desc: "Service awards & heritage plaques",
    image: "/images/products/medallion-shield-1121.jpeg",
    query: "Wooden Shields",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="cat-showcase section-pad">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Browse by Collection</span>
            <h2 className="display-2">Four collections. One standard of craft.</h2>
          </Reveal>
        </div>

        <div className="cat-grid">
          {cats.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <Link
                to={`/products?category=${encodeURIComponent(c.query)}`}
                className="cat-card"
              >
                <img src={c.image} alt={c.name} loading="lazy" />
                <div className="cat-card-overlay" />
                <div className="cat-card-body">
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                  <span className="cat-card-link">
                    Explore <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        @media (max-width: 980px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .cat-grid { grid-template-columns: 1fr; }
        }
        .cat-card {
          position: relative;
          aspect-ratio: 3 / 4;
          border-radius: 4px;
          overflow: hidden;
          display: block;
          border: 1px solid var(--line);
        }
        .cat-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          transition: transform 0.7s var(--ease-out);
        }
        .cat-card:hover img {
          transform: scale(1.08);
        }
        .cat-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8,9,12,0.1) 30%, rgba(8,9,12,0.95) 100%);
        }
        .cat-card-body {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px 20px;
        }
        .cat-card-body h3 {
          font-size: 1.2rem;
          margin-bottom: 6px;
        }
        .cat-card-body p {
          font-size: 0.8rem;
          margin-bottom: 14px;
        }
        .cat-card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 600;
          transition: gap 0.3s;
        }
        .cat-card:hover .cat-card-link {
          gap: 10px;
        }
      `}</style>
    </section>
  );
}
