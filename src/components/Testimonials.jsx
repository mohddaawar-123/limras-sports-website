import { Quote } from "lucide-react";
import Reveal from "./Reveal.jsx";

const testimonials = [
  {
    quote:
      "We ordered a full set of cricket tournament trophies — Best Batsman, Best Bowler, Man of the Match — and the finish exceeded what we'd seen anywhere else at the price point. Engraving was sharp and delivery was on schedule.",
    role: "Sports Academy, Uttar Pradesh",
    category: "Cricket Tournament Trophies",
  },
  {
    quote:
      "Bulk order for our annual school function — 120 trophies across three sizes. Limras handled the custom name printing on every single piece without a single error.",
    role: "School Administrator, North India",
    category: "School Annual Day Awards",
  },
  {
    quote:
      "The corporate recognition shields we ordered for our service awards looked genuinely premium — the kind of piece that earns its place on someone's desk for years.",
    role: "HR Team, Corporate Client",
    category: "Employee Recognition Shields",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section-pad">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Client Experience
            </span>
            <h2 className="display-2">What our clients say</h2>
            <p style={{ maxWidth: 540, margin: "16px auto 0" }}>
              Representative feedback from schools, sports bodies and corporates we've
              partnered with on bulk and custom orders.
            </p>
          </Reveal>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="testimonial-card">
                <Quote size={26} className="testimonial-quote-icon" />
                <p className="testimonial-text">{t.quote}</p>
                <div className="gold-rule" style={{ margin: "20px 0" }} />
                <div className="testimonial-meta">
                  <span className="testimonial-role">{t.role}</span>
                  <span className="testimonial-category">{t.category}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        @media (max-width: 900px) {
          .testimonial-grid { grid-template-columns: 1fr; max-width: 540px; margin: 0 auto; }
        }
        .testimonial-card {
          background: linear-gradient(155deg, var(--panel-raised), var(--panel));
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
        }
        .testimonial-quote-icon {
          color: var(--gold-deep);
          margin-bottom: 16px;
        }
        .testimonial-text {
          font-family: var(--font-deco);
          font-size: 1.08rem;
          font-style: italic;
          color: var(--ivory-dim);
          line-height: 1.6;
          flex: 1;
        }
        .testimonial-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .testimonial-role {
          font-size: 0.88rem;
          color: var(--ivory);
          font-weight: 600;
        }
        .testimonial-category {
          font-size: 0.74rem;
          color: var(--gold);
          letter-spacing: 0.04em;
        }
      `}</style>
    </section>
  );
}
