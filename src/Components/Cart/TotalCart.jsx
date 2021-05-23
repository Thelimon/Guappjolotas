import React from 'react'
import { ContainerPrice, TitlePrice, Price } from '../../styles/Cart/ItemDetailCart'


function TotalCart(props) {

    var total = 0;


    return (
            <ContainerPrice>
                <TitlePrice>Total</TitlePrice>
                <Price>${total} MXN</Price>
            </ContainerPrice>

    )
}

export default TotalCart
