import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const details = useLoaderData();
    const { name } = details;

    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Checkout;