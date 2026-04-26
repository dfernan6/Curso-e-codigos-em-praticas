import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import NotFound from "./NotFound";
import { Login } from "./Login";
import HomePage from "./HomePage";
import { ProtectedRoute } from "../ProtectedRoute";

export const Pages = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home-page"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
