
import styles from './CurrentStreak.module.css';

const CurrentStreak = ({ days }) => (
  <div className={styles.currentStreak}>
    <div className={styles.streakLabel}>Current Streak</div>
    <div className={styles.streakValue}>{days} Days</div>
  </div>
);

export default CurrentStreak;