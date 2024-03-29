import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongose from 'mongoose';
import { Flower } from './models/FlowerModel.js';

const app = express();

//midleware for parsing request body
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome back broo');
});

// route for create flower 
app.post('/flowers', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.description||
            !request.body.price ||
            !request.body.stock 
        ) {
            return response.status(400).send({
                message: 'Send all required fields: name, description, price, stock',
            });
        }

        const newFlower = {
            name: request.body.name,
            description: request.body.description,
            price: request.body.price,
            stock: request.body.stock,
        };

        const flower = await Flower.create(newFlower);

        return response.status(201).send(flower);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// route for get all flower from db
app.get('/flowers', async (request, response) => {
    try {
        const flowers = await Flower.find({});

        return response.status(200).json({
            message: "Successfully get data",
            count: flowers.length,
            data: flowers
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({error: error.message});
    }
});

mongose
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