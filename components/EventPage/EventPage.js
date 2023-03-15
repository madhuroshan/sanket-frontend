import React from "react";
import styles from "../../components/EventPage/eventpage.module.css";

export default function EventPage() {
  return (
    <>
      <div className={styles["container"]}>
        <h1 className> EVENTS</h1>
        <div className={styles["events-wrapper"]}>
          <div className={styles["event-card-workshop"]}>
            <div className={styles["event-image"]}>
              <img src="/workshop.png" />
            </div>
            <div className={styles["event-type-workshop"]}>WORKSHOPS</div>
          </div>
          <div className={styles["event-card-comp"]}>
            <div className={styles["event-image"]}>
              <img src="/workshop.png" />
            </div>
            <div className={styles["event-type-comp"]}>COMPETITIONS</div>
          </div>
          <div className={styles["event-card-lecture"]}>
            <div className={styles["event-image"]}>
              <img src="/workshop.png" />
            </div>
            <div className={styles["event-type-lecture"]}>LECTURES</div>
          </div>
        </div>
      </div>
    </>
  );
}
