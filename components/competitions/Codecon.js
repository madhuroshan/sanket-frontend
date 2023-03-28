import React from "react";
import styles from "components/competitions/guidelines.module.css";
import Link from "next/link";

export default function Codecon() {
  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["head"]}>Codeathon</h1>
        <div className={styles["underline"]}></div>
        <br />

        <div className={styles["guidelines"]}>
          <ul>
            <li>A team can consist of either one or two members..</li>
            <li> The team members can be from any educational institution.</li>
            <li> Event layout: Total of 2 rounds.</li>
            <li>
              Teams should be made up exclusively of participants who are not
              organizers, volunteers, judges, sponsors, or in any other
              privileged position at the event.
            </li>
            <li>
              The event consists of 4 rounds, each designed to test different
              aspects of coding.
            </li>
            <li>Round 1: Scratch it out (Scratch Programming)</li>
            <li>Round 2: Pesticide ( Debugging )</li>
            <li>Round 3: Braille (Blind Coding Contest)</li>
            <li>Round 4: 404 Not Found ( Coding Competition)</li>
            <li>
              Prizes will be awarded to the top 3 teams based on their overall
              performance across all rounds. <br /> ● The first-place team will
              receive an Amount of Rs 5000 <br /> ● The second-place team will
              receive an Amount of Rs 3000
              <br /> ● The third-place team will receive an Amount of Rs 2000
            </li>

            <li>
              <Link
                className={styles["pdf"]}
                href="/codecon.pdf
              "
              >
                For Complete guidelines, Click here
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["reg-links"]}>
          <div className={styles["register-btn"]}>
            <Link
              href="https://docs.google.com/forms/d/1Udos8k6AURuHQ9J6tiFVLVyFtEb2CV_LBuov0dSPoEo/"
              passHref
            >
              <a target="_blank"> Register (NIT Students)</a>
            </Link>
          </div>
          <br />
          <div className={styles["register-btn"]}>
            <Link
              href="https://docs.google.com/forms/d/1qCnZJ3Vwbn6DYeMcKSo3WvAa6B3cgVqCxXvknqsla_o/"
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
