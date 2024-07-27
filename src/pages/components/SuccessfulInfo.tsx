import React, { useEffect } from 'react';
import styles from '@/styles/Information.module.css';
import { animate, motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SuccessfulInfo = () => {
    const counters = [
        { start: 30, end: 82, duration: 5, label: "Happy Customers" },
        { start: 30, end: 225, duration: 5, label: "More Visibility" },
        { start: 30, end: 100, duration: 5, label: "Success" }
    ];

    const count = useMotionValue(70);
    const roundedCount = useTransform(count, value => `${Math.round(value)}%`);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.5, // Trigger when 50% of the component is in view
    });

    useEffect(() => {
        if (inView) {
            const animation = animate(count, 100, { duration: 4 });
            return animation.stop;
        }
    }, [inView, count]);

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }
            });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={controls}
            className="box"
        >
            <motion.h1 style={{ color: "#f0eada" }}>{roundedCount}</motion.h1>
            <p className={styles.label}>Happy Customers</p>
        </motion.div>
    );
};

export default SuccessfulInfo;
