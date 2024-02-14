import { api } from "../axios.config.ts";
import { IUser } from "../../types/IUser.ts";

export default class UsersService {
    static getUsers() {
        return api.get<IUser[]>("/");
    }
}
