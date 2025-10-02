import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import TasksPage from "./pages/TasksPage";
import Menu from "./pages/Menu";
import Guia from "./pages/Guia";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

import Layout from "./components/layout/Layout"; 
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./components/utils/ProtectedRoute";

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

          {/* Rotas com Layout (Header + Footer fixos) */}
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/guia" element={<Guia />} />
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
