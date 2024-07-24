// index.tsx
import styles from '@/styles/Home.module.css';
import RotatingName from './components/RotatingName';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div>
      <ParallaxProvider>
        <Parallax speed={-50}>
          <div className={styles.appBody}>
            <div className={styles.containerLeft}>
              <RotatingName />
            </div>
            <div className={styles.containerRight} />
          </div>
        </Parallax>
        <Parallax speed={50}> {/* Geschwindigkeit angepasst für visuellen Effekt */}
          <div className={styles.containerLeft}>
            <RotatingName />
          </div>
        </Parallax>  
      </ParallaxProvider>
    </div>
  );
}