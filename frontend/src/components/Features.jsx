const features = [
  { icon: "🏋️", title: "Treinos Personalizados", desc: "Planos adaptados ao seu perfil." },
  { icon: "🏆", title: "Desafios Semanais", desc: "Supere metas e ganhe conquistas." },
  { icon: "📈", title: "Acompanhamento", desc: "Veja sua evolução em tempo real." },
  { icon: "🎮", title: "Gamificação", desc: "Transforme treino em diversão." },
];

function Features() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Por que usar o FitWorkUp?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
