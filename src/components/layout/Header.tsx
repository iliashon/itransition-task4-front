import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import useAuth from "../../hooks/useAuth.ts";
import { Alert } from "@mui/material";

const Header = () => {
    const authState = useSelector((state: RootState) => state.auth);

    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                className="flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 text-xl leading-6">
                        itupalski
                    </Link>
                </div>
                {authState.error ? (
                    <Alert severity="error">{authState.error}</Alert>
                ) : (
                    ""
                )}

                {authState.isAuth ? (
                    <div className="gap-4 flex items-center ">
                        <button
                            onClick={handleLogout}
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            <span aria-hidden="true">&larr;</span> Logout
                        </button>
                        <Link
                            to="/cabinet"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Cabinet
                        </Link>
                        <h3 className="bg-gray-200 border w-10 h-10 flex justify-center items-center border-black px-4 py-1 rounded-full">
                            {authState.user?.first_name[0]}
                        </h3>
                    </div>
                ) : (
                    ""
                )}
            </nav>
        </header>
    );
};

export default Header;
