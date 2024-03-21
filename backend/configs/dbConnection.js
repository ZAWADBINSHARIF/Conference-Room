import mariadb from 'mariadb'

export const db = mariadb.createPool(
    {
        host: "127.0.0.1",
        
        // user: "a-l-c-h-e-m-y",
        // password: "ye3J2yjdZuwjL3M",
        // database: 'a_l_c_h_e_m_y',
        connectionLimit: 5,
        
        user: "root",
        password: "1234",
        database: 'mind_map_game',
        port: "3307",

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
