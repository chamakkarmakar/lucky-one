import React from 'react';
import { useEffect, useState } from 'react';
// import Cart from '../Cart/Cart';
import EyeGlass from '../EyeGlass/EyeGlass';
import './Shop.css';

const Shop = () => {
    const [eyeGlasses, setEyeGlass] = useState([]);
    const [cart, setCart] = useState([]);
    const [choose, setChoose] = useState([]);

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
        
    }
    const btnClear = () =>{
        const empty = [];
        setCart(empty);
        setChoose(empty);
    }
    const btnChoose = () =>{
        // const index = Math.floor(Math.random() * cart.length);
        const item = cart[Math.floor(Math.random() * cart.length)];
        setChoose(item);
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
                cart.map((item,id) => 
                   <p key={id}>{item}</p> 
                )
            }
            <button onClick={() => btnChoose(cart)} className='btn-choose'> Choose one For Me </button>
            {
                <p>{choose}</p>
            }
            <button onClick={btnClear} className='btn-clear'>Clear Cart</button>
            </div>
        </div>
    );
};

export default Shop;