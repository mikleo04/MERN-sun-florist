import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton.jsx";
import Spin from "../components/Spin.jsx";

const CreateFlower = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const handeSaveFLower = () => {

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('image', image);
        setLoading(true);
        axios
            .post('http://localhost:8080/flowers', formData)
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
            <h1 className='text-3xl my-4'>Add new Flower</h1>
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
                    <input type='file' onChange={(e) => setImage(e.target.files[0])}/>
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handeSaveFLower}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default CreateFlower;