import { useEffect, useState } from "react";
import { IUser } from "../types/IUser.ts";
import useUsersAction from "../hooks/useUsersAction.ts";
import Table from "../components/Table.tsx";

const Cabinet = () => {
    const [users, setUsers] = useState<IUser[]>();
    const { getUsers } = useUsersAction();

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    return (
        <main className="mt-24 px-8">
            {users ? <Table data={users} /> : "Loading"}
        </main>
    );
};

export default Cabinet;
