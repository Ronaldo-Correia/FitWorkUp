import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-[url('/src/assets/background2.png')] bg-cover bg-center relative min-h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">FitWorkUp</h1>
        <p className="text-xl mb-6">Seu treino começa aqui</p>
        <button
          onClick={() => navigate("/menu")}
          className="px-8 py-3 bg-red-600 rounded-lg font-semibold hover:brightness-90 transition"
        >
          Começar agora
        </button>
      </div>
    </section>
  );
}

export default Hero;
