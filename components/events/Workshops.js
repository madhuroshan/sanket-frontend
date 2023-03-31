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
            linknit="https://forms.gle/TzBrpWL49CXQpcEMA"
            linknonnit="https://docs.google.com/forms/d/15JDNBuE3SJ79P5U3BvyQ7Y03TvdlbNYXzu1CRVthWk8/"
            date="Time &nbsp;:  &nbsp;Apr 1st &nbsp;, 9am - 12pm & 2pm - 5pm"
          />

          <EventCard
            eventName="Deep GAN Dive Workshop"
            eventCount="2"
            eventDesc="We are thrilled to announce an upcoming workshop, 'Deep GAN Dive,' as part of the esteemed technical event, Sanket'23. This comprehensive workshop will be hosted by the distinguished Artificial Intelligence Club of NIT Calicut and will focus on various aspects of Artificial Intelligence, with a particular emphasis on Generative Adversarial Networks (GANs).
            Mark your calendars for April 2nd, as the workshop will be divided into two informative sessions, scheduled from 9AM-12PM and 2-5PM. Participants will receive a comprehensive understanding of AI fundamentals, neural networks, and CNNs, followed by an engaging hands-on session on Python and Pytorch. Furthermore, the workshop will introduce participants to GANs and provide hands-on experience with vanilla GANs. The session will conclude with an in-depth discussion on the advancements in GANs and beyond vanilla GANs."
            left="right"
            linknit="https://forms.gle/daFMmFvTtL4f6inPA"
            linknonnit="https://docs.google.com/forms/d/1IOXCsycok09XG2HsAA5JQ4RDv-cP2Om2RKxy_Fc6fE4/"
            date="Time &nbsp;:  &nbsp;Apr 2nd &nbsp;, 9am - 12pm & 2pm - 5pm"
          />
        </div>
      </div>
    </>
  );
}
