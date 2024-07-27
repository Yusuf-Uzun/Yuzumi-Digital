import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Information.module.css';

interface CounterProps {
  start: number;
  label: string;
}

const Counter = ({ start, label }: CounterProps) => {
  const count = useMotionValue(start);
  const roundedCount = useTransform(count, value => `${Math.round(value)}%`);


  return (
    <motion.div
      className={styles.counterContainer}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 style={{ color: "#f0eada" }}>{roundedCount}</motion.h1>
      <p className={styles.label}>{label}</p>
    </motion.div>
  );
};

export default Counter;