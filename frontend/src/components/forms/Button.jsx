import "@styles/global.css";

function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={`btn ${variant}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
