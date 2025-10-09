import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
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
          {/* Telas independentes (sem Header/Footer) */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

          {/* Telas com Header/Footer fixos */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/guia" element={<Guia />} />

            {/* Protegidas + layout */}
            <Route element={<ProtectedRoute />}>
              <Route path="/menu" element={<Menu />} />
            </Route>
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
