import Navbar from "components/Navbar";
import Footer from "components/Footer";
import React from "react";
import Scavenger from "components/competitions/Scavenger";
import Head from "next/head";

export default function workshops() {
  return (
    <>
      <Head>
        <title>Scavenger Hunt</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Scavenger />

      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
