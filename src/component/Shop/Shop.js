import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import EyeGlass from '../EyeGlass/EyeGlass';
import './Shop.css';

const Shop = () => {
    const [eyeGlasses, setEyeGlass] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setEyeGlass(data));
    }, [])

    const handleClick = (eye) =>{
        console.log(eye);
        const newCart=[...cart, eye];
        setCart(newCart);
    }

    return (
        <div className='shop'>
            <div className="product-container">
                {
                    eyeGlasses.map(eyeGlass => <EyeGlass 
                        key={eyeGlass.id}
                        eyeGlass={eyeGlass}
                        handleClick={handleClick}
                        ></EyeGlass>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            

        </div>
    );
};

export default Shop;