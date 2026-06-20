import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { allProducts, categories } from "../data/products.js";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  function selectCategory(cat) {
    setActiveCategory(cat);
    if (cat === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams, { replace: true });
  }

  const filtered = useMemo(() => {
    return allProducts
      .filter((p) => {
        const matchesCategory = activeCategory === "All" || p.displayCategory === activeCategory;
        const matchesQuery =
          !query ||
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.material.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        const aClean = a.cleanPhoto !== false ? 1 : 0;
        const bClean = b.cleanPhoto !== false ? 1 : 0;
        return bClean - aClean;
      });
  }, [activeCategory, query]);

  return (
    <motion.div
      className="page products-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO
        title="Trophies, Shields & Corporate Awards Catalog"
        description="Browse 85+ premium trophy, shield and corporate award designs from Limras Sports — school trophies, sports trophies, corporate awards, wooden shields and medals."
        path="/products"
      />

      <section className="products-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Full Catalog</span>
            <h1 className="display-1" style={{ marginTop: 16 }}>
              Our Products
            </h1>
            <p className="lede" style={{ marginTop: 18, maxWidth: 560 }}>
              {allProducts.length} curated designs across trophies, shields and corporate
              awards — every piece available with custom logo and name printing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="products-toolbar">
        <div className="container toolbar-inner">
          <div className="filter-tabs">
            {categories.map((c) => (
              <button
                key={c}
                className={`filter-tab ${activeCategory === c ? "active" : ""}`}
                onClick={() => selectCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="search-box">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search by name or material..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search products"
            />
          </div>
        </div>
      </section>

      <section className="products-grid-section section-pad" style={{ paddingTop: 60 }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div className="no-results">
              <p>No products match your search. Try a different category or term.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filtered.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .products-hero {
          padding: 160px 0 60px;
          border-bottom: 1px solid var(--line);
        }
        .products-toolbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(8,9,12,0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--line);
          padding: 20px 0;
        }
        .toolbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .filter-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .filter-tab {
          padding: 9px 18px;
          font-size: 0.76rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--ivory-dim);
          border: 1px solid var(--line);
          border-radius: 30px;
          transition: all 0.3s var(--ease-out);
          white-space: nowrap;
        }
        .filter-tab:hover {
          border-color: var(--line-bright);
          color: var(--ivory);
        }
        .filter-tab.active {
          background: var(--gold);
          color: var(--black);
          border-color: var(--gold);
          font-weight: 600;
        }
        .search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 30px;
          padding: 10px 18px;
          min-width: 240px;
          color: var(--bronze);
        }
        .search-box input {
          background: none;
          border: none;
          outline: none;
          color: var(--ivory);
          font-size: 0.85rem;
          width: 100%;
        }
        .search-box input::placeholder { color: var(--bronze); }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        }
        @media (max-width: 1080px) {
          .products-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 760px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .products-grid { grid-template-columns: 1fr; }
        }
        .no-results {
          text-align: center;
          padding: 80px 0;
        }
      `}</style>
    </motion.div>
  );
}
