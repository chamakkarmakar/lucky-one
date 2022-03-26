import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './EyeGlass.css';

const EyeGlass = (props) => {
    const {image,name,price}=props.eyeGlass;

    return (
        <div className='eye-glass'>
            <img src={image} alt="" />
            <h5>{name}</h5>
            <p>Price: ${price}</p>

            <button className='btn-cart'>Add to Cart
            <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default EyeGlass;