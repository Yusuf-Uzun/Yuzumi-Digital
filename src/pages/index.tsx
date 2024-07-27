// index.tsx
import styles from '@/styles/Home.module.css';
import RotatingName from './components/RotatingName';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import AnimatedSquare from './components/AnimatedCircles';
import SuccessfulTopic from './components/SuccessfulTopic';
import SuccessfulInfo from './components/SuccessfulInfo';

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
            <div className={styles.containerLeft}>
              <SuccessfulTopic />
            </div>
            <div className={styles.containerRightBlack}>
              <SuccessfulInfo />
            </div>

          </div>
        </Parallax>  
      </ParallaxProvider>
    </div>
  );
}