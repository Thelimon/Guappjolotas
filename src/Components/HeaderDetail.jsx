import React from 'react'
import {ArrowBack as Back} from '@styled-icons/boxicons-regular/ArrowBack';
import {Cart as CartP} from '@styled-icons/boxicons-regular/Cart';
import { ArrowBack, Cart } from '../styles/GlobalDetail'
import { Link } from "react-router-dom";

function HeaderDetail() {
    return (
        <>
        <ArrowBack>
        <Link to="/">
            <Back />
            </Link>
        </ArrowBack>
        <Cart>
           <CartP />
        </Cart>
        </>
    )
}

export default HeaderDetail
