import EventCard from "components/EventCard";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";

export default function competitions() {
  return (
    <>
      <Navbar />
      <EventCard />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
