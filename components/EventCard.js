import React from "react";
import styles from "../components/event-card.module.css";
import Link from "next/link";

export default function EventCard({
  eventName,
  eventCount,
  eventDesc,
  left,
  linknit,
  linknonnit,
  date,
  speaker,
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
            <p className={styles["event-details"]}>{date}</p>
            <p className={styles["event-details"]}>{speaker}</p>
            <br />
            <p className={styles["event-description"]}>{eventDesc}</p>
            <div className={styles["reg-links"]}>
              <Link href={linknit}>
                <div className={styles["register-btn"]}>
                  Register (NIT Students)
                </div>
              </Link>
              <Link href={linknonnit}>
                <div className={styles["register-btn"]}>
                  Register (Non - NIT Students)
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
