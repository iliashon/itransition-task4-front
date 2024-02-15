import { api } from "../axios.config.ts";
import { IUser } from "../../types/IUser.ts";
import { TUpdateUsersData } from "../../types/typesForm.ts";

export default class UsersService {
    static getUsers() {
        return api.get<IUser[]>("/");
    }

    static deleteUsers(data: number[]) {
        return api.delete<IUser[]>("/", { data: data });
    }

    static updateUsers(data: TUpdateUsersData) {
        return api.put<IUser[]>("/", data);
    }
}
