import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Aqui você adiciona a lógica de envio de email para redefinir a senha
    alert("Link de redefinição de senha enviado para: " + email);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center font-montserrat px-4">
      <div className="p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl text-vermelhoFit font-bold text-center mb-6">
          Esqueceu sua senha?
        </h2>

        <p className="text-gray-400 text-sm mb-6 text-center">
          Digite seu email para redefinir sua senha
        </p>

        <div className="mb-6">
          <input
            type="email"
            placeholder="📧 example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="user w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vermelhoFit"
          />
        </div>

        <button
          onClick={handleResetPassword}
          className="btn w-full text-white py-3 rounded-lg font-semibold hover:brightness-90 transition duration-200"
        >
          Redefinir senha
        </button>

        <div className="mt-6 text-sm text-center">
          <Link to="/login" className="text  hover:underline">
            ← Voltar para o login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
