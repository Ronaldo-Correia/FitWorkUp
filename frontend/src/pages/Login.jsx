import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { FaUser, FaLock, FaFacebook, FaGoogle } from "react-icons/fa";
import "@styles/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError("Preencha usuário e senha.");
      return;
    }
    login(username);
    navigate("/menu");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        {error && <p className="login-error">{error}</p>}

        {/* Campo Usuário */}
        <div className="login-input-group">
          <FaUser className="login-icon" />
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Campo Senha */}
        <div className="login-input-group">
          <FaLock className="login-icon" />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Opções extras */}
        <div className="login-options">
          <label>
            <input type="checkbox" className="accent" /> Lembrar-me
          </label>
          <Link to="/forgot-password" className="login-link">
            Esqueceu sua senha?
          </Link>
        </div>

        {/* Botão Login */}
        <button onClick={handleLogin} className="btn-login">
          Entrar
        </button>

        {/* Botão Google */}
        <button className="btn-social google">
          <FaGoogle /> Entrar com Google
        </button>

        {/* Botão Facebook */}
        <button className="btn-social facebook">
          <FaFacebook /> Login com Facebook
        </button>

        {/* Cadastro */}
        <p className="login-register">
          Não possui conta?{" "}
          <Link to="/register" className="login-link">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
