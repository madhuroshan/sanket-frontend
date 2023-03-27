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
            eventDesc="The wide-spread applications of Machine learning based classification together with advancements in Internet of Things (IoT) based communication enhance the use of e-Health and mobile healthcare networks (MHN) for continuous monitoring of health conditions, remote disease detection, and emergency care. But storing the sensitive personal information in third-party clouds for ML classifier based disease diagnosis raises concerns about personal data security. In this talk, the various vulnerabilities of personal data to security breach will be explored and solutions to address the attacks through privacy preserving machine learning techniques will be introduced."
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
