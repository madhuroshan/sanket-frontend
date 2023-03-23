import Navbar from "components/Navbar";
import Footer from "components/Footer";
import React from "react";
import Workshops from "components/events/Workshops";

export default function workshops() {
  return (
    <>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Workshops />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
