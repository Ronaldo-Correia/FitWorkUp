import "@styles/global.css";

function FormGroup({ label, children }) {
  return (
    <div className="form-group">
      {label && <span className="form-label">{label}</span>}
      <div className="form-content">{children}</div>
    </div>
  );
}

export default FormGroup;
