import { useAtomValue } from "jotai";
import { PropsWithChildren } from "react";
import { loginAtom } from "../../store";
import { Navigate, Outlet } from "react-router";
import { BASIC_PATH } from "../../routes/index.enum";

const UnAuthhorizeGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(loginAtom);
  if (!user) {
    return <Navigate to={BASIC_PATH.REDIRECT} />;
  }
  return children || <Outlet />;
};
export default UnAuthhorizeGuard;
