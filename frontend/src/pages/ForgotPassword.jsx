import { useState } from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../styles/forgot.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Por favor, insira seu email.");
      setStatus("error");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/redefinir-senha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.sucesso || "Email enviado com sucesso.");
        setStatus("success");
      } else {
        setMessage(result.erro || "Erro ao enviar email.");
        setStatus("error");
      }
    } catch {
      setMessage("Erro de conexão.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-page-dark">
      {/* CARD */}
      <div className="forgot-card-dark">
        <h2 className="forgot-title-dark">Redefinir Senha</h2>
        <div className="image-section2-dark">
        <DotLottieReact
          src="https://lottie.host/2c3669cb-2cb5-44fb-b4c7-d303e53f41d8/kUhYDVzoRX.lottie"
          loop
          autoplay
          style={{ width: "320px", height: "320px", }}
        />
    </div><hr className="forgot-divider" />

        {message && (
          <div className={`alert ${status === "error" ? "alert-danger" : "alert-success"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail cadastrado*</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar Link de Redefinição"}
          </button>
        </form>

        <p>
          Lembrou sua senha? <Link to="/login">Faça login</Link>
        </p>

      {/* LOTTIE AO LADO */}
            
  </div>
      </div>

  );
}

export default ForgotPassword;
