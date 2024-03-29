import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import flowerRoutes from './routes/flowerRoutes.js';
import cors from 'cors';

const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware for handling cors policy
app.use(
    cors({
        origin: 'http://localhost:8080',
        methods: ['GET', 'POST', 'UPDATE', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome back bro');
});

app.use('/flowers', flowerRoutes);

mongoose
    .connect(mongoDBURL)
        .then(() => {
            console.log('App successfully connected to database');
            app.listen(PORT, () => {
                console.log(`Server started on port: ${PORT}`);
            });
        })
        .catch((error) =>{
            console.log(error);
        })