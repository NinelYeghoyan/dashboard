import { FC, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "./routes";

const NewUser = lazy(() => import("@features/user/components/User"));
const Home = lazy(() => import("@features/dashboard/components/Home"));
const EditUser = lazy(() => import("@features/user/components/User"));

const AppRoutes: FC = () => (
    <Routes>
        <Route path={routes.home.path} element={<Home />} />
        <Route path={routes.newUser.path} element={<NewUser />} />
        <Route path={routes.editUser.path} element={<EditUser />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

export default AppRoutes;
