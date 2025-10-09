import { useNavigate } from "react-router-dom";
import { FaHome, FaClipboardList, FaCog, FaUser } from "react-icons/fa";
import "@styles/home.css";
function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <nav className="footer-nav">
        <button onClick={() => navigate("/")} className="footer-btn">
          <FaHome className="footer-icon" />
          <span>Home</span>
        </button>
        <button onClick={() => navigate("/guia")} className="footer-btn">
          <FaClipboardList className="footer-icon" />
          <span>Guia</span>
        </button>
        <button onClick={() => navigate("/config")} className="footer-btn">
          <FaCog className="footer-icon" />
          <span>Config</span>
        </button>
        <button onClick={() => navigate("/perfil")} className="footer-btn">
          <FaUser className="footer-icon" />
          <span>Perfil</span>
        </button>
      </nav>
    </footer>
  );
}

export default Footer;
