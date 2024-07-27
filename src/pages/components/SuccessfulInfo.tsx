import React, { useEffect, useState } from 'react';
import styles from '@/styles/Information.module.css';
import Counter from './Counter';

const SuccessfulInfo = () => {
    const counters = [
        { start: 30, end: 82, duration: 5, label: "Happy Customers" },
        { start: 30, end: 225, duration: 5, label: "More Visibility" },
        { start: 30, end: 100, duration: 5, label: "Success" }
    ];

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.successfulInfoContainer}>
            {counters.map((counter, index) => (
                <Counter
                    key={index}
                    start={counter.start}
                    end={counter.end}
                    duration={counter.duration}
                    label={counter.label}
                    index={index}
                    scrollY={scrollY}
                />
            ))}
        </div>
    );
};

export default SuccessfulInfo;
