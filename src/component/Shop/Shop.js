import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import EyeGlass from '../EyeGlass/EyeGlass';
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
                {
                    eyeGlasses.map(eyeGlass => <EyeGlass 
                        key={eyeGlass.id}
                        eyeGlass={eyeGlass}
                        ></EyeGlass>)
                }
                
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
            

        </div>
    );
};

export default Shop;