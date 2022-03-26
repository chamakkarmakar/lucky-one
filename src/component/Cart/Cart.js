import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart}=props;
    return (
        <div>
            <h3>Selected Items</h3>
            {
                cart.map(item => <p>{item}</p>)
            }
            

            <button>Choose one For Me</button>
            <button>Clear Cart</button>
        </div>
    );
};

export default Cart;