
import styles from './JournalGroup.module.css';

const JournalGroup = ({ name, entryFee, duration, maxPlayers, currentPlayers }) => (
  <div className={styles.journalGroup}>
    <div className={styles.groupHeader}>
      <h3 className={styles.groupName}>{name}</h3>
      <button className={styles.joinButton}>Join</button>
    </div>
    <div className={styles.groupDetails}>
      <div className={styles.detailItem}>
        <span className={styles.detailLabel}>Entry Fee</span>
        <span className={styles.detailValue}>{entryFee} $NOTE</span>
      </div>
      <div className={styles.detailItem}>
        <span className={styles.detailLabel}>Duration</span>
        <span className={styles.detailValue}>{duration} Days</span>
      </div>
      <div className={styles.detailItem}>
        <span className={styles.detailLabel}>Max Players</span>
        <span className={styles.detailValue}>{maxPlayers}</span>
      </div>
      <div className={styles.detailItem}>
        <span className={styles.detailLabel}>Current Players</span>
        <span className={styles.detailValue}>{currentPlayers}</span>
      </div>
    </div>
  </div>
);

export default JournalGroup;