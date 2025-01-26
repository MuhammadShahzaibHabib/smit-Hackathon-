import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import UserDashboard from "./pages/userDashboard";
import AdminPanel from "./pages/adminPanel";
import Login from "./pages/auth/login";
import Singup from "./pages/auth/singup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ApplyForLoan from "./pages/applyForLoan";

function App() {
  const location = useLocation(); // Get the current location

  // Check if the current route is login or signup
  const isAuthPage =
    location.pathname === "/auth/login" || location.pathname === "/auth/singup";

  return (
    <>
      {/* Conditionally render Header and Footer based on the current route */}
      {!isAuthPage && <Header />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/applyForLoan" element={<ApplyForLoan />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/singup" element={<Singup />} />
      </Routes>

      {/* Conditionally render Footer based on the current route */}
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
