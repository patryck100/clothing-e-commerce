import React from 'react';

import './checkout-item.styles.scss';

//when this component is called, uses "cartItem" as prop to populate the component
const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005; {/*codig to display the X "https://www.w3schools.com/charsets/ref_utf_dingbats.asp"*/ }</div>
    </div>
)

export default CheckoutItem;