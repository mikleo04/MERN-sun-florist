import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton.jsx";
import Spin from "../components/Spin.jsx";

const UpdateFLower = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:8080/flowers/${id}`)
            .then((response) => {
                setName(response.data.data.name);
                setDescription(response.data.data.description);
                setPrice(response.data.data.price);
                setStock(response.data.data.stock);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened, please try letter')
                console.log(error)
            })

    }, []);

    const handleUpdateFLower = () => {
        const data = {
            name,
            description,
            price,
            stock
        };
        setLoading(true);
        axios
            .put(`http://localhost:8080/flowers/${id}`, data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            })
    };

    return (
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl my-4'>Update Data Flower</h1>
            {loading ? <Spin/> : ''}
            <div className='flex flex-col border-2 boder-sky-4000 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Name</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
                    <label className='text-xl mr-4 text-gray-500'>Description</label>
                    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
                    <label className='text-xl mr-4 text-gray-500'>Price</label>
                    <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
                    <label className='text-xl mr-4 text-gray-500'>Stock</label>
                    <input type='number' value={stock} onChange={(e) => setStock(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleUpdateFLower}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default UpdateFLower;