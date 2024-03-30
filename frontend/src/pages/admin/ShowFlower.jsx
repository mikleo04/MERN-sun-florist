import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import BackButton from "../../components/BackButton.jsx";
import Spin from "../../components/Spin.jsx";

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
        <div className='flex justify-center items-center h-screen'>
            <BackButton/>
            {
                loading ? (
                    <Spin/>
                ): (
                    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`http://localhost:8080/images/${flower.image}`} alt="Image"/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{flower.name}</h5>
                            <table>
                                <tbody>
                                <tr>
                                    <td>Description</td>
                                    <td>:</td>
                                    <td>{flower.description}</td>
                                </tr>
                                <tr>
                                    <td>Stock</td>
                                    <td>:</td>
                                    <td>{flower.stock} bucket</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>:</td>
                                    <td>Rp. {flower.price}</td>
                                </tr>
                                <tr>
                                    <td>Created</td>
                                    <td>:</td>
                                    <td>{new Date(flower.createdAt).toString()}</td>
                                </tr>
                                <tr>
                                    <td>Updated</td>
                                    <td>:</td>
                                    <td>{new Date(flower.updatedAt).toString()}</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ShowFlower;