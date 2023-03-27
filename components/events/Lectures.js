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
            eventDesc="Ms. Lyla B das, a renowned professor from National Institute of Technology (NIT) Calicut, will deliver an interesting talk on the topic of embedded systems on April 1st. With her extensive knowledge and experience in the industry, Ms. Lyla will provide the latest developments in embedded systems, including hardware and software design, real-time operating systems, and programming languages."
            left="left"
            linknit="/events/lectures/lecture1"
            linknonnit="/events/lectures/lecture1"
            date="Time &nbsp;: &nbsp; Day  1 &nbsp;, &nbsp; Morning Session"
            speaker=" Speaker &nbsp; : &nbsp; Dr.&nbsp; Lyla &nbsp;B.&nbsp; Das"
          />

          <EventCard
            eventName="AI and Business Analytics"
            eventCount="2"
            eventDesc="Mr. Sebastian, a highly regarded professor from the Indian Institute of Management (IIM) Kozhikode, will deliver an enlightening talk on the topic of business analytics and AI on April 2nd. Using his extensive experience and knowledge in the field, Mr. Sebastian will provide an overview of the ways in which AI and analytics will transform today’s business practices."
            left="right"
            linknit="/events/lectures/lecture2"
            linknonnit="/events/lectures/lecture2"
            date="Time &nbsp;: &nbsp; Day  1 &nbsp;, &nbsp; Morning Session"
            speaker=" Speaker &nbsp; : &nbsp; Mr.&nbsp; Sebastian &nbsp;&nbsp; "
          />
          <EventCard
            eventName="Privacy Preserving Machine Learning "
            eventCount="3"
            eventDesc='We cordially invite you to attend an enlightening lecture on "Privacy Preserving Machine Learning" by Ms. Deepthi, a distinguished professor from the National Institute of Technology (NIT) Calicut. In this lecture, Ms. Deepthi will comprehensively discuss the various vulnerabilities of personal data to security breaches, emphasizing the need for privacy-preserving machine learning techniques to safeguard sensitive personal information in third-party clouds. It is an exceptional opportunity to enhance your knowledge of privacy-preserving techniques in machine learning and their significance in safeguarding sensitive information. We highly recommend you register for this informative lecture to gain valuable insights from Ms. Deepthi&apos;s extensive experience and knowledge in this field'
            left="left"
            linknit="/events/lectures/lecture1"
            linknonnit="/events/lectures/lecture1"
            date="Time &nbsp;: &nbsp; Day  1 &nbsp;, &nbsp; Morning Session"
            speaker=" Speaker &nbsp; : &nbsp; Dr.&nbsp; Deepthi &nbsp;P &nbsp; P"
          />
        </div>
      </div>
    </>
  );
}
