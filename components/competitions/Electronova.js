import React from "react";
import styles from "components/competitions/guidelines.module.css";
import Link from "next/link";

export default function Electronova() {
  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["head"]}>Electronova</h1>
        <div className={styles["underline"]}></div>
        <br />

        <div className={styles["guidelines"]}>
          <ul>
            <li> Each team can have a maximum of 3 members.</li>
            <li> Cross college and cross branch teams are allowed.</li>
            <li> Event layout: Total of 2 rounds.</li>
            <li>
              Round 1 will be a quiz based on electronics and general aptitude
              and it will be a pen and paper test.
            </li>
            <li>
              {" "}
              Based on round 1 scores, the top 10 teams are selected for the
              round 2.{" "}
            </li>
            <li>
              {" "}
              Round 2 will be a circuit design where the participants will be
              given components and need to prepare a working circuit out of it.
            </li>
            <li>
              {" "}
              The topic for the circuit is to be chosen by the teams among the
              topics that we provide.
            </li>
            <li>
              {" "}
              The topic for the circuit is to be chosen by the teams among the
              topics that we provide.
            </li>
            <li>
              {" "}
              The winners are declared based on the cumulative score that the
              team scored in both the rounds.{" "}
            </li>
            <li>
              {" "}
              The judging criteria will be based on the complexity in the
              circuit, time taken to produce the output.{" "}
            </li>
          </ul>
        </div>
        <div className={styles["register-btn"]}>
          <Link href="">Register</Link>
        </div>
      </div>
    </>
  );
}
