import React from "react";
import styles from "../components/event-card.module.css";
import Link from "next/link";

export default function EventCard({
  eventName,
  eventCount,
  eventDesc,
  left,
  link,
}) {
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
            <Link href={link}>
              <div className={styles["register-btn"]}>Register</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
