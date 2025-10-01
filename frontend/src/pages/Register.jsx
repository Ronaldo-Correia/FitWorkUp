import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import flags from "emoji-flags";

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
  borderColor: state.isFocused ? '#FF3B3F' : '#d1d5db',
  borderWidth: '1px',
  boxShadow: state.isFocused ? '0 0 0 1px rgba(230, 39, 39, 1)' : 'none',
  '&:hover': {
    borderColor: '#none', // borda vermelha ao passar o mouse
  }
}),
   menu: (provided) => ({
    ...provided,
    backgroundColor: '#1f2937',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#000', // cor do texto selecionado
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#9CA3AF' // cinza-400
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
    // Aqui entra a lógica de cadastro (validação, envio para o backend, etc.)
    console.log("Dados do formulário:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-montserrat px-4">
      <div className=" p-6 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-4xl text-white font-bold text-center mb-4">
          Cadastro
        </h2>

        {/* Nome */}
        <input
          type="text"
          name="nome"
          placeholder="Nome *"
          value={form.nome}
          onChange={handleChange}
          className="user w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

       {/* País e Telefone */}
<div className="flex gap-3 mb-4 rounded-lg">

  <div className="w-1/2 rounded-full ">
    <Select
  options={countryOptions}
  placeholder="Selecione o país"
  styles={customStyles}
  
  className="text w-full h-full rounded-full"
  onChange={(selectedOption) =>
    setForm((prev) => ({ ...prev, pais: selectedOption.value }))
  }
/>

  </div>

  <input
    type="text"
    name="telefone"
    placeholder="Número de telefone*"
    value={form.telefone}
    onChange={handleChange}
    className="user w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
  />
</div>


        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
          className="user w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vermelhoFit focus:ring-red-500"
        />

        {/* Gênero */}
        <div className="flex items-center gap-4 mb-4 text-white">
          <span>Gênero:</span>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="genero"
              value="Homem"
              checked={form.genero === "Homem"}
              onChange={handleChange}
              className="accent "
            />
            Homem
          </label>
          <label className="flex items-center gap-1 ">
            <input
              type="radio"
              name="genero"
              value="Mulher"
              checked={form.genero === "Mulher"}
              onChange={handleChange}
              className="accent"
            />
            Mulher
          </label>
        </div>

        {/* Data de Nascimento */}
        <input
          type="date"
          name="nascimento"
          value={form.nascimento}
          onChange={handleChange}
          className="user w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Senhas */}
        <input
          type="password"
          name="senha"
          placeholder="Senha *"
          value={form.senha}
          onChange={handleChange}
          className="user w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="password"
          name="repetirSenha"
          placeholder="Reinserir a Senha *"
          value={form.repetirSenha}
          onChange={handleChange}
          className="user w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Endereço */}
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={form.endereco}
          onChange={handleChange}
          className="user w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Localização */}
        <input
          type="text"
          name="localizacao"
          placeholder="Localização"
          value={form.localizacao}
          onChange={handleChange}
          className="user w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          onClick={handleRegister}
          className="btn w-full bg-vermelhoFit text-white py-3 rounded-lg font-semibold hover:brightness-90 transition duration-200"
        >
          Cadastrar
        </button>

        <p className="text-sm text-center text-gray-400 mt-4">
          Já tem uma conta?{" "}
          <Link to="/login" className=" text-red-500 hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
