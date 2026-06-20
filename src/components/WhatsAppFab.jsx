import { motion } from "framer-motion";
import { whatsappLink } from "../utils/inquiry.js";

export default function WhatsAppFab() {
  const link = whatsappLink(
    "Hello Limras Sports, I'd like to enquire about your trophies & awards."
  );

  return (
    <>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab"
        aria-label="Chat with Limras Sports on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="wa-pulse" aria-hidden="true" />
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.005c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm5.83 14.07c-.25.7-1.24 1.28-2.02 1.45-.54.11-1.24.2-3.6-.77-3.02-1.25-4.97-4.32-5.12-4.52-.15-.2-1.22-1.62-1.22-3.1s.77-2.2 1.04-2.5c.27-.3.6-.37.8-.37.2 0 .4.002.58.01.18.008.43-.07.68.52.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.3.38-.43.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.65-.15.27.1 1.7.8 1.99.95.3.15.5.22.57.35.07.13.07.75-.18 1.45z" />
        </svg>
      </motion.a>
      <style>{`
        .wa-fab {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25d366, #128c4a);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 900;
          box-shadow: 0 8px 30px rgba(18, 140, 74, 0.45);
        }
        .wa-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.5);
          animation: wa-pulse 2.4s infinite var(--ease-out);
        }
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @media (max-width: 640px) {
          .wa-fab {
            bottom: 20px;
            right: 20px;
            width: 52px;
            height: 52px;
          }
        }
      `}</style>
    </>
  );
}
