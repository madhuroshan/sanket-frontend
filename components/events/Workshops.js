import React from "react";
import EventCard from "components/EventCard";
import styles from "components/events/competitions.module.css";

export default function Workshops() {
  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["heading"]}>Workshops</h1>
        <div className={styles["underline"]}></div>
        <div className={styles["events"]}>
          <EventCard
            eventName="IntRobotix Workshop"
            eventCount="1"
            eventDesc="We are delighted to announce an upcoming workshop hosted by the esteemed Robotics Interest Group at NIT Calicut, as a part of Sanket'23. The workshop is designed to provide comprehensive insights into an array of topics related to robotics and mechatronics, ranging from SolidWorks, electronics, Proteus, control systems and programming to neural networks. It is a unique opportunity to enrich your knowledge of robotics and mechatronics and gain hands-on experience from the industry experts. We strongly encourage you to register for this informative workshop to enhance your proficiency in these cutting-edge technologies"
            left="left"
            linknit="https://docs.google.com/forms/d/1TIvXk4GrhhJIhuFklBbJ9umVAESuMvweV2YG-iCLhIo/"
            linknonnit="https://docs.google.com/forms/d/15JDNBuE3SJ79P5U3BvyQ7Y03TvdlbNYXzu1CRVthWk8/"
            date="Time &nbsp;:  &nbsp;Apr 1st &nbsp;, 9am - 12pm & 2pm - 5pm"
          />

          <EventCard
            eventName="Deep GAN Dive Workshop"
            eventCount="2"
            eventDesc="Get ready to spark your creativity and unleash your electronics wizardry with our electrifying competition! With a quiz round to test your knowledge and a hardware section to showcase your skills... Get yourself prepared to design and demonstrate your circuit, impress the judges, and win amazing prizes..."
            left="right"
            linknit="https://docs.google.com/forms/d/1H_VsqzREcYRghY4Yw0aPBsrt8sov_-lIc8G0P3E1bOk/"
            linknonnit="https://docs.google.com/forms/d/1IOXCsycok09XG2HsAA5JQ4RDv-cP2Om2RKxy_Fc6fE4/"
            date="Time &nbsp;:  &nbsp;Apr 2nd &nbsp;, 9am - 12pm & 2pm - 5pm"
          />
        </div>
      </div>
    </>
  );
}
