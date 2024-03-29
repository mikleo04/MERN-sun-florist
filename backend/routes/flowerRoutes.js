import express from 'express';
import {Flower} from '../models/FlowerModel.js';

const router = express.Router();

// route for create flower
router.post('/', async (request, response) => {
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

        if (!request.file) {
            return response.status(400).send({
                message: 'Image must be uploaded',
            });
        }

        const newFlower = {
            name: request.body.name,
            description: request.body.description,
            price: request.body.price,
            stock: request.body.stock,
            image: request.file.filename,
        };

        const flower = await Flower.create(newFlower);

        return response.status(201).send(flower);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// route for get all flower from db
router.get('/', async (request, response) => {
    try {
        const flowers = await Flower.find({});

        return response.status(200).json({
            message: 'Successfully get data',
            count: flowers.length,
            data: flowers
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({error: error.message});
    }
});

// route for get one flower by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const flower = await Flower.findById(id);

        if (!flower) {
            return response.status(404).send({message: 'Data not found'});
        }

        return response.status(200).json({
            message: 'Successfully get data',
            data: flower
        });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({error: error.message});
    }
});

//route for update flower by id
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.description||
            !request.body.price ||
            !request.body.stock
        ) {
            return response.status(404).send({
                message: 'Send all required fields: name, description, price, stock',
            });
        }

        const { id } = request.params;

        const updateFlower = {
            name: request.body.name,
            description: request.body.description,
            price: request.body.price,
            stock: request.body.stock,
        };

        if (request.file) {
            updateFlower.image = request.file.filename;
        }

        const result = await Flower.findByIdAndUpdate(id, updateFlower);

        if (!result) {
            return response.status(404).json({message: 'Data not found'});
        }
        return response.status(200).send({message: 'Successfully update data'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({error: error.message});
    }
});

// route for delete flower by id
router.delete('/:id', async (request, response) => {
    const { id } = request.params;

    const result = await Flower.findByIdAndDelete(id);

    if (!result) {
        return response.status(404).send({message: 'Data not found'});
    }
    return response.status(200).send({message: 'Successfully delete data'});
});

export default router;