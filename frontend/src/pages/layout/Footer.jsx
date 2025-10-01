import { useNavigate } from "react-router-dom";
import { FaHome, FaClipboardList, FaCog, FaUser } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-vermelhoFit py-2 font-montserrat">
      <nav className="flex justify-around text-xs">
        <button onClick={() => navigate("/home")} className="flex flex-col items-center">
          <FaHome className="text-lg" />
          <span>Home</span>
        </button>
        <button onClick={() => navigate("/guia")} className="flex flex-col items-center">
          <FaClipboardList className="text-lg" />
          <span>Guia de Treinos</span>
        </button>
        <button onClick={() => navigate("/config")} className="flex flex-col items-center">
          <FaCog className="text-lg" />
          <span>Configuração</span>
        </button>
        <button onClick={() => navigate("/perfil")} className="flex flex-col items-center">
          <FaUser className="text-lg" />
          <span>Perfil</span>
        </button>
      </nav>
    </footer>
  );
}

export default Footer;
