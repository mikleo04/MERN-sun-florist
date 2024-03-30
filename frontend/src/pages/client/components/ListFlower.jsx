import React, {useEffect, useState} from 'react';
import ItemFlower from "./ItemFlower.jsx";
import axios from "axios";
import {IconHeart, IconShoppingCart} from "@tabler/icons-react";

const ListFlower = () => {
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
        <div className='border border-gray-200 shadow p-5 rounded-lg m-10'>
            <div className='flex justify-between'>
                <h2 className='font-bold text-3xl'>List Product Sun Florist</h2>
                <div className='flex justify-end gap-2'>
                    <button type="button"
                            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-primary rounded-full hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-secondary dark:focus:ring-primary">
                        <IconHeart/>
                        <span className="sr-only">Saved</span>
                        <div
                            className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">22
                        </div>
                    </button>
                    <button type="button"
                            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-primary rounded-full hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-secondary dark:focus:ring-primary">
                        <IconShoppingCart/>
                        <span className="sr-only">Notifications</span>
                        <div
                            className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">8
                        </div>
                    </button>
                </div>
            </div>
            <div className='m-10 grid sm:grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4'>
                {flowers.map((item) => (
                    <ItemFlower key={item._id} flower={item}/>
                ))}
            </div>
        </div>

    );
};

export default ListFlower;