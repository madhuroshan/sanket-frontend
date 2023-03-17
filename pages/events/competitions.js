import EventCard from "components/EventCard";
import Competitions from "components/events/Competitions";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";

export default function competitions() {
  return (
    <>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Competitions />

      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
