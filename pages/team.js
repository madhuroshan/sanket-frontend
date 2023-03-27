import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Head from "next/head";

export default function team() {
  return (
    <>
      <Head>
        <title>Team - Ece Association</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
