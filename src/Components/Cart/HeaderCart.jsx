import React from 'react'
import {ArrowBack} from '@styled-icons/boxicons-regular/ArrowBack';
import { StyleHeaderCart, Back, Title } from '../../styles/Cart/HeaderCart'
import { Link } from "react-router-dom";




function HeaderCart() {
    return (
        <>
        <StyleHeaderCart>
        <Back>
            <Link to="/">
            <ArrowBack />
            </Link>
        </Back>
            <Title>Carrito</Title>
        </StyleHeaderCart>
        </>
    )
}

export default HeaderCart