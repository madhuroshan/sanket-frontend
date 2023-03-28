import React from "react";
import styles from "components/competitions/guidelines.module.css";
import Link from "next/link";

export default function Scavenger() {
  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["head"]}>Scavenger Hunt</h1>
        <div className={styles["underline"]}></div>
        <br />

        <div className={styles["guidelines"]}>
          <ul>
            <li>
              {" "}
              Teams must solve riddles to gather necessary components and
              assemble the circuit within the specified time limit.
            </li>
            <li> Minimum team size is 3 with no maximum limit.</li>
            <li>
              {" "}
              Only the necessary amount of components should be picked up from
              each location.
            </li>
            <li>
              Participants are responsible for following safety guidelines,
              protecting their equipment and respecting the designated area
            </li>
            <li>
              Prizes will be awarded for first picker, early bird, teamwork, and
              accuracy of the circuit like achievements.
            </li>
            <li>
              The organizer will not be held responsible for any accidents or
              injuries. The event will conclude with a review of results and
              presentation of awards.
            </li>
          </ul>
        </div>
        <div className={styles["reg-links"]}>
          <div className={styles["register-btn"]}>
            <Link
              href="https://docs.google.com/forms/d/1xASDG3FjlSl-tBpL2QbA3OIpzI7sa4A1mNl_dO7jyLc/"
              passHref
            >
              <a target="_blank"> Register (NIT Students)</a>
            </Link>
          </div>
          <br />
          <div className={styles["register-btn"]}>
            <Link
              href="https://docs.google.com/forms/d/1XAlvY_05oyVlhQk1ureVeINUoe8a8KM91yfbXQTgf5I/"
              passHref
            >
              <a target="_blank"> Register (Non - NIT Students)</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
