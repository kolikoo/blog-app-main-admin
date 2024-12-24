import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import AuthhorizeGuard from "../components/guard/authorized-guard";
import UnAuthhorizeGuard from "../components/guard/unauthorized-guard";
const AuthLayout = lazy(() => import("../components/layouts/auth"));
const DashboardLayout = lazy(() => import("../components/layouts/dashboard"));
const NotFound = lazy(() => import("../pages/not-found"));
import { AUTH_PATHS } from "./auth/index.enum";
import { DASHBOARD_PATH } from "./dashboard/index.enum";
import { DASHBOARD_ROUTES } from "./dashboard";
import { AUTHENTICATION_ROUTES } from "./auth";
import { BASIC_PATH } from "./index.enum";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={AUTH_PATHS.AUTH}
        element={
          <AuthhorizeGuard>
            <AuthLayout />
          </AuthhorizeGuard>
        }
      >
        {AUTHENTICATION_ROUTES}
      </Route>

      <Route
        path={DASHBOARD_PATH.DASHBOARD}
        element={
          <UnAuthhorizeGuard>
            <DashboardLayout />
          </UnAuthhorizeGuard>
        }
      >
        {DASHBOARD_ROUTES}
      </Route>

      <Route
        path={BASIC_PATH.NOTFOUND}
        element={
          <Suspense>
            <NotFound />
          </Suspense>
        }
      />
      <Route
        path={BASIC_PATH.ROOT}
        element={<Navigate to={BASIC_PATH.REDIRECT} />}
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
