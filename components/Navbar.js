import Link from "next/link";
import React, { useState } from "react";
import styles from "../components/navbar.module.css";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={styles["container"]}>
        <ul className={styles["navbar"]}>
          <li className={styles["navbar-link"]}>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li className={styles["navbar-link"]}>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li className={styles["navbar-link"]}>
            <Link href="/events">
              <a>events</a>
            </Link>
          </li>
          <li className={styles["navbar-link"]}>
            <Link href="/team">
              <a>team</a>
            </Link>
          </li>

          <li className={styles["navbar-link"]}>
            <Link href="/partners">
              <a>partners</a>
            </Link>
          </li>
        </ul>
      </div>
      <button
        className={styles["menu-button"]}
        onClick={() => setToggle(!toggle)}
      >
        <img src="/menu-button.png" />
      </button>
      <div
        className={styles["mobile-view"]}
        style={{ left: toggle ? "0%" : "-100%" }}
      >
        <button
          className={styles["menu-button"]}
          onClick={() => setToggle(!toggle)}
        >
          <img src="/close.png" />
        </button>
        <ul className={styles["navbar-mobile-view"]}>
          <li className={styles["navbar-link"]}>
            <Link href="#">
              <a>home</a>
            </Link>
          </li>
          <li className={styles["navbar-link"]}>
            <Link href="#">
              <a>about</a>
            </Link>
          </li>
          <li className={styles["navbar-link"]}>
            <Link href="#">
              <a>events</a>
            </Link>
          </li>
          <li className={styles["navbar-link"]}>
            <Link href="#">
              <a>team</a>
            </Link>
          </li>

          <li className={styles["navbar-link"]}>
            <Link href="#">
              <a>partners</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
