// index.tsx
import styles from '@/styles/Home.module.css';
import RotatingName from './components/RotatingName';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import AnimatedSquare from './components/AnimatedCircles';
import Information from './components/Information';

export default function Home() {
  return (
    <div>
      <ParallaxProvider>
        <Parallax speed={-50}>
          <div className={styles.appBody}>
            <div className={styles.containerLeft}>
              <RotatingName />
            </div>
            <div className={styles.containerRight}>
              <AnimatedSquare />
            </div>
          </div>
        </Parallax>
        <Parallax speed={50}>
          <div className={styles.appBody}>
            <div className={styles.containerSecondPage}>
              <Information />
            </div>

          </div>
        </Parallax>  
      </ParallaxProvider>
    </div>
  );
}