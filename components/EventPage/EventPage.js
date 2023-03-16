import React from "react";
import styles from "../../components/EventPage/eventpage.module.css";
import Link from "next/link";

export default function EventPage() {
  return (
    <>
      <div className={styles["container"]}>
        <h1 className> EVENTS</h1>
        <div className={styles["events-wrapper"]}>
          <Link href="/events/workshops">
            <div className={styles["event-card-workshop"]}>
              <div className={styles["event-image"]}>
                <img src="/workshop.png" />
              </div>
              <div className={styles["event-type-workshop"]}>WORKSHOPS</div>
            </div>
          </Link>
          <Link href="/events/competitions">
            <div className={styles["event-card-comp"]}>
              <div className={styles["event-image"]}>
                <img src="/workshop.png" />
              </div>
              <div className={styles["event-type-comp"]}>COMPETITIONS</div>
            </div>
          </Link>
          <Link href="/events/lectures">
            <div className={styles["event-card-lecture"]}>
              <div className={styles["event-image"]}>
                <img src="/workshop.png" />
              </div>
              <div className={styles["event-type-lecture"]}>LECTURES</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
