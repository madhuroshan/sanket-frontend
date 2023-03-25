import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>About Us : Sanket'23</title>
      </Head>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
