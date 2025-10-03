import Hero from "../components/features/Hero";
import Features from "../components/features/Features";
import Stats from "../components/features/Stats";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import "@styles/home.css";

function Home() {
  return (
    <>
      <div className="home-page">
        <Navbar />
        <Hero />
        <Features />
        <Stats />
        <Footer />
      </div>
    </>
  );
}

export default Home;
