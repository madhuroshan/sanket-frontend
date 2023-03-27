import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import Lectures from "components/events/Lectures";
import Head from "next/head";

export default function lectures() {
  return (
    <>
      <Head>
        <title>Lectures : Sanket'23</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Lectures />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
