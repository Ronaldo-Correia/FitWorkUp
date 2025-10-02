import { FaBars, FaBell } from "react-icons/fa";
import "@styles/home.css";

function Header() {
  return (
    <header className="header">
      <button className="header-icon">
        <FaBars />
      </button>
      <h1 className="header-title">FitWorkUp</h1>
      <button className="header-icon notification">
        <FaBell />
        <span className="notification-badge">1</span>
      </button>
    </header>
  );
}

export default Header;
