import { Routes, Route } from "react-router-dom";

import Project from "./pages/Project";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Browse from "./pages/Browse";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreateProject from "./pages/CreateProject";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>

  {/* Public */}

  <Route path="/" element={<Landing />} />

  <Route path="/login" element={<Login />} />

  <Route path="/register" element={<Register />} />

  {/* Protected */}

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />

  <Route
    path="/browse"
    element={
      <ProtectedRoute>
        <Browse />
      </ProtectedRoute>
    }
  />

  <Route
    path="/create-project"
    element={
      <ProtectedRoute>
        <CreateProject />
      </ProtectedRoute>
    }
  />

  <Route
    path="/profile"
    element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    }
  />

  <Route
    path="/projects/:id"
    element={
      <ProtectedRoute>
        <Project />
      </ProtectedRoute>
    }
  />
  <Route path="*" element={<NotFound />} />

</Routes>

<Footer />
</>
  );
}