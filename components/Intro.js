import Link from "next/link";
import React from "react";
import styles from "../components/intro.module.css";

export default function Intro() {
  return (
    <>
      <div className={styles["intro-page"]}>
        <p className={styles["ecea-tag"]}>ECE Association Presents</p>
        <h1 className={styles["sanket-tag"]}>Sanket'23</h1>
        <button className={styles["brochure"]}>
          <Link href="/brochure1.pdf" passHref>
            <a target="_blank">Explore</a>
          </Link>
        </button>
        <div className={styles["date"]}>
          <p>
            <span className={styles["date"]}>
              1<sup>st</sup>
              &nbsp;
            </span>
            April - &nbsp;
            <span className={styles["date"]}>
              2<sup>nd</sup>
            </span>
            &nbsp; April
          </p>
        </div>
      </div>
    </>
  );
}
