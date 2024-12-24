import { useAtomValue } from "jotai";
import { PropsWithChildren } from "react";
import { loginAtom } from "../../store";
import { Navigate, Outlet } from "react-router";
import { DASHBOARD_PATH } from "../../routes/dashboard/index.enum";

const AuthhorizeGuard: React.FC<PropsWithChildren> = ({children}) => {
    const user = useAtomValue(loginAtom)
    if(user){
        return <Navigate to={`/${DASHBOARD_PATH.DASHBOARD}/${DASHBOARD_PATH.USERS}`}/>
    }
    return children || <Outlet />
}   
export default AuthhorizeGuard