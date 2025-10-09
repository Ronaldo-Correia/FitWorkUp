import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import progressoIcon from "../assets/progresso.png";
import aulasIcon from "../assets/aulas.png";
import sobreIcon from "../assets/sobre.png";
import contatoIcon from "../assets/contato2.png";
import usuarioIcon from "../assets/usuario.png";
import "../styles/global.css";

function Menu() {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const mostrarConteudo = (tipo) => {
    navigate(`/${tipo}`);
  };

  return (
    <div className="menu-container">
      <h2 className="menu-title">Bem-vindo, {user?.name}!</h2>
      <button className="logout-btn" onClick={logout}>Sair</button>

      <section className="menu-grid">
        <div onClick={() => mostrarConteudo("progresso")} className="menu-item">
          <img src={progressoIcon} alt="Progresso" />
          <span>Acompanhamento</span>
        </div>
        <div onClick={() => mostrarConteudo("aulas")} className="menu-item">
          <img src={aulasIcon} alt="Aulas" />
          <span>Aulas</span>
        </div>
        <div onClick={() => mostrarConteudo("sobre")} className="menu-item">
          <img src={sobreIcon} alt="Sobre" />
          <span>Sobre</span>
        </div>
        <div onClick={() => mostrarConteudo("contato")} className="menu-item">
          <img src={contatoIcon} alt="Contato" />
          <span>Contato</span>
        </div>
        <div onClick={() => mostrarConteudo("usuario")} className="menu-item">
          <img src={usuarioIcon} alt="Usuário" />
          <span>Área do Usuário</span>
        </div>
      </section>
    </div>
  );
}

export default Menu;
