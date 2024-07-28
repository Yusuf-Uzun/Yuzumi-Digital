import React, { useEffect, useState, useRef } from 'react';
import styles from '@/styles/Home.module.css';
import RotatingName from './components/RotatingName';
import AnimatedSquare from './components/AnimatedCircles';
import SuccessfulTopic from './components/SuccessfulTopic';
import SuccessfulInfo from './components/SuccessfulInfo';
import PartnersAnimation from './components/PartnersAnimation';

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 0); // Set isSticky based on the top position of stickyRef
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={styles.appBody}>
        <div className={styles.containerLeft}>
          <RotatingName />
        </div>
        <div className={styles.containerRight}>
          <AnimatedSquare />
        </div>
      </div>
      <div className={styles.appBody}>
        <div ref={stickyRef} className={styles.containerLeftSuccess}>
          <SuccessfulTopic />
        </div>
        <div className={styles.containerRightSuccess}>
          <SuccessfulInfo />
        </div>
      </div>
      <div className={styles.appBody}>
        <PartnersAnimation />
      </div>
    </>
  );
}
