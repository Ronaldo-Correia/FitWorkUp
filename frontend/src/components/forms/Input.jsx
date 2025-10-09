import "../../styles/forms.css";

function Input({ icon: Icon, ...props }) {
  return (
    <div className="input-group">
      {Icon && <Icon className="input-icon" />}
      <input className="input-field" {...props} />
    </div>
  );
}

export default Input;
