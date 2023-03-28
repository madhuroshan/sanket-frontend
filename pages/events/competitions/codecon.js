import Navbar from "components/Navbar";
import Footer from "components/Footer";
import React from "react";
import Codecon from "components/competitions/Codecon";
import Head from "next/head";

export default function codecon() {
  return (
    <>
      <Head>
        <title>Codeathon</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Codecon />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
