import { Route, Routes } from "react-router-dom";
import { routesArray } from "./routes.js";
import Layout from "../components/layout/Layout.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routesArray.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
