import { db } from '../db';
import { users } from '../schemas/users';

export const countUsers = async (): Promise<number> => {
    const result = await db.$count(users);
    return result;
};
