import { Outlet, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const CheckAuth = () => {
    const authState = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    if (authState.isAuthInPending && localStorage.getItem("token")) {
        return (
            <div className="text-center mt-60">
                <ClipLoader />
            </div>
        );
    }

    if (authState.isAuth) {
        navigate("/cabinet");
    }

    return <Outlet />;
};

export default CheckAuth;
