export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    blocked: boolean;
    last_login: Date;
    created_at: Date;
    updated_at: Date;
}
