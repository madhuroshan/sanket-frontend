import React from "react";
import EventPage from "components/EventPage/EventPage";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Head from "next/head";

export default function events() {
  return (
    <>
      <Head>
        <title>Sanket'23 : Events</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <EventPage />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
