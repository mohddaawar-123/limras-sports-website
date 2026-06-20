import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.7,
  once = true,
  amount = 0.1,
  className = "",
  as = "div",
}) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -120px 0px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
