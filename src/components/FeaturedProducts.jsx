import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import ProductCard from "./ProductCard.jsx";
import { heroProducts } from "../data/products.js";

export default function FeaturedProducts() {
  const featured = heroProducts.slice(0, 4);

  return (
    <section className="featured section-pad">
      <div className="container">
        <div className="featured-head">
          <Reveal>
            <span className="eyebrow">Signature Collection</span>
            <h2 className="display-2">
              Award designs built to <span className="text-gold-italic">hold a room.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/products" className="btn btn-ghost">
              View All Products <ArrowUpRight size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="featured-grid">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .featured-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 56px;
        }
        .featured-head h2 {
          margin-top: 16px;
          max-width: 560px;
        }
        .text-gold-italic {
          font-style: italic;
          font-family: var(--font-deco);
          color: var(--gold);
          font-weight: 600;
        }
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        }
        @media (max-width: 980px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .featured-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
