import { SQLDatabase } from 'encore.dev/storage/sqldb';
import { drizzle } from 'drizzle-orm/node-postgres';
import { users } from './schemas/users';

const DB = new SQLDatabase('neato', {
    migrations: {
        path: 'migrations',
        source: 'drizzle',
    },
});

// Initialize Drizzle ORM with the connection string
const db = drizzle(DB.connectionString);
export { db };
