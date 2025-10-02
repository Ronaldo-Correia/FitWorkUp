import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import flags from "emoji-flags";
import "@styles/register.css";

const countryOptions = countryList().getData().map((country) => {
  const flag = flags.countryCode(country.value);
  return {
    value: country.value,
    label: `${flag?.emoji || ''} ${country.label}`,
  };
});

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '8px',
    backgroundColor: '#F5F5F5',
    minHeight: '49px',
    borderColor: state.isFocused ? '#E50914' : '#d1d5db',
    borderWidth: '1px',
    boxShadow: state.isFocused ? '0 0 0 1px rgba(229, 9, 20, 1)' : 'none',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#1f2937',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#000',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#9CA3AF'
  })
};

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
    localizacao: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {
    console.log("Dados do formulário:", form);
  };

  return (
    <div className="register-page">
      {/* Coluna esquerda */}
      <div className="register-left">
        <h1>FitWorkUp</h1>
        <p>Transforme seu treino em resultados reais</p>
      </div>

      {/* Coluna direita */}
      <div className="register-right">
        <div className="register-card">
          <h2 className="register-title">Cadastro</h2>

          <input
            type="text"
            name="nome"
            placeholder="Nome *"
            value={form.nome}
            onChange={handleChange}
            className="input-field"
          />

          <div className="input-row">
            <Select
              options={countryOptions}
              placeholder="Selecione o país"
              styles={customStyles}
              onChange={(selectedOption) =>
                setForm((prev) => ({ ...prev, pais: selectedOption.value }))
              }
              className="select-country"
            />
            <input
              type="text"
              name="telefone"
              placeholder="Telefone *"
              value={form.telefone}
              onChange={handleChange}
              className="input-telefone"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={form.email}
            onChange={handleChange}
            className="input-field"
          />

          <div className="radio-group">
            <span>Gênero:</span>
            <label>
              <input
                type="radio"
                name="genero"
                value="Homem"
                checked={form.genero === "Homem"}
                onChange={handleChange}
              /> Homem
            </label>
            <label>
              <input
                type="radio"
                name="genero"
                value="Mulher"
                checked={form.genero === "Mulher"}
                onChange={handleChange}
              /> Mulher
            </label>
          </div>

          <input
            type="date"
            name="nascimento"
            value={form.nascimento}
            onChange={handleChange}
            className="input-field"
          />

          <input
            type="password"
            name="senha"
            placeholder="Senha *"
            value={form.senha}
            onChange={handleChange}
            className="input-field"
          />

          <input
            type="password"
            name="repetirSenha"
            placeholder="Reinserir a Senha *"
            value={form.repetirSenha}
            onChange={handleChange}
            className="input-field"
          />

          <input
            type="text"
            name="endereco"
            placeholder="Endereço"
            value={form.endereco}
            onChange={handleChange}
            className="input-field"
          />

          <input
            type="text"
            name="localizacao"
            placeholder="Localização"
            value={form.localizacao}
            onChange={handleChange}
            className="input-field"
          />

          <button onClick={handleRegister} className="btn-register">
            Cadastrar
          </button>

          <p className="register-footer">
            Já tem uma conta?{" "}
            <Link to="/login" className="register-link">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
