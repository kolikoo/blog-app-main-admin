import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import AuthLayout from "./components/layouts/auth";
import DashboardLayout from "./components/layouts/dashboard";
import SignFormView from "./pages/auth/views";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { loginAtom } from "./store";
import AuthhorizeGuard from "./components/guard/authorized-guard";
import UnAuthhorizeGuard from "./components/guard/unauthorized-guard";
import AdminUsersView from "./pages/admin/views/admin-users/users-list/users";
import AdminBlogsView from "./pages/admin/views/admin-blogs/blog-list/blogs";
import UserCreateView from "./pages/admin/views/admin-users/user-create";
import UserUpdateView from "./pages/admin/views/admin-users/user-update";
import BlogsCreateView from "./pages/admin/views/admin-blogs/blog-create";
import BlogsUpdateView from "./pages/admin/views/admin-blogs/blog-update";
import NotFound from "./pages/not-found";
// 
const App = () => {
  const setUser = useSetAtom(loginAtom);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
      setisLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Routes>
      <Route
        path="auth"
        element={
          <AuthhorizeGuard>
            <AuthLayout />
          </AuthhorizeGuard>
        }
      >
        <Route path="sign-in" element={<SignFormView />} />
      </Route>
      <Route
        path="dashboard"
        element={
          <UnAuthhorizeGuard>
            <DashboardLayout />
          </UnAuthhorizeGuard>
        }
      >
        <Route path="admin/users" element={<AdminUsersView />} />
        <Route path="admin/user-create" element={<UserCreateView />} />
        <Route path="admin/user-update/:id" element={<UserUpdateView />} />
        <Route path="admin/blogs" element={<AdminBlogsView />} />
        <Route path="admin/blog-create" element={<BlogsCreateView />} />
        <Route path="admin/blog-update/:id" element={<BlogsUpdateView />} />
      </Route>
      <Route path="*" element={<NotFound/>} />
      <Route path="/" element={<Navigate to="/auth/sign-in" />}></Route>
    </Routes>
  );
};

export default App;
