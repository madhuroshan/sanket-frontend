import Link from "next/link";
import React, { useState } from "react";
import styles from "../components/navbar.module.css";

import { useRouter } from "next/router";

export default function Navbar() {
  const currentRoute = useRouter().pathname;
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["logo"]}>
          <Link href="/">
            <img src="/logo-new.jpeg" />
          </Link>
        </div>

        <ul className={styles["navbar"]}>
          <li
            className={
              styles[currentRoute.toLowerCase() == "/" ? "link" : "active"]
            }
          >
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li
            className={
              styles[currentRoute.includes("about") ? "link" : "active"]
            }
          >
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li
            className={
              styles[currentRoute.includes("events") ? "link" : "active"]
            }
          >
            <Link href="/events">
              <a>events</a>
            </Link>
          </li>
          <li
            className={
              styles[currentRoute.includes("team") ? "link" : "active"]
            }
          >
            <Link href="/team">
              <a>team</a>
            </Link>
          </li>

          <li
            className={
              styles[currentRoute.includes("partners") ? "link" : "active"]
            }
          >
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
        <div className={styles["logo-two"]}>
          <Link href="/">
            <img src="/logo-new.jpeg" />
          </Link>
        </div>
        <button
          className={styles["close-button"]}
          onClick={() => setToggle(!toggle)}
        >
          <img src="/close.png" />
        </button>
        <ul className={styles["navbar-mobile-view"]}>
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
    </>
  );
}
