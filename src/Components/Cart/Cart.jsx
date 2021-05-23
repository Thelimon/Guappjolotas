import React from 'react'
import HeaderCart from './HeaderCart.jsx'
import ItemDetailCart from './ItemDetailCart.jsx';
import ButtonPayCart from './PayCart.jsx';



function Cart(props) {

    
    return (
        <>
            <HeaderCart />
            <ItemDetailCart />
            <ButtonPayCart />
        </>
    )
}

export default Cart
