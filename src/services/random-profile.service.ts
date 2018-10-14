import { users } from './MOCK_DATA';

export const randomString = (): string => {
    const r = Math.random().toString(36).substring(7);
    return r;
};

export interface IUser {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    age?: number;
    id: string;
    cookie_id?: string;
}

export const randomProfile = (): IUser => {
    return users[Math.floor(Math.random() * users.length)];
};

export const getUserByID = (id: string): IUser | undefined => {
    const res = users.filter((user) => user.id === id);
    return res.length === 0 ? undefined : res[0];
};

export const getUser = (email: string): IUser | undefined => {
    const res = users.filter((user) => user.email === email);
    return res.length === 0 ? undefined : res[0];
};

export const getAuthenticatedUser = (email: string, pass: string): IUser | undefined => {
    const user = getUser(email);
    // tslint:disable-next-line:no-console
    console.log(user, email, pass);
    if (!user) {
        return undefined;
    }
    return user.password === pass ? user : undefined;
};
