import React from "react";
import EventCard from "components/EventCard";
import styles from "components/events/competitions.module.css";

export default function Competitions() {
  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["heading"]}>Competitions</h1>
        <div className={styles["underline"]}></div>
        <div className={styles["events"]}>
          <EventCard
            eventName="Electronova"
            eventCount="1"
            eventDesc="Get ready to spark your creativity and unleash your electronics wizardry with our electrifying competition! With a quiz round to test your knowledge and a hardware section to showcase your skills... Get yourself prepared to design and demonstrate your circuit, impress the judges, and win amazing prizes..."
            left="left"
            link="/events/competitions/electronova"
          />

          <EventCard
            eventName="Scavenger Hunt"
            eventCount="2"
            eventDesc="Get ready to spark your creativity and unleash your electronics wizardry with our electrifying competition! With a quiz round to test your knowledge and a hardware section to showcase your skills... Get yourself prepared to design and demonstrate your circuit, impress the judges, and win amazing prizes..."
            left="right"
            link="/events/competitions/scavengerhunt"
          />

          <EventCard
            eventName="Auction and buzzer"
            eventCount="3"
            eventDesc="Welcome to the ultimate Auction and buzzer  Competition!
        Are you ready to put your skills to the test and compete against some of the best designers and create innovative and functional designs to win exciting prizes"
            left="left"
            link="/events/competitions/auction"
          />
          <EventCard
            eventName="Codecon"
            eventCount="3"
            eventDesc="What's Up Falks,
            From programming challenges to debugging , there's something for everyone here,
            whether you're a seasoned tech enthusiast or just getting started. So whether you're
            interested in coding,or simply want to explore the fascinating world of computer
            technology, we invite you to join us for an unforgettable experience at Codecon"
            left="right"
            link="/events/competitions/codecon"
          />
        </div>
      </div>
    </>
  );
}
