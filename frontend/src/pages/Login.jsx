import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { FaUser, FaLock, FaFacebook, FaGoogle, FaGooglePay, FaGooglePlusSquare, FaGalacticRepublic, FaEmpire } from "react-icons/fa";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 font-montserrat px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-4xl text-vermelhoFit font-extrabold text-center mb-8">
          Login
        </h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        {/* Campo Usuário */}
        <div className="flex items-center border border-gray-300 rounded-lg mb-4 px-3">
          <FaUser className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 focus:outline-none"
          />
        </div>

        {/* Campo Senha */}
        <div className="flex items-center border border-gray-300 rounded-lg mb-4 px-3">
          <FaLock className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 focus:outline-none"
          />
        </div>

        {/* Opções extras */}
        <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-vermelhoFit" />
            Lembrar-me
          </label>
          <Link to="/forgot-password" className="text-vermelhoFit hover:underline">
            Esqueceu sua senha?
          </Link>
        </div>

       {/* Botão Login */}
        <button
          onClick={handleLogin}
          className="w-full bg-red-500 text-white border border-black py-3 rounded-lg font-semibold hover:brightness-90 transition duration-200"
        >
          Entrar
        </button>

        {/* Botão Google */}
        <button
          className="w-full mt-3 flex items-center justify-center gap-2 bg-white text-black border border-black py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-200"
        >
          <FaGoogle /> Entrar com Google
        </button>

        {/* Botão Facebook */}
        <button
          className="w-full mt-3 flex items-center justify-center gap-2 bg-blue-600 text-white border border-black py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          <FaFacebook /> Login com Facebook
        </button>


        {/* Cadastro */}
        <p className="mt-6 text-center text-sm text-gray-700">
          Não possui conta?{" "}
          <Link to="/register" className="text-vermelhoFit font-medium hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
