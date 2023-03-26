import Navbar from "components/Navbar";
import Footer from "components/Footer";
import React from "react";
import Codecon from "components/competitions/Codecon";

export default function workshops() {
  return (
    <>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Codecon />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
