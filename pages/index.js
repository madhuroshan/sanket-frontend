import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sanket'23</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <div style={{ height: "7.5rem" }}></div>
      <Intro />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
