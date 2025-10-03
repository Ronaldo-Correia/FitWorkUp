import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import flags from "emoji-flags";
import "../styles/register.css"; // importa o CSS da tela

// gera lista de países com bandeiras
const countryOptions = countryList().getData().map((country) => {
  const flag = flags.countryCode(country.value);
  return {
    value: country.value,
    label: `${flag?.emoji || ""} ${country.label}`,
  };
});

function Register() {
  const [form, setForm] = useState({
    nome: "",
    pais: "",
    telefone: "",
    email: "",
    genero: "",
    nascimento: "",
    senha: "",
    repetirSenha: "",
    endereco: "",
    localizacao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {
    if (!form.nome || !form.email || !form.senha || !form.repetirSenha) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }
    console.log("Dados cadastrados:", form);
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">Cadastro</h2>

        <div className="register-input-group">
          <input
            type="text"
            name="nome"
            placeholder="Nome *"
            value={form.nome}
            onChange={handleChange}
          />
        </div>

        <div className="register-input-row">
          <Select
            options={countryOptions}
            placeholder="Selecione o país"
            onChange={(opt) =>
              setForm((prev) => ({ ...prev, pais: opt?.value || "" }))
            }
            className="register-select"
            classNamePrefix="select"
          />
          <input
            className="register-tel"
            type="text"
            name="telefone"
            placeholder="Telefone *"
            value={form.telefone}
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

        <div className="register-radio-group">
          <label>
            <input
              type="radio"
              name="genero"
              value="Homem"
              checked={form.genero === "Homem"}
              onChange={handleChange}
            />
            Homem
          </label>
          <label>
            <input
              type="radio"
              name="genero"
              value="Mulher"
              checked={form.genero === "Mulher"}
              onChange={handleChange}
            />
            Mulher
          </label>
        </div>

        <div className="register-input-group">
          <input
            type="date"
            name="nascimento"
            value={form.nascimento}
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

        <div className="register-input-group">
          <input
            type="text"
            name="endereco"
            placeholder="Endereço"
            value={form.endereco}
            onChange={handleChange}
          />
        </div>

        <div className="register-input-group">
          <input
            type="text"
            name="localizacao"
            placeholder="Localização"
            value={form.localizacao}
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
