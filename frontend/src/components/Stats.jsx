const stats = [
  { value: "100+", label: "Treinos cadastrados" },
  { value: "50+", label: "Desafios ativos" },
  { value: "90%", label: "Taxa de adesão" },
];

function Stats() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {stats.map((s, i) => (
          <div key={i}>
            <p className="text-4xl font-bold text-red-600">{s.value}</p>
            <p className="text-gray-700">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
