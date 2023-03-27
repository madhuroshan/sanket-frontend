import React from "react";
import Link from "next/link";
import styles from "../components/footer.module.css";
import { useState } from "react";

export default function Footer() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={styles["overlay"]}
        style={{ display: toggle ? "block" : "none" }}
      >
        <div className={styles["contact"]}>
          <button
            className={styles["close-btn"]}
            onClick={() => setToggle(!toggle)}
          >
            X
          </button>

          <ul>
            <li>Praveena - </li>
          </ul>
        </div>
      </div>
      <div className={styles["container"]}>
        <ul className={styles["footer-links"]}>
          <li className={styles["footer-link"]}>
            <Link href="https://www.facebook.com/EceaNitCalicut">
              <a>
                <img src="/facebookc.svg" />
              </a>
            </Link>
          </li>
          <li className={styles["footer-link"]}>
            <Link href="#">
              <a>
                <img src="/twitterc.svg" />
              </a>
            </Link>
          </li>
          <li className={styles["footer-link"]}>
            <Link href="https://www.instagram.com/sanket_nitcalicut/">
              <a>
                <img src="/instagramc.svg" />
              </a>
            </Link>
          </li>
          <li
            className={styles["footer-link"]}
            onClick={() => setToggle(!toggle)}
          >
            <Link href="#">
              <a>
                <img src="/phone.svg" />
              </a>
            </Link>
          </li>
          <li className={styles["footer-link"]}>
            <Link href="https://www.linkedin.com/company/ecea-nitc/">
              <a>
                <img src="/linkedin.png" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
