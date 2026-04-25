import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import NotFound from "./NotFound";
import { Login } from "./Login";
import HomePage from "./HomePage";

export const Pages = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home-page" element={<HomePage />} />
    </Routes>
  </Router>
);