"use client";

import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;
        const buttonId = `faq-question-${index}`;

        return (
          <article className="faq-card" data-open={isOpen} key={item.question}>
            <h3>
              <button
                aria-controls={answerId}
                aria-expanded={isOpen}
                className="faq-question"
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                {item.question}
              </button>
            </h3>
            <div
              aria-labelledby={buttonId}
              className="faq-answer"
              hidden={!isOpen}
              id={answerId}
              role="region"
            >
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
