// external import
import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';

// for getting the values from the .env file
import 'dotenv/config';


// internal import
import dbConnection from './configs/dbConnection.js';
import apiRoute from './routes/apiRoute.js';
import authRouters from './routes/authRoutes.js';
import { jwtVerifier } from './middlewares/authMiddleware.js';
// import errorHandler from './middlewares/common/errorHandler.js'

const app = express();
const PORT = process.env.PORT;

const __dirname = import.meta.dirname;

// for getting cookies
app.use(cookieParser());

// for getting json data
app.use(express.json());

// for getting json form data
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  'origin': 'http://localhost:3000'
}));

// for database connection
dbConnection({ app, PORT });




app.use(express.static(path.join(__dirname, 'public', 'uploads')));
app.use(express.static(path.join(__dirname, 'public', 'representation_imgs')));
app.use(express.static(path.join(__dirname, 'public', 'background')));
// app.use(express.static(path.join(__dirname, '..', 'dist')));


// routers
app.get("/", (req, res) => {
  res.end("<H1>Server is running 🚀</H1>");
});
app.use('/api', apiRoute);
app.use('/api/auth', authRouters);
app.get('/api/verifier', jwtVerifier);


// app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html')));


// common error handle
// app.use(errorHandler)
