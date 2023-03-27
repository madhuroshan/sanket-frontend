import Navbar from "components/Navbar";
import Footer from "components/Footer";
import React from "react";
import Electronova from "components/competitions/Electronova";
import Head from "next/head";

export default function workshops() {
  return (
    <>
      <Head>
        <title>Electronova</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Electronova />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
