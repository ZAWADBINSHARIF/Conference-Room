// external import
import express from 'express'
import dotenv from 'dotenv'
import mariadb from 'mariadb'

// internal import
import dbConnection from './configs/dbConnection.js'
import apiRoute from './routes/apiRoute.js'

// for getting the values from the .env file
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

// for getting json data
app.use(express.json())

// for getting json form data
app.use(express.urlencoded({ extended: true }))

// for database connection
dbConnection({app, PORT})

app.get('/', (req, res) => {
    res.send('<h1>Server is running...</h1>')
})

app.use('/api', apiRoute)