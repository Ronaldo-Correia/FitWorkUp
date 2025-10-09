import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { FaUser, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";
import "../styles/login.css"; 

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
  if (!form.email || !form.password) {
    setError("Preencha email e senha.");
    return;
  }

  try {
        const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email, senha: form.password }),
    });

    if (response.ok) {
      const nome = await response.text();
      login(nome); // salva no contexto
      navigate("/menu");
    }
    else {
      const erro = await response.text();
      setError(erro || "Credenciais inválidas.");
    }
  } catch {
    setError("Erro de conexão.");
  }
};


  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        {error && <p className="login-error">{error}</p>}

        <div className="login-input-group">
          <FaUser className="login-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
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
