import mariadb from 'mariadb'

export const db = mariadb.createPool(
    {
        host: "127.0.0.1",
        user: "root",
        password: "1234",
        database: 'mind_game',
        connectionLimit: 5
    }
)

export default async function dbConnection({app, PORT}) {
    try {
        await db.getConnection()
        console.log('Databse has connected successfully')
        app.listen(PORT, () => {
            console.log("Server listening on port: http://localhost:" + PORT)
        })
    } catch (error) {
        console.log(error)
    }
}