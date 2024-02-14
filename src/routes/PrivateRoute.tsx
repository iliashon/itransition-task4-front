import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Navigate, Outlet } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const PrivateRoute = () => {
    const authState = useSelector((state: RootState) => state.auth);

    if (authState.isAuthInPending) {
        return (
            <div className="text-center mt-60">
                <ClipLoader />
            </div>
        );
    }
    if (authState.isAuth) {
        return <Outlet />;
    } else {
        return <Navigate to="/sign-in" />;
    }
};

export default PrivateRoute;
