import { api } from 'encore.dev/api';
import { Response } from './interfaces';
import { countUsers } from '../databases/queries/users';

export const count = api(
    {
        expose: true,
        method: 'GET',
        path: '/users/count',
    },
    async (): Promise<Response> => {
        const result = await countUsers();
        console.log(result);
        return { success: true, result: result };
    }
);

export const create = api(
    {
        expose: true,
        method: 'POST',
        path: '/users/register',
    },
    async (): Promise<Response> => {
        return { success: true, message: 'User created' };
    }
);
