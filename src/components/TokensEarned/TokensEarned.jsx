
import styles from './TokensEarned.module.css';

const TokensEarned = ({ tokens, usdValue }) => (
  <div className={styles.tokensEarned}>
    <div className={styles.tokenInfo}>
      <div className={styles.tokenLabel}>Tokens Earned</div> <br />
      {/* <div className={styles.tokenValue}>{tokens} $NOTE</div> */}
    </div>
    <div className={styles.usdValue}>${usdValue}</div>
  </div>
);

export default TokensEarned;