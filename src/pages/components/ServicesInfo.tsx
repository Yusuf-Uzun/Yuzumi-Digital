import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Information.module.css';

export default function ServicesInfo(){

  return (
    <motion.div>
      <motion.h1 style={{ color: "#f0eada" }}>GAMING</motion.h1>
    </motion.div>
);
  //   <motion.div
  //     className={styles.counterContainer}
  //     initial={{ opacity: 0, y: 50 }}
  //     transition={{ duration: 0.5 }}>
  //       <motion.h1 style={{ color: "#f0eada" }}>GAMING</motion.h1>
  //   </motion.div>
  // );
};
