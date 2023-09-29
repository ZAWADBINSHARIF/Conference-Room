// external import
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'

// internal import
import dbConnection from './configs/dbConnection.js'
import apiRoute from './routes/apiRoute.js'
import errorHandler from './middlewares/common/errorHandler.js'

// for getting the values from the .env file
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000
const __dirname = path.resolve()

// for getting json data
app.use(express.json())

// for getting json form data
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: "*"
}))

// for database connection
dbConnection({ app, PORT })

// set up static files
app.use(express.static(path.join(__dirname, 'backend', 'public', 'uploads')))
// app.use(express.static(path.join(__dirname, 'frontend', 'dist')))
// app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')))

// routers
app.use('/api', apiRoute)

// common error handle
// app.use(errorHandler)