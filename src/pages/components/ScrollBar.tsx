import React from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "@/styles/Scroll.module.css";

const ScrollBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <motion.div
            className={styles.progressBar}
            style={{ scaleX }}
        />
    );
};

export default ScrollBar;