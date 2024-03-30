import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import BackButton from "../../components/BackButton.jsx";
import Spin from "../../components/Spin.jsx";
import {IconAlertCircle, IconX} from "@tabler/icons-react";

const DeleteFlower = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    const handleDeleteFlower = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:8080/flowers/${id}`)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('Something wrong when delete this data, please try letter');
                console.log(error);
            });
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center py-20">
                    <IconAlertCircle className='text-danger w-20 h-auto'/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Are you sure delete this data
                        ?</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Choose cancel if you don't delete this data !</span>
                    <div className="flex mt-4 md:mt-6">
                        <button type="button" onClick={() => navigate('/')}
                                className="text-red-700 border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:focus:ring-red-800">
                            Cancel
                        </button>
                        <button type="button" onClick={handleDeleteFlower}
                                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                            Yes Delete it
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteFlower;