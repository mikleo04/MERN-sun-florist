import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spin from '../components/Spin.jsx';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

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
                <h1 className='text-3xl my-8'>Flower List</h1>
                <Link to='/flowers/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl'/>
                </Link>
            </div>

            {loading ? (
                <Spin/>
            ) : (
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
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
                                            <img src={`http://localhost:8080/images/${flower.image}`} alt='image'/>
                                        </td>
                                        <td className='px-6 py-4'>
                                            <div className='flex justify-start gap-x-4'>
                                                <Link to={`/flowers/details/${flower._id}`}>
                                                    <BsInfoCircle className='text-2xl text-green-800'/>
                                                </Link>
                                                <Link to={`/flowers/update/${flower._id}`}>
                                                    <AiOutlineEdit className='text-2xl text-yellow-600'/>
                                                </Link>
                                                <Link to={`/flowers/delete/${flower._id}`}>
                                                    <MdOutlineDelete className='text-2xl text-red-600'/>
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