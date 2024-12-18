import { useInView } from 'framer-motion';
import React, { useRef, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

function Section({ children }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          color: "#f0eada"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Information() {
  return (
    <>
      <Section>First Section</Section>
    </>
  );
}