import { FaBars, FaBell } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-white shadow-md font-montserrat">
      <button className="text-vermelhoFit text-xl">
        <FaBars />
      </button>
      <h1 className="text-xl font-bold text-vermelhoFit">FitWorkUp</h1>
      <button className="relative text-vermelhoFit text-xl">
        <FaBell />
        <span className="absolute -top-1 -right-2 bg-vermelhoFit text-white text-xs px-1 rounded-full">1</span>
      </button>
    </header>
  );
}

export default Header;
