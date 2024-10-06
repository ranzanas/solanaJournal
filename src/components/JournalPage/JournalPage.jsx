import styles from "./JournalPage.module.css";
import Header from "../Header/Header";
import { UserInfo } from "../UserInfo/UserInfo";
import Footer from "../Footer/Footer";
import JournalControls from "../JournalControls/JournalControls";
import JournalEntry from "../JournalEntry/JournalEntry";

export default function JournalPage() {
  const journalEntries = [
    {
      title: "Just a normal day thought",
      content:
        "I was going through my photo album and felt very sad after seeing my old friends photos. They aren't in contact now, hope they're good :)",
      timestamp: "3:14 pm 03/10/24",
    },
    {
      title: "Commit to myself",
      content: "I wanna finish my projects by sunday pakka, no more excuses!",
      timestamp: "3:14 pm 03/10/24",
    },
    {
      title: "Just a normal day thought",
      content:
        "I was going through my photo album and felt very sad after seeing my old friends photos. They aren't in contact now, hope they're good :)",
      timestamp: "3:14 pm 03/10/24",
    },
  ];
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <Header userName="Aditya" />
        <UserInfo
          userId="a51821"
          totalJournals="35"
          pointsEarn="427.44"
          currentStreaks="26"
        />
      </div>
      <div className={styles.mainArea}>
        <div className={styles.entryAside}>
          <JournalControls showPostButton={false} />
          {journalEntries.map((entry, index) => (
            <JournalEntry key={index} {...entry} />
          ))}
        </div>
        <div className={styles.writeArea}>
          <h2>What's on your mind today?</h2>
          <input type="text" className={styles.title} placeholder="Title" />
          <textarea
            name="body"
            id="body"
            className={styles.body}
            placeholder="How was your day today?.."
          ></textarea>
          <button className={styles.saveJournalButton}>Save Journal</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
