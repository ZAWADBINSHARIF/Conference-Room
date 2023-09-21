import express from 'express'
import dotenv from 'dotenv'

// for getting the values from the .env file
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res)=> {
    res.send('<h1>Server is running...</h1>')
})

app.listen(PORT, () => console.log("Server listening on port: http://localhost:" + PORT))
