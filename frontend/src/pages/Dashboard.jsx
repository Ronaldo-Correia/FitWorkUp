import "@styles/dashboard.css";
import StatsCard from "../components/ui/StatsCard";
import ShortcutCard from "../components/ui/ShortcutCard";

function Dashboard() {
  const stats = [
    { label: "Treinos concluídos", value: "24" },
    { label: "Calorias queimadas", value: "3.200 kcal" },
    { label: "Dias ativos", value: "15" },
  ];

  const shortcuts = [
    { label: "Treinos", icon: "💪", link: "/guia" },
    { label: "Desafios", icon: "🏆", link: "/desafios" },
    { label: "Perfil", icon: "👤", link: "/perfil" },
    { label: "Configurações", icon: "⚙️", link: "/config" },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <h2 className="dashboard-title">Resumo do Progresso</h2>

        {/* Estatísticas */}
        <div className="dashboard-stats">
          {stats.map((s, i) => (
            <StatsCard key={i} value={s.value} label={s.label} />
          ))}
        </div>

        {/* Atalhos */}
        <h3 className="dashboard-subtitle">Acessos Rápidos</h3>
        <div className="dashboard-shortcuts">
          {shortcuts.map((s, i) => (
            <ShortcutCard key={i} icon={s.icon} label={s.label} link={s.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
