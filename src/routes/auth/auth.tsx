import { Route } from "react-router";
import { lazy, Suspense } from "react";
import { AUTH_PATHS } from "./index.enum";
// eslint-disable-next-line react-refresh/only-export-components
const SignFormView = lazy(() => import("../../pages/auth/views/"));
export const AUTH_ROUTES = [
  <Route
    key='sign-in'
    path={AUTH_PATHS.SIGNIN}
    element={
      <Suspense>
        <SignFormView />
      </Suspense>
    }
  />,
];
