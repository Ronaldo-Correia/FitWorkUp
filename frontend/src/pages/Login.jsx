import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // lógica de autenticação
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center font-montserrat px-4">
      <div className=" p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl text-vermelhoFit font-bold text-center mb-6">
  Login
</h2>

        <input
          type="text"
          placeholder="👤Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="user w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vermelhoFit"
        />

        <input
          type="password"
          placeholder="🔒Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="user w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vermelhoFit"
        />

        <div className="flex justify-between items-center mb-6 text-sm text-gray-700">
          <label className="text flex items-center gap-2">
            <input  type="checkbox" className=" accent-vermelhoFit" />
            Lembra-me
          </label>
          <Link to="/forgot-password" className="text-red-500 hover:underline">
            Esqueceu sua senha?
          </Link>
        </div>

        <button
          onClick={handleLogin}
          className="btn btn-primary w-full  text-white py-3 rounded-lg font-semibold hover:brightness-90 transition duration-200"
        >
        Login
        </button>
          
        <button 
          className="text w-full mt-3 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Login com Facebook
        </button>   
        <p className="text mt-6 text-center text-sm text-gray-700">
          Não possui conta?{" "}
          <Link to="/register" className="text-red-500 font-medium hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
