import "@styles/home.css";

const stats = [
  { value: "100+", label: "Treinos cadastrados" },
  { value: "50+", label: "Desafios ativos" },
  { value: "90%", label: "Taxa de adesão" },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stats-item" key={i}>
            <p className="stats-value">{s.value}</p>
            <p className="stats-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
