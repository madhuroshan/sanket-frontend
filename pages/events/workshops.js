import Navbar from "components/Navbar";
import Footer from "components/Footer";
import React from "react";
import Workshops from "components/events/Workshops";
import Head from "next/head";

export default function workshops() {
  return (
    <>
      <Head>
        <title>Workshops : Sanket'23</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Workshops />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
