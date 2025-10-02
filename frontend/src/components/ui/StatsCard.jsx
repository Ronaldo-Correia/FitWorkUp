import "@styles/dashboard.css";

function StatsCard({ value, label }) {
  return (
    <div className="stat-card">
      <p className="stat-value">{value}</p>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default StatsCard;
