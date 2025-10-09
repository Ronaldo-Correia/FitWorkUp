import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";

function Register() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    repetirSenha: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
  if (!form.email || !form.senha || !form.repetirSenha || !form.nome) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }
  if (form.senha !== form.repetirSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  try {
    const response = await fetch("/api/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      }),
    });

    if (response.ok) {
      console.log("Usuário cadastrado:", form);
      navigate("/login");
    } else {
      const erro = await response.text();
      alert(erro || "Erro ao cadastrar.");
    }
  } catch {
    alert("Erro de conexão com o servidor.");
  }
};


  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">Criar Conta</h2>

        <div className="register-input-group">
          <input
            type="text"
            name="nome"
            placeholder="Nome *"
            value={form.nome}
            onChange={handleChange}
          />
        </div>

        <div className="register-input-group">
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="register-input-group">
          <input
            type="password"
            name="senha"
            placeholder="Senha *"
            value={form.senha}
            onChange={handleChange}
          />
        </div>

        <div className="register-input-group">
          <input
            type="password"
            name="repetirSenha"
            placeholder="Reinserir a Senha *"
            value={form.repetirSenha}
            onChange={handleChange}
          />
        </div>

        <button className="btn-register" onClick={handleRegister}>
          Cadastrar
        </button>

        <p className="register-footer">
          Já tem uma conta?{" "}
          <Link to="/login" className="register-link">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
