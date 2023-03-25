import React from "react";
import styles from "../../components/EventPage/eventpage.module.css";
import Link from "next/link";

export default function EventPage() {
  return (
    <>
      <div className={styles["container"]}>
        <h1> Events</h1>
        <div className={styles["underline"]}></div>
        <div className={styles["events-wrapper"]}>
          <Link href="/events/competitions">
            <div className={styles["event-card"]}>
              <img src="/events.png" className={styles["image"]} />
              <p>competitions</p>
            </div>
          </Link>
          <Link href="/events/workshops">
            <div className={styles["event-card"]}>
              <img src="/gears.png" className={styles["image"]} />
              <p>workshops</p>
            </div>
          </Link>
          <Link href="/events/lectures">
            <div className={styles["event-card"]}>
              <img src="/lectures.png" className={styles["image"]} />
              <p>lectures</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
