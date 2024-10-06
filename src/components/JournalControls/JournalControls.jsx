import styles from "./JournalControls.module.css";

const JournalControls = ({ showPostButton = true }) => (
  <div className={styles.journalControls}>
    <div className={styles.sortButtons}>
      <button className={styles.latestButton}>Latest</button>
      <button className={styles.oldestButton}>Oldest</button>
    </div>
    {showPostButton && (
      <button className={styles.postJournalButton}>Post Journal</button>
    )}
  </div>
);

export default JournalControls;
