import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton.jsx";
import Spin from "../components/Spin.jsx";

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
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl my-4'>Delete Bok</h1>
            {loading ? <Spin/> : ''}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>Are you sure to want delete this data ?</h3>
                <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteFlower}>
                    Yes, Delete the data
                </button>
            </div>
        </div>
    );
};

export default DeleteFlower;