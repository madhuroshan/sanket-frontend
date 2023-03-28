import React from "react";
import styles from "components/competitions/guidelines.module.css";
import Link from "next/link";

export default function Auction() {
  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["head"]}>Under the Gavel</h1>
        <div className={styles["underline"]}></div>
        <br />

        <div className={styles["guidelines"]}>
          <ul>
            <li>
              Each team can have 2-3 members. Cross college teams and cross
              branch teams are allowed
            </li>
            <li> This event has 2 rounds</li>
            <li>
              {" "}
              There will be 2 rounds- One is preliminary round(mostly quiz based
              on electronics) and the second is Auction followed by a circuit
              design
            </li>
            <li>
              In case of tie of marks, a tie breaker question will be given
            </li>
            <li>A total of 6 teams will be selected for the second round</li>
            <li>
              A topic is given with the list of available components.The
              participants are required to design a circuit and need to buy the
              required components through the auction
            </li>
            <li>
              Each team will be given some sort of virtual currency for buying
              the components
            </li>
            <li>
              Components and their base prices info will be given to the teams
              before the auction starts.
            </li>
            <li>
              The judging criteria is based on
              <br />· Output Efficiency <br /> · Time left <br /> · Circuit
              Design <br /> · Hints <br /> · Points based on currency left
            </li>
          </ul>
        </div>
        <div className={styles["reg-links"]}>
          <div className={styles["register-btn"]}>
            <Link
              href="https://docs.google.com/forms/d/1xQZu7CQEc7ens5nS40Za16StiCUI52_8yTYCCJmg4Zk/"
              passHref
            >
              <a target="_blank"> Register (NIT Students)</a>
            </Link>{" "}
          </div>
          <br />
          <div className={styles["register-btn"]}>
            <Link
              href="https://docs.google.com/forms/d/1MyiI2_HMyqz9zwmiaOjlcDyVu_URhJvydRdbI8ke-ow/edit"
              passHref
            >
              <a target="_blank"> Register (Non -NIT Students)</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
