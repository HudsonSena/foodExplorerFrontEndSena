import { Routes, Route } from "react-router-dom";

import { CreateFood } from "../pages/CreateFood/Index";
import { UpdateFood } from "../pages/UpdateFood/Index";
import { DetailsAdmin } from "../pages/DetailsAdmin/Index";
import { HomeAdmin } from "../pages/HomeAdmin/index";

export function AppAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/createfood" element={<CreateFood />} />
      <Route path="/updatefood/:id" element={<UpdateFood />} />
      <Route path="/detailsadmin/:id" element={<DetailsAdmin />} />
    </Routes>
  );
}