import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "@dotlottie/player-component";
import "../styles/reset.css";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (novaSenha !== confirmacaoSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    try {
      const response = await fetch("/api/redefinir-senha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, novaSenha }),
      });

      const result = await response.json();
      if (response.ok) {
        navigate("/login");
      } else {
        setErro(result.erro || "Erro ao redefinir senha.");
      }
    } catch {
      setErro("Erro de conexão.");
    }
  };

  return (
    <div className="reset-page">
      <div className="reset-card">
        <h2>Nova Senha</h2>
        <div className="barra-horizontal"></div>

        {erro && <div className="alert alert-danger">{erro}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            required
            minLength={6}
          />
          <input
            type="password"
            placeholder="Confirme a senha"
            value={confirmacaoSenha}
            onChange={(e) => setConfirmacaoSenha(e.target.value)}
            required
            minLength={6}
          />
          <button type="submit">Salvar Nova Senha</button>
        </form>
      </div>

      <div className="image-section2">
        <dotlottie-player
          src="https://lottie.host/1e1bdafd-9d96-4909-9862-b21f2c5f6172/4C2XHtUxwS.lottie"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
}

export default ResetPassword;
