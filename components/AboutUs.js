import React from "react";
import styles from "components/about-us.module.css";

export default function AboutUs() {
  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["into"]}>
          Sanket<span className={styles["light-text"]}>'23</span>
        </h1>
        <br />
        <br />
        <div className={styles["desc-wrapper"]}>
          <div className={styles["about-ecea"]}>
            <h1>ECE Association</h1>
            <div className={styles["underline"]}></div>
            <p className={styles["description"]}>
              Welcome to ECEA – the coolest association for electronics and
              communication engineers! We're a community of students,
              professionals, and experts who are passionate about electronics
              and communication engineering. Our association is all about
              creating events and initiatives that benefit ECE students.
              <br />
              <br />
              From workshops and seminars to hackathons and competitions, we're
              dedicated to providing opportunities for students to develop their
              skills, learn from industry leaders, and connect with like-minded
              individuals.
            </p>
          </div>
          <br />
          <div className={styles["about-sanket"]}>
            <h1>
              Sanket<span>'23</span>
            </h1>
            <div className={styles["underline"]}></div>
            <p className={styles["description"]}>
              Sanket is the ultimate event for electronics enthusiasts! Brought
              to you by the ECEA, Sanket'23 is a two-day extravaganza that's
              packed with workshops, lectures, and coding competitions led by
              industry gurus. Our event is designed to provide a jolt of
              inspiration to anyone who's passionate about ECE.
              <br />
              <br />
              Whether you're a student, a professional, or just someone who
              loves tinkering with gadgets, Sanket'23 has something for you. Our
              workshops are led by experts in the field and cover topics ranging
              from embedded systems and signal processing to telecommunications
              and digital electronics.
              <br />
              <br />
              You'll have the opportunity to learn new skills, gain valuable
              knowledge, and connect with other tech-lovers. In addition to our
              workshops, we also have coding and circuit building competitions
              that will put your skills to the test.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
