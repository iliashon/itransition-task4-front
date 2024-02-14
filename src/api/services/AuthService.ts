import { api, API_ENDPOINT } from "../axios.config.ts";
import { IAuthResponse } from "../../types/IAuthResponse.ts";
import axios, { AxiosResponse } from "axios";

export default class AuthService {
    static signIn(email: string, password: string) {
        return api.post<IAuthResponse>("/signin", {
            email,
            password,
        });
    }
    static async signUp(
        email: string,
        password: string,
        first_name: string,
        last_name: string,
    ): Promise<AxiosResponse<IAuthResponse>> {
        return await api.post<IAuthResponse>("/signup", {
            email,
            password,
            first_name,
            last_name,
        });
    }
    static async logout() {
        return await api.post("/logout");
    }

    static async checkAuth() {
        return axios.get<IAuthResponse>(`${API_ENDPOINT}/refresh`, {
            withCredentials: true,
        });
    }
}
