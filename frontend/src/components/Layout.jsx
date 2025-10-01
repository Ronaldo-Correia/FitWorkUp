import Header from "../pages/layout/Header";
import Main from "../pages/layout/Main";
import Footer from "../pages/layout/Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
