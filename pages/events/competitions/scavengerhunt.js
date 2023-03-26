import Navbar from "components/Navbar";
import Footer from "components/Footer";
import React from "react";
import Scavenger from "components/competitions/Scavenger";

export default function workshops() {
  return (
    <>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Scavenger />

      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
