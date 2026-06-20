import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useInquiry } from "../context/InquiryContext.jsx";
import Trophy3DBoundary from "./Trophy3DBoundary.jsx";
import { company } from "../data/company.js";

const Trophy3D = lazy(() => import("./Trophy3D.jsx"));

function StaticTrophyFallback() {
  return (
    <div className="trophy-fallback">
      <img src="/images/products/eclipse-disc-1127.jpeg" alt="Limras Sports premium trophy" />
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { openInquiry } = useInquiry();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-bg" style={{ scale }} aria-hidden="true">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-vignette" />
      </motion.div>

      <motion.div className="hero-content container" style={{ y, opacity }}>
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Est. Moradabad, India · 85+ Designs
            </motion.span>

            <h1 className="hero-title">
              <motion.span
                className="hero-line"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Celebrating
              </motion.span>
              <motion.span
                className="hero-line hero-line-gold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Excellence
              </motion.span>
              <motion.span
                className="hero-line"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Through Premium Awards
              </motion.span>
            </h1>

            <motion.p
              className="lede hero-lede"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Handcrafted trophies, shields and corporate awards — engineered for the moment
              an achievement becomes a memory.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/products" className="btn btn-gold">
                Explore Products <ArrowUpRight size={16} />
              </Link>
              <button className="btn btn-ghost" onClick={() => openInquiry()}>
                Request a Quote
              </button>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <div>
                <strong>{company.stats.products}+</strong>
                <span>Product Designs</span>
              </div>
              <div className="hero-stat-divider" />
              <div>
                <strong>{company.stats.trophies}</strong>
                <span>Trophy Variants</span>
              </div>
              <div className="hero-stat-divider" />
              <div>
                <strong>{company.stats.shields}</strong>
                <span>Shield Designs</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-trophy-stage"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Trophy3DBoundary fallback={<StaticTrophyFallback />}>
              <Suspense fallback={<StaticTrophyFallback />}>
                <Trophy3D className="trophy-canvas" />
              </Suspense>
            </Trophy3DBoundary>
            <div className="trophy-stage-glow" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="hero-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span>Scroll</span>
        <ArrowDown size={14} className="bounce" />
      </motion.div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 90px;
        }
        .hero-bg {
          position: absolute;
          inset: -10%;
          z-index: 0;
        }
        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
        }
        .hero-glow-1 {
          width: 600px;
          height: 600px;
          top: -10%;
          right: -5%;
          background: radial-gradient(circle, rgba(201,162,75,0.16), transparent 70%);
        }
        .hero-glow-2 {
          width: 500px;
          height: 500px;
          bottom: -10%;
          left: -10%;
          background: radial-gradient(circle, rgba(120,90,200,0.08), transparent 70%);
        }
        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(8,9,12,0.9) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: 24px;
        }
        @media (max-width: 980px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
        }
        .hero-copy {
          max-width: 620px;
        }
        .hero-title {
          margin-top: 24px;
          font-size: clamp(2.6rem, 5.6vw, 4.6rem);
          font-weight: 700;
        }
        .hero-line {
          display: block;
          overflow: hidden;
        }
        .hero-line-gold {
          background: linear-gradient(135deg, var(--gold-bright), var(--gold) 50%, var(--gold-deep));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-style: italic;
          font-weight: 600;
        }
        .hero-lede {
          margin-top: 26px;
          max-width: 460px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 40px;
          flex-wrap: wrap;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 64px;
        }
        .hero-stats div:not(.hero-stat-divider) {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .hero-stats strong {
          font-family: var(--font-display);
          font-size: 2rem;
          color: var(--gold);
          font-weight: 700;
        }
        .hero-stats span {
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--bronze);
        }
        .hero-stat-divider {
          width: 1px;
          height: 36px;
          background: var(--line-bright);
        }
        .hero-trophy-stage {
          position: relative;
          height: clamp(380px, 50vw, 640px);
        }
        .trophy-canvas {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 1;
        }
        .trophy-stage-glow {
          position: absolute;
          inset: 10%;
          background: radial-gradient(circle, rgba(201,162,75,0.18), transparent 65%);
          z-index: 0;
          pointer-events: none;
        }
        .trophy-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .trophy-fallback img {
          max-height: 90%;
          object-fit: contain;
          filter: drop-shadow(0 30px 50px rgba(0,0,0,0.6));
          border-radius: 8px;
        }
        @media (max-width: 980px) {
          .hero-trophy-stage {
            order: -1;
            height: 340px;
          }
        }
        .hero-scroll-cue {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 0.66rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--bronze);
          z-index: 1;
        }
        .bounce {
          animation: bounce-y 1.8s infinite ease-in-out;
          color: var(--gold);
        }
        @keyframes bounce-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @media (max-width: 640px) {
          .hero-stats { gap: 18px; }
          .hero-stats strong { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
