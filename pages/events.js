import React from "react";
import EventPage from "components/EventPage/EventPage";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function events() {
  return (
    <>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <EventPage />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
