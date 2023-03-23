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
            eventName="Quiz and Circuit Making"
            eventCount="1"
            eventDesc="Get ready to spark your creativity and unleash your electronics wizardry with our electrifying competition! With a quiz round to test your knowledge and a hardware section to showcase your skills... Get yourself prepared to design and demonstrate your circuit, impress the judges, and win amazing prizes..."
          />

          <EventCard
            eventName="Scavenger Hunt"
            eventCount="2"
            eventDesc="Get ready to spark your creativity and unleash your electronics wizardry with our electrifying competition! With a quiz round to test your knowledge and a hardware section to showcase your skills... Get yourself prepared to design and demonstrate your circuit, impress the judges, and win amazing prizes..."
          />

          <EventCard
            eventName="Auction and buzzer"
            eventCount="3"
            eventDesc="Welcome to the ultimate Auction and buzzer  Competition!
        Are you ready to put your skills to the test and compete against some of the best designers and create innovative and functional designs to win exciting prizes"
          />
        </div>
      </div>
    </>
  );
}
