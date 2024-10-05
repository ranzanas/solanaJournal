
import styles from './JournalControls.module.css';

const JournalControls = () => (
  <div className={styles.journalControls}>
    <div className={styles.sortButtons}>
      <button className={styles.latestButton}>Latest</button>
      <button className={styles.oldestButton}>Oldest</button>
    </div>
    <button className={styles.postJournalButton}>Post Journal</button>
  </div>
);

export default JournalControls;