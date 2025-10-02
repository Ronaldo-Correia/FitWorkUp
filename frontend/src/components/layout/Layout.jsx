import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/layout.css"; // se você criou esse CSS

function Layout() {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-content">
        <Outlet /> {/* aqui entram Dashboard, Guia etc */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
