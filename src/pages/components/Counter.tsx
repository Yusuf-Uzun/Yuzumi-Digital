import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Information.module.css';

interface CounterProps {
  start: number;
  end: number;
  duration: number;
  label: string;
  index: number;
  scrollY: number;
}

const Counter = ({ start, end, label, index, scrollY }: CounterProps) => {
  const count = useMotionValue(start);
  const roundedCount = useTransform(count, value => `${Math.round(value)}%`);
  const divRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const visibilityThreshold = 300; // Anzahl der Pixel, die das Element sichtbar bleibt

    if (scrollY > (index * 500) && scrollY < ((index + 1) * 500) + visibilityThreshold) {
      setIsVisible(true);
      count.set(end);
    } else if (scrollY < (index * 500) || scrollY > ((index + 1) * 500) + visibilityThreshold) {
      setIsVisible(false);
      count.set(start);
    }
  }, [scrollY, end, start, index]);

  return (
    <motion.div
      ref={divRef}
      className={`${styles.counterContainer} ${isVisible ? styles.visible : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 style={{ color: "#f0eada" }}>{roundedCount}</motion.h1>
      <p className={styles.label}>{label}</p>
    </motion.div>
  );
};

export default Counter;