import { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import flags from "emoji-flags";
import "../styles/register.css";

const countryOptions = countryList().getData().map((country) => {
  const flag = flags.countryCode(country.value);
  return {
    value: country.value,
    label: `${flag?.emoji || ""} ${country.label}`,
  };
});

function Profile() {
  const [form, setForm] = useState({
    nome: "",
    pais: "",
    telefone: "",
    email: "",
    genero: "",
    nascimento: "",
    cep: "",
    endereco: "",
    localizacao: "",
    peso: "",
    altura: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCepSearch = async () => {
    const cep = form.cep.replace(/\D/g, "");
    if (cep.length !== 8) {
      alert("CEP inválido! Digite um CEP com 8 números.");
      return;
    }
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) throw new Error("Erro ao buscar o CEP.");
      const data = await response.json();
      if (data.erro) {
        alert("CEP não encontrado!");
        return;
      }
      setForm((prev) => ({
        ...prev,
        endereco: `${data.logradouro} - ${data.bairro}`,
        localizacao: `${data.localidade} - ${data.uf}`,
      }));
    } catch (error) {
      console.error("Erro:", error);
      alert("Não foi possível buscar o CEP.");
    }
  };

  const handleSaveProfile = () => {
    console.log("Perfil atualizado:", form);
    alert("Perfil salvo com sucesso!");
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">Completar Perfil</h2>

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

        <div className="register-cep-row">
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            value={form.cep}
            onChange={handleChange}
          />
          <button type="button" className="btn-cep" onClick={handleCepSearch}>
            Buscar
          </button>
        </div>

        <div className="register-input-group">
          <input
            type="text"
            name="bairro"
            placeholder="Bairro"
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

        <div className="register-input-row">
          <input
            type="number"
            name="peso"
            placeholder="Peso (kg)"
            value={form.peso}
            onChange={handleChange}
          />
          <input
            type="number"
            name="altura"
            placeholder="Altura (cm)"
            value={form.altura}
            onChange={handleChange}
          />
        </div>

        <button className="btn-register" onClick={handleSaveProfile}>
          Salvar Perfil
        </button>
      </div>
    </div>
  );
}

export default Profile;
