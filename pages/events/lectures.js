import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import Lectures from "components/events/Lectures";

export default function lectures() {
  return (
    <>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Lectures />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
