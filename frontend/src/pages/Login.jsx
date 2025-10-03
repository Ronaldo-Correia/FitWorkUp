import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { FaUser, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";
import "../styles/login.css"; // importa o CSS da tela

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    if (!form.username || !form.password) {
      setError("Preencha usuário e senha.");
      return;
    }
    login(form.username);
    navigate("/menu");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        {error && <p className="login-error">{error}</p>}

        <div className="login-input-group">
          <FaUser className="login-icon" />
          <input
            type="text"
            name="username"
            placeholder="Usuário"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div className="login-input-group">
          <FaLock className="login-icon" />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="login-options">
  <label>
    <input type="checkbox" /> Lembrar-me
  </label>
  <Link to="/forgot-password" className="login-link">
    Esqueceu sua senha?
  </Link>
</div>

<button className="btn-login" onClick={handleLogin}>
  Entrar
</button>

<button className="btn-social google">
  <FaGoogle /> Entrar com Google
</button>

<button className="btn-social facebook">
  <FaFacebook /> Login com Facebook
</button>

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
