import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/index";
import { Details } from "../pages/Details/Index";

export function AppUserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
