import { TSignInForm, TSignUpForm } from "../types/typesForm.ts";
import AuthService from "../api/services/AuthService.ts";
import { useAppDispatch } from "../store/typedHooks.ts";
import { setAuth, setIsAuthInPending } from "../store/slices/authSlice.ts";
import { AxiosError } from "axios";

function useAuth() {
    const dispatch = useAppDispatch();

    async function signIn({ email, password }: TSignInForm) {
        try {
            const res = await AuthService.signIn(email, password);
            localStorage.setItem("token", res.data.accessToken);
            dispatch(setAuth({ isAuth: true, user: res.data.user }));
            return true;
        } catch (err) {
            if (err instanceof AxiosError) {
                return err.response?.data.message;
            } else {
                throw new Error("Something went wrong");
            }
        } finally {
            dispatch(setIsAuthInPending(false));
        }
    }

    async function signUp({
        email,
        password,
        first_name,
        last_name,
    }: TSignUpForm) {
        try {
            const res = await AuthService.signUp(
                email,
                password,
                first_name,
                last_name,
            );
            localStorage.setItem("token", res.data.accessToken);
            dispatch(setAuth({ isAuth: true, user: res.data.user }));
        } catch (err) {
            if (err instanceof AxiosError) {
                return err.response?.data.message;
            } else {
                throw new Error("Something went wrong");
            }
        } finally {
            dispatch(setIsAuthInPending(false));
        }
    }

    async function logout(): Promise<void> {
        try {
            await AuthService.logout();
            localStorage.removeItem("token");
            dispatch(setAuth({ isAuth: false, user: null }));
        } catch (err) {
            throw new Error("Something went wrong");
        } finally {
            dispatch(setIsAuthInPending(false));
        }
    }

    async function checkAuth() {
        try {
            const res = await AuthService.checkAuth();
            localStorage.setItem("token", res.data.accessToken);
            dispatch(setAuth({ isAuth: true, user: res.data.user }));
            return true;
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response?.status === 403) {
                    localStorage.removeItem("token");
                }
                throw new Error(err.response?.data.message);
            } else {
                throw new Error("Something went wrong");
            }
        } finally {
            dispatch(setIsAuthInPending(false));
        }
    }

    return { signIn, signUp, logout, checkAuth };
}

export default useAuth;
