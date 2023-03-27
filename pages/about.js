import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Head from "next/head";
import AboutUs from "components/AboutUs";

export default function about() {
  return (
    <>
      <Head>
        <title>About Us : Sanket'23</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <AboutUs />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
