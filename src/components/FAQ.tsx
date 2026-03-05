"use client";

import { useState } from "react";

interface FAQStyles {
  faqList: string;
  faqItem: string;
  faqItemOpen?: string;
  faqQuestion: string;
  faqAnswer: string;
  faqIcon?: string;
}

interface FAQProps {
  styles: FAQStyles;
  items: { q: string; a: string }[];
}

export default function FAQ({ styles: s, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={s.faqList}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`${s.faqItem} ${isOpen ? s.faqItemOpen || "" : ""}`}>
            <button
              className={s.faqQuestion}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className={s.faqIcon || ""} style={{
                transition: "transform 300ms",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                fontSize: 18,
                flexShrink: 0,
              }}>
                &#9662;
              </span>
            </button>
            <div
              className={s.faqAnswer}
              style={{
                maxHeight: isOpen ? 500 : 0,
                overflow: "hidden",
                transition: "max-height 400ms cubic-bezier(0,0,0.2,1), opacity 300ms",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p style={{ paddingTop: 8, paddingBottom: 16 }}>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
