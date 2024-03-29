import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton.jsx";
import Spin from "../components/Spin.jsx";

const ShowFlower = () => {
    const [flower, setFlower] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:8080/flowers/${id}`)
            .then((response) => {
                setFlower(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })

    }, []);

    return (
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl my-4'>Show FLower</h1>
            {
                loading ? (
                    <Spin/>
                ): (
                    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Id</span>
                            <span>{flower._id}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Name</span>
                            <span>{flower.name}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Description</span>
                            <span>{flower.description}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Price</span>
                            <span>{flower.price}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Stock</span>
                            <span>{flower.stock}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Create time</span>
                            <span>{new Date(flower.createdAt).toString()}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Update time</span>
                            <span>{new Date(flower.updatedAt).toString()}</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ShowFlower;