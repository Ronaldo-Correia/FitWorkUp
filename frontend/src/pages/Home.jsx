import Navbar from "../components/layout/Navbar";
import Hero from "../components/features/Hero";
import Features from "../components/features/Features";
import Stats from "../components/features/Stats";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;
