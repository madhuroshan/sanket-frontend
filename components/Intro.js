import React from "react";
import styles from "../components/intro.module.css";

export default function Intro() {
  return (
    <>
      <div className={styles["intro-page"]}>
        <p className={styles["ecea-tag"]}>ECE Association Presents</p>
        <h1 className={styles["sanket-tag"]}>Sanket'23</h1>
        <button className={styles["brochure"]}>Explore</button>
      </div>
    </>
  );
}
