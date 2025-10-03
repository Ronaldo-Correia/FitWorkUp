import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/forgot.css"; // importa o CSS da tela

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Por favor, insira seu email.");
      return;
    }
    // Aqui entraria a lógica de envio de recuperação
    setMessage("Se o email existir, enviaremos instruções de recuperação.");
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <h2 className="forgot-title">Esqueci minha senha</h2>

        {message && <p className="forgot-message">{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="forgot-input-group">
            <input
              type="email"
              className="input-field"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-forgot">
            Enviar instruções
          </button>
        </form>

        <p className="forgot-footer">
          Lembrou sua senha?{" "}
          <Link to="/login" className="forgot-link">
            Voltar ao login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
