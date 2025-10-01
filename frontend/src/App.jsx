import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import TasksPage from "./pages/TasksPage";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Guia from "./pages/Guia";
import Layout from "./components/Layout";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          {/* Home isolada */}
          <Route path="/" element={<Home />} />

          {/* Rotas independentes */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<TasksPage />} />

          {/* Rotas protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route path="/menu" element={<Menu />} />
          </Route>

          {/* Rotas com Layout */}
          <Route element={<Layout />}>
            <Route path="/guia" element={<Guia />} />
            {/* <Route path="/config" element={<Config />} /> */}
            {/* <Route path="/perfil" element={<Perfil />} /> */}
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
