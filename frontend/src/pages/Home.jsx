import Hero from "../components/features/Hero";
import Features from "../components/features/Features";
import Stats from "../components/features/Stats";
import "@styles/home.css";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <Stats />
    </div>
  );
}

export default Home;
