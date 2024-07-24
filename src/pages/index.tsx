import styles from '@/styles/Home.module.css'
import RotatingName from './components/RotatingName';

export default function Home() {
  return (
    <div>
      <div className={styles.appBody}>
        <div className={styles.containerLeft}>
          <RotatingName />
        </div>
        <div className={styles.containerRight} />
      </div>
      <div>
        <h1>Test</h1>
      </div>
    </div>
  );
}
