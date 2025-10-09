import { Link } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa";
import "@styles/home.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <FaDumbbell className="navbar-icon" />
        <h1>FitWorkUp</h1>
      </div>
      <nav className="navbar-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Cadastro</Link>
      </nav>
    </header>
  );
}

export default Navbar;
