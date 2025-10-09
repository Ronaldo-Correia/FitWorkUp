import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext"; 
import "@styles/home.css";

function Hero() {
  const navigate = useNavigate();
  const { user } = useUser(); 

  const handleStart = () => {
    if (user) {
      navigate("/menu"); // logado -> vai pro menu
    } else {
      navigate("/login"); // não logado -> pede login
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>FitWorkUp</h1>
        <p style={{ fontWeight: "bold" }}>Seu treino começa aqui!</p>
        <button onClick={handleStart} className="btn">
          Começar agora
        </button>
      </div>
    </section>
  );
}

export default Hero;
