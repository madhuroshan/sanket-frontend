import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <div style={{ height: "7.5rem" }}></div>
      <Footer />
    </>
  );
}
