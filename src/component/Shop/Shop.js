import React from 'react';
import { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [eyeGlasses, setEyeGlass] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setEyeGlass(data));
    }, [])
    return (
        <div className='shop'>
            <div className="product-container">
                <p>Data: {eyeGlasses.length}</p>
            </div>
            <div className="cart-container">
                
            </div>
            

        </div>
    );
};

export default Shop;