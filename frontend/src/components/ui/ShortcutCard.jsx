import "@styles/dashboard.css";

function ShortcutCard({ icon, label, link }) {
  return (
    <a href={link} className="shortcut-card">
      <span className="shortcut-icon">{icon}</span>
      <span className="shortcut-label">{label}</span>
    </a>
  );
}

export default ShortcutCard;
