import React from "react";
import EventCard from "components/EventCard";
import styles from "components/events/competitions.module.css";

export default function Lectures() {
  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["heading"]}>Lectures`</h1>
        <div className={styles["underline"]}></div>
        <div className={styles["events"]}>
          <EventCard
            eventName="Embedded Systems"
            eventCount="1"
            eventDesc="Get ready to spark your creativity and unleash your electronics wizardry with our electrifying competition! With a quiz round to test your knowledge and a hardware section to showcase your skills... Get yourself prepared to design and demonstrate your circuit, impress the judges, and win amazing prizes..."
            left="left"
            linknit="/events/lectures/lecture1"
            linknonnit="/events/lectures/lecture1"
            date="Time &nbsp;: &nbsp; Day  1 &nbsp;, &nbsp; Morning Session"
            speaker=" Speaker &nbsp; : &nbsp; Dr.&nbsp; Lyla &nbsp;B.&nbsp; Das"
          />

          <EventCard
            eventName="Scavenger Hunt"
            eventCount="2"
            eventDesc="Get ready to spark your creativity and unleash your electronics wizardry with our electrifying competition! With a quiz round to test your knowledge and a hardware section to showcase your skills... Get yourself prepared to design and demonstrate your circuit, impress the judges, and win amazing prizes..."
            left="right"
            linknit="/events/lectures/lecture2"
            linknonnit="/events/lectures/lecture2"
          />
        </div>
      </div>
    </>
  );
}
