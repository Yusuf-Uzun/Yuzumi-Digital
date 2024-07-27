import React, { useEffect } from 'react';
import styles from '@/styles/Information.module.css';
import { animate, motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
    start: number;
    end: number;
    duration: number;
    label: string;
}

const SuccessfulInfo: React.FC = () => {
    const counters = [
        { start: 60, end: 82, duration: 3, label: "Happy Customers" },
        { start: 150, end: 225, duration: 3, label: "More Visibility" },
        { start: 70, end: 100, duration: 3, label: "More Success" }
    ];

    return (
        <div>
            {counters.map((counter, index) => (
                <Counter
                    key={index}
                    start={counter.start}
                    end={counter.end}
                    duration={counter.duration}
                    label={counter.label}
                />
            ))}
        </div>
    );
};

const Counter: React.FC<CounterProps> = ({ start, end, duration, label }) => {
    const count = useMotionValue(start);
    const roundedCount = useTransform(count, value => `${Math.round(value)}%`);
    const controls = useAnimation();
    const [ref, inView, entry] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            const animation = animate(count, end, { duration });
            return () => animation.stop();
        } else {
            count.set(start); // Reset the count to start value when it leaves view
        }
    }, [inView, count, start, end, duration]);

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
        } else {
            controls.start({ opacity: 0, scale: 0.5 });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={controls}
            className="box"
        >
            <motion.h1 style={{ color: "#461d7c" }}>{roundedCount}</motion.h1>
            <p className={styles.label}>{label}</p>
        </motion.div>
    );
};

export default SuccessfulInfo;