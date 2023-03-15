import React from "react";
import Link from "next/link";
import styles from "../components/footer.module.css";

export default function Footer() {
  return (
    <div className={styles["container"]}>
      <ul className={styles["footer-links"]}>
        <li className={styles["footer-link"]}>
          <Link href="#">
            <a>
              <img src="/facebookc.svg" />
            </a>
          </Link>
        </li>
        <li className={styles["footer-link"]}>
          <Link href="#">
            <a>
              <img src="/facebookc.svg" />
            </a>
          </Link>
        </li>
        <li className={styles["footer-link"]}>
          <Link href="#">
            <a>
              <img src="/facebookc.svg" />
            </a>
          </Link>
        </li>
        <li className={styles["footer-link"]}>
          <Link href="#">
            <a>
              <img src="/facebookc.svg" />
            </a>
          </Link>
        </li>
        <li className={styles["footer-link"]}>
          <Link href="#">
            <a>
              <img src="/facebookc.svg" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}