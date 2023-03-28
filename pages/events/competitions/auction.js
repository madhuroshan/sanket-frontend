import Navbar from "components/Navbar";
import Footer from "components/Footer";
import React from "react";
import Auction from "components/competitions/Auction";
import Head from "next/head";

export default function auction() {
  return (
    <>
      <Head>
        <title>Under the Gavel</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Auction />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
