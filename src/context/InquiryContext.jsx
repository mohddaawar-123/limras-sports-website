import { createContext, useContext, useState, useCallback } from "react";

const InquiryContext = createContext(null);

export function InquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState({});

  const openInquiry = useCallback((data = {}) => {
    setPrefill(data);
    setIsOpen(true);
  }, []);

  const closeInquiry = useCallback(() => setIsOpen(false), []);

  return (
    <InquiryContext.Provider value={{ isOpen, prefill, openInquiry, closeInquiry }}>
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used within InquiryProvider");
  return ctx;
}
