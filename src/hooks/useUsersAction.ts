import { useState } from "react";
import UsersService from "../api/services/UsersService.ts";
import { TUpdateUsersData } from "../types/typesForm.ts";
import { AxiosError } from "axios";
import { useAppDispatch } from "../store/typedHooks.ts";
import { setAuth, setError } from "../store/slices/authSlice.ts";

function useUsersAction() {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    function handlerError(err: Error) {
        if (err instanceof AxiosError) {
            dispatch(setError(err.response?.data.message));
            setTimeout(() => {
                dispatch(setError(null));
            }, 5000);
            localStorage.removeItem("token");
            dispatch(setAuth({ isAuth: false, user: null }));
        } else {
            throw new Error("Something went wrong");
        }
    }

    async function getUsers() {
        setLoading(true);
        try {
            const res = await UsersService.getUsers();
            return res.data;
        } catch (err) {
            handlerError(err as Error);
        } finally {
            setLoading(false);
        }
    }

    async function deleteUsers(data: number[]) {
        setLoading(true);
        try {
            await UsersService.deleteUsers(data);
            return true;
        } catch (err) {
            handlerError(err as Error);
        } finally {
            setLoading(false);
        }
    }

    async function updateUsers(data: number[], blockedStatus: boolean) {
        setLoading(true);
        try {
            const updateData: TUpdateUsersData = {
                blocked: blockedStatus,
                id: data,
            };
            await UsersService.updateUsers(updateData);
            return true;
        } catch (err) {
            handlerError(err as Error);
        } finally {
            setLoading(false);
        }
    }
    return { getUsers, deleteUsers, updateUsers, loading };
}

export default useUsersAction;
