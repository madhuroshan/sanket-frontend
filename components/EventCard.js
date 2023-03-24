import React from "react";
import styles from "../components/event-card.module.css";

export default function EventCard({ eventName, eventCount, eventDesc, left }) {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["event"]}>
          <div className={styles[`event-title-wrapper-${left}`]}>
            <p className={styles["event-title"]}>{eventName}</p>
            <p className={styles["event-count"]}>#{eventCount}</p>
          </div>
          <div className={styles["seperation"]}></div>
          <div className={styles["event-description-wrapper"]}>
            <p className={styles["event-description"]}>{eventDesc}</p>
            <button className={styles["register-btn"]}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}
