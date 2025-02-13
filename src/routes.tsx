import { Route, Routes as RouterRoutes } from "react-router-dom";
import IndexPage from "./pages/index";

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<IndexPage />} />
    </RouterRoutes>
  );
}