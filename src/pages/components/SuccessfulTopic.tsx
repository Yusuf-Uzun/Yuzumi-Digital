import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

function Section({ children }: SectionProps) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          color: "#f0eada",
          fontSize: "2em"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function SuccessfulTopic() {
  return (
    <>
      <Section>"DEFINE SUCCESS"</Section>
    </>
  );
}
