import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import BackButton from "../../components/BackButton.jsx";
import Spin from "../../components/Spin.jsx";
import {IconChevronsLeft, IconCloudCheck, IconCloudUpload} from "@tabler/icons-react";

const UpdateFLower = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState();
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
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('image', image);
        setLoading(true);
        axios
            .put(`http://localhost:8080/flowers/${id}`,formData)
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
        <div className='p-4 flex justify-center'>
           <BackButton />
            {loading ? <Spin/> : ''}
            <div
                className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
                <div className='space-y-6'>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Update Flower</h5>

                    <label htmlFor="name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}
                           className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                           placeholder="Jasmine" required/>

                    <label htmlFor="name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input type='text' id='name' value={description} onChange={(e) => setDescription(e.target.value)}
                           className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                           placeholder="Jasmine is beautiful flower" required/>

                    <label htmlFor="name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input type='number' id='name' value={price} onChange={(e) => setPrice(e.target.value)}
                           className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                           placeholder="120000" required/>

                    <label htmlFor="name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                    <input type='number' id='name' value={stock} onChange={(e) => setStock(e.target.value)}
                           className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                           placeholder="20" required/>

                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file"
                               className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                {image ? (
                                    <>
                                        <IconCloudCheck/>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">The
                                            Image Successfully input</p>
                                    </>
                                ) : (
                                    <>
                                        <IconCloudUpload/>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">Click
                                            to upload or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG JPEG (MAX.
                                            1MB)</p>
                                    </>
                                )}
                            </div>
                            <input id="dropzone-file" type="file" onChange={(e) => setImage(e.target.files[0])}
                                   className="hidden"/>
                        </label>
                    </div>

                    <button type="submit" onClick={handleUpdateFLower}
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateFLower;