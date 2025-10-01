import { useNavigate } from "react-router-dom";
import progressoIcon from "../assets/progresso.png";
import aulasIcon from "../assets/aulas.png";
import sobreIcon from "../assets/sobre.png";
import contatoIcon from "../assets/contato2.png";
import usuarioIcon from "../assets/usuario.png";

function Menu() {
  const navigate = useNavigate();

  const mostrarConteudo = (tipo) => {
    navigate(`/${tipo}`);
  };

  return (
    <div className="px-6 py-8 font-montserrat">
      <section className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center mb-10">
        <div onClick={() => mostrarConteudo("progresso")} className="cursor-pointer text-center">
          <img src={progressoIcon} alt="Progresso" className="w-16 mx-auto" />
          <span className="block mt-2 text-sm font-medium">Acompanhamento</span>
        </div>
        <div onClick={() => mostrarConteudo("aulas")} className="cursor-pointer text-center">
          <img src={aulasIcon} alt="Aulas" className="w-16 mx-auto" />
          <span className="block mt-2 text-sm font-medium">Aulas</span>
        </div>
        <div onClick={() => mostrarConteudo("sobre")} className="cursor-pointer text-center">
          <img src={sobreIcon} alt="Sobre" className="w-16 mx-auto" />
          <span className="block mt-2 text-sm font-medium">Sobre</span>
        </div>
        <div onClick={() => mostrarConteudo("contato")} className="cursor-pointer text-center">
          <img src={contatoIcon} alt="Contato" className="w-16 mx-auto" />
          <span className="block mt-2 text-sm font-medium">Contato</span>
        </div>
        <div onClick={() => mostrarConteudo("usuario")} className="cursor-pointer text-center">
          <img src={usuarioIcon} alt="Usuário" className="w-16 mx-auto" />
          <span className="block mt-2 text-sm font-medium">Área do Usuário</span>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Bem-vindo ao FitWorkUp</h2>
        <p className="text-gray-700">Criado para auxiliar seu corpo com dicas de treinos e dietas.</p>
      </section>
    </div>
  );
}

export default Menu;
