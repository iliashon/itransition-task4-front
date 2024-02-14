import { useState } from "react";
import { IUser } from "../types/IUser.ts";
import useUsersAction from "../hooks/useUsersAction.ts";

const Cabinet = () => {
    const [users, setUsers] = useState<IUser[]>();

    const { getUsers } = useUsersAction();

    getUsers().then((data) => setUsers(data));

    return (
        <main className="mt-24 px-8">
            <h1 className="text-2xl">Cabinet</h1>
            {users
                ? users.map((user) => {
                      return (
                          <div key={user.id}>
                              <h3>{user.email}</h3>
                              <h3>{user.first_name}</h3>
                              <h3>{user.last_name}</h3>
                              <h3>{user.id}</h3>
                          </div>
                      );
                  })
                : "Loading"}
        </main>
    );
};

export default Cabinet;
