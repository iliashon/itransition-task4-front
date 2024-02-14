import { useState } from "react";
import UsersService from "../api/services/UsersService.ts";

function useUsersAction() {
    const [loading, setLoading] = useState(false);
    async function getUsers() {
        try {
            const res = await UsersService.getUsers();
            return res.data;
        } catch (err) {
            throw new Error("Error");
        } finally {
            setLoading(false);
        }
    }
    return { getUsers, loading };
}

export default useUsersAction;
