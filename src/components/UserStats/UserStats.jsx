
import styles from './UserStats.module.css';

const StatItem = ({ label, value }) => (
  <div className={styles.statItem}>
    <div className={styles.statLabel}>{label}</div>
    <div className={styles.statValue}>{value}</div>
  </div>
);

const UserStats = ({ userId, totalJournals, groupsWon, leaderboardRank }) => (
  <section className={styles.userStats}>
    <StatItem label="User ID" value={userId} />
    <StatItem label="Total Journals" value={totalJournals} />
    <StatItem label="Groups Won" value={groupsWon} />
    <StatItem label="Leaderboard Rank" value={leaderboardRank} />
  </section>
);

export default UserStats;