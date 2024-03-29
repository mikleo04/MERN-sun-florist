import mongoose from "mongoose";

const flowerSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        stock:{
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);

export const Flower = mongoose.model('Flower', flowerSchema)