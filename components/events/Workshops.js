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
            eventName="RIG Workshop"
            eventCount="1"
            eventDesc="We are delighted to announce an upcoming workshop hosted by the esteemed Robotics Interest Group at NIT Calicut, as a part of Sanket'23. The workshop is designed to provide comprehensive insights into an array of topics related to robotics and mechatronics, ranging from SolidWorks, electronics, Proteus, control systems and programming to neural networks. It is a unique opportunity to enrich your knowledge of robotics and mechatronics and gain hands-on experience from the industry experts. We strongly encourage you to register for this informative workshop to enhance your proficiency in these cutting-edge technologies"
            left="left"
            linknit="/events/workshops/workshop1"
            linknonnit="/events/workshops/workshop1"
            date="Time &nbsp;:  &nbsp;Apr 1st &nbsp;, 9am - 12pm & 2pm - 5pm"
          />

          <EventCard
            eventName="Scavenger Hunt"
            eventCount="2"
            eventDesc="Get ready to spark your creativity and unleash your electronics wizardry with our electrifying competition! With a quiz round to test your knowledge and a hardware section to showcase your skills... Get yourself prepared to design and demonstrate your circuit, impress the judges, and win amazing prizes..."
            left="right"
            linknit="/events/workshops/workshop1"
            linknonnit="/events/workshops/workshop2"
          />

          <EventCard
            eventName="Auction and buzzer"
            eventCount="3"
            eventDesc="Welcome to the ultimate Auction and buzzer  Competition!
        Are you ready to put your skills to the test and compete against some of the best designers and create innovative and functional designs to win exciting prizes"
            left="left"
            linknit="/events/workshops/workshop3"
            linknonnit="/events/workshops/workshop3"
          />
        </div>
      </div>
    </>
  );
}
