import {
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Register from "./pages/Register";

import UserDashboard from "./pages/UserDashboard";

import ManagerDashboard from "./pages/ManagerDashboard";

import AdminDashboard from "./pages/AdminDashboard";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <Routes>

      {/* Home */}

      <Route
        path="/"
        element={<Home />}
      />

      {/* Login */}

      <Route
        path="/login"
        element={<Login />}
      />

      {/* Register */}

      <Route
        path="/register"
        element={<Register />}
      />

      {/* User Dashboard */}

      <Route
        path="/user"
        element={
          <ProtectedRoute
            user={user}
            allowedRoles={[
              "user",
              "manager",
              "admin"
            ]}
          >
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      {/* Manager Dashboard */}

      <Route
        path="/manager"
        element={
          <ProtectedRoute
            user={user}
            allowedRoles={[
              "manager",
              "admin"
            ]}
          >
            <ManagerDashboard />
          </ProtectedRoute>
        }
      />

      {/* Admin Dashboard */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute
            user={user}
            allowedRoles={[
              "admin"
            ]}
          >
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;