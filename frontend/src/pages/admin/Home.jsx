import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spin from '../../components/Spin.jsx';
import { Link } from 'react-router-dom';
import {IconEdit, IconEye, IconPlus, IconTrash} from "@tabler/icons-react";

const Home = () => {
    const [flowers, setFlowers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8080/flowers')
            .then((response) => {
                setFlowers(response.data.data);
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='my-8 text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white'>Flower List</h1>
                <Link to='/flowers/create'>
                    <button type="button"
                            className="text-white gap-2 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <IconPlus/>
                        Add new flower
                    </button>
                </Link>
            </div>

            {loading ? (
                <Spin/>
            ) : (
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-white uppercase bg-primary opacity-3 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope="col" className='px-6 py-3'>No</th>
                                <th scope="col" className='px-6 py-3'>Name</th>
                                <th scope="col" className='px-6 py-3'>Description</th>
                                <th scope="col" className='px-6 py-3'>Price</th>
                                <th scope="col" className='px-6 py-3'>Stock</th>
                                <th scope="col" className='px-6 py-3'>Image</th>
                                <th scope="col" className='px-6 py-3'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                flowers.map((flower, index) => (
                                    <tr key={flower._id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                        <td className='px-6 py-4'>
                                            {index+1}
                                        </td>
                                        <td className='px-6 py-4'>
                                            {flower.name}
                                        </td>
                                        <td className='px-6 py-4'>
                                            {flower.description}
                                        </td>
                                        <td className='px-6 py-4'>
                                            {flower.price}
                                        </td>
                                        <td className='px-6 py-4'>
                                            {flower.stock}
                                        </td>
                                        <td className='px-6 py-4'>
                                            <img src={`http://localhost:8080/images/${flower.image}`} className='h-auto max-w-10 rounded-lg' alt='image'/>
                                        </td>
                                        <td className='px-6 py-4'>
                                            <div className='inline-flex rounded-md shadow-sm' role='group'>
                                                <Link to={`/flowers/details/${flower._id}`}>
                                                    <button type="button"
                                                            className="inline-flex items-center px-4 py-2 text-sm font-normal text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-secondary focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                                                        <IconEye className='text-info'/>
                                                        Profile
                                                    </button>
                                                </Link>
                                                <Link to={`/flowers/update/${flower._id}`}>
                                                    <button type="button"
                                                            className="inline-flex items-center px-4 py-2 text-sm font-normal text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-secondary focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                                                        <IconEdit className='text-info'/>
                                                        Settings
                                                    </button>
                                                </Link>
                                                <Link to={`/flowers/delete/${flower._id}`}>
                                                    <button type="button"
                                                            className="inline-flex items-center px-4 py-2 text-sm font-normal text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-secondary focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                                                        <IconTrash className='text-info'/>
                                                        Downloads
                                                    </button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Home;