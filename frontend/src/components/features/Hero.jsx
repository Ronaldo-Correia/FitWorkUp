import { useNavigate } from "react-router-dom";
import "@styles/home.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>FitWorkUp</h1>
        <p>Seu treino começa aqui</p>
        <button onClick={() => navigate("/menu")} className="btn">
          Começar agora
        </button>
      </div>
    </section>
  );
}

export default Hero;
