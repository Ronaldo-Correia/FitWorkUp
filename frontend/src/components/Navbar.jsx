import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-black text-white py-4 px-16 flex justify-between items-center">
      <h1 className="text-xl font-bold text-red-600">FitWorkUp</h1>
      <nav className="space-x-6">
        <Link to="/login" className="hover:text-red-400">Login</Link>
        <Link to="/register" className="hover:text-red-400">Cadastro</Link>
        <Link to="/guia" className="hover:text-red-400">Guia</Link>
      </nav>
    </header>
  );
}

export default Navbar;
