import { Link } from "react-router-dom";
import "@dotlottie/player-component";
import "../styles/reset.css";

function ResetError({ erro }) {
  return (
    <div className="reset-error-page">
      <div className="reset-card">
        <h2>Erro na Redefinição</h2>
        <div className="barra-horizontal"></div>

        <div className="alert alert-danger">{erro || "Token inválido ou expirado."}</div>

        <p><Link to="/forgot-password">Tentar novamente</Link></p>
        <p>ou</p>
        <p><Link to="/login">Voltar para o login</Link></p>
      </div>

      <div className="image-section2">
        <h2>Problema na Redefinição</h2>
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

export default ResetError;
