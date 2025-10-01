import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="flex-1 overflow-y-auto px-4 py-6 font-montserrat">
      <Outlet />
    </main>
  );
}

export default Main;
