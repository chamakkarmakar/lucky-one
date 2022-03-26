import React from 'react';
import { useEffect, useState } from 'react';
// import Cart from '../Cart/Cart';
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

    const handleClick = (eyeGlass) =>{
        // console.log(eyeGlass);
        const newCart=[...cart, eyeGlass];
        if(newCart.length<=4){
            setCart(newCart);
        }
        // else{
        //     console.log('does not')
        // }
        
    }
    const btnClear = () =>{
        const empty = [];
        setCart(empty);
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
            <h3>Selected Items</h3>
            {
                cart.map(item => <p>{item}</p>)
            }
            <button className='btn-choose'>Choose one For Me</button>
            <button onClick={btnClear} className='btn-clear'>Clear Cart</button>
            </div>
            

        </div>
    );
};

export default Shop;