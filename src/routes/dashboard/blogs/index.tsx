/* eslint-disable react-refresh/only-export-components */
import { Route } from "react-router";
import { lazy } from "react";
const BlogsCreateView = lazy(
  () => import("../../../pages/admin/views/admin-blogs/blog-create")
);
const AdminBlogsView = lazy(
  () => import("../../../pages/admin/views/admin-blogs/blog-list")
);
const BlogsUpdateView = lazy(
  () => import("../../../pages/admin/views/admin-blogs/blog-update")
);
import { DASHBOARD_PATH } from "../index.enum";

export const ADMIN_BLOGS = [
  <Route
    key="blogs"
    path={DASHBOARD_PATH.BLOGS}
    element={<AdminBlogsView />}
  />,
  <Route
    key="blog-create"
    path={DASHBOARD_PATH.BLOGS_CREATE}
    element={<BlogsCreateView />}
  />,
  <Route
    key="blog-update"
    path={DASHBOARD_PATH.BLOGS_UPDATE + "/:id"}
    element={<BlogsUpdateView />}
  />,
];
