import React, {useState} from 'react';
import {
    IconCoin,
    IconHeart,
    IconHeartFilled,
    IconPlant2, IconShoppingBag,
    IconShoppingCart,
    IconShoppingCartCheck
} from "@tabler/icons-react";

const ItemFlower = ({flower}) => {

    const [count, setCount] = useState(0);
    const [like, setLike] = useState(false);

    let handleDecrement = () => {
        setCount(count - 1);
    }

    let handleIncrement = () => {
        setCount(count + 1);
    }

    let handleLike = () => {
        setLike(!like)
    }

    return (
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={`http://localhost:8080/images/${flower.image}`} alt="gambar"/>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{flower.name}</h5>
                <p className='text-justify'>{flower.description}</p>
                <table>
                    <tbody>
                        <tr>
                            <td><IconShoppingBag className='font-light text-gray-400'/> </td>
                            <td></td>
                            <td>{flower.stock} bucket</td>
                        </tr>
                        <tr>
                            <td><IconCoin className='font-light text-gray-400'/> </td>
                            <td></td>
                            <td>Rp. {flower.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-between p-2'>
                {
                    count === 0 ?
                        <button type="button" onClick={handleIncrement}
                                className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-primary rounded-lg focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:focus:ring-primary">
                            <IconShoppingCart/>
                            Buy
                        </button>
                        :
                        <div className='flex align-middle justify-center gap-2'>
                            <button className="px-3 py-2 text-sm font-semibold text-center inline-flex items-center text-white bg-primary rounded-lg focus:ring-2 focus:outline-none dark:bg-primary dark:focus:ring-primary" onClick={handleDecrement}>-</button>
                            <span>{count}</span>
                            <button className="px-3 py-2 text-sm font-semibold text-center  inline-flex items-center text-white bg-primary rounded-lg focus:ring-2 focus:outline-none dark:bg-primary dark:focus:ring-primary" onClick={handleIncrement}>+</button>
                        </div>
                }
                <button type="button" onClick={handleLike}>
                    {
                        like ? <IconHeartFilled className='text-primary w-8 h-auto'/> : <IconHeart className='text-primary w-8 h-auto'/>
                    }
                </button>
            </div>
        </div>
    );
};

export default ItemFlower;