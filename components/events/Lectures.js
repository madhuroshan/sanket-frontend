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
            linknit="https://docs.google.com/forms/d/1MfnYVFaKRNGj2j3CyA8-f1oscVW_TNpesTCipuLLMrY/"
            linknonnit="https://docs.google.com/forms/d/1f69kwSWCe9CnmOamiLne9Vl7NdxRDTmIzEe1N7sOYJA/"
            date="Time &nbsp;: &nbsp; April 1st &nbsp;, &nbsp; 10am - 11am"
            speaker=" Speaker &nbsp; : &nbsp; Dr.&nbsp; Lyla &nbsp;B.&nbsp; Das"
          />

          <EventCard
            eventName="AI and Business Analytics"
            eventCount="2"
            eventDesc="Dr. Sebastian, a highly regarded professor from the Indian Institute of Management (IIM) Kozhikode, will deliver an enlightening talk on the topic of business analytics and AI on April 2nd. Using his extensive experience and knowledge in the field, Mr. Sebastian will provide an overview of the ways in which AI and analytics will transform today’s business practices."
            left="right"
            linknit="https://docs.google.com/forms/d/1iGsUevascduFoizfw3I8Op7GBtPN7lhyVGa9iUi3Z-E/"
            linknonnit="https://docs.google.com/forms/d/1MHG17rBH81k8z6Gr5daCrDhV5MsfU5hMZzuF0kwlciY/"
            date="Time &nbsp;: &nbsp; April 2nd &nbsp;, &nbsp; 10am - 11am"
            speaker=" Speaker &nbsp; : &nbsp; Dr.&nbsp; Sebastian &nbsp;&nbsp; "
          />
          <EventCard
            eventName="Privacy Preserving Machine Learning "
            eventCount="3"
            eventDesc='We cordially invite you to attend an enlightening lecture on "Privacy Preserving Machine Learning" by Ms. Deepthi, a distinguished professor from the National Institute of Technology (NIT) Calicut. In this lecture, Ms. Deepthi will comprehensively discuss the various vulnerabilities of personal data to security breaches, emphasizing the need for privacy-preserving machine learning techniques to safeguard sensitive personal information in third-party clouds. It is an exceptional opportunity to enhance your knowledge of privacy-preserving techniques in machine learning and their significance in safeguarding sensitive information. We highly recommend you register for this informative lecture to gain valuable insights from Ms. Deepthi&apos;s extensive experience and knowledge in this field'
            left="left"
            linknit="https://docs.google.com/forms/d/1eE0xfngvVOazz6Gz735lJfNABMHi2Gpp0jJ_ON3lh7w/"
            linknonnit="https://docs.google.com/forms/d/1ZneAZzVb_y5X9uBeiLu0H7vZJT1kN3ob77YUCX0VSA4/"
            date="Time &nbsp;: &nbsp; April 1st &nbsp;, &nbsp; 3pm - 4pm"
            speaker=" Speaker &nbsp; : &nbsp; Dr.&nbsp; Deepthi &nbsp;P &nbsp; P"
          />
        </div>
      </div>
    </>
  );
}
