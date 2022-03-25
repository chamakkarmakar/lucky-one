import React from 'react';
import './EyeGlass.css';

const EyeGlass = (props) => {
    const {image,name,price}=props.eyeGlass;

    return (
        <div className='eye-glass'>
            <img src={image} alt="" />
            <h5>{name}</h5>
            <p>Price: ${price}</p>

            <button className='btn-cart'>Add to Cart</button>
            
        </div>
    );
};

export default EyeGlass;