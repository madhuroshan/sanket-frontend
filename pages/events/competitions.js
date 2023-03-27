import Competitions from "components/events/Competitions";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Head from "next/head";
import React from "react";

export default function competitions() {
  return (
    <>
      <Head>
        <title>Competitions : Sanket'23</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Competitions />

      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
