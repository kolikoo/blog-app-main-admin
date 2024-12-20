import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-slate-800 flex justify-center items-center p-2">
      <Outlet />
    </div>
  );
};
export default AuthLayout;
