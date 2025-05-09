import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
