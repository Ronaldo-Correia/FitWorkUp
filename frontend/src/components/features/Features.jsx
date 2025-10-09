import "@styles/home.css";

const features = [
  { icon: "🏋️", title: "Treinos Personalizados", desc: "Planos adaptados ao seu perfil." },
  { icon: "🏆", title: "Desafios Semanais", desc: "Supere metas e ganhe conquistas." },
  { icon: "📈", title: "Acompanhamento", desc: "Veja sua evolução em tempo real." },
  { icon: "🎮", title: "Gamificação", desc: "Transforme treino em diversão." },
];

function Features() {
  return (
    <section className="features-section">
      <h2>Por que usar o FitWorkUp?</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
