import dotenv from 'dotenv';
dotenv.config()

import connectionDB from './config/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js'
import foodRoutes  from './routes/foodRoutes.js';
import restroRoutes  from './routes/restroRoutes.js';
import contactUs  from './routes/contactUsRoutes.js';
import imageRoute from './routes/imageRoutes.js';

// intialize express
import express from 'express';
const app = express();

//mongoDB connection
connectionDB();

// cross origin resource sharing
app.use(cors())

//body parser file
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/user', userRoutes);
// app.use('/api', foodRoutes);
app.use('/api', restroRoutes);
app.use('/api', contactUs);
app.use('/api', imageRoute);

export default app;