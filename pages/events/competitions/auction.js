import Navbar from "components/Navbar";
import Footer from "components/Footer";
import React from "react";
import Auction from "components/competitions/Auction";

export default function workshops() {
  return (
    <>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Auction />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
