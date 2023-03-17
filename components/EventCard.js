import React from "react";
import styles from "../components/event-card.module.css";

export default function EventCard() {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["event"]}>
          <div className={styles["event-title-wrapper"]}>
            <p className={styles["event-title"]}>Quiz and Circuit Making</p>
            <p className={styles["event-count"]}>#1</p>
          </div>
          <div className={styles["event-description-wrapper"]}>
            <p className={styles["event-description"]}>
              Get ready to spark your creativity and unleash your electronics
              wizardry with our electrifying competition! With a quiz round to
              test your knowledge and a hardware section to showcase your
              skills... Get yourself prepared to design and demonstrate your
              circuit, impress the judges, and win amazing prizes...
            </p>
            <button className={styles["register-btn"]}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}
