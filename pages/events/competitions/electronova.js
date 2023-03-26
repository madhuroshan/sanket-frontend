import Navbar from "components/Navbar";
import Footer from "components/Footer";
import React from "react";
import Electronova from "components/competitions/Electronova";

export default function workshops() {
  return (
    <>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Electronova />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
