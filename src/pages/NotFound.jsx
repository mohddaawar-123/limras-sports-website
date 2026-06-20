import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <motion.div
      className="page not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" noindex />
      <div className="container nf-inner">
        <span className="eyebrow" style={{ justifyContent: "center" }}>Error 404</span>
        <h1 className="display-1" style={{ marginTop: 16 }}>This trophy isn't on the shelf.</h1>
        <p className="lede" style={{ margin: "20px auto 0", maxWidth: 460 }}>
          The page you're looking for may have moved. Let's get you back to the collection.
        </p>
        <Link to="/" className="btn btn-gold" style={{ marginTop: 36 }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
      <style>{`
        .not-found { min-height: 90vh; display: flex; align-items: center; }
        .nf-inner { text-align: center; padding: 160px 0 80px; }
      `}</style>
    </motion.div>
  );
}
