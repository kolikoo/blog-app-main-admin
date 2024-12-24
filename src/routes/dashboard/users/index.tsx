/* eslint-disable react-refresh/only-export-components */
import { Route } from "react-router";
import { DASHBOARD_PATH } from "../index.enum";
import { lazy } from "react";
const AdminUsersView = lazy(
  () => import("../../../pages/admin/views/admin-users/users-list")
);
const UserCreateView = lazy(
  () => import("../../../pages/admin/views/admin-users/user-create")
);
const UserUpdateView = lazy(
  () => import("../../../pages/admin/views/admin-users/user-update")
);

export const ADMIN_USERS = [
  <Route
    key="users"
    path={DASHBOARD_PATH.USERS}
    element={<AdminUsersView />}
  />,
  <Route
    key="users-create"
    path={DASHBOARD_PATH.USERS_CREATE}
    element={<UserCreateView />}
  />,
  <Route
    key="users-update"
    path={DASHBOARD_PATH.USERS_UPDATE + "/:id"}
    element={<UserUpdateView />}
  />,
];
