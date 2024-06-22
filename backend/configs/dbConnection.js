import mariadb from 'mariadb';
import 'dotenv/config';

const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
console.log({
    DATABASE_HOST,
    DATABASE_USER,
    DATABASE_NAME,
    DATABASE_PASSWORD
});
export const db = mariadb.createPool(
    {
        host: DATABASE_HOST,
        user: DATABASE_USER,
        password: DATABASE_PASSWORD,
        database: DATABASE_NAME,
        connectionLimit: 5,
        port: "3306",

    }
);

export default async function dbConnection({ app, PORT }) {
    try {
        await db.getConnection();
        console.log('Databse has connected successfully');
        app.listen(PORT, () => {
            console.log("Server listening on port: http://localhost:" + PORT);
        });
    } catch (error) {
        console.log(error);
    }
}